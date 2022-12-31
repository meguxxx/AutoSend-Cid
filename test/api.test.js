const http = require("http");

const header = {
    method: "GET",
    host: "localhost",
    port: 3000,
    path: "/api/stock",
    headers: {
        "Content-Type": "application/json"
    }
};

const data = http.request(header).getHeaders;

console.info(data)