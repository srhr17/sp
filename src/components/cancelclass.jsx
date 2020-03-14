import React, { Component } from 'react';
import { MDBAnimation } from 'mdbreact';

class cancelclass extends Component {
	constructor(props) {
		super();
	}

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
						Cancel Class
					</h1>
				</MDBAnimation>
				<form
					method="POST"
					action="http://localhost:8000/cancelclass"
					style={{ marginLeft: '30%', marginRight: '40%' }}
				>
					{/* <input type="number" placeholder={sessionStorage.getItem('fid')} style={{ marginLeft: '500px' }} />
					<input type="submit" /> */}
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Section</span>
						</div>
						<select name="class" class="form-control" id="class">
							<option value="A">CSE A</option>
							<option value="B">CSE B</option>
							<option value="C">CSE C</option>
							<option value="D">CSE D</option>
							<option value="E">CSE E</option>
							<option value="F">CSE F</option>
						</select>
					</div>
					<br />
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Semester</span>
						</div>
						<select name="sem" class="form-control" id="sem">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="4">4</option>
							<option value="6">6</option>
							<option value="8">8</option>
						</select>
					</div>
					<br />
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Day</span>
						</div>

						<select name="day" class="form-control " data-style="btn-inverse" id="day">
							<option value="MONDAY">MONDAY</option>
							<option value="TUESDAY">TUESDAY</option>
							<option value="WEDNESDAY">WEDNESDAY</option>
							<option value="THURSDAY">THURSDAY</option>
							<option value="FRIDAY">FRIDAY</option>
						</select>
					</div>
					<br />
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Time</span>
						</div>

						<select name="time" class="form-control" id="time">
							<option value="period1">08:45 - 9:30</option>
							<option value="period2">09:30 - 10:20</option>
							<option value="period3">10:20 - 11:10</option>
							<option value="period4">11:20 - 12:10</option>
							<option value="period5">12:10 - 01:00</option>
							<option value="period6">01:00 - 02:00</option>
							<option value="period7">02:00 - 02:50</option>
							<option value="period8">02:50 - 03:40</option>
							<option value="period9">03:40 - 04:10</option>
						</select>
					</div>
					<br />
					<br />

					<button type="submit" data-testid="submitbutton" class="btn btn-dark" style={{ marginLeft: '40%' }}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default cancelclass;
