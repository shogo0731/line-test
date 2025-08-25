const express = require('express');
const https = require('https');
const app = express();


// const
const TOKEN = process.env.LINE_ACCESS_TOKEN
const hostname = "api.line.me"
const webhookEndPoint = "/webhook"
const endPoint = "/v2/bot/message/broadcast"
const port = 3000
const method = "POST"
const headers = {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + TOKEN
    }
const dataString = JSON.stringify({
    messages: [
            {
                type: "text",
                text: "Hello, user"
            },
            {
                type: "text",
                text: "May I help you?"
            }
        ]
})
const webhookOptions = {
    hostname: hostname,
    path: endPoint,
    method: port,
    headers: headers,
    body: dataString,
}


// expressを利用したLINEボットサーバーを定義

//リクエストオブジェクトをJSON、文字列、配列として扱うためのミドルウェア関数
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.post(webhookEndPoint, (req, res) => {
    const request = https.request(webhookOptions, (res) => {
        res.on("data", (d) => {
            process.stdout.write(d);
        });
    });

    //エラーハンドリング
    request.on("error", (err) => {
        console.log(err);
    })

    request.write(dataString);
    request.end();

})

app.listen(port, () => {
    console.log("Server ready on port 3000.");
})
