import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import Facultytimetable from './components/Facultytimetable.jsx';
import Roomtimetable from './components/Roomtimetable.jsx';
import Freeslotfaculty from './components/freeslotfaculty.jsx';
import Roomfeat from './components/roomfeatures.jsx';
import Cancelclass from './components/cancelclass.jsx';
import 'mdbreact/dist/css/mdb.css';
import './login.css';
import Requestroombooking from './components/requestroombooking.jsx';

ReactDOM.render(
	<React.Fragment>
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/facultytimetable" component={Facultytimetable} />
				<Route exact path="/roomtimetable" component={Roomtimetable} />
				<Route exact path="/freeslotfaculty" component={Freeslotfaculty} />
				<Route exact path="/cancelclass" component={Cancelclass} />
				<Route exact path="/roomfeat" component={Roomfeat} />
				<Route exact path="/requestroombooking" component={Requestroombooking} />
				<Route component={App} />
			</Switch>
		</Router>
	</React.Fragment>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
