const expressi = require('express');
const appi = expressi();
const port = 8000;
const mysql = require('mysql');
var bodyParser = require('body-parser');
appi.set('view engine', 'ejs');
appi.use(bodyParser.urlencoded({ extended: false }));
appi.use(bodyParser.json());
function loadpassword() {
	return 'occupancy';
}
var sqlConnection = mysql.createConnection({
	host: 'occupancychart.cmauel5myhvk.us-east-1.rds.amazonaws.com',
	user: 'admin',
	password: loadpassword(),
	database: 'occupancy'
});

sqlConnection.connect((err) => {
	if (!err) console.log('Connection succeeded.');
	else console.log('Unsuccessful \n Error : ' + JSON.stringify(err, undefined, 2));
});

appi.post('/mytimetable', function(req, res) {
	var fid = req.body.fid;
	var sem = req.body.sem;

	res.writeHead(200, { 'content-type': 'text/html' });
	sqlConnection.query(
		'SELECT day as day,period1 as p1,period2 as p2,period3 as p3,period4 as p4,period5 as p5,period6 as p6,period7 as p7,period8 as p8,period9 as p9 FROM occupancy.faculty where sem=? and fname=(select fname from facultyid where fid=?)',
		[ sem, fid ],
		function(erri, result, fields) {
			if (!erri) {
				for (let i = 0; i < result.length; i++) {
					res.write(
						'<!DOCTYPE html> <head></head> <body> <h1> Day : </h1> <h4>' +
							result[i].day +
							'</h4> <h1>  Period 1: </h1> <h4>' +
							result[i].p1 +
							'</h4><h1>   Period 2: </h1><h4>' +
							result[i].p2 +
							'</h4> <h1>  Period 3: </h1> <h4>' +
							result[i].p3 +
							'</h4><h1>   Period 4: </h1><h4>' +
							result[i].p4 +
							'</h4> <h1>  Period 5: </h1> <h4>' +
							result[i].p5 +
							'</h4><h1>   Period 6: </h1><h4>' +
							result[i].p6 +
							'</h4> <h1>  Period 7: </h1> <h4>' +
							result[i].p7 +
							'</h4><h1>   Period 8: </h1><h4>' +
							result[i].p8 +
							'</h4><h1>   Period 9: </h1><h4>' +
							result[i].p9 +
							'</h4> <hr> </body>'
					);
				}
			}
		}
	);
});

appi.post('/roomfeat', function(req, res) {
	var prj = req.body.projector;
	var skt = req.body.socket;
	var ac = req.body.ac;
	var sb = req.body.sb;
	var mic = req.body.mic;
	var mb = req.body.mb;
	res.writeHead(200, { 'content-type': 'text/html' });
	sqlConnection.query(
		'select roomno as roomno from feat where projector=? and ac=? and skt=? and sb=? and mic=? and mb=?',
		[ prj, ac, skt, sb, mic, mb ],
		function(err, result, fields) {
			if (result.length > 0) {
				for (let i = 0; i < result.length; i++) {
					res.write(
						'<!DOCTYPE html> <head></head> <body> <h1> Room Number with requested features : </h1> <h4>' +
							result[i].roomno +
							'</h4> <hr> </body>'
					);
				}
			} else {
				res.write(
					'<!DOCTYPE html> <head></head> <body> <h1> Room Number with requested features is not available . . .Please try with a different subset of requirements :( </h1> <h4>' +
						'</h4> <hr> </body>'
				);
			}
		}
	);
});

appi.post('/cancelclass', function(req, res) {
	var sem = req.body.sem;
	var classi = req.body.class;
	var day = req.body.day;
	var period = req.body.time;
	console.log('Cancelling class ' + classi + ' ' + day + ' ' + period);
	sqlConnection.query(
		'select ? as period from studenttime where sem=? and day=? and section=?',
		[ period, sem, day, classi ],
		function(err, result, fields) {
			sqlConnection.query('insert into tempcancel values(?,?,?,?,?)', [
				classi,
				sem,
				day,
				period,
				result[0].period
			]);
			res.send(
				'successfully cancelled ' + result[0].period + ' for CSE ' + classi + ' sem ' + sem + ' on ' + day
			);
		}
	);
});

appi.post('/reqroombooking', function(req, res) {
	var roomno = req.body.roomno;
	var day = req.body.day;
	var time = req.body.time;
	var fid = req.body.fid;
	console.log(fid);
	res.writeHead(200, { 'content-type': 'text/html' });
	sqlConnection.query('select room as room from room where ? ="Free"', [ time ], function(err, result, field) {
		if (result.length > 0) {
			sqlConnection.query(
				'select roomno as room from temproombook where day=? and time=?',
				[ day, time ],
				function(kerr, kresult, kfields) {
					if (kresult.length == 0) {
						sqlConnection.query(
							'insert into temproombook values(?,?,?,?)',
							[ roomno, day, time, fid ],
							function(ierr, iresult, ifield) {
								res.write(
									'<!DOCTYPE html> <head></head> <body> <h1> Room Booking Successfull!! :) ... Please wait patiently for admin to approve the booking  </h1> <h4>' +
										'</h4> <hr> </body>'
								);
							}
						);
					} else {
						res.write(
							'<!DOCTYPE html> <head></head> <body> <h1>This Room has already been booked!! :(  </h1> <h4>' +
								'</h4> <hr> </body>'
						);
					}
				}
			);
		} else {
			res.write(
				'<!DOCTYPE html> <head></head> <body> <h1> Requested room is not available . . .Please try booking a different room or contact admin :( </h1> <h4>' +
					'</h4> <hr> </body>'
			);
		}
	});
});

appi.post('/roomtimetable', function(req, res) {
	var room = req.body.roomno;
	res.writeHead(200, { 'content-type': 'text/html' });
	sqlConnection.query(
		'SELECT day as day,period1 as p1,period2 as p2,period3 as p3,period4 as p4,period5 as p5,period6 as p6,period7 as p7,period8 as p8,period9 as p9 FROM occupancy.room where room=?',
		[ room ],
		function(err, result, fields) {
			if (!err) {
				for (let i = 0; i < result.length; i++) {
					res.write(
						'<!DOCTYPE html> <head></head> <body> <h1> Day : </h1> <h4>' +
							result[i].day +
							'</h4> <h1>  Period 1: </h1> <h4>' +
							result[i].p1 +
							'</h4><h1>   Period 2: </h1><h4>' +
							result[i].p2 +
							'</h4> <h1>  Period 3: </h1> <h4>' +
							result[i].p3 +
							'</h4><h1>   Period 4: </h1><h4>' +
							result[i].p4 +
							'</h4> <h1>  Period 5: </h1> <h4>' +
							result[i].p5 +
							'</h4><h1>   Period 6: </h1><h4>' +
							result[i].p6 +
							'</h4> <h1>  Period 7: </h1> <h4>' +
							result[i].p7 +
							'</h4><h1>   Period 8: </h1><h4>' +
							result[i].p8 +
							'</h4><h1>   Period 9: </h1><h4>' +
							result[i].p9 +
							'</h4> <hr> </body>'
					);
				}
			}
		}
	);
	console.log(room);
});
function checkfree(period, pno) {
	var str = '';
	if (period == 'Free') {
		str = '<h1>  Period ' + pno + ': </h1> <h4>' + period + '</h4>';

		return str;
	} else {
		return str;
	}
}
appi.post('/freeslotsfaculty', function(req, res) {
	var fid = req.body.fid;
	var sem = req.body.sem;
	console.log(fid + ' hola2 ' + sem);
	res.writeHead(200, { 'content-type': 'text/html' });
	sqlConnection.query(
		'SELECT day as day,period1 as p1,period2 as p2,period3 as p3,period4 as p4,period5 as p5,period6 as p6,period7 as p7,period8 as p8,period9 as p9 FROM occupancy.faculty where sem=? and fname=(select fname from facultyid where fid=?)',
		[ sem, fid ],
		function(err, result, fields) {
			if (!err) {
				for (let i = 0; i < result.length; i++) {
					res.write(
						'<!DOCTYPE html> <head></head> <body> <h1> Day : </h1> <h4>' +
							result[i].day +
							'</h4> ' +
							checkfree(result[i].p1, 1) +
							checkfree(result[i].p2, 2) +
							checkfree(result[i].p3, 3) +
							checkfree(result[i].p4, 4) +
							checkfree(result[i].p5, 5) +
							checkfree(result[i].p6, 6) +
							checkfree(result[i].p7, 7) +
							checkfree(result[i].p8, 8) +
							checkfree(result[i].p9, 9) +
							'</h4> <hr> </body>'
					);
				}
			}
		}
	);
	console.log('hola2');
});
appi.listen(port, () => console.log(`Example appi listening on port port!`));
