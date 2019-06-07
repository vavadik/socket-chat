<template>
    <div class="chat-message">
        <div class="author">{{ message.userData.name }}</div>
        <div class="message-content">{{ message.text }}</div>
        <div class="message-status">{{ status }}</div> 
    </div>
</template>

<script>
import Message from 'classes/Message'
export default {
    props: {
        message: Message
    },
    computed: {
        status() {
            return this.message.delivered() ? "OK" : "Sending...";
        }
    }
};
</script>

<style lang="less" scoped>
.chat-message {
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    border: 1px solid black;
    box-sizing: border-box;
    .message-content {
        flex-grow: 1;
    }
}
</style>


