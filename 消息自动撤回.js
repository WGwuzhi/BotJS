// [rule: 管理自动撤回]
// [rule: 开启自动撤回]
// [rule: 关闭自动撤回]
// [rule: ?]
// [class: 工具类]
// [author: yuwei]
// [create_at: 2023-01-04 14:08:00]
// [version: v1.0.6]
// [title: 消息自动撤回]
// [description: 命令如下：管理自动撤回，开启自动撤回，关闭自动撤回]
// [platform: qq,tg]
// [public: true]
// [price: 0.00]
//=======================================================
var tongzi = "YounWeriCheHui";
var isAdmin = isAdmin();
var qq = GetUserID();
var qun = GetChatID();
var messageID = GetMessageID()
Continue();
main();
function main() {
    var msg = GetContent();
    try {
        var keyWordsObject = bucketGet(tongzi, "keyWords");
        var keyWords = []
        if (keyWordsObject != "") {
            keyWords = JSON.parse(keyWordsObject)
        }
    } catch {
        var keyWords = []
        bucketSet(tongzi, "keyWords", keyWords)
    }
    try {
        var groupIdsObject = bucketGet(tongzi, "groupIds");
        var groupIds = []
        if (groupIdsObject != '') {
            groupIds = JSON.parse(groupIdsObject)
        }
    } catch {
        var groupIds = []
        bucketSet(tongzi, "groupIds", groupIds)
    }
    if (msg == "管理自动撤回") {
        if (!isAdmin) {
            sendText("此命令非管理员不可用！！！！")
            return
        }
        while (true) {
            printAutoReCallList(keyWords)
            var inp = input(60000)
            if (inp == "q") {
                sendText("请确认是否保存？输入\"是\"保存")
                if (input(60000) == "是") {
                    bucketSet(tongzi, "keyWords", JSON.stringify(keyWords))
                    sendText("保存成功")
                }
                else {
                    sendText("未保存本次修改内容")
                    break
                }
            } else if (inp == "wq") {
                bucketSet(tongzi, "keyWords", JSON.stringify(keyWords))
                sendText("保存成功")
                break
            } else if (inp == "0") {
                let keyWord = {
                    desc: "",
                    value: ""
                }
                sendText("请输入新添加的自动撤回关键词：")
                keyWord.value = input(60000)
                sendText("请输入新添加的自动撤回关键词说明：")
                keyWord.desc = input(60000)
                keyWords.push(keyWord)
            } else if (inp < 0) {
                try {
                    keyWords.splice(Math.abs(inp) - 1, 1)
                } catch (err) {
                    sendText("输入有误，请重新输入")
                }
            }

        }
    } else if (msg == "开启自动撤回" || msg == "关闭自动撤回") {
        if (!isAdmin) {
            sendText("此命令非管理员不可用！！！！")
            return
        }
        if (qun != null || qun != "") {
            if (msg == "开启自动撤回") {
                groupIds.push(qun)
                bucketSet(tongzi, "groupIds", JSON.stringify(groupIds))
                sendText("已开启自动撤回！")
            }
            if (msg == "关闭自动撤回") {
                var ss = groupIds.indexOf(qun)
                groupIds.splice(ss, 1)
                bucketSet(tongzi, "groupIds", JSON.stringify(groupIds))
                sendText("已关闭自动撤回！")
            }
        } else {
            sendText("请在群聊当中使用！")
        }

    } else {
        if (qun != null || qun != "") {
            try {
                var chehuiqun = JSON.parse(bucketGet(tongzi, "groupIds"))
                var chehuixiaoxi = JSON.parse(bucketGet(tongzi, "keyWords"))
                //chehuixiaoxi = JSON.parse(chehuixiaoxi)
                //sendText(chehuixiaoxi.length)
                if (chehuiqun.indexOf(qun) >= 0) {
                    //循环判断文本是否包含撤回的关键字
                    for (var i = 0; i < chehuixiaoxi.length; i++) {
                        if (msg.indexOf(chehuixiaoxi[i].value) >= 0) {
                            RecallMessage(messageID)
                            var aa = sendText(chehuixiaoxi[i].desc)
                            sleep(5000)
                            RecallMessage(aa)
                        }
                    }
                }
            } catch {

            }
        }
    }
}
function printAutoReCallList(keyWords) {
    let notify = "请选择自动撤回关键词进行编辑：\n(-数字删除,0添加,q退出，wq保存)\n"
    for (let i = 0; i < keyWords.length; i++) {
        notify += (i + 1) + "、" + keyWords[i].value + `(${keyWords[i].desc})` + "\n"
    }
    var aa = sendText(notify)
    // sleep(20000)
    //  RecallMessage(aa)
}
