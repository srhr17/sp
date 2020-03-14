import React, { Component } from 'react';
import { MDBAnimation } from 'mdbreact';
class Roomtimetable extends Component {
	constructor() {
		super();
		this.state = {
			roomno: '',

			errors: {
				roomno: ' '
			}
		};
	}

	validateForm = (errors) => {
		let valid = true;
		Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
		return valid;
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		let errors = this.state.errors;

		switch (name) {
			case 'roomno':
				errors.roomno = value === ' ' ? 'Select roomno' : '';
				break;
			case 'room':
				break;
			default:
				break;
		}

		this.setState({ errors, [name]: value });
	};

	render() {
		return (
			<div>
				<br />
				<MDBAnimation type="bounce" infinite>
					<h1
						style={{
							marginLeft: '34%',
							color: '#001399',
							backgroundcolor: '#333',
							letterspacing: '.1em',
							textshadow:
								'0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(0, 0, 0, 0.9)'
						}}
					>
						Room Timetable
					</h1>
				</MDBAnimation>
				<br />
				<br />
				<form
					method="POST"
					action="http://localhost:8000/roomtimetable"
					style={{ marginLeft: '30%', marginRight: '40%' }}
				>
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Room Number</span>
						</div>
						<textarea
							name="roomno"
							onChange={this.handleChange}
							class="form-control"
							aria-label="With textarea"
						/>
					</div>

					<button type="submit" data-testid="submitbutton" class="btn btn-dark" style={{ marginLeft: '40%' }}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Roomtimetable;
