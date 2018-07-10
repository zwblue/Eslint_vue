let baseURL = "";
if (process.env.NODE_ENV === 'development') {
    baseURL = "http://192.168.3.26:6426";
    // baseURL = "http://192.168.22.37:6426";  // 本地接口
} else {
    if (process.env.type === "test") {
        // baseURL = "http://192.168.3.26:6426";
        baseURL = "http://36.7.138.114:5026/ws-syslogin/";
        // baseURL = "http://192.168.22.37:6426"; // 本地接口
    } else {
        baseURL = "http://report.wsloan.com:8888/ws-syslogin";
    }
}
export default baseURL;