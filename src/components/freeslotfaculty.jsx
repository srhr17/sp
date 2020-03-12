import React, { Component } from 'react';
import { MDBAnimation } from 'mdbreact';
class freeslotfaculty extends Component {
	constructor(props) {
		super(props);
		this.state = {};
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
						Faculty Freeslots
					</h1>
				</MDBAnimation>
				<br />
				<br />
				<form
					method="POST"
					action="http://localhost:8000/freeslotsfaculty"
					style={{ marginLeft: '30%', marginRight: '40%' }}
				>
					{/* <input type="number" placeholder={sessionStorage.getItem('fid')} name="fid" style={{ marginLeft: '500px' }} />
					<input type="submit" /> */}
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Faculty ID</span>
						</div>
						<textarea
							name="fid"
							placeholder={sessionStorage.getItem('fid') + ' is your id'}
							class="form-control"
							aria-label="With textarea"
						/>
					</div>
					<br />
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Semester</span>
						</div>
						<textarea
							name="sem"
							placeholder="6 is current semester"
							class="form-control"
							aria-label="With textarea"
						/>
					</div>
					<br />
					<br />

					<button type="submit" class="btn btn-dark" style={{ marginLeft: '40%' }}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default freeslotfaculty;
