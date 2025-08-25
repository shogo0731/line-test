# LINEにメッセージを自動送信するときのテストスクリプト
# AUthorizationのline_access_tokenを書き換える必要あり

curl -v -X POST https://api.line.me/v2/bot/message/broadcast \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer line_access_token' \
-d '{
    "messages":[
        {
            "type":"text",
            "text":"Hello, world1"
        },
        {
            "type":"text",
            "text":"Hello, world2"
        }
    ]
}'