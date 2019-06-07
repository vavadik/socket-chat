import settings from 'dataProviders/settings'
import RestApi from 'dataProviders/restApi'

class Chat {
    constructor() {
        this.api = new RestApi(settings.getValue("chatApi.url"));
    }

    newUser(userData) {
        return this.api.post("/user", userData);
    }

    getUser(email) {
        return this.api.get(`/user/${email}`);
    }

    newMessage(messageData) {
        return this.api.post("/message", messageData);
    }

    getLatestMessages(n = 5) {
        return this.api.get(`/message/latest/${n}`);
    }
}
const instance = new Chat();

export default instance;