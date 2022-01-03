export function User() {
	this.username = "";
	this.firstName = "";
	this.lastName = "";
	this.email = "";
	this.role = "";
	this.requesting_managerial = null;

	this.token = "";
}

User.prototype.getUser = function (user_json, username) {
	this.username = user_json.username;
	this.firstName = user_json.firstName;
	this.lastName = user_json.lastName;
	this.lastName = user_json.email;
	this.role = user_json.role;
	this.requesting_managerial = user_json.requesting_managerial;

	this.token = user_json.token;
};
