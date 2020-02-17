import React from 'react';
// import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import Sunday from "./Sunday";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import "../css/content.css";

export default class Volleyball extends React.Component {
    render() {
        var now = new Date();
        // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var components = [<Sunday />, <Monday />, <Tuesday />, <Wednesday />, <Thursday />, <Friday />, <Saturday />]
        var numDay = now.getDay();
        function Day() {
            return components[numDay];
        }

        return (
            <Router>
                <div className="gym-spots">
                    <Day></Day>
                </div>
            </Router>
        )
    }
}