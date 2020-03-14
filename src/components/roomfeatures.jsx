import React, { Component } from 'react';

import { BrowserRouter as Router, NavLink } from 'react-router-dom';
class roomfeatures extends Component {
	constructor(props) {
		super(props);
		this.state = { isUserAdmin: null };
	}
	roombook = (event) => {
		window.history.pushState(null, 'requestroombooking', '/requestroombooking');
		window.location.reload();
	};
	render() {
		return (
			<div style={{ marginTop: '5%' }}>
				<form
					method="POST"
					action="http://localhost:8000/roomfeat"
					style={{ marginLeft: '30%', marginRight: '40%' }}
				>
					<br />
					<Router>
						<ul class="breadcrumb navbar navbar-inverse bg-dark navbar-dark">
							<li style={{ marginLeft: '25%' }}>
								<NavLink to="/roomfeat" name="roomfeat" onClick={this.roombook}>
									Book Room Facility
								</NavLink>
							</li>
						</ul>
					</Router>
					<br />
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Projector</span>
						</div>

						<select name="projector" class="form-control " data-style="btn-inverse" id="projector">
							<option value="YES">YES</option>
							<option value="NO">NO</option>
						</select>
					</div>
					<br />
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Socket </span>
						</div>

						<select name="socket" class="form-control " data-style="btn-inverse" id="socket">
							<option value="YES">YES</option>
							<option value="NO">NO</option>
						</select>
					</div>
					<br />
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">AC </span>
						</div>

						<select name="ac" class="form-control " data-style="btn-inverse" id="ac">
							<option value="YES">YES</option>
							<option value="NO">NO</option>
						</select>
					</div>
					<br />
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Speaker</span>
						</div>

						<select name="sb" class="form-control " data-style="btn-inverse" id="sb">
							<option value="YES">YES</option>
							<option value="NO">NO</option>
						</select>
					</div>
					<br />
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Mic</span>
						</div>

						<select name="mic" class="form-control " data-style="btn-inverse" id="mic">
							<option value="YES">YES</option>
							<option value="NO">NO</option>
						</select>
					</div>
					<br />
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Board</span>
						</div>

						<select name="mb" class="form-control " data-style="btn-inverse" id="mb">
							<option value="YES">YES</option>
							<option value="NO">NO</option>
						</select>
					</div>
					<br />

					<button type="submit" data-testid="submitbutton" class="btn btn-dark" style={{ marginLeft: '40%' }}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default roomfeatures;
