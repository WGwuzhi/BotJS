// [rule: ^(.*)饿了$] 
// [author: yuwei]
// [create_at: 2022-12-27 14:08:00]
// [version: v1.0.18]
// [title: 饿了么]
// [description: 更新日志：增加乐园币查询。命令如下：查询饿了、管理饿了、记录饿了、拉黑饿了、解黑饿了、更新饿了、开启监听饿了、关闭监听饿了、授权饿了、打赏饿了。项目地址：https://github.com/younweri/BotJS。]
// [platform: qq,wx,tg]
// [public: true]
// [price: 1.00]
// [service: QQ1375119534]
//=======================================================
var GetImType = GetImType()
var nickname = param(1);
var qq = GetUserID();
var qun = GetChatID();
var isAdmin = isAdmin();
var tongzi = "YounWeriElm";
var index = 1;
var qldizhi = "";
var qlclient_id = "";
var qlclient_secret = "";
var qltokens = "";
bucketSet(tongzi, "V", "1.0.18")
main();
function main() {
    var ispeizhi = bucketGet(tongzi, "IsPeiZhi");
    if (ispeizhi == "false" || ispeizhi == "") {    //是否第一次使用
        if (isAdmin) {
            sendText("第一次使用本插件，请稍等正在初始化配置");
            ChuShiPeiZhi();
        } else {
            sendText("当前插件未初始化配置，请联系管理员");
        }
    } else {
        blackcheck();
    }
}
function ChuShiPeiZhi() {
    var IsWanCheng = "";
    if (IsPzShouQuan()) {
        if (PZShouQuan()) {
            if (PzQlBianLiangName()) {
                if (PzRebotName()) {
                    if (PzRebotNameGetImages()) {
                        if (PzQingLong()) {
                            if (PzIsSiLiao()) {
                                if (PzIsUseShouQuan()) {
                                    sendText("插件初始化配置完成，如需修改，请发送管理饿了。")
                                    bucketSet(tongzi, "IsPeiZhi", "1")
                                    bucketSet(tongzi, "IsElmShouQaunNum", "[]")
                                    bucketSet(tongzi, "IsSiLiao", "false")
                                    bucketSet(tongzi, "IsUserUseDaShang", "true")
                                    bucketSet(tongzi, "JianTingGroupIds", "[]")
                                } else {
                                    IsWanCheng = false;
                                }
                            } else {
                                IsWanCheng = false;
                            }
                        } else {
                            IsWanCheng = false;
                        }
                    } else {
                        IsWanCheng = false;
                    }
                } else {
                    IsWanCheng = false;
                }
            } else {
                IsWanCheng = false;
            }
        } else {
            IsWanCheng = false;
        }
    } else {
        if (PzQlBianLiangName()) {
            if (PzRebotName()) {
                if (PzRebotNameGetImages()) {
                    if (PzQingLong()) {
                        if (PzIsSiLiao()) {
                            bucketSet(tongzi, "IsShouQuanTrue", "false");
                            sendText("插件初始化配置完成，未配置授权系统，如需修改，请发送管理饿了。")
                            bucketSet(tongzi, "IsPeiZhi", "1")
                            bucketSet(tongzi, "IsPeiZhi", "1")
                            bucketSet(tongzi, "IsElmShouQaunNum", "[]")
                            bucketSet(tongzi, "IsSiLiao", "false")
                            bucketSet(tongzi, "IsUserUseDaShang", "true")
                            bucketSet(tongzi, "JianTingGroupIds", "[]")
                        } else {
                            IsWanCheng = false;
                        }
                    } else {
                        IsWanCheng = false;
                    }
                } else {
                    IsWanCheng = false;
                }
            } else {
                IsWanCheng = false;
            }
        } else {
            IsWanCheng = false;
        }
    }
    if (IsWanCheng == false || IsWanCheng == "") {
        DeletePeiZhi();
    }
}
function IsPzShouQuan() {
    sendText("请在60秒内告知我是否配置授权系统true/false(输入“q”随时退出会话。)");
    var msg2 = ChuShiShuRu();
    if (msg2) {
        if (msg2 == true || msg2 == "true") {
            return true;
        } else {
            return false;
        }
    } else {
        return
    }
}
function PZShouQuan() {
    try {
        sendText("请在60秒内告知我用户默认可记录的账号数量(输入“q”随时退出会话。)");
        var msg1 = ShuRu();
        if (msg1) {
            sendText("请在60秒内告知我用户默认授权时间是多少天(输入“q”随时退出会话。)");
            var msg2 = ShuRu();
            if (msg2) {
                sendText("请在60秒内告知我用户默认提升账号数量的文本(输入“q”随时退出会话。)");
                var msg3 = ShuRu();
                if (msg3) {
                    sendText("请在60秒内告知我用户默认续费账号时间的文本(输入“q”随时退出会话。)");
                    var msg4 = ShuRu();
                    if (msg4) {
                        sendText("请在60秒内告知我用户默认提升账号数量的价格(输入“q”随时退出会话。)");
                        var msg5 = ShuRu();
                        if (msg5) {
                            sendText("请在60秒内告知我用户默认续费账号时间的价格(输入“q”随时退出会话。)");
                            var msg6 = ShuRu();
                            if (msg6) {
                                sendText("请在60秒内告知我给用户发送的赞赏码图片地址 (输入“q”随时退出会话。)");
                                var msg7 = ShuRu();
                                if (msg7) {
                                    var shouquan = "{\"UserAccountNum\":\"" + msg1 + "\",\"AtTime\":\"" + msg2 + "\",\"SumUserAccountNumText\":\"" + msg3 + "\",\"SumAtTimeText\":\"" + msg4 + "\",\"SumUserAccountNumPrice\":\"" + msg5 + "\",\"SumAtTimePrice\":\"" + msg6 + "\",\"Images\":\"" + msg7 + "\"}"
                                    sendText("配置成功，确保您已成功配置微信机器人，否则自助授权系统将失效。")
                                    bucketSet(tongzi, "MoRenShouQuan", shouquan);
                                    return true;
                                } else {
                                    return false;
                                }
                            } else {
                                return false;
                            }
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch {
        sendText("配置授权系统出现问题，请检查并重新配置！")
        return false;
    }
}
function PzQlBianLiangName() {
    sendText("请在60秒告知我您需要设置的青龙变量名称，例如elmck或elmCookie(输入“q”随时退出会话。)");
    var msg3 = ChuShiShuRu();
    if (msg3) {
        var QlBianLiangName = msg3;
        bucketSet(tongzi, "QlBianLiangName", QlBianLiangName);
        return true;
    } else {
        return
    }
}
function PzRebotName() {
    sendText("请在60秒告知我您需要设置的机器人名称(输入“q”随时退出会话。)");
    var msg4 = ChuShiShuRu();
    if (msg4) {
        var RebotName = msg4;
        bucketSet(tongzi, "RebotName", RebotName);
        return true;
    } else {
        return
    }
}
function PzRebotNameGetImages() {
    sendText("请在60秒告知我机器人是否发送用户头像信息，true/false(输入“q”随时退出会话。)");
    var msg5 = ChuShiShuRu();
    if (msg5) {
        var RebotIsImages = msg5;
        if (RebotIsImages == "true" || RebotIsImages == "false") {
            bucketSet(tongzi, "RebotIsImages", RebotIsImages);
            return true;
        }
        else {
            sendText("输入错误，机器人默认发送用户头像")
            bucketSet(tongzi, "RebotIsImages", "true");
        }
    } else {
        return
    }
}
function PzQingLong() {
    try {
        var QLSObject = bucketGet(tongzi, "QLS");
        var QLS = []
        if (QLSObject != "") {
            QLS = JSON.parse(QLSObject)
        }
    } catch {
        var keyWords = []
        bucketSet(tongzi, "QLS", keyWords)
    }
    while (true) {
        printQLRongQi(QLS)
        var inp = input(60000)
        if (inp == "q") {
            sendText("请确认是否保存？输入\"是\"保存")
            if (input(60000) == "是") {
                bucketSet(tongzi, "QLS", JSON.stringify(QLS))
                //  sendText("保存成功")
            }
            else {
                sendText("未保存本次修改内容")
                break
            }
        } else if (inp == "wq") {
            bucketSet(tongzi, "QLS", JSON.stringify(QLS))
            //sendText("保存成功")
            break
        } else if (inp == "0") {
            let qinglong = {
                host: "",
                client_id: "",
                client_secret: "",
                name: "",
                rongliang: ""
            }
            sendText("请输入青龙面板地址，格式为http://IP+端口，后面请不要带斜杠")
            var qinglongmsg1 = ChuShiShuRu();
            if (qinglongmsg1) {
                qinglong.host = qinglongmsg1
            }
            sendText("请输入青龙面板的client_id")
            var qinglongmsg2 = ChuShiShuRu();
            if (qinglongmsg2) {
                qinglong.client_id = qinglongmsg2
            }
            sendText("请输入青龙面板的client_secret")
            var qinglongmsg3 = ChuShiShuRu();
            if (qinglongmsg3) {
                qinglong.client_secret = qinglongmsg3
            }
            sendText("请输入青龙面板可以存放多少个" + bucketGet(tongzi, "QlBianLiangName"))
            var qinglongmsg4 = ChuShiShuRu();
            if (qinglongmsg4) {
                qinglong.rongliang = qinglongmsg4
            }
            sendText("请输入青龙面板的名称")
            var qinglongmsg5 = ChuShiShuRu();
            if (qinglongmsg5) {
                qinglong.name = qinglongmsg5
            }
            QLS.push(qinglong)
        } else if (inp < 0) {
            try {
                QLS.splice(Math.abs(inp) - 1, 1)
            } catch (err) {
                sendText("输入有误，请重新输入")
            }
        }

    }
    return true;
}
function PzIsSiLiao() {
    sendText("是否开启私聊功能？ true/false (输入“q”随时退出会话。)");
    var msg = ChuShiShuRu();
    if (msg) {
        var IsSiLiao = msg;
        if (IsSiLiao == "true" || IsSiLiao == "false") {
            bucketSet(tongzi, "IsSiLiao", IsSiLiao);
            return true;
        }
        else {
            sendText("输入错误，默认开启本插件的私聊功能！")
            bucketSet(tongzi, "IsSiLiao", "true");
            return true
        }
    } else {
        return
    }
}
function PzIsUseShouQuan() {
    sendText("是否开启授权功能？ true/false (输入“q”随时退出会话。)");
    var msg = ChuShiShuRu();
    if (msg) {
        var IsShouQuanTrue = msg;
        if (IsShouQuanTrue == "true" || IsShouQuanTrue == "false") {
            bucketSet(tongzi, "IsShouQuanTrue", IsShouQuanTrue);
            return true;
        }
        else {
            sendText("输入错误，默认关闭授权功能！")
            bucketSet(tongzi, "IsShouQuanTrue", "false");
            return true
        }
    } else {
        return
    }
}
function PzIsQingLiCK() {
    sendText("是否开启清理CK功能？ true/false (输入“q”随时退出会话。)");
    var msg = ChuShiShuRu();
    if (msg) {
        var IsQingLiCK = msg;
        if (IsQingLiCK == "true" || IsQingLiCK == "false") {
            bucketSet(tongzi, "IsQingLiCK", IsQingLiCK);
            return true;
        }
        else {
            sendText("输入错误，默认关闭清理CK功能！")
            bucketSet(tongzi, "IsQingLiCK", "false");
            return true
        }
    } else {
        return
    }
}
function IsQingLiCK() {
    var IsQingLiCK = bucketGet(tongzi, "IsQingLiCK")
    //sendText(IsQingLiCK)
    if (IsQingLiCK == false || IsQingLiCK == "" || IsQingLiCK == null || IsQingLiCK == "false") {
        sendText("清理CK功能已关闭，请发送管理饿了开启")
    } else if (IsQingLiCK == true || IsQingLiCK == "true") {
        QingLiElmCK();
    }
}
function JianTing(value) {
    try {
        var groupIdsObject = bucketGet(tongzi, "JianTingGroupIds");
        var groupIds = []
        if (groupIdsObject != '') {
            groupIds = JSON.parse(groupIdsObject)
        }
    } catch {
        var groupIds = []
        bucketSet(tongzi, "JianTingGroupIds", groupIds)
    }
    if (qun != null || qun != "") {
        if (value == "开启监听") {
            groupIds.push(qun)
            bucketSet(tongzi, "JianTingGroupIds", JSON.stringify(groupIds))
            sendText("已开启本群监听！")

        }
        else if (value == "关闭监听") {
            var ss = groupIds.indexOf(qun)
            groupIds.splice(ss, 1)
            bucketSet(tongzi, "JianTingGroupIds", JSON.stringify(groupIds))
            sendText("已关闭自动撤回！")
        }
    } else {
        sendText("请在群聊中使用此功能。")
    }
}
function IfShouQuan() {
    var IfShouQuan = bucketGet(tongzi, "IsShouQuanTrue");
    if (IfShouQuan == "" || IfShouQuan == null) {
        return false;
    } else {
        return IfShouQuan;
    }
}
function ChuShiShuRu() {
    var msg = input(60000)
    if (msg == null || msg == "") {
        sendText("超时，60秒内未回复，退出。")
    } else if (msg == "q" || msg == "Q") {
        sendText("已退出会话。");
    } else {
        return msg;
    }
}
function printQLRongQi(QLS) {
    let notify = "请选择青龙面板进行编辑：\n(-数字删除,0添加,q退出，wq保存)\n"
    for (let i = 0; i < QLS.length; i++) {
        notify += (i + 1) + "、" + QLS[i].name + `(${QLS[i].host})` + "\n"
    }
    sendText(notify)
}
function DeletePeiZhi() {
    bucketSet(tongzi, "peizhi", "false")
}

function xuanzeimgs() {
    sendText("请选择信息查询模式：\n1.图片模式。\n2.文字模式。");
    var msg = ChuShiShuRu();
    if (msg) {
        var IsQingLiCK = msg;
        if (IsQingLiCK == "1") {
            bucketSet(tongzi, "imgs", "true");
            return true;
        }
        else if (IsQingLiCK == "2") {
            bucketSet(tongzi, "imgs", "false");
            return true;
        }
        else {
            sendText("输入错误，已退出。")
            return
        }
    } else {
        return
    }
}
function SelectElmItem() {
    if (nickname == "拉黑") {
        if (isAdmin) {
            sendText("请在告知我需要拉黑的用户ID(输入“q”随时退出会话。)")
            var newS = input(60000, 6000)
            if (newS == null) {
                sendText("超时，20秒内未回复，取消本次记录。")
            } else {
                if (newS == "q" || newS == "Q") {
                    sendText("已退出会话");
                } else {
                    blackset(newS);
                }
            }
        }
    }
    else if (nickname == "解黑") {
        if (isAdmin) {
            sendText("请在告知我需要解黑的用户ID(输入“q”随时退出会话。)")
            var newS = input(60000, 6000)
            if (newS == null) {
                sendText("超时，20秒内未回复，取消本次记录。")
            } else {
                if (newS == "q" || newS == "Q") {
                    sendText("已退出会话");
                } else {
                    blackdelete(newS);
                }
            }
        }
    }
    else if (nickname == "管理") {
        if (isAdmin) {
            sendText("饿了么管理菜单\n1.删除所有配置(慎用)\n2.修改机器人名称\n3.修改青龙配置\n4.修改青龙变量名称\n5.修改是否发送用户头像\n6.开启/关闭插件私聊\n7.开启/关闭授权功能\n8.开启/关闭自动清理\n9.修改授权配置\n10.选择信息发送模式\n当前插件版本为:" + bucketGet(tongzi, "V") + "\n发送“q”退出当前会话。")
            var num = input(60000)
            if (num == "1") {
                if (DeletePeiZhi()) {
                    sendText("操作成功。")
                }
            }
            else if (num == "2") {
                if (PzRebotName()) {
                    sendText("操作成功。")
                }
            }
            else if (num == "3") {
                if (PzQingLong()) {
                    sendText("操作成功。")
                }
            }
            else if (num == "4") {
                if (PzQlBianLiangName()) {
                    sendText("操作成功。")
                }
            }
            else if (num == "5") {
                if (PzRebotNameGetImages()) {
                    sendText("操作成功。")
                }
            }
            else if (num == "6") {
                if (PzIsSiLiao()) {
                    sendText("操作成功。")
                }
            }
            else if (num == "7") {
                if (PzIsUseShouQuan()) {
                    sendText("操作成功。")
                }
            }
            else if (num == "8") {
                if (PzIsQingLiCK()) {
                    sendText("操作成功。")
                }
            }
            else if (num == "9") {
                var IfShouQuans = IfShouQuan();
                if (IfShouQuans == true || IfShouQuans == "true") {
                    if (PZShouQuan()) {
                        sendText("操作成功。")
                    }
                } else {
                    sendText("未开启授权系统，无法操作")
                }
            }
            else if (num == "10") {
                if (xuanzeimgs()) {
                    sendText("操作成功。")
                }
            }
            else if (num == "q" || num == "Q") {
                sendText("已退出。")
            } else {
                sendText("输入错误，已退出。")
            }
        }
    }
    else if (nickname == "查询" || nickname == "记录") {
        if (qun == "" || qun == null) {
            var IsSiliao = bucketGet(tongzi, "IsSiLiao")
            if (IsSiliao == true || IsSiliao == "true") {
                var IfShouQuans = IfShouQuan();
                if (IfShouQuans == true || IfShouQuans == "true") {
                    //启动授权系统
                    if (nickname == "查询") {
                        SelectShouQuan();
                    }
                    if (nickname == "记录") {
                        SelectShouQuan();
                    }
                } else {
                    if (nickname == "查询") {
                        SelectQLSSelectCk();
                    }
                    if (nickname == "记录") {
                        SelectQLSInsert();
                    }
                }
            } else {
                sendText("未开启/未配置本插件私聊功能，请联系管理员")
            }
        } else if (qun != "" || qun != null) {
            var IsListen = IsListenChat();
            if (IsListen == true || IsListen == "true") {
                var IfShouQuans = IfShouQuan();
                if (IfShouQuans == true || IfShouQuans == "true") {
                    //启动授权系统
                    if (nickname == "查询") {
                        SelectShouQuan();
                    }
                    if (nickname == "记录") {
                        SelectShouQuan();
                    }
                } else {
                    if (nickname == "查询") {
                        SelectQLSSelectCk();
                    }
                    if (nickname == "记录") {
                        SelectQLSInsert();
                    }
                }
            } else {
                sendText("本群未开启本插件相关功能。")
            }
        }
    }
    else if (nickname == "开启监听") {
        if (isAdmin) {
            JianTing(nickname);
        }

    }
    else if (nickname == "关闭监听") {
        if (isAdmin) {
            JianTing(nickname);
        }
    }
    else if (nickname == "清理") {
        if (isAdmin) {
            IsQingLiCK();
        }
    }
    else if (nickname == "更新") {
        UpdateElm();
    }
    else if (nickname == "打赏") {
        var IfShouQuans = IfShouQuan();
        if (IfShouQuans == true || IfShouQuans == "true") {
            var IsShouQaun = bucketGet(tongzi, "IsElmShouQaunNum");
            IsShouQaun = JSON.stringify(IsShouQaun);
            if (IsShouQaun.indexOf(qq) < 0) {
                TianJiaMoRenXinXi();
            }
            sendText("请在以下选项选择您要续费的项目：\n1.提升账号数量\n2.增加授权时间")
            var XuanZe = ShuRu();
            if (XuanZe == "1") {
                var PlayAccountNum = AccountPlayWX()//获取到的金额
                if (PlayAccountNum > 0) {
                    var IsElmShouQaunNum = bucketGet(tongzi, "MoRenShouQuan");
                    var IsElmShouQaunNumJson = JSON.parse(IsElmShouQaunNum);
                    var SumUserAccountNumPrice = IsElmShouQaunNumJson.SumUserAccountNumPrice;
                    //   var shuruqq = qq;
                    var shuruNum = parseInt(PlayAccountNum) / parseInt(SumUserAccountNumPrice);
                    //var shuruday = 0;
                    var type = "1";
                    DaShangCaoZuoShouQuan(type, shuruNum)
                }
            }
            else if (XuanZe == "2") {
                var PlayTimePlayWX = TimePlayWX()
                if (PlayTimePlayWX > 0) {
                    var MoRenShouQuan = bucketGet(tongzi, "MoRenShouQuan");
                    var MoRenShouQuanJson = JSON.parse(MoRenShouQuan);
                    var AtTime = MoRenShouQuanJson.AtTime;
                    var SumAtTimePrice = MoRenShouQuanJson.SumAtTimePrice;
                    //  var shuruqq = qq;
                    //  var shuruNum = 0;
                    var shuruday = parseInt(AtTime) / parseInt(SumAtTimePrice) * PlayTimePlayWX;
                    var type = "2";
                    DaShangCaoZuoShouQuan(type, shuruday)
                }
            }
        } else {
            sendText("未开启授权系统，请联系管理员。")
        }
    }
    else if (nickname == "授权") {
        var IfShouQuans = IfShouQuan();
        if (IfShouQuans == true || IfShouQuans == "true") {
            if (isAdmin) {
                sendText("请告知我需要授权的账号ID，如果不知道请发送myuid查询。")
                var msg1 = ShuRu();
                if (msg1) {
                    sendText("请告知我要授权账号:" + msg1 + " 要增加的账号数量")
                    var msg2 = ShuRu();
                    if (msg2) {
                        sendText("请告知我要增加的授权天数。")
                        var msg3 = ShuRu();
                        if (msg3) {
                            CaoZuoShouQuan(msg1, msg2, msg3)
                        }
                    }
                }
            }
        } else {
            sendText("未开启授权系统，请联系管理员。")
        }
    }
}
function TianJiaMoRenXinXi() {
    var IsShouQaun = bucketGet(tongzi, "IsElmShouQaunNum");
    sendText(IsShouQaun)
    if (bucketGet(tongzi, "MoRenShouQuan") == "" || bucketGet(tongzi, "MoRenShouQuan") == null) {
        sendText("未配置默认授权信息，请发送管理饿了配置！")
    } else {
        var MoRenShouQuan = bucketGet(tongzi, "MoRenShouQuan");
        var IsShouQaunJson = JSON.parse(MoRenShouQuan)
        var ShouQuanNum = IsShouQaunJson["UserAccountNum"];
        var ShouQuanDay = IsShouQaunJson["AtTime"];
        var ss = JSON.parse(IsShouQaun)
        var date1 = new Date();
        var date2 = new Date(date1);
        date2.setDate(date1.getDate() + parseInt(ShouQuanDay));
        var exdate = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate()
        var person = { "Account": qq, "num": ShouQuanNum, "ExDate": exdate };
        ss.push(person);
        bucketSet(tongzi, "IsElmShouQaunNum", JSON.stringify(ss))
    }
}
//查询所有青龙容器CK的方法
function SelectQLSSelectCk() {
    sendText(bucketGet(tongzi, "RebotName") + "正在为您查询本地所有饿了么资产~")
    var AccountNum = 0;
    try {
        var QLSObject = bucketGet(tongzi, "QLS");
        var QLS = []
        if (QLSObject != "") {
            QLS = JSON.parse(QLSObject)
        }
    } catch {
        var keyWords = []
        bucketSet(tongzi, "QLS", keyWords)
    }
    if (QLSObject == "" || QLSObject == null) {
        sendText("未配置青龙相关信息，请发送管理饿了配置。")
        return;
    }
    for (var i = 0; i < QLS.length; i++) {
        qldizhi = QLS[i].host;
        qlclient_id = QLS[i].client_id;
        qlclient_secret = QLS[i].client_secret;
        qltoken(qldizhi, qlclient_id, qlclient_secret)
        var qlselectbody = qlselect(qq);
        var qlckjson = JSON.parse(qlselectbody)
        if (qlckjson.data != "") {
            for (var key in qlckjson.data) {
                if (qlckjson.data[key].name == bucketGet(tongzi, "QlBianLiangName")) {
                    var ck = qlckjson.data[key].value;
                    var id = qlckjson.data[key].id;
                    var remarks = qlckjson.data[key].remarks;
                    remarks = remarks.split("&")[1];
                    var elmapibody = elmapi(ck)
                    var xx = JSON.parse(elmapibody);
                    if (xx.message == "未登录" || xx.message == "未知错误") {
                        var IsQingLiCK = bucketGet(tongzi, "IsQingLiCK")
                        if (IsQingLiCK == false || IsQingLiCK == "false") {
                            sendText("账号 " + remarks + " 已过期,未开启自动清理CK。");
                        } else {
                            sendText("账号 " + remarks + " 已过期,系统已删除Ck。");
                            qldelete(id);
                        }
                    } else {
                        XinXiZhanShi(ck);
                        AccountNum = AccountNum + 1
                    }
                }
            }
        }
    }
    if (AccountNum < 1) {
        sendText(bucketGet(tongzi, "RebotName") + "提醒您：无本地饿了么账号信息，请您检查是否已上车~");
    }
}
function QingLiElmCK() {
    sendText(bucketGet(tongzi, "RebotName") + "正在为您清理过期CK并统计有效账号，请耐心等待······")
    var AccountNum = 0;
    var qinglinum = 0
    try {
        var QLSObject = bucketGet(tongzi, "QLS");
        var QLS = []
        if (QLSObject != "") {
            QLS = JSON.parse(QLSObject)
        }
    } catch {
        var keyWords = []
        bucketSet(tongzi, "QLS", keyWords)
    }
    if (QLSObject == "" || QLSObject == null) {
        sendText("未配置青龙相关信息，请发送管理饿了配置。")
        return;
    }
    for (var i = 0; i < QLS.length; i++) {
        qldizhi = QLS[i].host;
        qlclient_id = QLS[i].client_id;
        qlclient_secret = QLS[i].client_secret;
        qltoken(qldizhi, qlclient_id, qlclient_secret)
        var qlselectbody = qlselect("");
        var qlckjson = JSON.parse(qlselectbody)
        if (qlckjson.data != "") {
            for (var key in qlckjson.data) {
                if (qlckjson.data[key].name == bucketGet(tongzi, "QlBianLiangName")) {
                    var ck = qlckjson.data[key].value;
                    var id = qlckjson.data[key].id;
                    //  var remarks = qlckjson.data[key].remarks;
                    // remarks = remarks.split("&")[1];
                    // sendText(remarks)
                    var elmapibody = elmapi(ck)
                    var xx = JSON.parse(elmapibody);
                    if (xx.message == "未登录" || xx.message == "未知错误") {
                        qldelete(id);
                        qinglinum = qinglinum + 1
                    } else {
                        AccountNum = AccountNum + 1
                    }
                }
            }
        }
    }
    sendText("本次统计有效账号共计 " + AccountNum + "个，共删除无效CK " + qinglinum + "个")
}
//查询所有容器账号数量的方法
function SelectQLSReturnCkNum() {
    var QLAccountNum = 0;
    try {
        var QLSObject = bucketGet(tongzi, "QLS");
        var QLS = []
        if (QLSObject != "") {
            QLS = JSON.parse(QLSObject)
        }
    } catch {
        var keyWords = []
        bucketSet(tongzi, "QLS", keyWords)
    }
    if (QLSObject == "" || QLSObject == null) {
        sendText("未配置青龙相关信息，请发送管理饿了配置。")
        return;
    }
    for (var i = 0; i < QLS.length; i++) {
        qldizhi = QLS[i].host;
        qlclient_id = QLS[i].client_id;
        qlclient_secret = QLS[i].client_secret;
        qltoken(qldizhi, qlclient_id, qlclient_secret)
        var qlselectbody = qlselect(qq);
        var qlckjson = JSON.parse(qlselectbody)
        if (qlckjson.data != "") {
            for (var key in qlckjson.data) {
                if (qlckjson.data[key].name == bucketGet(tongzi, "QlBianLiangName")) {
                    QLAccountNum = QLAccountNum + 1;
                }
            }
        }
    }
    return QLAccountNum;
}
function SelectQLSInsert() {
    try {
        var QLSObject = bucketGet(tongzi, "QLS");
        var QLS = []
        if (QLSObject != "") {
            QLS = JSON.parse(QLSObject)
        }
    } catch {
        var keyWords = []
        bucketSet(tongzi, "QLS", keyWords)
    }
    if (QLSObject == "" || QLSObject == null) {
        sendText("未配置青龙相关信息，请发送管理饿了配置。")
        return;
    }
    var IsInsert = 0;
    var num = 0;
    while (num < QLS.length) {
        var KeInsertCKNum = QLS[num].rongliang;
        qldizhi = QLS[num].host;
        qlclient_id = QLS[num].client_id;
        qlclient_secret = QLS[num].client_secret;
        // sendText(qldizhi+qlclient_id+qlclient_secret)
        qltoken(qldizhi, qlclient_id, qlclient_secret)
        var qlselectbody = qlselect(bucketGet(tongzi, "QlBianLiangName"));
        var qlckjson = JSON.parse(qlselectbody)
        //  sendText(JSON.stringify(qldizhi))
        if (qlckjson.data != "") {
            if (qlckjson.data.length < KeInsertCKNum) {
                IsInsert = IsInsert + 1;
                InsertElm();
                break;
            }
        }
        if (qlckjson.code == "200" && qlckjson.data == "") {
            IsInsert = IsInsert + 1;
            InsertElm();
            break;
        }
        num = num + 1;
    }
    if (IsInsert == 0) {
        sendText("当前所有容器容量不足，请联系管理员检查！")
    }
}
function SelectQLSIsIndexOfAccount(remarks) {
    try {
        var QLSObject = bucketGet(tongzi, "QLS");
        var QLS = []
        if (QLSObject != "") {
            QLS = JSON.parse(QLSObject)
        }
    } catch {
        var keyWords = []
        bucketSet(tongzi, "QLS", keyWords)
    }
    if (QLSObject == "" || QLSObject == null) {
        sendText("未配置青龙相关信息，请发送管理饿了配置。")
        return;
    }
    var IsTrueAccount = 0;
    for (var i = 0; i < QLS.length; i++) {
        // qldizhi = QLS[i].host;
        // qlclient_id = QLS[i].client_id;
        // qlclient_secret = QLS[i].client_secret;
        qltoken(QLS[i].host, QLS[i].client_id, QLS[i].client_secret)
        var qlselectbody = qlselect(bucketGet(tongzi, "QlBianLiangName"));
        var qlckjson = JSON.parse(qlselectbody)
        if (qlckjson.data != "") {
            for (var key in qlckjson.data) {
                if (qlckjson.data[key].remarks == remarks) {
                    IsTrueAccount = IsTrueAccount + 1;
                    return qlckjson.data[key].id;
                }
            }
        }
    }
    if (IsTrueAccount == 0) {
        return false
    }
}
function DeleteAccount(remarks) {
    try {
        var QLSObject = bucketGet(tongzi, "QLS");
        var QLS = []
        if (QLSObject != "") {
            QLS = JSON.parse(QLSObject)
        }
    } catch {
        var keyWords = []
        bucketSet(tongzi, "QLS", keyWords)
    }
    if (QLSObject == "" || QLSObject == null) {
        sendText("未配置青龙相关信息，请发送管理饿了配置。")
        return;
    }
    for (var i = 0; i < QLS.length; i++) {
        qldizhi = QLS[i].host;
        qlclient_id = QLS[i].client_id;
        qlclient_secret = QLS[i].client_secret;
        qltoken(qldizhi, qlclient_id, qlclient_secret)
        var qlselectbody = qlselect(bucketGet(tongzi, "QlBianLiangName"));
        var qlckjson = JSON.parse(qlselectbody)
        if (qlckjson.data != "") {
            for (var key in qlckjson.data) {
                var beizhu = qlckjson.data[key].remarks
                if (beizhu == "" || beizhu == null) {

                } else {
                    if (beizhu.indexOf(remarks) >= 0) {
                        qldelete(qlckjson.data[key].id)
                    }
                }
            }
        }
    }
}
function UpdateElm() {
    sendText(bucketGet(tongzi, "RebotName") + "为您服务,请在60秒内发送您的Cookie(输入“q”随时退出会话。)")
    newS = input(60000, 6000)
    if (newS == null) {
        sendText("超时，20秒内未回复。")
    } else {
        if (newS == "q" || newS == "Q") {
            sendText("已退出会话。");
        } else {

            var ck = newS;
            var elmapibody = elmapi(ck);
            if (elmapibody.indexOf("未登录") >= 0) {
                sendText("ck已经失效或有问题，请检查以后在发送~");
            } else {
                //   var sid = ck.match("SID=.*?;");
                //    var cookie2 = ck.match("cookie2=.*?;");
                //   ck = sid + cookie2
                var userjson = JSON.parse(elmapibody);
                var userid = userjson.user_id;
                var username = userjson.username;
                var remarks = qq + "@" + userid + "&" + username
                //根据备注搜索所有面板，如果有获取CK
                try {
                    var QLSObject = bucketGet(tongzi, "QLS");
                    var QLS = []
                    if (QLSObject != "") {
                        QLS = JSON.parse(QLSObject)
                    }
                } catch {
                    var keyWords = []
                    bucketSet(tongzi, "QLS", keyWords)
                }
                if (QLSObject == "" || QLSObject == null) {
                    sendText("未配置青龙相关信息，请发送管理饿了配置。")
                    return;
                }
                try {
                    var num = 0;
                    for (var i = 0; i < QLS.length; i++) {
                        varql1 = QLS[i].host;
                        varql2 = QLS[i].client_id;
                        varql3 = QLS[i].client_secret;
                        var body = request({
                            url: varql1 + "/open/auth/token?client_id=" + varql2 + "&client_secret=" + varql3,
                            method: "get",
                        });
                        var fhtoken = JSON.parse(body);
                        var tk = fhtoken.data.token;
                        var qlselectbody = request({
                            url: varql1 + "/open/envs?searchValue=" + remarks,
                            method: "get",
                            headers: {
                                "Authorization": "Bearer " + tk,
                            }
                        });
                        var qlckjson = JSON.parse(qlselectbody)
                        if (qlckjson.data != "") {
                            for (var key in qlckjson.data) {
                                if (qlckjson.data[key].remarks == remarks) {
                                    num = num + 1;
                                    var ids = qlckjson.data[key].id;
                                    var updatebody = request({
                                        url: varql1 + "/open/envs",
                                        method: "put",
                                        body: {
                                            "name": bucketGet(tongzi, "QlBianLiangName"),
                                            "value": ck,
                                            "id": ids,
                                            "remarks": qq + "@" + userid + "&" + username,
                                        },
                                        headers: {
                                            "Authorization": "Bearer " + tk,
                                        }
                                    });
                                    var qlupdatebodyjson = JSON.parse(updatebody)
                                    if (qlupdatebodyjson.code == "200") {
                                        sendText('更新账号成功，正在为您查询账号信息~');
                                        XinXiZhanShi(ck);
                                    } else {
                                        sendText("更新失败，请联系管理员。");
                                    }
                                }
                            }
                        }

                    }
                    if (num == 0) {
                        sendText("系统当中没有这个账号，更新失败。")
                    }
                } catch {
                    sendText("更新CK出现问题，请联系管理员")
                }
            }
        }
    }
}
function InsertElm() {
    sendText(bucketGet(tongzi, "RebotName") + "为您服务,请在60秒内发送您的Cookie(输入“q”随时退出会话。)")
    newS = input(60000, 6000)
    if (newS == null) {
        sendText("超时，20秒内未回复，取消本次记录。")
    } else {
        if (newS == "q" || newS == "Q") {
            sendText("已退出会话");
        } else {
            try {
                var ck = newS;
                var elmapibody = elmapi(ck);
                if (elmapibody.indexOf("未登录") >= 0) {
                    sendText("ck已经失效或有问题，请检查以后在发送~");
                } else {
                    // var sid = ck.match("SID=.*?;");
                    // var cookie2 = ck.match("cookie2=.*?;");
                    // ck = sid + cookie2
                    var userjson = JSON.parse(elmapibody);
                    var userid = userjson.user_id;
                    var username = userjson.username;
                    //获取当前可新增账号的青龙信息
                    var qlhost = qldizhi;
                    var qlc = qlclient_id;
                    var qlc2 = qlclient_secret;
                    //判断是更新还是添加
                    var remarks = qq + "@" + userid + "&" + username
                    var id = SelectQLSIsIndexOfAccount(remarks)
                    if (id > 0) {
                        var qlupdatebody = qlupdate(ck, id, userid, username)
                        var qlupdatebodyjson = JSON.parse(qlupdatebody)
                        if (qlupdatebodyjson.code == "200") {
                            sendText('更新账号成功，正在为您查询账号信息~');
                            XinXiZhanShi(ck);
                        } else {
                            sendText("更新失败，请联系管理员。");
                        }
                        //执行更新
                    } else if (id == false || id == "false") {
                        //否则用当前容器进行记录
                        qltoken(qlhost, qlc, qlc2)
                        var qlinsertbody = qlinsert(ck, userid, username)
                        var qlinsertbodyjson = JSON.parse(qlinsertbody)
                        if (qlinsertbodyjson.code == "200") {
                            sendText('上车成功，正在为您查询账号信息~');
                            XinXiZhanShi(ck);
                        } else {
                            sendText("上车失败，请检查青龙配置");
                        }
                    }
                }
            }
            catch {
                sendText("上车失败，请检查CK是否正确");
            }
        }
    }
}
function SelectShouQuan() {
    if (bucketGet(tongzi, "IsElmShouQaunNum") == "" || bucketGet(tongzi, "IsElmShouQaunNum") == null) {
        bucketSet(tongzi, "IsElmShouQaunNum", "[]")
    }
    var IsShouQaun = bucketGet(tongzi, "IsElmShouQaunNum");
    var qqhaoma = qq;
    if (IsShouQaun.indexOf(qqhaoma) >= 0) {
        var ss = JSON.parse(IsShouQaun)
        for (var i = 0; i < ss.length; i++) {
            var Account = ss[i].Account
            if (Account == qqhaoma) {
                var num = ss[i].num;
                var ExDate = ss[i].ExDate;
                var ss1 = getDateFromString(ExDate + " 16:18:15")
                timestamp1 = new Date(ss1).getTime()
                var date1 = new Date();
                var GetRiqi = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate()
                var ss2 = getDateFromString(GetRiqi + " 16:18:15")
                timestamp2 = new Date(ss2).getTime()
                if (timestamp1 > timestamp2) {
                    if (nickname == "查询") {
                        SelectQLSSelectCk();
                    }
                    else {
                        var QLNum = SelectQLSReturnCkNum();
                        if (QLNum < num) {
                            if (nickname == "记录") {
                                SelectQLSInsert();
                            }
                        }
                        if (QLNum >= num) {
                            return sendText("您的授权账号数量不足，请发送“打赏饿了”充值。")
                        }
                    }
                } else {
                    sendText("您的授权已到期，系统已删除您相关的账号信息，请发送“打赏饿了”充值。")
                    var date1 = new Date();
                    var date2 = new Date(date1);
                    date2.setDate(date1.getDate());
                    var exdate = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate()
                    var IsElmShouQaunNum = bucketGet(tongzi, "IsElmShouQaunNum");
                    var updateshouquan = JSON.parse(IsElmShouQaunNum)
                    for (var s in updateshouquan) {
                        if (updateshouquan[s].Account == qq) {
                            updateshouquan[s].ExDate = exdate;
                            bucketSet(tongzi, "IsElmShouQaunNum", JSON.stringify(updateshouquan))
                        }
                    }
                    DeleteAccount(qq)
                }
            }
        }
    } else {
        if (bucketGet(tongzi, "MoRenShouQuan") == "" || bucketGet(tongzi, "MoRenShouQuan") == null) {
            sendText("未配置默认授权信息，请发送管理饿了配置！")
        } else {
            var MoRenShouQuan = bucketGet(tongzi, "MoRenShouQuan");
            var IsShouQaunJson = JSON.parse(MoRenShouQuan)
            var ShouQuanNum = IsShouQaunJson["UserAccountNum"];
            var ShouQuanDay = IsShouQaunJson["AtTime"];
            var ss = JSON.parse(IsShouQaun)
            var date1 = new Date();
            var date2 = new Date(date1);
            date2.setDate(date1.getDate() + parseInt(ShouQuanDay));
            var exdate = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate()
            var person = { "Account": qq, "num": ShouQuanNum, "ExDate": exdate };
            ss.push(person);
            bucketSet(tongzi, "IsElmShouQaunNum", JSON.stringify(ss))
            SelectShouQuan();
        }
    }
}
function DaShangCaoZuoShouQuan(type, value) {
    try {
        if (bucketGet(tongzi, "IsElmShouQaunNum") == "" || bucketGet(tongzi, "IsElmShouQaunNum") == null) {
            bucketSet(tongzi, "IsElmShouQaunNum", "[]")
        }
        var shuruqq = qq;
        if (type == "1") {
            var IsShouQaun = bucketGet(tongzi, "IsElmShouQaunNum");
            //判断是否包含这个QQ，如果不包含，用默认的记录一下
            var ss = JSON.parse(IsShouQaun)
            var sss = JSON.stringify(ss);
            sss = String(sss)
            if (sss.indexOf(shuruqq) >= 0) {
                for (var i = 0; i < ss.length; i++) {
                    var Account = ss[i].Account
                    if (Account == shuruqq) {
                        ss[i].num = parseInt(ss[i].num) + parseInt(value);
                        sendText("目前您的的授权账号数量为" + ss[i].num + "个账号，授权到期时间为：" + ss[i].ExDate)
                        bucketSet(tongzi, "IsElmShouQaunNum", JSON.stringify(ss))
                    }
                }
            }
        } else if (type == "2") {
            var IsShouQaun = bucketGet(tongzi, "IsElmShouQaunNum");
            var ss = JSON.parse(IsShouQaun)
            var sss = JSON.stringify(ss);
            sss = String(sss)
            if (sss.indexOf(shuruqq) >= 0) {
                for (var i = 0; i < ss.length; i++) {
                    var Account = ss[i].Account
                    if (Account == shuruqq) {
                        var ExDate = ss[i].ExDate;
                        var ss1 = getDateFromString(ExDate + " 16:18:15")
                        timestamp1 = new Date(ss1).getTime()
                        var resultDate = new Date((timestamp1 / 1000 + (86400 * value)) * 1000);//增加n天后的日期
                        var resultDateStr = resultDate.getFullYear() + "-" + (resultDate.getMonth() + 1) + "-" + (resultDate.getDate());//将日期转化为字符串格式
                        ss[i].ExDate = resultDateStr
                        sendText("目前您的的授权账号数量为" + ss[i].num + "个账号，授权到期时间为：" + ss[i].ExDate)
                        bucketSet(tongzi, "IsElmShouQaunNum", JSON.stringify(ss))
                    }
                }
            }
        } else {

        }
    } catch {
        sendText("授权系统出现问题，请联系管理员检查。")
    }
}
function CaoZuoShouQuan(shuruqq, shuruNum, shuruday) {
    var IsShouQaun = bucketGet(tongzi, "IsElmShouQaunNum");
    var ss = JSON.parse(IsShouQaun)
    var sss = JSON.stringify(ss);
    sss = String(sss)
    if (sss.indexOf(shuruqq) >= 0) {
        for (var i = 0; i < ss.length; i++) {
            var Account = ss[i].Account
            if (Account == shuruqq) {
                if (shuruNum > 0 || shuruday > 0) {
                    ss[i].num = parseInt(ss[i].num) + parseInt(shuruNum);
                    //    var date1 = new Date();
                    //     var date2 = new Date(date1);
                    //    date2.setDate(date1.getDate() + parseInt(shuruday));
                    //   var exdate = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate()
                    //   ss[i].ExDate = exdate
                    var ExDate = ss[i].ExDate;
                    var ss1 = getDateFromString(ExDate + " 16:18:15")
                    timestamp1 = new Date(ss1).getTime()
                    var resultDate = new Date((timestamp1 / 1000 + (86400 * shuruday)) * 1000);//增加n天后的日期
                    var resultDateStr = resultDate.getFullYear() + "-" + (resultDate.getMonth() + 1) + "-" + (resultDate.getDate());//将日期转化为字符串格式
                    ss[i].ExDate = resultDateStr
                    sendText("目前账号：" + shuruqq + "的授权账号数量为" + ss[i].num + "个账号，授权到期时间为：" + ss[i].ExDate)
                    bucketSet(tongzi, "IsElmShouQaunNum", JSON.stringify(ss))
                }
            }
        }
    }
    else {
        sendText("系统中未查询到该账号相关授权信息，已为您自动添加")
        if (exdate == "" || exdate == null || exdate == "NaN-NaN-NaN") {
            var date1 = new Date();
            var date2 = new Date(date1);
            date2.setDate(date1.getDate() + 30);
            var exdate = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate()
            var person = { "Account": shuruqq, "num": shuruNum, "ExDate": exdate };
            ss.push(person);
            sendText("目前账号：" + shuruqq + "的授权账号数量为" + shuruNum + "个账号，授权到期时间为：" + exdate)
            bucketSet(tongzi, "IsElmShouQaunNum", JSON.stringify(ss))
        }
    }
}
function AccountPlayWX() {
    var isuse = IsUserUseDaShang()
    if (isuse == true || isuse == "true") {
        bucketSet(tongzi, "IsUserUseDaShang", "false");
        var PlayText = bucketGet(tongzi, "MoRenShouQuan");
        var ss = JSON.parse(PlayText)
        sendText(ss.SumUserAccountNumText);
        sendImage(ss.Images);
        data = waitPay(120000)
        if (data == "timeout") {
            sendText("超时，已退出")
            bucketSet(tongzi, "IsUserUseDaShang", "true");
        } else {
            bucketSet(tongzi, "IsUserUseDaShang", "true");
            var dataJson = JSON.stringify(data)
            dataJson = JSON.parse(dataJson)
            var money = Math.trunc(dataJson.money);
            return money
        }
    } else {
        sendText("你先等一会哈，别人正在打赏中。")
    }
}
function IsUserUseDaShang() {
    var use = bucketGet(tongzi, "IsUserUseDaShang")
    if (use == "false") {
        return false;
    } else {
        return true;
    }
}
function TimePlayWX() {
    var isuse = IsUserUseDaShang()
    if (isuse == true || isuse == "true") {
        bucketSet(tongzi, "IsUserUseDaShang", "false");
        var PlayText = bucketGet(tongzi, "MoRenShouQuan");
        var ss = JSON.parse(PlayText)
        sendText(ss.SumAtTimeText);
        sendImage(ss.Images);
        data = waitPay(120000)
        if (data == "timeout") {
            sendText("超时，已退出")
            bucketSet(tongzi, "IsUserUseDaShang", "true");
        } else {
            bucketSet(tongzi, "IsUserUseDaShang", "true");
            var dataJson = JSON.stringify(data)
            dataJson = JSON.parse(dataJson)
            var money = Math.trunc(dataJson.money);
            return money
        }
    } else {
        sendText("你先等一会哈，别人正在打赏中。")
    }
}
function ShuRu() {
    var msg = input(60000, 6000)
    if (msg == null) {
        sendText("超时，60秒内未回复，取消本次配置。")
        return false
    } else if (msg == "q" || msg == "Q") {
        sendText("已退出会话");
        return false
    } else {
        return msg;
    }

}
//将这种格式的字符串2019-06-11 16:18:15解析成时间戳
function getDateFromString(str) {
    var reg = /^(\d+)-(\d+)-(\d+) (\d+):(\d+):(\d+)/;
    var s = str.match(reg);
    var result = "";
    if (s) {
        result = new Date(s[1], s[2] - 1, s[3], s[4], s[5], s[6]);
    }
    return result;
}

function IsListenChat() {
    var chushi = bucketGet(tongzi, "JianTingGroupIds")
    if (chushi == "" || chushi == null || chushi == "[]") {
        bucketSet(tongzi, "JianTingGroupIds", "[]");
    }
    var ChatID = qun;
    var IsListen = JSON.parse(bucketGet(tongzi, "JianTingGroupIds"))
    if (IsListen.indexOf(ChatID) >= 0) {
        return true;
    } else {
        return false;
    }
}
function XinXiZhanShi(ck) {
    var elmapibody = elmapi(ck)
    var xx = JSON.parse(elmapibody);
    var elmxqapibody = elmxqapi(ck);
    var dzxx = JSON.parse(elmxqapibody);
    var d = new Date();
    var nf = d.getFullYear().toString();;
    var yf = d.getMonth() + 1;
    if (yf < 10) {
        yf = "0" + yf;
    }
    var rf = d.getDate();
    if (rf < 10) {
        rf = "0" + rf;
    }
    var rq = nf + yf;
    var jinridouzi = 0;
    for (var zh in dzxx.records) {
        if (dzxx.records[zh].createdTime.indexOf(nf + "-" + yf + "-" + rf) >= 0) {
            if (dzxx.records[zh].optType == "1") {
                jinridouzi = jinridouzi + dzxx.records[zh].count;
            } else {
                inridouzi = jinridouzi + 0;
            }
        }
    }
    var zrf = rf - 1
    if (zrf < 10) {
        zrf = "0" + zrf;
    }
    var zuoridouzi = 0;
    for (var zh in dzxx.records) {
        if (dzxx.records[zh].createdTime.indexOf(nf + "-" + yf + "-" + zrf) >= 0) {
            if (dzxx.records[zh].optType == "1") {
                zuoridouzi = zuoridouzi + dzxx.records[zh].count;
            } else {
                zuoridouzi = zuoridouzi + 0;
            }
        }
    }
    var benyuedouzi = "";
    try {
        benyuedouzi = dzxx.monthAccountInfo[rq].plusCount
    } catch {
        benyuedouzi = "查询异常，请去APP领几个豆子再来查询";
    }
    var zongongdouzi = dzxx.peaCount;
    var pinimg = xx.avatar;
    var userimg = "https://cube.elemecdn.com/" + pinimg.substr(0, 1) + "/" + pinimg.substr(1, 2) + "/" + pinimg.slice(3) + ".jpeg";
    var userid = xx.user_id;
    var username = xx.username;
    var ckzt = "";
    if (xx.is_mobile_valid == true) {
        ckzt = "Cookie有效";
    } else {
        ckzt = "Cookie失效";
    }
    var shouquandaoqitime = "";
    var IsShouQaun = bucketGet(tongzi, "IsElmShouQaunNum");
    var ss = JSON.parse(IsShouQaun)
    var sss = JSON.stringify(ss);
    sss = String(sss)
    if (sss.indexOf(qq) >= 0) {
        for (var i = 0; i < ss.length; i++) {
            var Account = ss[i].Account
            if (Account == qq) {
                shouquandaoqitime = ss[i].ExDate
            }
        }
        if (shouquandaoqitime == "") {
            shouquandaoqitime = "未知";
        }
    }
    var bbfbody = elmbbfapi(ck);
    elmlyb(ck)
    var ye = JSON.parse(bbfbody);
    var bbf = ye.data.totalAvailableAmount / 100;
    var isimg = bucketGet(tongzi, "imgs")
    if (isimg == true || isimg == "true") {
        var icons = []
        icons.push("http://bt.younweri.top:8888/down/wDeKplu3sxHv.jpg")
        icons.push("http://bt.younweri.top:8888/down/Akjtz1UHtSPV.jpg")
        icons.push("http://bt.younweri.top:8888/down/dnGJMM6StoNN.jpg")
        icons.push("http://bt.younweri.top:8888/down/55nr6tMcKvQK.jpg")
        icons.push("http://bt.younweri.top:8888/down/hMlYEgbr9iy7.jpg")
        icons.push("http://bt.younweri.top:8888/down/ALRJS0Gstkip.jpg")
        icons.push("http://bt.younweri.top:8888/down/3QGFopXxAiaE.jpg")
        icons.push("http://bt.younweri.top:8888/down/3QGFopXxAiaE.jpg")
        icons.push("http://bt.younweri.top:8888/down/TewkOCgDTHJO.jpg")
        icons.push("http://bt.younweri.top:8888/down/zUX6bOLpmDw7.jpg")
        icons.push("http://bt.younweri.top:8888/down/zUX6bOLpmDw7.jpg")
        icons.push("http://bt.younweri.top:8888/down/1xQYW4r3yHqT.jpg")
        var msgs = []
        msgs.push("  序号:" + index)
        msgs.push("  ID：" + qq)
        msgs.push("  昵称：" + username)
        msgs.push("  饿了么ID：" + userid)
        msgs.push("  Cookie状态：" + ckzt)
        msgs.push("  当前豆豆：" + zongongdouzi)
        msgs.push("  今日收入：" + jinridouzi)
        msgs.push("  昨日收入：" + zuoridouzi)
        msgs.push("  本月收入：" + benyuedouzi)
        msgs.push("  笔笔返余额：" + bbf)
        msgs.push("  乐园币： " + leyuan)
        msgs.push("  授权到期时间：" + shouquandaoqitime)
        img = drawList({
            //背景
            "background": {
                "color": { r: 255, g: 255, b: 255, a: 255 },//背景底色，默认为白色
                "image": ""//背景图，支持本地相对路径、网络url、base64编码字符串图片（非必要）
            },
            //行图标
            "icon": {//必需的
                "images": icons,//字符串数组,图标类型支持path本地相对路径、url网络图版、base64编码图片
            },
            //行文字
            "text": {//必需的
                "color": { r: 0, g: 0, b: 0, a: 255 },//文字颜色，r红基色，g绿基色，b蓝基色，a透明度，非必需，默认为黑色
                "size": 48,//文字大小，非必需，默认为48
                "texts": msgs,//文字内容，必需的。
            },
            //图头
            "head": {
                "image": "http://bt.younweri.top:8888/down/oTKC12p9Siml.jpg"//图片头（非必要）
            },
            //图尾
            "foot": {
                "image": "http://bt.younweri.top:8888/down/Ya5HPIrJwbGd.jpg"//图片尾（非必要）
            }
        })
        sendImage(img["url"])
    } else {
        var isImages = bucketGet(tongzi, "RebotIsImages")
        if (isImages == true || isImages == "true") {
            if (GetImType == "qq") {
                sendText(image(userimg) + "🐷序号:" + index + "\n" + "💖ID：" + qq + "\n" + "😺昵称：" + username + "\n" + "🍚饿了么ID：" + userid + "\n" + "❓Cookie状态：" + ckzt + "\n" + "🍬当前豆豆：" + zongongdouzi + "\n" + "🍺今日收入：" + jinridouzi + "\n" + "🍺昨日收入：" + zuoridouzi + "\n" + "🍻本月收入：" + benyuedouzi + "\n" + "💰笔笔返余额：" + bbf + "\n🎁乐园币:" + leyuan + "\n" + "❌授权到期时间：" + shouquandaoqitime);
            } else {
                sendText(image(userimg) + "序号:" + index + "\n" + "ID：" + qq + "\n" + "昵称：" + username + "\n" + "饿了么ID：" + userid + "\n" + "Cookie状态：" + ckzt + "\n" + "当前豆豆：" + zongongdouzi + "\n" + "今日收入：" + jinridouzi + "\n" + "昨日收入：" + zuoridouzi + "\n" + "本月收入：" + benyuedouzi + "\n" + "笔笔返余额：" + bbf + "\n乐园币:" + leyuan + "\n" + "授权到期时间：" + shouquandaoqitime);
            }
        } else {
            if (GetImType == "qq") {
                sendText(+ "🐷序号:" + index + "\n" + "💖ID：" + qq + "\n" + "😺昵称：" + username + "\n" + "🍚饿了么ID：" + userid + "\n" + "❓Cookie状态：" + ckzt + "\n" + "🍬当前豆豆：" + zongongdouzi + "\n" + "🍺今日收入：" + jinridouzi + "\n" + "🍺昨日收入：" + zuoridouzi + "\n" + "🍻本月收入：" + benyuedouzi + "\n" + "💰笔笔返余额：" + bbf + "\n🎁乐园币:" + leyuan + "\n" + "❌授权到期时间：" + shouquandaoqitime);
            } else {
                sendText("序号:" + index + "\n" + "ID：" + qq + "\n" + "昵称：" + username + "\n" + "饿了么ID：" + userid + "\n" + "Cookie状态：" + ckzt + "\n" + "当前豆豆：" + zongongdouzi + "\n" + "今日收入：" + jinridouzi + "\n" + "昨日收入：" + zuoridouzi + "\n" + "本月收入：" + benyuedouzi + "\n" + "笔笔返余额：" + bbf + "\n乐园币:" + leyuan + "\n" + "授权到期时间：" + shouquandaoqitime);
            }
        }
    }
    index = index + 1;
}
var leyuan = 0;
function elmlyb(cookie) {
    try {
        const data = { "templateIds": "[\"1404\"]" }
        var t = Date.now();
        sign = map("a8b654ea8b2d8897556edb7eed592e4e", t, data)
        request({
            url: "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.queryintegralproperty.v2/1.0/?jsv=2.7.0&appKey=12574478&t=" + t + "&sign=" + sign + "&api=mtop.koubei.interaction.center.common.queryintegralproperty.v2&v=1.0&ecode=1&type=json&valueType=string&needLogin=true&LoginRequest=true&dataType=jsonp",
            method: "post",
            headers: {
                "Host": "mtop.ele.me",
                "Accept": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
                "Content-type": "application/x-www-form-urlencoded",
                "Origin": "https://tb.ele.me",
                "Sec-Fetch-Site": "same-site",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Dest": "empty",
                "Referer": "https://tb.ele.me/wow/alsc/mod/3fe8408d9ba38d4726448a87?spm-pre=a2ogi.bx828379.0.0&spm=a13.b_activity_kb_m69301.0.0",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-CN,zh;q=0.9",
                "Cookie": cookie,
            },
            body: "data=%7B%22templateIds%22%3A%22%5B%5C%221404%5C%22%5D%22%7D",
        }, function (error, response, header, body) {
            var str = JSON.stringify(header)
            var mh5tk = str.match(/_m_h5_tk=([^_]+)/)[1];
            var regex1 = /_m_h5_tk=[0-9a-f]+_[0-9]+;/;
            var regex2 = /_m_h5_tk_enc=[0-9a-f]+;/;
            var str1 = str.match(regex1)[0];
            var str2 = str.match(regex2)[0];
            cookie = cookie.replace(/_m_h5_tk=[^;]+;?/, "");
            cookie = cookie.replace(/_m_h5_tk_enc=[^;]+;?/, "");
            cookie = str1 + str2 + cookie
            sign = map(mh5tk, t, data)
            request({
                url: "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.queryintegralproperty.v2/1.0/?jsv=2.7.0&appKey=12574478&t=" + t + "&sign=" + sign + "&api=mtop.koubei.interaction.center.common.queryintegralproperty.v2&v=1.0&ecode=1&type=json&valueType=string&needLogin=true&LoginRequest=true&dataType=jsonp",
                method: "post",
                headers: {
                    "Host": "mtop.ele.me",
                    "Accept": "application/json",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
                    "Content-type": "application/x-www-form-urlencoded",
                    "Origin": "https://tb.ele.me",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    "Referer": "https://tb.ele.me/wow/alsc/mod/3fe8408d9ba38d4726448a87?spm-pre=a2ogi.bx828379.0.0&spm=a13.b_activity_kb_m69301.0.0",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "zh-CN,zh;q=0.9",
                    "Cookie": cookie,
                },
                body: "data=%7B%22templateIds%22%3A%22%5B%5C%221404%5C%22%5D%22%7D",
            }, function (error, response, header, body) {
                var num = JSON.parse(body)
                var s = num.data.data["1404"].count
                leyuan = s
            });
        });
    } catch {
        leyuan = "查询失败"
    }
}
//请求饿了么个人信息接口方法
function elmapi(ck) {
    var body = request({
        url: "https://restapi.ele.me/eus/v5/user_detail",
        method: "get",
        headers: {
            "cookie": ck,
        },
    })
    return body;
}
//请求饿了么豆子详情方法
function elmxqapi(ck) {
    var body = request({
        url: "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?offset=0&limit=100&longitude=116.397128&latitude=39.916527",
        method: "get",
        headers: {
            "cookie": ck,
        },
    })
    return body
}
//饿了么笔笔返余额方法
function elmbbfapi(ck) {
    var body = request({
        url: "https://wallet.ele.me/api/storedcard/queryBalanceBycardType?cardType=platform",
        method: "get",
        headers: {
            "cookie": ck,
        },
    })
    return body;
}
//请求青龙面板返回token方法
function qltoken(qldizhi, qlclient_id, qlclient_secret) {
    var body = request({
        url: qldizhi + "/open/auth/token?client_id=" + qlclient_id + "&client_secret=" + qlclient_secret,
        method: "get",
    });
    var fhtoken = JSON.parse(body);
    qltokens = fhtoken.data.token;
}
//请求青龙面板查询方法
function qlselect(qq) {
    var body = request({
        url: qldizhi + "/open/envs?searchValue=" + qq,
        method: "get",
        headers: {
            "Authorization": "Bearer " + qltokens,
        }
    });
    return body;
}
//获取当前容器饿了么CK容量
function qlselectelmnum() {
    var body = request({
        url: qldizhi + "/open/envs?searchValue=" + bucketGet(tongzi, "QlBianLiangName"),
        method: "get",
        headers: {
            "Authorization": "Bearer " + qltokens,
        }
    });

    return body;
}
//请求青龙面板更新方法
function qlupdate(ck, id, userid, username) {
    var body = request({
        url: qldizhi + "/open/envs",
        method: "put",
        body: {
            "name": bucketGet(tongzi, "QlBianLiangName"),
            "value": ck,
            "id": id,
            "remarks": qq + "@" + userid + "&" + username,
        },
        headers: {
            "Authorization": "Bearer " + qltokens,
        }
    });
    return body;
}
//青龙面板添加方法
function qlinsert(ck, userid, username) {
    var body = request({
        url: qldizhi + "/open/envs",
        method: "post",
        body: [{
            "name": bucketGet(tongzi, "QlBianLiangName"),
            "value": ck,
            "remarks": qq + "@" + userid + "&" + username,
        }],
        headers: {
            "Authorization": "Bearer " + qltokens,
        }
    });
    return body;
}
//青龙面板删除方法
function qldelete(id) {
    var body = request({
        url: qldizhi + "/open/envs",
        method: "delete",
        body: [id],
        headers: {
            "Authorization": "Bearer " + qltokens,
        }
    });
}
function blackcheck() {//拉黑查询
    var blackid = qq;
    var blackchecker = bucketGet(tongzi, blackid) //登录黑名单
    if (blackchecker == "true") {//登录拉黑判断
        sendText("黑名单用户！！！")
        return
    }
    else {
        SelectElmItem();
    }
}
function blackset(qq) {//拉黑
    var blackid = qq
    var tip = "true"
    bucketSet(tongzi, blackid, tip)
    sendText("用户：" + blackid + "，已被拉黑。")

}
function blackdelete() {//解黑
    var blackid = qq
    var tip = "false"
    bucketSet(tongzi, blackid, tip)
    sendText("用户：" + blackid + "，已被仁慈的主人解除了拉黑！")
}
function jj(e) {
    function t(e, t) {
        return e << t | e >>> 32 - t
    }
    function n(e, t) {
        var n, r, o, i, a;
        return o = 2147483648 & e,
            i = 2147483648 & t,
            a = (1073741823 & e) + (1073741823 & t),
            (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i
    }
    function r(e, r, o, i, a, u, s) {
        return e = n(e, n(n(function (e, t, n) {
            return e & t | ~e & n
        }(r, o, i), a), s)),
            n(t(e, u), r)
    }
    function o(e, r, o, i, a, u, s) {
        return e = n(e, n(n(function (e, t, n) {
            return e & n | t & ~n
        }(r, o, i), a), s)),
            n(t(e, u), r)
    }
    function i(e, r, o, i, a, u, s) {
        return e = n(e, n(n(function (e, t, n) {
            return e ^ t ^ n
        }(r, o, i), a), s)),
            n(t(e, u), r)
    }
    function a(e, r, o, i, a, u, s) {
        return e = n(e, n(n(function (e, t, n) {
            return t ^ (e | ~n)
        }(r, o, i), a), s)),
            n(t(e, u), r)
    }
    function u(e) {
        var t, n = "", r = "";
        for (t = 0; 3 >= t; t++)
            n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
        return n
    }
    var s, l, c, d, f, p, h, m, g, v;
    for (v = function (e) {
        for (var t, n = e.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), i = new Array(o - 1), a = 0, u = 0; n > u;)
            a = u % 4 * 8,
                i[t = (u - u % 4) / 4] = i[t] | e.charCodeAt(u) << a,
                u++;
        return a = u % 4 * 8,
            i[t = (u - u % 4) / 4] = i[t] | 128 << a,
            i[o - 2] = n << 3,
            i[o - 1] = n >>> 29,
            i
    }(e = function (e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            128 > r ? t += String.fromCharCode(r) : r > 127 && 2048 > r ? (t += String.fromCharCode(r >> 6 | 192),
                t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
                    t += String.fromCharCode(r >> 6 & 63 | 128),
                    t += String.fromCharCode(63 & r | 128))
        }
        return t
    }(e)),
        p = 1732584193,
        h = 4023233417,
        m = 2562383102,
        g = 271733878,
        s = 0; s < v.length; s += 16)
        l = p,
            c = h,
            d = m,
            f = g,
            p = r(p, h, m, g, v[s + 0], 7, 3614090360),
            g = r(g, p, h, m, v[s + 1], 12, 3905402710),
            m = r(m, g, p, h, v[s + 2], 17, 606105819),
            h = r(h, m, g, p, v[s + 3], 22, 3250441966),
            p = r(p, h, m, g, v[s + 4], 7, 4118548399),
            g = r(g, p, h, m, v[s + 5], 12, 1200080426),
            m = r(m, g, p, h, v[s + 6], 17, 2821735955),
            h = r(h, m, g, p, v[s + 7], 22, 4249261313),
            p = r(p, h, m, g, v[s + 8], 7, 1770035416),
            g = r(g, p, h, m, v[s + 9], 12, 2336552879),
            m = r(m, g, p, h, v[s + 10], 17, 4294925233),
            h = r(h, m, g, p, v[s + 11], 22, 2304563134),
            p = r(p, h, m, g, v[s + 12], 7, 1804603682),
            g = r(g, p, h, m, v[s + 13], 12, 4254626195),
            m = r(m, g, p, h, v[s + 14], 17, 2792965006),
            p = o(p, h = r(h, m, g, p, v[s + 15], 22, 1236535329), m, g, v[s + 1], 5, 4129170786),
            g = o(g, p, h, m, v[s + 6], 9, 3225465664),
            m = o(m, g, p, h, v[s + 11], 14, 643717713),
            h = o(h, m, g, p, v[s + 0], 20, 3921069994),
            p = o(p, h, m, g, v[s + 5], 5, 3593408605),
            g = o(g, p, h, m, v[s + 10], 9, 38016083),
            m = o(m, g, p, h, v[s + 15], 14, 3634488961),
            h = o(h, m, g, p, v[s + 4], 20, 3889429448),
            p = o(p, h, m, g, v[s + 9], 5, 568446438),
            g = o(g, p, h, m, v[s + 14], 9, 3275163606),
            m = o(m, g, p, h, v[s + 3], 14, 4107603335),
            h = o(h, m, g, p, v[s + 8], 20, 1163531501),
            p = o(p, h, m, g, v[s + 13], 5, 2850285829),
            g = o(g, p, h, m, v[s + 2], 9, 4243563512),
            m = o(m, g, p, h, v[s + 7], 14, 1735328473),
            p = i(p, h = o(h, m, g, p, v[s + 12], 20, 2368359562), m, g, v[s + 5], 4, 4294588738),
            g = i(g, p, h, m, v[s + 8], 11, 2272392833),
            m = i(m, g, p, h, v[s + 11], 16, 1839030562),
            h = i(h, m, g, p, v[s + 14], 23, 4259657740),
            p = i(p, h, m, g, v[s + 1], 4, 2763975236),
            g = i(g, p, h, m, v[s + 4], 11, 1272893353),
            m = i(m, g, p, h, v[s + 7], 16, 4139469664),
            h = i(h, m, g, p, v[s + 10], 23, 3200236656),
            p = i(p, h, m, g, v[s + 13], 4, 681279174),
            g = i(g, p, h, m, v[s + 0], 11, 3936430074),
            m = i(m, g, p, h, v[s + 3], 16, 3572445317),
            h = i(h, m, g, p, v[s + 6], 23, 76029189),
            p = i(p, h, m, g, v[s + 9], 4, 3654602809),
            g = i(g, p, h, m, v[s + 12], 11, 3873151461),
            m = i(m, g, p, h, v[s + 15], 16, 530742520),
            p = a(p, h = i(h, m, g, p, v[s + 2], 23, 3299628645), m, g, v[s + 0], 6, 4096336452),
            g = a(g, p, h, m, v[s + 7], 10, 1126891415),
            m = a(m, g, p, h, v[s + 14], 15, 2878612391),
            h = a(h, m, g, p, v[s + 5], 21, 4237533241),
            p = a(p, h, m, g, v[s + 12], 6, 1700485571),
            g = a(g, p, h, m, v[s + 3], 10, 2399980690),
            m = a(m, g, p, h, v[s + 10], 15, 4293915773),
            h = a(h, m, g, p, v[s + 1], 21, 2240044497),
            p = a(p, h, m, g, v[s + 8], 6, 1873313359),
            g = a(g, p, h, m, v[s + 15], 10, 4264355552),
            m = a(m, g, p, h, v[s + 6], 15, 2734768916),
            h = a(h, m, g, p, v[s + 13], 21, 1309151649),
            p = a(p, h, m, g, v[s + 4], 6, 4149444226),
            g = a(g, p, h, m, v[s + 11], 10, 3174756917),
            m = a(m, g, p, h, v[s + 2], 15, 718787259),
            h = a(h, m, g, p, v[s + 9], 21, 3951481745),
            p = n(p, l),
            h = n(h, c),
            m = n(m, d),
            g = n(g, f);
    return (u(p) + u(h) + u(m) + u(g)).toLowerCase()
}


function map(mh5tk, ts, data) {
    var e = (mh5tk + "&" + ts + "&" + '12574478' + "&" + JSON.stringify(data))
    return jj(e)
}
