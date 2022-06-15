import React from "react";
import Bcg from "./Bcg";
import mine from './mine1.png';
import pac from './pac1.png';
import taskp from './task1.png';
const Portfolio = () => {
    return (
        <div className="main">

            <Bcg />

            <div className="container">


                <br />
                <div id="about">
                    <h1>About</h1>
                    <div className="textarea">
                    </div>
                    <p>
                        hii , well my name is Adane <br />
                        my hubbies are , sports , good music ,family & friends.<br />
                        looking for a place when i can put all my knowledge to use , for a better tomorrow,
                        <br /> i came from the logistics filed where , i manege to make an efficient work space for <br />
                        the customer and also the worker  , been in that field for the last 7 years till the Covid19 <br />
                        came upoon us,that's where i decided to tuch the old hubbie i had which is tech in general, and <br />
                        so i decided to applay to DI Developers.institute which wasnt easy at all!
                        but the harder it got ,<br /> so was the satisfaction from completing the tasks we handed.
                    </p>
                </div>
                <br /><br /><br /><br />
                <div id="skills">
                    <h1>Professional Skiils</h1>
                    <hr />
                    <p>
                        Graduated <bold>DI Developers.institute</bold> Bootcamp 640h of full-stack coding
                        <br />
                        <bold>Fron-End :</bold> <br />
                        React.js : Redux , Hooks , Axios . <br />
                        React.native <br />
                        Css 3 <br />
                        responsive web design <br />
                        <bold>Back-End :</bold> <br />
                        Node.js : Express.js , REST API'S<br />
                        <bold>Database :</bold> <br />
                        SQL <br />
                        Postgresql<br />

                        <bold>and then some :</bold> <br />
                        Html5 , Javascript ES6 , CSS3 ,JWT ,Authentication <br />
                    </p>

                </div>
<hr/>
                <br /><br /><br />
                <div id="works">
                    <h1> my projects</h1>
                    <div className="workscont">
                        <img src={taskp} alt="imawork" />
                        <div className="workstext">
                            <h3>Tasky </h3>
                            your task manegement app
                            <br />
                            which built with: <br />
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Front-end</th>
                                        <th>Back-end</th>
                                    </tr>
                                    <tr>
                                        <td>React , Hooks , axios , jwt_decode, authontication</td>
                                        <td> Node.js , Express.js , JWT , Postgresql , sequlize</td>
                                    </tr>
                                    <tr>

                                        <td> see it live here -- <a href="https://tasksadane.herokuapp.com/" >Tasky site</a></td>
                                        <td> see the code here -- <a href="https://github.com/Adane-M/another_one.git" >Tasky code</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="workscont">
                        <img src={pac} alt="imawork" />
                        <div className="workstext">
                            <h3> Pacman app</h3>
                            <br />
                            which built with: <br />
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Front-end</th>
                                        <th>Back-end</th>
                                    </tr>
                                    <tr>
                                        <td>ES6 , CSS3 , Javascript</td>
                                        <td> Node.js , Express.js ,Postgresql , Knex</td>
                                    </tr>
                                    <tr>

                                        <td> see it live here -- pacman site</td>
                                        <td> see the code here -- <a href="https://github.com/Adane-M/PACMAN.git" >pacman code</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="workscont">
                        <img src={mine} alt="imawork" />
                        <div className="workstext">
                            <h3>Minesweaper game app </h3>
                            <br />
                            which was my first proj ever in coding<br />
                            <a href="https://github.com/Adane-M/mine-sweeper.git" >Minesweaper code</a>

                        </div>
                    </div>
                </div>

                <br /><br /><br />

                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </div>

        </div>
    )
}

export default Portfolio;