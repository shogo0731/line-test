const express = require('express');
const https = require('https');
const app = express();


// const
const TOKEN = process.env.LINE_ACCESS_TOKEN
const port = 3000
const method = "POST"
const endPoint = "https://api.line.me/v2/bot/message/reply"
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
    hostname: "api.line.me",
    path: "/v2/bot/message/broadcast",
    method: "POST",
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

app.post("/webhook", (req, res) => {
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
