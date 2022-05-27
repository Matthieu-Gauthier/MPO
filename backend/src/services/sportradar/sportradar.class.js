/* eslint-disable no-unused-vars */
const { getNextFight, getFightSummaries } = require('./services/fights');
const { getFutureEvents } = require('./services/seasons');
const { updateCompetitors } = require('./services/competitors');
const { daysDiff } = require('../../utils');


exports.Sportradar = class Sportradar {
	constructor(options) {
		this.options = options || {};
	}

	setup(app) {
		this.app = app;
	}

	async find() {
		throw Error('Unsupported');
	}


	async get(id, params) {
		switch (id) {

		case 'seasons': // Get all future events announced by UFC.
			return await getFutureEvents(this.app);
			break;

		case 'nextEvent': // Get nextEvent with all competitorSummaries present in event
			const fights = await getNextFight(this.app);
			await updateCompetitors(this.app, fights);
			return fights;
			break;

		case 'result': // Get nextEvent with all competitorSummaries present in event
			const { eventId } = params.query;
			if (eventId) {
				const fights = await getFightSummaries(this.app, eventId);
				await updateCompetitors(this.app, fights);
				return fights;
			}

			return 'Params "eventId" not found';
			break;

		case 'test':
			const a = new Date(2020, 11, 24, 10, 33, 30);
			const b = new Date(2021, 11, 24, 10, 33, 30);
			return daysDiff(a, b);
			break;
		default:
			return 'Unsupported sportradar getter';
		}
	}

	async create() {
		throw Error('Unsupported');
	}

	async update() {
		throw Error('Unsupported');
	}

	async patch() {
		throw Error('Unsupported');
	}

	async remove() {
		throw Error('Unsupported');
	}
};
