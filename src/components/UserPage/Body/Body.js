import React, { Component } from 'react';

import Routine from './Routine/Routine';

export default class Body extends Component {
    render() {
        return (
            <section id="routine">
                <div className="routine-container">
                    <ul className="nav nav-tabs wow fadeInLeft" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#monday">Lunes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tuesday">Martes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#wednesday">Miércoles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#thursday">Jueves</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#friday">Viernes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#saturday">Sábado</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#sunday">Domingo</a>
                        </li>
                    </ul>

                    <div className="tab-content routineWrapper">

                        {/* MONDAY */}
                        <div id="monday" className="tab-pane active"><br />
                            <div id="mondTraining" className="container tab-pane"><br />
                                <Routine routine={this.props.routine.monExerc} />
                            </div>
                        </div>

                        {/* TUESDAY */}
                        <div id="tuesday" className="tab-pane"><br />
                            <div id="tuesTraining" className="container tab-pane"><br />
                                <Routine routine={this.props.routine.tuesExerc} />
                            </div>
                        </div>

                        {/* WEDNESDAY */}
                        <div id="wednesday" className="tab-pane"><br />
                            <div id="wedTraining" className="container tab-pane"><br />
                                <Routine routine={this.props.routine.wedExerc} />
                            </div>
                        </div>

                        {/* THURSDAY */}
                        <div id="thursday" className="tab-pane"><br />
                            <div id="thuTraining" className="container tab-pane"><br />
                                <Routine routine={this.props.routine.thuExerc} />
                            </div>
                        </div>

                        {/* FRIDAY */}
                        <div id="friday" className="tab-pane"><br />
                            <div id="friTraining" className="container tab-pane"><br />
                                <Routine routine={this.props.routine.friExerc} />
                            </div>
                        </div>

                        {/* SATURDAY */}
                        <div id="saturday" className="tab-pane"><br />
                            <div id="sunTraining" className="container tab-pane"><br />
                                <Routine routine={this.props.routine.satExerc} />
                            </div>
                        </div>

                        {/* SUNDAY */}
                        <div id="sunday" className="tab-pane"><br />
                            <div id="sunTraining" className="container tab-pane"><br />
                                <Routine routine={this.props.routine.sunExerc} />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}