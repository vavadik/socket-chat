export default {
    "applicationName": "WebSocket vue chat",
    "chatApi": {
        url: "http://localhost:8081"
    },
    "layoutConfig": {
        showHeader: true,
        showFooter: false,
        showMainMenu: true,
    },
    "authProviders": {
        "auth0": {
            "domain": "dev-ymr6q8fj.eu.auth0.com",
            "clientId": "W61gLj81xRKjcEM18pOXRHUglkgJhPOG",
            "callBackUrl": `${window.location.origin}/callback`
        }
    }
}