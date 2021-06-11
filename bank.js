// 插入金融機構列表
var bankOpts = [
    {
      "MAIN_CODE": "000",
      "MAIN_NAME": "中央銀行國庫局"
    },
    {
      "MAIN_CODE": "004",
      "MAIN_NAME": "臺灣銀行"
    },
    {
      "MAIN_CODE": "005",
      "MAIN_NAME": "臺灣土地銀行"
    },
    {
      "MAIN_CODE": "006",
      "MAIN_NAME": "合作金庫商業銀行"
    },
    {
      "MAIN_CODE": "007",
      "MAIN_NAME": "第一商業銀行"
    },
    {
      "MAIN_CODE": "008",
      "MAIN_NAME": "華南商業銀行"
    },
    {
      "MAIN_CODE": "009",
      "MAIN_NAME": "彰化商業銀行"
    },
    {
      "MAIN_CODE": "011",
      "MAIN_NAME": "上海商業儲蓄銀行"
    },
    {
      "MAIN_CODE": "012",
      "MAIN_NAME": "台北富邦商業銀行"
    },
    {
      "MAIN_CODE": "013",
      "MAIN_NAME": "國泰世華商業銀行"
    },
    {
      "MAIN_CODE": "016",
      "MAIN_NAME": "高雄銀行"
    },
    {
      "MAIN_CODE": "017",
      "MAIN_NAME": "兆豐國際商業銀行"
    },
    {
      "MAIN_CODE": "018",
      "MAIN_NAME": "全國農業金庫"
    },
    {
      "MAIN_CODE": "020",
      "MAIN_NAME": "日商瑞穗銀行台北分行"
    },
    {
      "MAIN_CODE": "021",
      "MAIN_NAME": "花旗（台灣）商業銀行"
    },
    {
      "MAIN_CODE": "022",
      "MAIN_NAME": "美國銀行台北分行"
    },
    {
      "MAIN_CODE": "023",
      "MAIN_NAME": "泰國盤谷銀行台北分行"
    },
    {
      "MAIN_CODE": "025",
      "MAIN_NAME": "菲律賓首都銀行台北分行"
    },
    {
      "MAIN_CODE": "029",
      "MAIN_NAME": "新加坡商大華銀行台北分行"
    },
    {
      "MAIN_CODE": "030",
      "MAIN_NAME": "美商道富銀行台北分行"
    },
    {
      "MAIN_CODE": "037",
      "MAIN_NAME": "法商法國興業銀行台北分行"
    },
    {
      "MAIN_CODE": "039",
      "MAIN_NAME": "澳商澳盛銀行台北分行"
    },
    {
      "MAIN_CODE": "048",
      "MAIN_NAME": "王道商業銀行"
    },
    {
      "MAIN_CODE": "050",
      "MAIN_NAME": "臺灣中小企業銀行"
    },
    {
      "MAIN_CODE": "052",
      "MAIN_NAME": "渣打國際商業銀行"
    },
    {
      "MAIN_CODE": "053",
      "MAIN_NAME": "台中商業銀行"
    },
    {
      "MAIN_CODE": "054",
      "MAIN_NAME": "京城商業銀行"
    },
    {
      "MAIN_CODE": "060",
      "MAIN_NAME": "兆豐票券金融股份有限公司"
    },
    {
      "MAIN_CODE": "061",
      "MAIN_NAME": "中華票券金融股份有限公司"
    },
    {
      "MAIN_CODE": "062",
      "MAIN_NAME": "國際票券金融股份有限公司"
    },
    {
      "MAIN_CODE": "066",
      "MAIN_NAME": "萬通票券金融股份有限公司"
    },
    {
      "MAIN_CODE": "072",
      "MAIN_NAME": "德商德意志銀行台北分行"
    },
    {
      "MAIN_CODE": "075",
      "MAIN_NAME": "香港商東亞銀行台北分行"
    },
    {
      "MAIN_CODE": "076",
      "MAIN_NAME": "美商摩根大通銀行台北分行"
    },
    {
      "MAIN_CODE": "081",
      "MAIN_NAME": "匯豐（台灣）商業銀行"
    },
    {
      "MAIN_CODE": "082",
      "MAIN_NAME": "法國巴黎銀行台北分行"
    },
    {
      "MAIN_CODE": "085",
      "MAIN_NAME": "新加坡商新加坡華僑銀行台北分行"
    },
    {
      "MAIN_CODE": "086",
      "MAIN_NAME": "法商東方匯理銀行台北分行"
    },
    {
      "MAIN_CODE": "092",
      "MAIN_NAME": "瑞士商瑞士銀行台北分行"
    },
    {
      "MAIN_CODE": "093",
      "MAIN_NAME": "荷商安智銀行台北分行"
    },
    {
      "MAIN_CODE": "098",
      "MAIN_NAME": "日商三菱日聯銀行台北分行"
    },
    {
      "MAIN_CODE": 101,
      "MAIN_NAME": "瑞興商業銀行"
    },
    {
      "MAIN_CODE": 102,
      "MAIN_NAME": "華泰商業銀行"
    },
    {
      "MAIN_CODE": 103,
      "MAIN_NAME": "臺灣新光商業銀行"
    },
    {
      "MAIN_CODE": 104,
      "MAIN_NAME": "台北市第五信用合作社"
    },
    {
      "MAIN_CODE": 108,
      "MAIN_NAME": "陽信商業銀行"
    },
    {
      "MAIN_CODE": 114,
      "MAIN_NAME": "基隆第一信用合作社"
    },
    {
      "MAIN_CODE": 115,
      "MAIN_NAME": "基隆市第二信用合作社"
    },
    {
      "MAIN_CODE": 118,
      "MAIN_NAME": "板信商業銀行"
    },
    {
      "MAIN_CODE": 119,
      "MAIN_NAME": "淡水第一信用合作社"
    },
    {
      "MAIN_CODE": 120,
      "MAIN_NAME": "新北市淡水信用合作社"
    },
    {
      "MAIN_CODE": 124,
      "MAIN_NAME": "宜蘭信用合作社"
    },
    {
      "MAIN_CODE": 127,
      "MAIN_NAME": "桃園信用合作社"
    },
    {
      "MAIN_CODE": 130,
      "MAIN_NAME": "新竹第一信用合作社"
    },
    {
      "MAIN_CODE": 132,
      "MAIN_NAME": "新竹第三信用合作社"
    },
    {
      "MAIN_CODE": 146,
      "MAIN_NAME": "台中市第二信用合作社"
    },
    {
      "MAIN_CODE": 147,
      "MAIN_NAME": "三信商業銀行"
    },
    {
      "MAIN_CODE": 158,
      "MAIN_NAME": "彰化第一信用合作社"
    },
    {
      "MAIN_CODE": 161,
      "MAIN_NAME": "彰化第五信用合作社"
    },
    {
      "MAIN_CODE": 162,
      "MAIN_NAME": "彰化第六信用合作社"
    },
    {
      "MAIN_CODE": 163,
      "MAIN_NAME": "彰化第十信用合作社"
    },
    {
      "MAIN_CODE": 165,
      "MAIN_NAME": "彰化縣鹿港信用合作社"
    },
    {
      "MAIN_CODE": 178,
      "MAIN_NAME": "嘉義市第三信用合作社"
    },
    {
      "MAIN_CODE": 188,
      "MAIN_NAME": "台南第三信用合作社"
    },
    {
      "MAIN_CODE": 204,
      "MAIN_NAME": "高雄市第三信用合作社"
    },
    {
      "MAIN_CODE": 215,
      "MAIN_NAME": "花蓮第一信用合作社"
    },
    {
      "MAIN_CODE": 216,
      "MAIN_NAME": "花蓮第二信用合作社"
    },
    {
      "MAIN_CODE": 222,
      "MAIN_NAME": "澎湖縣第一信用合作社"
    },
    {
      "MAIN_CODE": 223,
      "MAIN_NAME": "澎湖第二信用合作社"
    },
    {
      "MAIN_CODE": 224,
      "MAIN_NAME": "金門縣信用合作社"
    },
    {
      "MAIN_CODE": 321,
      "MAIN_NAME": "日商三井住友銀行台北分行"
    },
    {
      "MAIN_CODE": 326,
      "MAIN_NAME": "西班牙商西班牙對外銀行臺北分行"
    },
    {
      "MAIN_CODE": 372,
      "MAIN_NAME": "大慶票券金融股份有限公司"
    },
    {
      "MAIN_CODE": 380,
      "MAIN_NAME": "大陸商中國銀行臺北分行"
    },
    {
      "MAIN_CODE": 381,
      "MAIN_NAME": "大陸商交通銀行臺北分行"
    },
    {
      "MAIN_CODE": 382,
      "MAIN_NAME": "大陸商中國建設銀行臺北分行"
    },
    {
      "MAIN_CODE": 501,
      "MAIN_NAME": "宜蘭縣蘇澳區漁會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 502,
      "MAIN_NAME": "宜蘭縣頭城區漁會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 506,
      "MAIN_NAME": "桃園區漁會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 507,
      "MAIN_NAME": "新竹區漁會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 508,
      "MAIN_NAME": "通苑區漁會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 510,
      "MAIN_NAME": "南龍區漁會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 511,
      "MAIN_NAME": "彰化區漁會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 512,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 513,
      "MAIN_NAME": "新北市瑞芳區漁會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 514,
      "MAIN_NAME": "萬里區漁會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 515,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 516,
      "MAIN_NAME": "基隆區漁會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 517,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 518,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 519,
      "MAIN_NAME": "新化區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 520,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 521,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 523,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 524,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 525,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 526,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 538,
      "MAIN_NAME": "宜蘭市農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 541,
      "MAIN_NAME": "白河區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 542,
      "MAIN_NAME": "麻豆區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 547,
      "MAIN_NAME": "後壁區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 549,
      "MAIN_NAME": "下營區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 551,
      "MAIN_NAME": "官田區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 552,
      "MAIN_NAME": "大內區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 556,
      "MAIN_NAME": "學甲區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 557,
      "MAIN_NAME": "新市區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 558,
      "MAIN_NAME": "安定區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 559,
      "MAIN_NAME": "山上區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 561,
      "MAIN_NAME": "左鎮區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 562,
      "MAIN_NAME": "仁德區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 564,
      "MAIN_NAME": "關廟區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 565,
      "MAIN_NAME": "龍崎區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 567,
      "MAIN_NAME": "南化區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 568,
      "MAIN_NAME": "七股區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 570,
      "MAIN_NAME": "南投市農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 573,
      "MAIN_NAME": "埔里鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 574,
      "MAIN_NAME": "竹山鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 575,
      "MAIN_NAME": "中寮鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 577,
      "MAIN_NAME": "魚池鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 578,
      "MAIN_NAME": "水里鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 579,
      "MAIN_NAME": "國姓鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 580,
      "MAIN_NAME": "鹿谷鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 581,
      "MAIN_NAME": "信義鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 582,
      "MAIN_NAME": "仁愛鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 583,
      "MAIN_NAME": "東山區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 585,
      "MAIN_NAME": "頭城鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 586,
      "MAIN_NAME": "羅東鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 587,
      "MAIN_NAME": "礁溪鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 588,
      "MAIN_NAME": "壯圍鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 589,
      "MAIN_NAME": "員山鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 596,
      "MAIN_NAME": "五結鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 598,
      "MAIN_NAME": "蘇澳地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 599,
      "MAIN_NAME": "三星地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 600,
      "MAIN_NAME": "農金資訊股份有限公司"
    },
    {
      "MAIN_CODE": 602,
      "MAIN_NAME": "中華民國農會中壢辦事處信用部（農金資訊所"
    },
    {
      "MAIN_CODE": 605,
      "MAIN_NAME": "高雄市高雄地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 608,
      "MAIN_NAME": "聯資中心所屬會員"
    },
    {
      "MAIN_CODE": 612,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 613,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 614,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 615,
      "MAIN_NAME": "基隆市農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 616,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 617,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 618,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 619,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 620,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 621,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 622,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 624,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 625,
      "MAIN_NAME": "臺中市臺中地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 627,
      "MAIN_NAME": "南農中心所屬會員"
    },
    {
      "MAIN_CODE": 628,
      "MAIN_NAME": "鹿港鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 629,
      "MAIN_NAME": "和美鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 631,
      "MAIN_NAME": "溪湖鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 632,
      "MAIN_NAME": "田中鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 633,
      "MAIN_NAME": "北斗鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 635,
      "MAIN_NAME": "線西鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 636,
      "MAIN_NAME": "伸港鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 638,
      "MAIN_NAME": "花壇鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 639,
      "MAIN_NAME": "大村鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 642,
      "MAIN_NAME": "社頭鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 643,
      "MAIN_NAME": "二水鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 646,
      "MAIN_NAME": "大城鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 647,
      "MAIN_NAME": "溪州鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 649,
      "MAIN_NAME": "埔鹽鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 650,
      "MAIN_NAME": "福興鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 651,
      "MAIN_NAME": "彰化市農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 683,
      "MAIN_NAME": "北港鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 685,
      "MAIN_NAME": "土庫鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 693,
      "MAIN_NAME": "東勢鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 696,
      "MAIN_NAME": "水林鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 697,
      "MAIN_NAME": "元長鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 698,
      "MAIN_NAME": "麥寮鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 699,
      "MAIN_NAME": "林內鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 700,
      "MAIN_NAME": "中華郵政股份有限公司"
    },
    {
      "MAIN_CODE": 749,
      "MAIN_NAME": "內埔地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 762,
      "MAIN_NAME": "大溪區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 763,
      "MAIN_NAME": "桃園區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 764,
      "MAIN_NAME": "平鎮區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 765,
      "MAIN_NAME": "楊梅區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 766,
      "MAIN_NAME": "大園區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 767,
      "MAIN_NAME": "蘆竹區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 768,
      "MAIN_NAME": "龜山區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 769,
      "MAIN_NAME": "八德區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 770,
      "MAIN_NAME": "新屋區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 771,
      "MAIN_NAME": "龍潭區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 772,
      "MAIN_NAME": "復興區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 773,
      "MAIN_NAME": "觀音區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 775,
      "MAIN_NAME": "土城區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 776,
      "MAIN_NAME": "三重區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 777,
      "MAIN_NAME": "中和地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 778,
      "MAIN_NAME": "淡水區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 779,
      "MAIN_NAME": "樹林區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 780,
      "MAIN_NAME": "鶯歌區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 781,
      "MAIN_NAME": "三峽區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 785,
      "MAIN_NAME": "蘆洲區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 786,
      "MAIN_NAME": "五股區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 787,
      "MAIN_NAME": "林口區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 788,
      "MAIN_NAME": "泰山區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 789,
      "MAIN_NAME": "坪林區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 790,
      "MAIN_NAME": "八里區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 791,
      "MAIN_NAME": "金山地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 792,
      "MAIN_NAME": "瑞芳地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 793,
      "MAIN_NAME": "新店地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 795,
      "MAIN_NAME": "深坑區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 796,
      "MAIN_NAME": "石碇區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 797,
      "MAIN_NAME": "平溪區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 798,
      "MAIN_NAME": "石門區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 799,
      "MAIN_NAME": "三芝區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 803,
      "MAIN_NAME": "聯邦商業銀行"
    },
    {
      "MAIN_CODE": 805,
      "MAIN_NAME": "遠東國際商業銀行"
    },
    {
      "MAIN_CODE": 806,
      "MAIN_NAME": "元大商業銀行"
    },
    {
      "MAIN_CODE": 807,
      "MAIN_NAME": "永豐商業銀行"
    },
    {
      "MAIN_CODE": 808,
      "MAIN_NAME": "玉山商業銀行"
    },
    {
      "MAIN_CODE": 809,
      "MAIN_NAME": "凱基商業銀行"
    },
    {
      "MAIN_CODE": 810,
      "MAIN_NAME": "星展（台灣）商業銀行"
    },
    {
      "MAIN_CODE": 812,
      "MAIN_NAME": "台新國際商業銀行"
    },
    {
      "MAIN_CODE": 815,
      "MAIN_NAME": "日盛國際商業銀行"
    },
    {
      "MAIN_CODE": 816,
      "MAIN_NAME": "安泰商業銀行"
    },
    {
      "MAIN_CODE": 822,
      "MAIN_NAME": "中國信託商業銀行"
    },
    {
      "MAIN_CODE": 824,
      "MAIN_NAME": "連線商業銀行"
    },
    {
      "MAIN_CODE": 826,
      "MAIN_NAME": "樂天國際商業銀行"
    },
    {
      "MAIN_CODE": 860,
      "MAIN_NAME": "中埔鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 866,
      "MAIN_NAME": "阿里山鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 868,
      "MAIN_NAME": "東勢區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 869,
      "MAIN_NAME": "清水區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 870,
      "MAIN_NAME": "梧棲區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 871,
      "MAIN_NAME": "大甲區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 872,
      "MAIN_NAME": "沙鹿區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 874,
      "MAIN_NAME": "霧峰區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 875,
      "MAIN_NAME": "太平區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 876,
      "MAIN_NAME": "烏日區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 877,
      "MAIN_NAME": "后里區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 878,
      "MAIN_NAME": "大雅區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 879,
      "MAIN_NAME": "潭子區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 880,
      "MAIN_NAME": "石岡區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 881,
      "MAIN_NAME": "新社區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 882,
      "MAIN_NAME": "大肚區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 883,
      "MAIN_NAME": "外埔區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 884,
      "MAIN_NAME": "大安區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 885,
      "MAIN_NAME": "龍井區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 886,
      "MAIN_NAME": "和平區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 891,
      "MAIN_NAME": "花蓮市農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 895,
      "MAIN_NAME": "瑞穗鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 896,
      "MAIN_NAME": "玉溪地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 897,
      "MAIN_NAME": "鳳榮地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 898,
      "MAIN_NAME": "光豐地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 901,
      "MAIN_NAME": "大里區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 902,
      "MAIN_NAME": "苗栗市農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 903,
      "MAIN_NAME": "新北市汐止區農會"
    },
    {
      "MAIN_CODE": 904,
      "MAIN_NAME": "新莊區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 906,
      "MAIN_NAME": "頭份市農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 907,
      "MAIN_NAME": "竹南鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 908,
      "MAIN_NAME": "通霄鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 909,
      "MAIN_NAME": "苑裡鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 910,
      "MAIN_NAME": "財團法人農漁會聯合資訊中心"
    },
    {
      "MAIN_CODE": 912,
      "MAIN_NAME": "冬山鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 913,
      "MAIN_NAME": "後龍鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 914,
      "MAIN_NAME": "卓蘭鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 915,
      "MAIN_NAME": "西湖鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 916,
      "MAIN_NAME": "草屯鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 917,
      "MAIN_NAME": "公館鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 918,
      "MAIN_NAME": "銅鑼鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 919,
      "MAIN_NAME": "三義鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 920,
      "MAIN_NAME": "造橋鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 921,
      "MAIN_NAME": "南庄鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 922,
      "MAIN_NAME": "臺南市臺南地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 923,
      "MAIN_NAME": "獅潭鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 924,
      "MAIN_NAME": "頭屋鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 925,
      "MAIN_NAME": "三灣鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 926,
      "MAIN_NAME": "大湖地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 928,
      "MAIN_NAME": "板橋區農會電腦共用中心"
    },
    {
      "MAIN_CODE": 929,
      "MAIN_NAME": "關西鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 930,
      "MAIN_NAME": "新埔鎮農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 931,
      "MAIN_NAME": "竹北市農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 932,
      "MAIN_NAME": "湖口鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 933,
      "MAIN_NAME": "芎林鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 934,
      "MAIN_NAME": "寶山鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 935,
      "MAIN_NAME": "峨眉鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 936,
      "MAIN_NAME": "北埔鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 937,
      "MAIN_NAME": "竹東地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 938,
      "MAIN_NAME": "橫山地區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 939,
      "MAIN_NAME": "新豐鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 940,
      "MAIN_NAME": "新竹市農會信用部（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 952,
      "MAIN_NAME": "財團法人農漁會南區資訊中心"
    },
    {
      "MAIN_CODE": 953,
      "MAIN_NAME": "田尾鄉農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 984,
      "MAIN_NAME": "北投區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 985,
      "MAIN_NAME": "士林區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 986,
      "MAIN_NAME": "內湖區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 987,
      "MAIN_NAME": "南港區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 988,
      "MAIN_NAME": "木柵區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 989,
      "MAIN_NAME": "景美區農會（農金資訊所屬會員）"
    },
    {
      "MAIN_CODE": 995,
      "MAIN_NAME": "關貿網路股份有限公司"
    },
    {
      "MAIN_CODE": 996,
      "MAIN_NAME": "財政部國庫署"
    },
    {
      "MAIN_CODE": 997,
      "MAIN_NAME": "中華民國信用合作社聯合社南區聯合資訊處理"
    }
  ].reduce((last, pair) => {
    last[pair.MAIN_CODE] = !!last[pair.MAIN_CODE] ? `${last[pair.MAIN_CODE]}, ${pair.MAIN_NAME}` : pair.MAIN_NAME
    return last
}, {})