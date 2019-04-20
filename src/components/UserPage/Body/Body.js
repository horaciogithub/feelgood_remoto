import React from 'react';

import Routine from './Routine/Routine';

const body = (props) => {
    return (
        <section id="table-container">
            <div className="p-5">
                <ul className="nav nav-tabs" role="tablist">
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

                <div className="tab-content">

                    {/* MONDAY */}
                    <div id="monday" className="container tab-pane active"><br />
                        <div id="mondTraining" className="container tab-pane"><br />
                            <Routine routine={props.routine.monExerc} />
                        </div>
                    </div>

                    {/* TUESDAY */}
                    <div id="tuesday" className="container tab-pane"><br />
                        <div id="tuesTraining" className="container tab-pane"><br />
                            <Routine routine={props.routine.tuesExerc} />
                        </div>
                    </div>

                    {/* WEDNESDAY */}
                    <div id="wednesday" className="container tab-pane"><br />
                        <div id="wedTraining" className="container tab-pane"><br />
                            <Routine routine={props.routine.wedExerc} />
                        </div>
                    </div>

                    {/* THURSDAY */}
                    <div id="thursday" className="container tab-pane"><br />
                        <div id="thuTraining" className="container tab-pane"><br />
                            <Routine routine={props.routine.thuExerc} />
                        </div>
                    </div>

                    {/* FRIDAY */}
                    <div id="friday" className="container tab-pane"><br />
                        <div id="friTraining" className="container tab-pane"><br />
                            <Routine routine={props.routine.friExerc} />
                        </div>
                    </div>

                    {/* SATURDAY */}
                    <div id="saturday" className="container tab-pane"><br />
                        <div id="sunTraining" className="container tab-pane"><br />
                            <Routine routine={props.routine.satExerc} />
                        </div>
                    </div>

                    {/* SUNDAY */}
                    <div id="sunday" className="container tab-pane"><br />
                        <div id="sunTraining" className="container tab-pane"><br />
                            <Routine routine={props.routine.sunExerc} />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default body;