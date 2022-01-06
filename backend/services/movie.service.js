const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const { Sequelize } = require("sequelize");
const { date } = require("joi");
const { user, password, database } = config.database;
const sequelize = new Sequelize(database, user, password, { dialect: "mysql" });

module.exports = {
	getMovies,
	updateSeatsCount,
	getDetails,
	create,
	update,
};
async function getMovies() {
	console.log("here");
	const movies = await db.Movie.findAll();
	console.log(movies);
	return movies;
}
async function getDetails(id_) {
	const movie = await db.Movie.findOne({
		where: {
			id: id_,
		},
	});
	return movie;
}

async function updateSeatsCount(id_, op) {
	const movie = await db.Movie.findOne({
		where: {
			id: id_,
		},
	});
	if (movie) {
		if (op == "dec") movie.empty_seats_count = movie.empty_seats_count - 1;
		else if (op == "inc") movie.empty_seats_count = movie.empty_seats_count + 1;

		await movie.save();
	}
}

async function create(data) {
	if (data.start_time > data.end_time) {
		throw "start time must be earlier than end time";
	}
	if (Date.parse(data.date) < Date.now()) {
		throw "please use a future date";
	}
	const date_in = new Date(data.date).toISOString();
	const my_query =
		"SELECT * FROM `movies` WHERE `room` = '" +
		data.room +
		"' AND `date` = CONVERT('" +
		date_in +
		"', DATE) AND( ( `end_time` > CONVERT('" +
		data.start_time +
		"', TIME) AND `start_time` < CONVERT('" +
		data.start_time +
		"', TIME) ) OR( `start_time` < CONVERT('" +
		data.end_time +
		"', TIME) AND `end_time` > CONVERT('" +
		data.start_time +
		"', TIME) ) OR( `start_time` >= CONVERT('" +
		data.start_time +
		"', TIME) AND `end_time` <= CONVERT('" +
		data.end_time +
		"', TIME) ) )";
	const others = await sequelize.query(my_query, {
		type: Sequelize.QueryTypes.SELECT,
	});
	console.log(others.length);
	if (others.length != 0) {
		throw "room already in use";
	} else {
		await db.Movie.create(data);
	}
}
async function update(data, movie_id) {
	if (data.start_time > data.end_time) {
		throw "start time must be earlier than end time";
	}
	if (data.date < Date.now()) {
		throw "please use a future date";
	}
	const date_in = new Date(data.date).toISOString();
	const my_query =
		"SELECT * FROM `movies` WHERE id != " +
		movie_id +
		" AND`room` = '" +
		data.room +
		"' AND `date` = CONVERT('" +
		date_in +
		"', DATE) AND( ( `end_time` > CONVERT('" +
		data.start_time +
		"', TIME) AND `start_time` < CONVERT('" +
		data.start_time +
		"', TIME) ) OR( `start_time` < CONVERT('" +
		data.end_time +
		"', TIME) AND `end_time` > CONVERT('" +
		data.start_time +
		"', TIME) ) OR( `start_time` >= CONVERT('" +
		data.start_time +
		"', TIME) AND `end_time` <= CONVERT('" +
		data.end_time +
		"', TIME) ) )";
	const others = await sequelize.query(my_query, {
		type: Sequelize.QueryTypes.SELECT,
	});
	console.log(others.length);
	if (others.length != 0) {
		throw "room already in use";
	} else {
		await db.Movie.update(data, { where: { id: movie_id } });
	}
}
