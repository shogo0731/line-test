//groupIdを取得するため、webhookを利用
import express from 'express';
const app = express();

// const
const TOKEN = process.env.LINE_ACCESS_TOKEN
const webhookEndPoint = "/webhook"
const port = 3000


// expressを利用したLINEボットサーバーを定義

//リクエストオブジェクトをJSON、文字列、配列として扱うためのミドルウェア関数
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.post(webhookEndPoint, (req, res) => {
    console.log(req.body.events);
    res.status(200).end();
})
app.listen(port, () => {
    console.log("Server ready on port 3000.");
})
