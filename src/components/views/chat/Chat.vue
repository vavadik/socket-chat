<template>
    <div class="chat" v-if="currentUser && currentUser.loggedIn()">
        <div class="user-list">user-list</div>
        <div class="chat-main">
            <div class="chat-header">chat-header</div>
            <div class="chat-window">
                <ChatMessage v-for="message in messages" v-bind="{ message }" :key="message._id"></ChatMessage>
            </div>
            <div class="chat-input">
                <input
                    type="text"
                    @keydown.enter="sendMessage"
                    v-model="currentMessage"
                    placeholder="Write your message:"
                >
                <a href="#" class="button" @click="sendMessage">Send</a>
            </div>
        </div>
    </div>
</template>

<script>
import User from "classes/User";
import ChatMessage from "./ChatMessage";
import ChatApi from "api/chat";
import Message from 'classes/Message'

export default {
    components: {
        ChatMessage
    },

    created() {
        if (this.$auth.profile) {
            this.setUser(this.$auth.profile);
        }
    },

    data() {
        return {
            currentMessage: "",
            messages: [],
            currentUser: null
        };
    },

    methods: {
        async setUser(profile) {
            this.currentUser = new User(profile.name, profile.email);
            let userData = await (await ChatApi.getUser(this.currentUser.email)).json();
            if(!userData || !userData._id) {
                userData = await (await ChatApi.newUser(this.currentUser.toDto())).json();
            }
            ChatApi.getLatestMessages(5);
            if(userData._id) {
                this.currentUser.logIn(userData._id);
            }
        },
        handleLoginEvent(loginData) {
            this.setUser(loginData.profile);
        },
        async sendMessage() {
            if (this.currentMessage.trim()) {
                let messageModel = new Message(this.currentUser._id, this.currentMessage, this.currentUser.toDto());
                this.messages.push(messageModel);
                this.currentMessage = "";
                let messageData = await (await ChatApi.newMessage(messageModel.toDto())).json();
                messageModel.validate(messageData);
            }
        }
    }
};
</script>

<style lang="less" scoped>
.chat {
    flex-basis: 100%;
    display: flex;
    flex-direction: row;

    .user-list {
        flex-basis: 200px;
        box-sizing: border-box;
        border-right: 1px solid @layout-component-color;
    }

    .chat-main {
        flex-grow: 1;
        display: flex;
        flex-direction: column;

        .chat-header {
            flex-basis: 50px;
            box-sizing: border-box;
            border-bottom: 1px solid @layout-component-color;
        }

        .chat-window {
            flex-grow: 1;
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
        }

        .chat-input {
            box-sizing: border-box;
            border-top: 1px solid @layout-component-color;
            flex-basis: 50px;
            display: flex;
            flex-direction: row;

            .button {
                flex-basis: 100px;
            }

            input {
                flex-grow: 1;
                flex-basis: 30px;
                background-color: @background-color;
                box-shadow: none;
                border: none;

                &:focus {
                    border: none;
                    box-shadow: none;
                    outline: none;
                }
            }
        }
    }
}
</style>