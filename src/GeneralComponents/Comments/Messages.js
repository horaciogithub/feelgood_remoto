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
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/messages")
            .then(response => {
                this.setState({
                    messages: response.data,
                });
            });
        //console.log(this.state.messages)
        //console.log(this.state.author)
    }

    componentWillMount() {
        if (sessionStorage.getItem("userData")) {

            const data = JSON.parse(sessionStorage.getItem("userData"))

            this.setState({
                author: data.userData.email,
            })
            // console.log(data.userData.email)
            console.log(this.state.author)
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
        //console.log(this.state)

        const data = {
            author: this.state.author,
            subject: this.state.subject
        }

        // console.log(data)

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
    }

    render() {
        const result = [];

        const messages = this.state.messages;

        for (let i = 0; i < messages.length; i++) {

            /* Permite borrar el mensaje que pertenece a este autor */
            if (messages[i].email === this.state.author) {
                result.push(
                    <div key={messages[i].id} className="row pt-3 pb-3">
                        <div className="col-1 user-img">
                            <img className="rounded-circle" src={messages[i].img} alt={messages[i].author}></img>
                        </div>

                        <p className="col-10 pt-4"> {messages[i].subject}.<br /><br />
                            <q> {messages[i].name} {messages[i].surname}</q>
                            - {messages[i].type}
                        </p>
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
                    <div key={messages[i].id} className="row pt-3 pb-3">
                        <div className="col-1 user-img">
                            <img className="rounded-circle profile-img" src={messages[i].img} alt={messages[i].author}></img>
                        </div>

                        <p className="col-10 pt-4"> {messages[i].subject}.<br /><br />
                            <q> {messages[i].name} {messages[i].surname}</q>
                            - {messages[i].type}
                        </p>
                    </div>
                )
            }
        }
        return (
            <div className="p-5">

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