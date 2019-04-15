import React, { Component } from 'react';
import axios from "axios";

/* STYLES */
import './messages.css';


export default class Messages extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            subject: '',
            author: '',
        }

        this.commentHandler = this.commentHandler.bind(this);
        this.reloadMessagesHandler = this.reloadMessagesHandler.bind(this);
        this.submitCommentHandler = this.submitCommentHandler.bind(this);
        this.deleteCommentHandler = this.deleteCommentHandler.bind(this);
        this.formatTimestamp = this.formatTimestamp.bind(this);

    }

    componentDidMount() {

        // Carga los mensajes del foro
        axios.get("http://localhost:8000/api/messages")
            .then(response => {
                this.setState({
                    messages: response.data,
                });
            });
    }

    componentWillMount() {
        if (sessionStorage.getItem("userData")) {

            const data = JSON.parse(sessionStorage.getItem("userData"))

            this.setState({
                author: data.userData.email,
            })
        }

        else {
            console.log("mal")
        }
    }

    reloadMessagesHandler = () => {
        // Recarga los mensajes
        axios.get("http://localhost:8000/api/messages")
            .then(response => {
                this.setState({
                    messages: response.data,
                });
            });
    }

    commentHandler = (e) => {
        this.setState({
            subject: e.target.value
        });
    }

    submitCommentHandler = () => {

        const data = {
            author: this.state.author,
            subject: this.state.subject
        }


        if (this.state.author && this.state.subject) {
            axios.post('http://localhost:8000/api/messageRegistration', data)
                .then(response => {
                    this.reloadMessagesHandler();
                })

        } else {
            console.log("error de envío")
        }

        document.getElementById("comment").value = '';
    }

    deleteCommentHandler = (e) => {

        axios.delete('http://localhost:8000/api/messageDelete', { data: { id: e.target.value } })
            .then(response => {
                this.reloadMessagesHandler();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    formatTimestamp = (date) => {
        const month = new Array();
        month[0] = "Enero";
        month[1] = "Febrero";
        month[2] = "Marzo";
        month[3] = "Abril";
        month[4] = "Mayo";
        month[5] = "Junio";
        month[6] = "Julio";
        month[7] = "Agosto";
        month[8] = "Septiembre";
        month[9] = "Octubre";
        month[10] = "Noviembre";
        month[11] = "Diciembre";

        let timestamp = date.split(' ');

        let fullDate = new Date(timestamp);
        let hour = timestamp[1].split(':');
        hour = hour[0] + ':' + hour[1];

        let message = "El " + fullDate.getDay() + " de " + month[fullDate.getMonth()] + " a las " + hour;
        return message;
    }

    render() {
        const result = [];

        const messages = this.state.messages;

        for (let i = 0; i < messages.length; i++) {

            /* Permite borrar el mensaje que pertenece a este autor */
            if (messages[i].email === this.state.author) {
                result.push(
                    <div key={messages[i].id} className="row pt-3 pb-3 mt-5 message-container">
                        <div className="col-1 user-img">
                            <img className="rounded-circle" src={messages[i].img} alt={messages[i].author}></img>
                        </div>

                        <div className="text">
                            <p className="col-10 pt-4">
                                <span>{messages[i].name} {messages[i].surname} <i className="fas fa-caret-right"></i> {messages[i].type}</span><br /><br />
                                {messages[i].subject} <br /><br />
                                <i className="far fa-clock"></i> {this.formatTimestamp(messages[i].created_at)}
                            </p>
                        </div>
                        <button
                            className="btn btn-green trash"
                            type="button"
                            value={messages[i].id}
                            onClick={this.deleteCommentHandler}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                )
            }
            else {
                result.push(
                    <div key={messages[i].id} className="row pt-3 pb-3 mt-5 message-container">
                        <div className="col-1 user-img">
                            <img className="rounded-circle" src={messages[i].img} alt={messages[i].author}></img>
                        </div>

                        <div className="text">
                            <p className="col-10 pt-4">
                                <span>{messages[i].name} {messages[i].surname} <i className="fas fa-caret-right"></i> {messages[i].type}</span><br /><br />
                                {messages[i].subject} <br /><br />
                                <i className="far fa-clock"></i> {this.formatTimestamp(messages[i].created_at)}
                            </p>
                        </div>
                    </div>
                )
            }
        }
        return (
            <div id="comments" className="col-8">

                {result}

                <div className="form-group">
                    <textarea
                        id="comment"
                        className="form-control"
                        rows="2"
                        onChange={this.commentHandler}>
                    </textarea>
                </div>
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-green"
                        type="button"
                        onClick={this.submitCommentHandler}>
                        Enviar <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        );
    }
}