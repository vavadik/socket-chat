<template>
    <div class="layout">
        <Header v-if="layoutConfig.showHeader" v-bind:title="appTitle"></Header>
        <div class="main-area">
            <MainMenu v-if="layoutConfig.showMainMenu"></MainMenu>
            <Content></Content>
        </div>
        <Footer v-if="layoutConfig.showFooter"></Footer>
    </div>
</template>

<script>
import Header from "./layoutComponents/Header";
import Content from "./layoutComponents/Content";
import Footer from "./layoutComponents/Footer";
import MainMenu from "./layoutComponents/MainMenu";
import settings from "dataProviders/settings";
import { defaults } from "lodash";

export default {
    components: {
        Header,
        Content,
        Footer,
        MainMenu
    },
    created() {
        this.$auth.renewTokens().then(null, error => console.log(error));
    },
    data() {
        return {
            appTitle: settings.getValue("applicationName"),
            layoutConfig: defaults(settings.getValue("layoutConfig"), {
                showHeader: true,
                showFooter: true,
                showMainMenu: true
            })
        };
    }
};
</script>

<style lang="less" scoped>
div.layout {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    min-height: @layout-min-height;
    color: @font-color;

    div.header {
        background: @layout-component-color;
        flex-basis: @header-size;
    }

    .main-area {
        flex-grow: 1;
        display: flex;

        div.content {
            background: @background-color;
            flex-grow: 1;
        }

        div.main-menu {
            background: @layout-component-color;
            flex-basis: @main-menu-size;
        }
    }

    div.footer {
        background: @layout-component-color;
        flex-basis: @footer-size;
    }
}
</style>
