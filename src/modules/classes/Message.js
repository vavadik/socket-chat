export default class User {
    constructor(user_id, text, userData) {
        this.user_id = user_id;
        this.text = text;
        this._id = null;
        this.userData = userData;
    }

    validate({ _id, _created }) {
        this._id = _id;
        this._created = _created;
    }

    delivered() {
        return !!this._id;
    }

    toDto() {
        return {
            _id: this._id,
            user_id: this.user_id,
            text: this.text,
        }
    }
}