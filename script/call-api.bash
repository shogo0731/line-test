# LINEの指定したグループにメッセージを送信するときのテストスクリプト
# AUthorizationのline_access_tokenとtoのgroupIdを書き換える必要あり

curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer line_access_token' \
-d '{
    "to": "groupId"
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