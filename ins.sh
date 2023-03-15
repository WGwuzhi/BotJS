#!/bin/bash

# 提示选择需要安装的软件
echo "请选择需要安装的软件:"
echo "1. 安装奥特曼"
echo "2. 安装go-cqhttp"
echo "3. 安装青龙面板"
echo "4. 安装BBK微信扫码"
echo "5. 安装BBK京东扫码"
echo "6. 安装Docker服务"

# 读取用户输入的选项
read choice

case $choice in
1)
    # 安装奥特曼
    tag=$(curl -s https://gitee.com/hdbjlizhe/autMan/releases/latest | cut -d"\"" -f2 | cut -d'/' -f8)
    if [ ! "$tag" ]; then exit; fi
    s=autMan
    a=amd64
    if [[ $(uname -a | grep "aarch64") != "" ]]; then a=arm64; fi
    if [ ! -d $s ]; then mkdir $s; fi
    cd $s
    wget https://gitee.com/hdbjlizhe/${s}/releases/download/${tag}/autMan_$a.tar.gz && tar -zxvf autMan_$a.tar.gz && rm -rf autMan_$a.tar.gz && chmod 777 $s
    pkill -9 $s
    $(pwd)/$s -t
    ;;
2)
    # 安装go-cqhttp
    cd /root && mkdir go-cqhttp && cd go-cqhttp
    wget https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc4/go-cqhttp_linux_amd64.tar.gz #拉取go-cqhttp文件
    tar -zxvf go-cqhttp_linux_amd64.tar.gz                                                            #解压文件
    ./go-cqhttp                                                                                       #启动go-cqhttp
    ;;
3)
    # 安装青龙面板
    if ! command -v docker &>/dev/null; then
        echo "Docker服务未安装，请先安装Docker服务。"
        exit
    fi
    docker run -dit \
        -v $PWD/ql:/ql/config \
        -p 5700:5700 \
        --name qinglong \
        --hostname qinglong \
        --restart unless-stopped \
        --privileged=true \
        --network=host \
        whyour/qinglong:latest
    ;;
4)
    # 安装BBK微信扫码
    if ! command -v docker &>/dev/null; then
        echo "Docker服务未安装，请先安装Docker服务。"
        exit
    fi
    cd /root && mkdir -p $(pwd)/bbk-qr/{conf,logs} && cd $(pwd)/bbk-qr
    docker run -dit \
        -v $PWD/conf:/data/conf \
        -v $PWD/logs:/data/logs \
        -p 2081:81 \
        --name bbk-qr \
        neuynp8oido4ejj/qr:latest
    ;;
5)
    # 安装BBK京东扫码
    if ! command -v docker &>/dev/null; then
        echo "Docker服务未安装，请先安装Docker服务。"
        exit
    fi
    cd /root && mkdir -p $(pwd)/bbk-jd-qr/{conf,logs} && cd $(pwd)/bbk-jd-qr
    docker run -dit \
        -v $PWD/conf:/data/conf \
        -v $PWD/logs:/data/logs \
        -p 3081:81 \
        --name bbk-jd-qr \
        --privileged=true \
        neuynp8oido4ejj/jd-qr:latest
    ;;
6)
    arch=$(uname -m)                 # 获取系统架构信息
    if [ "$arch" == "x86_64" ]; then # 如果是x86_64架构
        echo "安装Docker服务..."
        curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun # 通过curl脚本安装Docker，并选择阿里云镜像
        systemctl start docker                                             # 启动Docker服务
        systemctl enable docker                                            # 设置Docker服务开机自启
    elif [ "$arch" == "aarch64" ]; then                                    # 如果是aarch64架构
        echo "安装Docker服务..."
        curl -fsSL https://get.docker.com | ARCH=arm64 bash -s docker --mirror Aliyun # 通过curl脚本安装Docker，并选择阿里云镜像
        systemctl start docker                                                        # 启动Docker服务
        systemctl enable docker                                                       # 设置Docker服务开机自启
    else                                                                              # 如果不是支持的架构
        echo "不支持的系统架构：$arch"
    fi
    ;;
*)
    echo "无效的选择：$choice"
    ;;
esac
