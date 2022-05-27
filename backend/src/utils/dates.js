const moment = require('moment');

const daysDiff = (date1, date2 = new Date()) => {
	const a = moment(date1);
	const b = moment(date2);
	if (a > b) {
		return a.diff(b, 'days');
	} else {
		return b.diff(a, 'days');
	}
};

module.exports = {
	daysDiff,
};
