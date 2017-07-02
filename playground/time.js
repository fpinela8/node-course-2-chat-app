// Jan 1st 1970 00:00:00 am

var moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);


var createdAt = 1234;
var date = moment(6643864698478);
console.log(date.format('MMM Do YYYY h:m:s AM'));
