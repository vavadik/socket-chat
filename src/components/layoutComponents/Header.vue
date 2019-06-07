<template>
    <div class="header">
        <div class="title">{{title}}</div>
        <UserPanel/>
    </div>
</template>

<script>
import UserPanel from "./UserPanel";
export default {
    components: {
        UserPanel,
    },
    props: {
        title: String
    },
};
</script>

<style lang="less">
div.header {
    display: flex;
    justify-content: space-between;
}
</style>


