<template>
    <div class="main-menu">
        <router-link to="/welcome">Welcome page</router-link>
        <router-link to="/test">Test page</router-link>
        <router-link v-if="isAuthenticated" to="/profile">Profile</router-link>
        <router-link v-if="isAuthenticated" to="/chat">Chat</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isAuthenticated: false
        };
    },

    methods: {
        handleLoginEvent(data) {
            this.isAuthenticated = data.loggedIn;
        }
    },

    created() {}
};
</script>

<style lang="less">
div.main-menu {
    display: flex;
    flex-direction: column;
}
</style>


