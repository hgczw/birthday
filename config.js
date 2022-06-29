// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给Vivian",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "我心中的唯爱",  
        "今天是你的生日",
        "这是我们在一起的",
        "第二个生日了哦",
        "去年生日我们的约定",
        "死生契阔，与子成说",
        "上天让我们遇到迟到的彼此",
        "所以艰辛我们依然执着守候",
        "愿你贪吃不胖",
        "愿你偷懒不丑",
        "愿你嘴角永远带笑",
        "愿你的美梦一一实现",
        "愿这时光荏苒",
        "我们即使不见亦能不散",
        "愿这岁月悠长",
        "我们一生相依",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
          "送给Vivian": "./imgs/hon.jpg",
          "我心中的唯爱": "./imgs/thh.jpg",
          "今天是你的生日": "./imgs/one.jpg",
          "死生契阔，与子成说": "./imgs/thr.jpg",
          "我们一生相依": "./imgs/love.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "氛围",
        balloons_flying: "气球",
        cake_fadein: "蛋糕来了",
        light_candle: "点燃蜡烛",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
