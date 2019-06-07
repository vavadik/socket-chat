<template>
    <div class="user-panel">
        <a class="button" @click.prevent="login" v-if="!isAuthenticated" href="#">Login</a>
        <a class="button" @click.prevent="logout" v-if="isAuthenticated" href="#">Logout</a>
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
        login() {
            this.$auth.login();
        },
        logout() {
            this.$auth.logOut();
        },
        handleLoginEvent(data) {
            this.isAuthenticated = data.loggedIn;
        }
    }
};
</script>

<style lang="less" scoped>
.user-panel {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    .padding();
}
</style>
