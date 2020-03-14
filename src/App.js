import React, { Component } from 'react';

import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { MDBAnimation } from 'mdbreact';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { facultyname: 'facultyname', fid: 0 };
	}
	facultytimetable = (event) => {
		window.history.pushState(null, 'facultytimetable', '/facultytimetable');
		window.location.reload();
	};
	roomtimetable = (event) => {
		window.history.pushState(null, 'roomtimetable', '/roomtimetable');
		window.location.reload();
	};

	freeslotfaculty = (event) => {
		window.history.pushState(null, 'freeslotfaculty', '/freeslotfaculty');
		window.location.reload();
	};
	requestroombooking = (event) => {
		window.history.pushState(null, 'requestroombooking', '/requestroombooking');
		window.location.reload();
	};
	cancelclass = (event) => {
		window.history.pushState(null, 'cancelclass', '/cancelclass');
		window.location.reload();
	};

	initial = () => {
		let value = this;
		sessionStorage.setItem('fid', 400);
		sessionStorage.setItem('fname', 'Aghilan');

		value.setState({ facultyname: sessionStorage.getItem('fname') });
		value.setState({ fid: sessionStorage.getItem('fid') });
	};

	render() {
		return (
			<body onPointerOver={this.initial}>
				<div>
					<h2 style={{ marginLeft: '510px', display: 'inline' }}>
						Welcome, {this.state.facultyname}
						{'   '}
					</h2>

					<h4 style={{ display: 'inline' }} className="badge badge-warning">
						{this.state.fid}
					</h4>

					<br />
					<br />
					<MDBAnimation type="bounce" infinite>
						<h1
							style={{
								marginLeft: '41%',
								color: '#001399',
								backgroundcolor: '#333',
								letterspacing: '.1em',
								textshadow:
									'0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(0, 0, 0, 0.9)'
							}}
						>
							Faculty Portal
						</h1>
						{/* <img
							className="img-fluid"
							alt="Faculty Portal"
							
							// src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png"
						/> */}
					</MDBAnimation>
					<br />
					<br />
					<br />
					<Router>
						<ul class="breadcrumb navbar navbar-inverse bg-dark navbar-dark">
							<li>
								<NavLink to="/facultytimetable" name="mytimetable" onClick={this.facultytimetable}>
									My Timetable
								</NavLink>
							</li>
							<li class="active">
								<NavLink to="/roomtimetable" name="roomtimetable" onClick={this.roomtimetable}>
									Room Timetable
								</NavLink>
							</li>
							<li>
								<NavLink to="/freeslotfaculty" name="freeslots" onClick={this.freeslotfaculty}>
									My Free Slots{' '}
								</NavLink>
							</li>
							<li>
								<NavLink to="/requestroombooking" onClick={this.requestroombooking}>
									Room Booking
								</NavLink>
							</li>
							<li>
								<NavLink to="/cancelclass" onClick={this.cancelclass}>
									Cancel Class
								</NavLink>
							</li>
						</ul>
					</Router>
				</div>
			</body>
		);
	}
}

export default App;
