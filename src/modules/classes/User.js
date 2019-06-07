export default class User {
    constructor(name, email) {
        this.email = email;
        this.name = name;
        this._id = null;
    }

    logIn(id) {
        this._id = id;
    }

    loggedIn() {
        return this._id !== null;
    }

    toDto() {
        return {
            _id: this._id,
            name: this.name,
            email: this.email,
        }
    }
}