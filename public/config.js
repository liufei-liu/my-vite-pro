
var config = {}

config.baseUrl = 'http://10.8.9.252:8085'//http://10.8.9.252:8085


//config.baseUrl = 'http://10.8.9.50:9090';//后台服务

config.whiteListApi = ['/a', '/b']
config.pagination = {
    pageSizes: [10, 20, 50, 100],
    //pageSizes: [2,4],
    defaultPageSzie: 10
}
config.loading = {
    text: "正在请求中...",
    textCode: "",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.5)",
}

window.config = config