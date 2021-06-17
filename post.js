// 插入地址元件
var postOpts = [
    {
        "AREANM": "臺北市中正區",
        "ZIP": "100",
        "CNAME": "台北市",
        "AREASNM": "中正區"
    },
    {
        "AREANM": "臺北市大同區",
        "ZIP": "103",
        "CNAME": "台北市",
        "AREASNM": "大同區"
    },
    {
        "AREANM": "臺北市中山區",
        "ZIP": "104",
        "CNAME": "台北市",
        "AREASNM": "中山區"
    },
    {
        "AREANM": "臺北市松山區",
        "ZIP": "105",
        "CNAME": "台北市",
        "AREASNM": "松山區"
    },
    {
        "AREANM": "臺北市大安區",
        "ZIP": "106",
        "CNAME": "台北市",
        "AREASNM": "大安區"
    },
    {
        "AREANM": "臺北市萬華區",
        "ZIP": "108",
        "CNAME": "台北市",
        "AREASNM": "萬華區"
    },
    {
        "AREANM": "臺北市信義區",
        "ZIP": "110",
        "CNAME": "台北市",
        "AREASNM": "信義區"
    },
    {
        "AREANM": "臺北市士林區",
        "ZIP": "111",
        "CNAME": "台北市",
        "AREASNM": "士林區"
    },
    {
        "AREANM": "臺北市北投區",
        "ZIP": "112",
        "CNAME": "台北市",
        "AREASNM": "北投區"
    },
    {
        "AREANM": "臺北市內湖區",
        "ZIP": "114",
        "CNAME": "台北市",
        "AREASNM": "內湖區"
    },
    {
        "AREANM": "臺北市南港區",
        "ZIP": "115",
        "CNAME": "台北市",
        "AREASNM": "南港區"
    },
    {
        "AREANM": "臺北市文山區",
        "ZIP": "116",
        "CNAME": "台北市",
        "AREASNM": "文山區"
    },
    {
        "AREANM": "基隆市仁愛區",
        "ZIP": "200",
        "CNAME": "基隆市",
        "AREASNM": "仁愛區"
    },
    {
        "AREANM": "基隆市信義區",
        "ZIP": "201",
        "CNAME": "基隆市",
        "AREASNM": "信義區"
    },
    {
        "AREANM": "基隆市中正區",
        "ZIP": "202",
        "CNAME": "基隆市",
        "AREASNM": "中正區"
    },
    {
        "AREANM": "基隆市中山區",
        "ZIP": "203",
        "CNAME": "基隆市",
        "AREASNM": "中山區"
    },
    {
        "AREANM": "基隆市安樂區",
        "ZIP": "204",
        "CNAME": "基隆市",
        "AREASNM": "安樂區"
    },
    {
        "AREANM": "基隆市暖暖區",
        "ZIP": "205",
        "CNAME": "基隆市",
        "AREASNM": "暖暖區"
    },
    {
        "AREANM": "基隆市七堵區",
        "ZIP": "206",
        "CNAME": "基隆市",
        "AREASNM": "七堵區"
    },
    {
        "AREANM": "新北市萬里區",
        "ZIP": "207",
        "CNAME": "新北市",
        "AREASNM": "萬里區"
    },
    {
        "AREANM": "新北市金山區",
        "ZIP": "208",
        "CNAME": "新北市",
        "AREASNM": "金山區"
    },
    {
        "AREANM": "連江縣南竿鄉",
        "ZIP": "209",
        "CNAME": "連江縣",
        "AREASNM": "南竿鄉"
    },
    {
        "AREANM": "連江縣北竿鄉",
        "ZIP": "210",
        "CNAME": "連江縣",
        "AREASNM": "北竿鄉"
    },
    {
        "AREANM": "連江縣莒光鄉",
        "ZIP": "211",
        "CNAME": "連江縣",
        "AREASNM": "莒光鄉"
    },
    {
        "AREANM": "連江縣東引鄉",
        "ZIP": "212",
        "CNAME": "連江縣",
        "AREASNM": "東引鄉"
    },
    {
        "AREANM": "新北市板橋區",
        "ZIP": "220",
        "CNAME": "新北市",
        "AREASNM": "板橋區"
    },
    {
        "AREANM": "新北市汐止區",
        "ZIP": "221",
        "CNAME": "新北市",
        "AREASNM": "汐止區"
    },
    {
        "AREANM": "新北市深坑區",
        "ZIP": "222",
        "CNAME": "新北市",
        "AREASNM": "深坑區"
    },
    {
        "AREANM": "新北市石碇區",
        "ZIP": "223",
        "CNAME": "新北市",
        "AREASNM": "石碇區"
    },
    {
        "AREANM": "新北市瑞芳區",
        "ZIP": "224",
        "CNAME": "新北市",
        "AREASNM": "瑞芳區"
    },
    {
        "AREANM": "新北市平溪區",
        "ZIP": "226",
        "CNAME": "新北市",
        "AREASNM": "平溪區"
    },
    {
        "AREANM": "新北市雙溪區",
        "ZIP": "227",
        "CNAME": "新北市",
        "AREASNM": "雙溪區"
    },
    {
        "AREANM": "新北市貢寮區",
        "ZIP": "228",
        "CNAME": "新北市",
        "AREASNM": "貢寮區"
    },
    {
        "AREANM": "新北市新店區",
        "ZIP": "231",
        "CNAME": "新北市",
        "AREASNM": "新店區"
    },
    {
        "AREANM": "新北市坪林區",
        "ZIP": "232",
        "CNAME": "新北市",
        "AREASNM": "坪林區"
    },
    {
        "AREANM": "新北市烏來區",
        "ZIP": "233",
        "CNAME": "新北市",
        "AREASNM": "烏來區"
    },
    {
        "AREANM": "新北市永和區",
        "ZIP": "234",
        "CNAME": "新北市",
        "AREASNM": "永和區"
    },
    {
        "AREANM": "新北市中和區",
        "ZIP": "235",
        "CNAME": "新北市",
        "AREASNM": "中和區"
    },
    {
        "AREANM": "新北市土城區",
        "ZIP": "236",
        "CNAME": "新北市",
        "AREASNM": "土城區"
    },
    {
        "AREANM": "新北市三峽區",
        "ZIP": "237",
        "CNAME": "新北市",
        "AREASNM": "三峽區"
    },
    {
        "AREANM": "新北市樹林區",
        "ZIP": "238",
        "CNAME": "新北市",
        "AREASNM": "樹林區"
    },
    {
        "AREANM": "新北市鶯歌區",
        "ZIP": "239",
        "CNAME": "新北市",
        "AREASNM": "鶯歌區"
    },
    {
        "AREANM": "新北市三重區",
        "ZIP": "241",
        "CNAME": "新北市",
        "AREASNM": "三重區"
    },
    {
        "AREANM": "新北市新莊區",
        "ZIP": "242",
        "CNAME": "新北市",
        "AREASNM": "新莊區"
    },
    {
        "AREANM": "新北市泰山區",
        "ZIP": "243",
        "CNAME": "新北市",
        "AREASNM": "泰山區"
    },
    {
        "AREANM": "新北市林口區",
        "ZIP": "244",
        "CNAME": "新北市",
        "AREASNM": "林口區"
    },
    {
        "AREANM": "新北市蘆洲區",
        "ZIP": "247",
        "CNAME": "新北市",
        "AREASNM": "蘆洲區"
    },
    {
        "AREANM": "新北市五股區",
        "ZIP": "248",
        "CNAME": "新北市",
        "AREASNM": "五股區"
    },
    {
        "AREANM": "新北市八里區",
        "ZIP": "249",
        "CNAME": "新北市",
        "AREASNM": "八里區"
    },
    {
        "AREANM": "新北市淡水區",
        "ZIP": "251",
        "CNAME": "新北市",
        "AREASNM": "淡水區"
    },
    {
        "AREANM": "新北市三芝區",
        "ZIP": "252",
        "CNAME": "新北市",
        "AREASNM": "三芝區"
    },
    {
        "AREANM": "新北市石門區",
        "ZIP": "253",
        "CNAME": "新北市",
        "AREASNM": "石門區"
    },
    {
        "AREANM": "宜蘭縣宜蘭市",
        "ZIP": "260",
        "CNAME": "宜蘭縣",
        "AREASNM": "宜蘭市"
    },
    {
        "AREANM": "宜蘭縣頭城鎮",
        "ZIP": "261",
        "CNAME": "宜蘭縣",
        "AREASNM": "頭城鎮"
    },
    {
        "AREANM": "宜蘭縣礁溪鄉",
        "ZIP": "262",
        "CNAME": "宜蘭縣",
        "AREASNM": "礁溪鄉"
    },
    {
        "AREANM": "宜蘭縣壯圍鄉",
        "ZIP": "263",
        "CNAME": "宜蘭縣",
        "AREASNM": "壯圍鄉"
    },
    {
        "AREANM": "宜蘭縣員山鄉",
        "ZIP": "264",
        "CNAME": "宜蘭縣",
        "AREASNM": "員山鄉"
    },
    {
        "AREANM": "宜蘭縣羅東鎮",
        "ZIP": "265",
        "CNAME": "宜蘭縣",
        "AREASNM": "羅東鎮"
    },
    {
        "AREANM": "宜蘭縣三星鄉",
        "ZIP": "266",
        "CNAME": "宜蘭縣",
        "AREASNM": "三星鄉"
    },
    {
        "AREANM": "宜蘭縣大同鄉",
        "ZIP": "267",
        "CNAME": "宜蘭縣",
        "AREASNM": "大同鄉"
    },
    {
        "AREANM": "宜蘭縣五結鄉",
        "ZIP": "268",
        "CNAME": "宜蘭縣",
        "AREASNM": "五結鄉"
    },
    {
        "AREANM": "宜蘭縣冬山鄉",
        "ZIP": "269",
        "CNAME": "宜蘭縣",
        "AREASNM": "冬山鄉"
    },
    {
        "AREANM": "宜蘭縣蘇澳鎮",
        "ZIP": "270",
        "CNAME": "宜蘭縣",
        "AREASNM": "蘇澳鎮"
    },
    {
        "AREANM": "宜蘭縣南澳鄉",
        "ZIP": "272",
        "CNAME": "宜蘭縣",
        "AREASNM": "南澳鄉"
    },
    {
        "AREANM": "新竹市香山區",
        "ZIP": "300",
        "CNAME": "新竹市",
        "AREASNM": "香山區"
    },
    {
        "AREANM": "新竹市北區",
        "ZIP": "300",
        "CNAME": "新竹市",
        "AREASNM": "北區"
    },
    {
        "AREANM": "新竹市東區",
        "ZIP": "300",
        "CNAME": "新竹市",
        "AREASNM": "東區"
    },
    {
        "AREANM": "新竹縣竹北市",
        "ZIP": "302",
        "CNAME": "新竹縣",
        "AREASNM": "竹北市"
    },
    {
        "AREANM": "新竹縣湖口鄉",
        "ZIP": "303",
        "CNAME": "新竹縣",
        "AREASNM": "湖口鄉"
    },
    {
        "AREANM": "新竹縣新豐鄉",
        "ZIP": "304",
        "CNAME": "新竹縣",
        "AREASNM": "新豐鄉"
    },
    {
        "AREANM": "新竹縣新埔鎮",
        "ZIP": "305",
        "CNAME": "新竹縣",
        "AREASNM": "新埔鎮"
    },
    {
        "AREANM": "新竹縣關西鎮",
        "ZIP": "306",
        "CNAME": "新竹縣",
        "AREASNM": "關西鎮"
    },
    {
        "AREANM": "新竹縣芎林鄉",
        "ZIP": "307",
        "CNAME": "新竹縣",
        "AREASNM": "芎林鄉"
    },
    {
        "AREANM": "新竹縣寶山鄉",
        "ZIP": "308",
        "CNAME": "新竹縣",
        "AREASNM": "寶山鄉"
    },
    {
        "AREANM": "新竹縣竹東鎮",
        "ZIP": "310",
        "CNAME": "新竹縣",
        "AREASNM": "竹東鎮"
    },
    {
        "AREANM": "新竹縣五峰鄉",
        "ZIP": "311",
        "CNAME": "新竹縣",
        "AREASNM": "五峰鄉"
    },
    {
        "AREANM": "新竹縣橫山鄉",
        "ZIP": "312",
        "CNAME": "新竹縣",
        "AREASNM": "橫山鄉"
    },
    {
        "AREANM": "新竹縣尖石鄉",
        "ZIP": "313",
        "CNAME": "新竹縣",
        "AREASNM": "尖石鄉"
    },
    {
        "AREANM": "新竹縣北埔鄉",
        "ZIP": "314",
        "CNAME": "新竹縣",
        "AREASNM": "北埔鄉"
    },
    {
        "AREANM": "新竹縣峨眉鄉",
        "ZIP": "315",
        "CNAME": "新竹縣",
        "AREASNM": "峨眉鄉"
    },
    {
        "AREANM": "桃園市中壢區",
        "ZIP": "320",
        "CNAME": "桃園市",
        "AREASNM": "中壢區"
    },
    {
        "AREANM": "桃園市平鎮區",
        "ZIP": "324",
        "CNAME": "桃園市",
        "AREASNM": "平鎮區"
    },
    {
        "AREANM": "桃園市龍潭區",
        "ZIP": "325",
        "CNAME": "桃園市",
        "AREASNM": "龍潭區"
    },
    {
        "AREANM": "桃園市楊梅區",
        "ZIP": "326",
        "CNAME": "桃園市",
        "AREASNM": "楊梅區"
    },
    {
        "AREANM": "桃園市新屋區",
        "ZIP": "327",
        "CNAME": "桃園市",
        "AREASNM": "新屋區"
    },
    {
        "AREANM": "桃園市觀音區",
        "ZIP": "328",
        "CNAME": "桃園市",
        "AREASNM": "觀音區"
    },
    {
        "AREANM": "桃園市桃園區",
        "ZIP": "330",
        "CNAME": "桃園市",
        "AREASNM": "桃園區"
    },
    {
        "AREANM": "桃園市龜山區",
        "ZIP": "333",
        "CNAME": "桃園市",
        "AREASNM": "龜山區"
    },
    {
        "AREANM": "桃園市八德區",
        "ZIP": "334",
        "CNAME": "桃園市",
        "AREASNM": "八德區"
    },
    {
        "AREANM": "桃園市大溪區",
        "ZIP": "335",
        "CNAME": "桃園市",
        "AREASNM": "大溪區"
    },
    {
        "AREANM": "桃園市復興區",
        "ZIP": "336",
        "CNAME": "桃園市",
        "AREASNM": "復興區"
    },
    {
        "AREANM": "桃園市大園區",
        "ZIP": "337",
        "CNAME": "桃園市",
        "AREASNM": "大園區"
    },
    {
        "AREANM": "桃園市蘆竹區",
        "ZIP": "338",
        "CNAME": "桃園市",
        "AREASNM": "蘆竹區"
    },
    {
        "AREANM": "苗栗縣竹南鎮",
        "ZIP": "350",
        "CNAME": "苗栗縣",
        "AREASNM": "竹南鎮"
    },
    {
        "AREANM": "苗栗縣頭份市",
        "ZIP": "351",
        "CNAME": "苗栗縣",
        "AREASNM": "頭份市"
    },
    {
        "AREANM": "苗栗縣三灣鄉",
        "ZIP": "352",
        "CNAME": "苗栗縣",
        "AREASNM": "三灣鄉"
    },
    {
        "AREANM": "苗栗縣南庄鄉",
        "ZIP": "353",
        "CNAME": "苗栗縣",
        "AREASNM": "南庄鄉"
    },
    {
        "AREANM": "苗栗縣獅潭鄉",
        "ZIP": "354",
        "CNAME": "苗栗縣",
        "AREASNM": "獅潭鄉"
    },
    {
        "AREANM": "苗栗縣後龍鎮",
        "ZIP": "356",
        "CNAME": "苗栗縣",
        "AREASNM": "後龍鎮"
    },
    {
        "AREANM": "苗栗縣通霄鎮",
        "ZIP": "357",
        "CNAME": "苗栗縣",
        "AREASNM": "通霄鎮"
    },
    {
        "AREANM": "苗栗縣苑裡鎮",
        "ZIP": "358",
        "CNAME": "苗栗縣",
        "AREASNM": "苑裡鎮"
    },
    {
        "AREANM": "苗栗縣苗栗市",
        "ZIP": "360",
        "CNAME": "苗栗縣",
        "AREASNM": "苗栗市"
    },
    {
        "AREANM": "苗栗縣造橋鄉",
        "ZIP": "361",
        "CNAME": "苗栗縣",
        "AREASNM": "造橋鄉"
    },
    {
        "AREANM": "苗栗縣頭屋鄉",
        "ZIP": "362",
        "CNAME": "苗栗縣",
        "AREASNM": "頭屋鄉"
    },
    {
        "AREANM": "苗栗縣公館鄉",
        "ZIP": "363",
        "CNAME": "苗栗縣",
        "AREASNM": "公館鄉"
    },
    {
        "AREANM": "苗栗縣大湖鄉",
        "ZIP": "364",
        "CNAME": "苗栗縣",
        "AREASNM": "大湖鄉"
    },
    {
        "AREANM": "苗栗縣泰安鄉",
        "ZIP": "365",
        "CNAME": "苗栗縣",
        "AREASNM": "泰安鄉"
    },
    {
        "AREANM": "苗栗縣銅鑼鄉",
        "ZIP": "366",
        "CNAME": "苗栗縣",
        "AREASNM": "銅鑼鄉"
    },
    {
        "AREANM": "苗栗縣三義鄉",
        "ZIP": "367",
        "CNAME": "苗栗縣",
        "AREASNM": "三義鄉"
    },
    {
        "AREANM": "苗栗縣西湖鄉",
        "ZIP": "368",
        "CNAME": "苗栗縣",
        "AREASNM": "西湖鄉"
    },
    {
        "AREANM": "苗栗縣卓蘭鎮",
        "ZIP": "369",
        "CNAME": "苗栗縣",
        "AREASNM": "卓蘭鎮"
    },
    {
        "AREANM": "臺中市中區",
        "ZIP": "400",
        "CNAME": "台中市",
        "AREASNM": "中區"
    },
    {
        "AREANM": "臺中市東區",
        "ZIP": "401",
        "CNAME": "台中市",
        "AREASNM": "東區"
    },
    {
        "AREANM": "臺中市南區",
        "ZIP": "402",
        "CNAME": "台中市",
        "AREASNM": "南區"
    },
    {
        "AREANM": "臺中市西區",
        "ZIP": "403",
        "CNAME": "台中市",
        "AREASNM": "西區"
    },
    {
        "AREANM": "臺中市北區",
        "ZIP": "404",
        "CNAME": "台中市",
        "AREASNM": "北區"
    },
    {
        "AREANM": "臺中市北屯區",
        "ZIP": "406",
        "CNAME": "台中市",
        "AREASNM": "北屯區"
    },
    {
        "AREANM": "臺中市西屯區",
        "ZIP": "407",
        "CNAME": "台中市",
        "AREASNM": "西屯區"
    },
    {
        "AREANM": "臺中市南屯區",
        "ZIP": "408",
        "CNAME": "台中市",
        "AREASNM": "南屯區"
    },
    {
        "AREANM": "臺中市太平區",
        "ZIP": "411",
        "CNAME": "台中市",
        "AREASNM": "太平區"
    },
    {
        "AREANM": "臺中市大里區",
        "ZIP": "412",
        "CNAME": "台中市",
        "AREASNM": "大里區"
    },
    {
        "AREANM": "臺中市霧峰區",
        "ZIP": "413",
        "CNAME": "台中市",
        "AREASNM": "霧峰區"
    },
    {
        "AREANM": "臺中市烏日區",
        "ZIP": "414",
        "CNAME": "台中市",
        "AREASNM": "烏日區"
    },
    {
        "AREANM": "臺中市豐原區",
        "ZIP": "420",
        "CNAME": "台中市",
        "AREASNM": "豐原區"
    },
    {
        "AREANM": "臺中市后里區",
        "ZIP": "421",
        "CNAME": "台中市",
        "AREASNM": "后里區"
    },
    {
        "AREANM": "臺中市石岡區",
        "ZIP": "422",
        "CNAME": "台中市",
        "AREASNM": "石岡區"
    },
    {
        "AREANM": "臺中市東勢區",
        "ZIP": "423",
        "CNAME": "台中市",
        "AREASNM": "東勢區"
    },
    {
        "AREANM": "臺中市和平區",
        "ZIP": "424",
        "CNAME": "台中市",
        "AREASNM": "和平區"
    },
    {
        "AREANM": "臺中市新社區",
        "ZIP": "426",
        "CNAME": "台中市",
        "AREASNM": "新社區"
    },
    {
        "AREANM": "臺中市潭子區",
        "ZIP": "427",
        "CNAME": "台中市",
        "AREASNM": "潭子區"
    },
    {
        "AREANM": "臺中市大雅區",
        "ZIP": "428",
        "CNAME": "台中市",
        "AREASNM": "大雅區"
    },
    {
        "AREANM": "臺中市神岡區",
        "ZIP": "429",
        "CNAME": "台中市",
        "AREASNM": "神岡區"
    },
    {
        "AREANM": "臺中市大肚區",
        "ZIP": "432",
        "CNAME": "台中市",
        "AREASNM": "大肚區"
    },
    {
        "AREANM": "臺中市沙鹿區",
        "ZIP": "433",
        "CNAME": "台中市",
        "AREASNM": "沙鹿區"
    },
    {
        "AREANM": "臺中市龍井區",
        "ZIP": "434",
        "CNAME": "台中市",
        "AREASNM": "龍井區"
    },
    {
        "AREANM": "臺中市梧棲區",
        "ZIP": "435",
        "CNAME": "台中市",
        "AREASNM": "梧棲區"
    },
    {
        "AREANM": "臺中市清水區",
        "ZIP": "436",
        "CNAME": "台中市",
        "AREASNM": "清水區"
    },
    {
        "AREANM": "臺中市大甲區",
        "ZIP": "437",
        "CNAME": "台中市",
        "AREASNM": "大甲區"
    },
    {
        "AREANM": "臺中市外埔區",
        "ZIP": "438",
        "CNAME": "台中市",
        "AREASNM": "外埔區"
    },
    {
        "AREANM": "臺中市大安區",
        "ZIP": "439",
        "CNAME": "台中市",
        "AREASNM": "大安區"
    },
    {
        "AREANM": "彰化縣彰化市",
        "ZIP": "500",
        "CNAME": "彰化縣",
        "AREASNM": "彰化市"
    },
    {
        "AREANM": "彰化縣芬園鄉",
        "ZIP": "502",
        "CNAME": "彰化縣",
        "AREASNM": "芬園鄉"
    },
    {
        "AREANM": "彰化縣花壇鄉",
        "ZIP": "503",
        "CNAME": "彰化縣",
        "AREASNM": "花壇鄉"
    },
    {
        "AREANM": "彰化縣秀水鄉",
        "ZIP": "504",
        "CNAME": "彰化縣",
        "AREASNM": "秀水鄉"
    },
    {
        "AREANM": "彰化縣鹿港鎮",
        "ZIP": "505",
        "CNAME": "彰化縣",
        "AREASNM": "鹿港鎮"
    },
    {
        "AREANM": "彰化縣福興鄉",
        "ZIP": "506",
        "CNAME": "彰化縣",
        "AREASNM": "福興鄉"
    },
    {
        "AREANM": "彰化縣線西鄉",
        "ZIP": "507",
        "CNAME": "彰化縣",
        "AREASNM": "線西鄉"
    },
    {
        "AREANM": "彰化縣和美鎮",
        "ZIP": "508",
        "CNAME": "彰化縣",
        "AREASNM": "和美鎮"
    },
    {
        "AREANM": "彰化縣伸港鄉",
        "ZIP": "509",
        "CNAME": "彰化縣",
        "AREASNM": "伸港鄉"
    },
    {
        "AREANM": "彰化縣員林市",
        "ZIP": "510",
        "CNAME": "彰化縣",
        "AREASNM": "員林市"
    },
    {
        "AREANM": "彰化縣社頭鄉",
        "ZIP": "511",
        "CNAME": "彰化縣",
        "AREASNM": "社頭鄉"
    },
    {
        "AREANM": "彰化縣永靖鄉",
        "ZIP": "512",
        "CNAME": "彰化縣",
        "AREASNM": "永靖鄉"
    },
    {
        "AREANM": "彰化縣埔心鄉",
        "ZIP": "513",
        "CNAME": "彰化縣",
        "AREASNM": "埔心鄉"
    },
    {
        "AREANM": "彰化縣溪湖鎮",
        "ZIP": "514",
        "CNAME": "彰化縣",
        "AREASNM": "溪湖鎮"
    },
    {
        "AREANM": "彰化縣大村鄉",
        "ZIP": "515",
        "CNAME": "彰化縣",
        "AREASNM": "大村鄉"
    },
    {
        "AREANM": "彰化縣埔鹽鄉",
        "ZIP": "516",
        "CNAME": "彰化縣",
        "AREASNM": "埔鹽鄉"
    },
    {
        "AREANM": "彰化縣田中鎮",
        "ZIP": "520",
        "CNAME": "彰化縣",
        "AREASNM": "田中鎮"
    },
    {
        "AREANM": "彰化縣北斗鎮",
        "ZIP": "521",
        "CNAME": "彰化縣",
        "AREASNM": "北斗鎮"
    },
    {
        "AREANM": "彰化縣田尾鄉",
        "ZIP": "522",
        "CNAME": "彰化縣",
        "AREASNM": "田尾鄉"
    },
    {
        "AREANM": "彰化縣埤頭鄉",
        "ZIP": "523",
        "CNAME": "彰化縣",
        "AREASNM": "埤頭鄉"
    },
    {
        "AREANM": "彰化縣溪州鄉",
        "ZIP": "524",
        "CNAME": "彰化縣",
        "AREASNM": "溪州鄉"
    },
    {
        "AREANM": "彰化縣竹塘鄉",
        "ZIP": "525",
        "CNAME": "彰化縣",
        "AREASNM": "竹塘鄉"
    },
    {
        "AREANM": "彰化縣二林鎮",
        "ZIP": "526",
        "CNAME": "彰化縣",
        "AREASNM": "二林鎮"
    },
    {
        "AREANM": "彰化縣大城鄉",
        "ZIP": "527",
        "CNAME": "彰化縣",
        "AREASNM": "大城鄉"
    },
    {
        "AREANM": "彰化縣芳苑鄉",
        "ZIP": "528",
        "CNAME": "彰化縣",
        "AREASNM": "芳苑鄉"
    },
    {
        "AREANM": "彰化縣二水鄉",
        "ZIP": "530",
        "CNAME": "彰化縣",
        "AREASNM": "二水鄉"
    },
    {
        "AREANM": "南投縣南投市",
        "ZIP": "540",
        "CNAME": "南投縣",
        "AREASNM": "南投市"
    },
    {
        "AREANM": "南投縣中寮鄉",
        "ZIP": "541",
        "CNAME": "南投縣",
        "AREASNM": "中寮鄉"
    },
    {
        "AREANM": "南投縣草屯鎮",
        "ZIP": "542",
        "CNAME": "南投縣",
        "AREASNM": "草屯鎮"
    },
    {
        "AREANM": "南投縣國姓鄉",
        "ZIP": "544",
        "CNAME": "南投縣",
        "AREASNM": "國姓鄉"
    },
    {
        "AREANM": "南投縣埔里鎮",
        "ZIP": "545",
        "CNAME": "南投縣",
        "AREASNM": "埔里鎮"
    },
    {
        "AREANM": "南投縣仁愛鄉",
        "ZIP": "546",
        "CNAME": "南投縣",
        "AREASNM": "仁愛鄉"
    },
    {
        "AREANM": "南投縣名間鄉",
        "ZIP": "551",
        "CNAME": "南投縣",
        "AREASNM": "名間鄉"
    },
    {
        "AREANM": "南投縣集集鎮",
        "ZIP": "552",
        "CNAME": "南投縣",
        "AREASNM": "集集鎮"
    },
    {
        "AREANM": "南投縣水里鄉",
        "ZIP": "553",
        "CNAME": "南投縣",
        "AREASNM": "水里鄉"
    },
    {
        "AREANM": "南投縣魚池鄉",
        "ZIP": "555",
        "CNAME": "南投縣",
        "AREASNM": "魚池鄉"
    },
    {
        "AREANM": "南投縣信義鄉",
        "ZIP": "556",
        "CNAME": "南投縣",
        "AREASNM": "信義鄉"
    },
    {
        "AREANM": "南投縣竹山鎮",
        "ZIP": "557",
        "CNAME": "南投縣",
        "AREASNM": "竹山鎮"
    },
    {
        "AREANM": "南投縣鹿谷鄉",
        "ZIP": "558",
        "CNAME": "南投縣",
        "AREASNM": "鹿谷鄉"
    },
    {
        "AREANM": "嘉義市東區",
        "ZIP": "600",
        "CNAME": "嘉義市",
        "AREASNM": "東區"
    },
    {
        "AREANM": "嘉義市西區",
        "ZIP": "600",
        "CNAME": "嘉義市",
        "AREASNM": "西區"
    },
    {
        "AREANM": "嘉義縣番路鄉",
        "ZIP": "602",
        "CNAME": "嘉義縣",
        "AREASNM": "番路鄉"
    },
    {
        "AREANM": "嘉義縣梅山鄉",
        "ZIP": "603",
        "CNAME": "嘉義縣",
        "AREASNM": "梅山鄉"
    },
    {
        "AREANM": "嘉義縣竹崎鄉",
        "ZIP": "604",
        "CNAME": "嘉義縣",
        "AREASNM": "竹崎鄉"
    },
    {
        "AREANM": "嘉義縣阿里山鄉",
        "ZIP": "605",
        "CNAME": "嘉義縣",
        "AREASNM": "阿里山鄉"
    },
    {
        "AREANM": "嘉義縣中埔鄉",
        "ZIP": "606",
        "CNAME": "嘉義縣",
        "AREASNM": "中埔鄉"
    },
    {
        "AREANM": "嘉義縣大埔鄉",
        "ZIP": "607",
        "CNAME": "嘉義縣",
        "AREASNM": "大埔鄉"
    },
    {
        "AREANM": "嘉義縣水上鄉",
        "ZIP": "608",
        "CNAME": "嘉義縣",
        "AREASNM": "水上鄉"
    },
    {
        "AREANM": "嘉義縣鹿草鄉",
        "ZIP": "611",
        "CNAME": "嘉義縣",
        "AREASNM": "鹿草鄉"
    },
    {
        "AREANM": "嘉義縣太保市",
        "ZIP": "612",
        "CNAME": "嘉義縣",
        "AREASNM": "太保市"
    },
    {
        "AREANM": "嘉義縣朴子市",
        "ZIP": "613",
        "CNAME": "嘉義縣",
        "AREASNM": "朴子市"
    },
    {
        "AREANM": "嘉義縣東石鄉",
        "ZIP": "614",
        "CNAME": "嘉義縣",
        "AREASNM": "東石鄉"
    },
    {
        "AREANM": "嘉義縣六腳鄉",
        "ZIP": "615",
        "CNAME": "嘉義縣",
        "AREASNM": "六腳鄉"
    },
    {
        "AREANM": "嘉義縣新港鄉",
        "ZIP": "616",
        "CNAME": "嘉義縣",
        "AREASNM": "新港鄉"
    },
    {
        "AREANM": "嘉義縣民雄鄉",
        "ZIP": "621",
        "CNAME": "嘉義縣",
        "AREASNM": "民雄鄉"
    },
    {
        "AREANM": "嘉義縣大林鎮",
        "ZIP": "622",
        "CNAME": "嘉義縣",
        "AREASNM": "大林鎮"
    },
    {
        "AREANM": "嘉義縣溪口鄉",
        "ZIP": "623",
        "CNAME": "嘉義縣",
        "AREASNM": "溪口鄉"
    },
    {
        "AREANM": "嘉義縣義竹鄉",
        "ZIP": "624",
        "CNAME": "嘉義縣",
        "AREASNM": "義竹鄉"
    },
    {
        "AREANM": "嘉義縣布袋鎮",
        "ZIP": "625",
        "CNAME": "嘉義縣",
        "AREASNM": "布袋鎮"
    },
    {
        "AREANM": "雲林縣斗南鎮",
        "ZIP": "630",
        "CNAME": "雲林縣",
        "AREASNM": "斗南鎮"
    },
    {
        "AREANM": "雲林縣大埤鄉",
        "ZIP": "631",
        "CNAME": "雲林縣",
        "AREASNM": "大埤鄉"
    },
    {
        "AREANM": "雲林縣虎尾鎮",
        "ZIP": "632",
        "CNAME": "雲林縣",
        "AREASNM": "虎尾鎮"
    },
    {
        "AREANM": "雲林縣土庫鎮",
        "ZIP": "633",
        "CNAME": "雲林縣",
        "AREASNM": "土庫鎮"
    },
    {
        "AREANM": "雲林縣褒忠鄉",
        "ZIP": "634",
        "CNAME": "雲林縣",
        "AREASNM": "褒忠鄉"
    },
    {
        "AREANM": "雲林縣東勢鄉",
        "ZIP": "635",
        "CNAME": "雲林縣",
        "AREASNM": "東勢鄉"
    },
    {
        "AREANM": "雲林縣臺西鄉",
        "ZIP": "636",
        "CNAME": "雲林縣",
        "AREASNM": "臺西鄉"
    },
    {
        "AREANM": "雲林縣崙背鄉",
        "ZIP": "637",
        "CNAME": "雲林縣",
        "AREASNM": "崙背鄉"
    },
    {
        "AREANM": "雲林縣麥寮鄉",
        "ZIP": "638",
        "CNAME": "雲林縣",
        "AREASNM": "麥寮鄉"
    },
    {
        "AREANM": "雲林縣斗六市",
        "ZIP": "640",
        "CNAME": "雲林縣",
        "AREASNM": "斗六市"
    },
    {
        "AREANM": "雲林縣林內鄉",
        "ZIP": "643",
        "CNAME": "雲林縣",
        "AREASNM": "林內鄉"
    },
    {
        "AREANM": "雲林縣古坑鄉",
        "ZIP": "646",
        "CNAME": "雲林縣",
        "AREASNM": "古坑鄉"
    },
    {
        "AREANM": "雲林縣莿桐鄉",
        "ZIP": "647",
        "CNAME": "雲林縣",
        "AREASNM": "莿桐鄉"
    },
    {
        "AREANM": "雲林縣西螺鎮",
        "ZIP": "648",
        "CNAME": "雲林縣",
        "AREASNM": "西螺鎮"
    },
    {
        "AREANM": "雲林縣二崙鄉",
        "ZIP": "649",
        "CNAME": "雲林縣",
        "AREASNM": "二崙鄉"
    },
    {
        "AREANM": "雲林縣北港鎮",
        "ZIP": "651",
        "CNAME": "雲林縣",
        "AREASNM": "北港鎮"
    },
    {
        "AREANM": "雲林縣水林鄉",
        "ZIP": "652",
        "CNAME": "雲林縣",
        "AREASNM": "水林鄉"
    },
    {
        "AREANM": "雲林縣口湖鄉",
        "ZIP": "653",
        "CNAME": "雲林縣",
        "AREASNM": "口湖鄉"
    },
    {
        "AREANM": "雲林縣四湖鄉",
        "ZIP": "654",
        "CNAME": "雲林縣",
        "AREASNM": "四湖鄉"
    },
    {
        "AREANM": "雲林縣元長鄉",
        "ZIP": "655",
        "CNAME": "雲林縣",
        "AREASNM": "元長鄉"
    },
    {
        "AREANM": "臺南市中西區",
        "ZIP": "700",
        "CNAME": "台南市",
        "AREASNM": "中西區"
    },
    {
        "AREANM": "臺南市東區",
        "ZIP": "701",
        "CNAME": "台南市",
        "AREASNM": "東區"
    },
    {
        "AREANM": "臺南市南區",
        "ZIP": "702",
        "CNAME": "台南市",
        "AREASNM": "南區"
    },
    {
        "AREANM": "臺南市北區",
        "ZIP": "704",
        "CNAME": "台南市",
        "AREASNM": "北區"
    },
    {
        "AREANM": "臺南市安平區",
        "ZIP": "708",
        "CNAME": "台南市",
        "AREASNM": "安平區"
    },
    {
        "AREANM": "臺南市安南區",
        "ZIP": "709",
        "CNAME": "台南市",
        "AREASNM": "安南區"
    },
    {
        "AREANM": "臺南市永康區",
        "ZIP": "710",
        "CNAME": "台南市",
        "AREASNM": "永康區"
    },
    {
        "AREANM": "臺南市歸仁區",
        "ZIP": "711",
        "CNAME": "台南市",
        "AREASNM": "歸仁區"
    },
    {
        "AREANM": "臺南市新化區",
        "ZIP": "712",
        "CNAME": "台南市",
        "AREASNM": "新化區"
    },
    {
        "AREANM": "臺南市左鎮區",
        "ZIP": "713",
        "CNAME": "台南市",
        "AREASNM": "左鎮區"
    },
    {
        "AREANM": "臺南市玉井區",
        "ZIP": "714",
        "CNAME": "台南市",
        "AREASNM": "玉井區"
    },
    {
        "AREANM": "臺南市楠西區",
        "ZIP": "715",
        "CNAME": "台南市",
        "AREASNM": "楠西區"
    },
    {
        "AREANM": "臺南市南化區",
        "ZIP": "716",
        "CNAME": "台南市",
        "AREASNM": "南化區"
    },
    {
        "AREANM": "臺南市仁德區",
        "ZIP": "717",
        "CNAME": "台南市",
        "AREASNM": "仁德區"
    },
    {
        "AREANM": "臺南市關廟區",
        "ZIP": "718",
        "CNAME": "台南市",
        "AREASNM": "關廟區"
    },
    {
        "AREANM": "臺南市龍崎區",
        "ZIP": "719",
        "CNAME": "台南市",
        "AREASNM": "龍崎區"
    },
    {
        "AREANM": "臺南市官田區",
        "ZIP": "720",
        "CNAME": "台南市",
        "AREASNM": "官田區"
    },
    {
        "AREANM": "臺南市麻豆區",
        "ZIP": "721",
        "CNAME": "台南市",
        "AREASNM": "麻豆區"
    },
    {
        "AREANM": "臺南市佳里區",
        "ZIP": "722",
        "CNAME": "台南市",
        "AREASNM": "佳里區"
    },
    {
        "AREANM": "臺南市西港區",
        "ZIP": "723",
        "CNAME": "台南市",
        "AREASNM": "西港區"
    },
    {
        "AREANM": "臺南市七股區",
        "ZIP": "724",
        "CNAME": "台南市",
        "AREASNM": "七股區"
    },
    {
        "AREANM": "臺南市將軍區",
        "ZIP": "725",
        "CNAME": "台南市",
        "AREASNM": "將軍區"
    },
    {
        "AREANM": "臺南市學甲區",
        "ZIP": "726",
        "CNAME": "台南市",
        "AREASNM": "學甲區"
    },
    {
        "AREANM": "臺南市北門區",
        "ZIP": "727",
        "CNAME": "台南市",
        "AREASNM": "北門區"
    },
    {
        "AREANM": "臺南市新營區",
        "ZIP": "730",
        "CNAME": "台南市",
        "AREASNM": "新營區"
    },
    {
        "AREANM": "臺南市後壁區",
        "ZIP": "731",
        "CNAME": "台南市",
        "AREASNM": "後壁區"
    },
    {
        "AREANM": "臺南市白河區",
        "ZIP": "732",
        "CNAME": "台南市",
        "AREASNM": "白河區"
    },
    {
        "AREANM": "臺南市東山區",
        "ZIP": "733",
        "CNAME": "台南市",
        "AREASNM": "東山區"
    },
    {
        "AREANM": "臺南市六甲區",
        "ZIP": "734",
        "CNAME": "台南市",
        "AREASNM": "六甲區"
    },
    {
        "AREANM": "臺南市下營區",
        "ZIP": "735",
        "CNAME": "台南市",
        "AREASNM": "下營區"
    },
    {
        "AREANM": "臺南市柳營區",
        "ZIP": "736",
        "CNAME": "台南市",
        "AREASNM": "柳營區"
    },
    {
        "AREANM": "臺南市鹽水區",
        "ZIP": "737",
        "CNAME": "台南市",
        "AREASNM": "鹽水區"
    },
    {
        "AREANM": "臺南市善化區",
        "ZIP": "741",
        "CNAME": "台南市",
        "AREASNM": "善化區"
    },
    {
        "AREANM": "臺南市大內區",
        "ZIP": "742",
        "CNAME": "台南市",
        "AREASNM": "大內區"
    },
    {
        "AREANM": "臺南市山上區",
        "ZIP": "743",
        "CNAME": "台南市",
        "AREASNM": "山上區"
    },
    {
        "AREANM": "臺南市新市區",
        "ZIP": "744",
        "CNAME": "台南市",
        "AREASNM": "新市區"
    },
    {
        "AREANM": "臺南市安定區",
        "ZIP": "745",
        "CNAME": "台南市",
        "AREASNM": "安定區"
    },
    {
        "AREANM": "高雄市新興區",
        "ZIP": "800",
        "CNAME": "高雄市",
        "AREASNM": "新興區"
    },
    {
        "AREANM": "高雄市前金區",
        "ZIP": "801",
        "CNAME": "高雄市",
        "AREASNM": "前金區"
    },
    {
        "AREANM": "高雄市苓雅區",
        "ZIP": "802",
        "CNAME": "高雄市",
        "AREASNM": "苓雅區"
    },
    {
        "AREANM": "高雄市鹽埕區",
        "ZIP": "803",
        "CNAME": "高雄市",
        "AREASNM": "鹽埕區"
    },
    {
        "AREANM": "高雄市鼓山區",
        "ZIP": "804",
        "CNAME": "高雄市",
        "AREASNM": "鼓山區"
    },
    {
        "AREANM": "高雄市旗津區",
        "ZIP": "805",
        "CNAME": "高雄市",
        "AREASNM": "旗津區"
    },
    {
        "AREANM": "高雄市前鎮區",
        "ZIP": "806",
        "CNAME": "高雄市",
        "AREASNM": "前鎮區"
    },
    {
        "AREANM": "高雄市三民區",
        "ZIP": "807",
        "CNAME": "高雄市",
        "AREASNM": "三民區"
    },
    {
        "AREANM": "高雄市楠梓區",
        "ZIP": "811",
        "CNAME": "高雄市",
        "AREASNM": "楠梓區"
    },
    {
        "AREANM": "高雄市小港區",
        "ZIP": "812",
        "CNAME": "高雄市",
        "AREASNM": "小港區"
    },
    {
        "AREANM": "高雄市左營區",
        "ZIP": "813",
        "CNAME": "高雄市",
        "AREASNM": "左營區"
    },
    {
        "AREANM": "高雄市仁武區",
        "ZIP": "814",
        "CNAME": "高雄市",
        "AREASNM": "仁武區"
    },
    {
        "AREANM": "高雄市大社區",
        "ZIP": "815",
        "CNAME": "高雄市",
        "AREASNM": "大社區"
    },
    {
        "AREANM": "高雄市岡山區",
        "ZIP": "820",
        "CNAME": "高雄市",
        "AREASNM": "岡山區"
    },
    {
        "AREANM": "高雄市路竹區",
        "ZIP": "821",
        "CNAME": "高雄市",
        "AREASNM": "路竹區"
    },
    {
        "AREANM": "高雄市阿蓮區",
        "ZIP": "822",
        "CNAME": "高雄市",
        "AREASNM": "阿蓮區"
    },
    {
        "AREANM": "高雄市田寮區",
        "ZIP": "823",
        "CNAME": "高雄市",
        "AREASNM": "田寮區"
    },
    {
        "AREANM": "高雄市燕巢區",
        "ZIP": "824",
        "CNAME": "高雄市",
        "AREASNM": "燕巢區"
    },
    {
        "AREANM": "高雄市橋頭區",
        "ZIP": "825",
        "CNAME": "高雄市",
        "AREASNM": "橋頭區"
    },
    {
        "AREANM": "高雄市梓官區",
        "ZIP": "826",
        "CNAME": "高雄市",
        "AREASNM": "梓官區"
    },
    {
        "AREANM": "高雄市彌陀區",
        "ZIP": "827",
        "CNAME": "高雄市",
        "AREASNM": "彌陀區"
    },
    {
        "AREANM": "高雄市永安區",
        "ZIP": "828",
        "CNAME": "高雄市",
        "AREASNM": "永安區"
    },
    {
        "AREANM": "高雄市湖內區",
        "ZIP": "829",
        "CNAME": "高雄市",
        "AREASNM": "湖內區"
    },
    {
        "AREANM": "高雄市鳳山區",
        "ZIP": "830",
        "CNAME": "高雄市",
        "AREASNM": "鳳山區"
    },
    {
        "AREANM": "高雄市大寮區",
        "ZIP": "831",
        "CNAME": "高雄市",
        "AREASNM": "大寮區"
    },
    {
        "AREANM": "高雄市林園區",
        "ZIP": "832",
        "CNAME": "高雄市",
        "AREASNM": "林園區"
    },
    {
        "AREANM": "高雄市鳥松區",
        "ZIP": "833",
        "CNAME": "高雄市",
        "AREASNM": "鳥松區"
    },
    {
        "AREANM": "高雄市大樹區",
        "ZIP": "840",
        "CNAME": "高雄市",
        "AREASNM": "大樹區"
    },
    {
        "AREANM": "高雄市旗山區",
        "ZIP": "842",
        "CNAME": "高雄市",
        "AREASNM": "旗山區"
    },
    {
        "AREANM": "高雄市美濃區",
        "ZIP": "843",
        "CNAME": "高雄市",
        "AREASNM": "美濃區"
    },
    {
        "AREANM": "高雄市六龜區",
        "ZIP": "844",
        "CNAME": "高雄市",
        "AREASNM": "六龜區"
    },
    {
        "AREANM": "高雄市內門區",
        "ZIP": "845",
        "CNAME": "高雄市",
        "AREASNM": "內門區"
    },
    {
        "AREANM": "高雄市杉林區",
        "ZIP": "846",
        "CNAME": "高雄市",
        "AREASNM": "杉林區"
    },
    {
        "AREANM": "高雄市甲仙區",
        "ZIP": "847",
        "CNAME": "高雄市",
        "AREASNM": "甲仙區"
    },
    {
        "AREANM": "高雄市桃源區",
        "ZIP": "848",
        "CNAME": "高雄市",
        "AREASNM": "桃源區"
    },
    {
        "AREANM": "高雄市那瑪夏區",
        "ZIP": "849",
        "CNAME": "高雄市",
        "AREASNM": "那瑪夏區"
    },
    {
        "AREANM": "高雄市茂林區",
        "ZIP": "851",
        "CNAME": "高雄市",
        "AREASNM": "茂林區"
    },
    {
        "AREANM": "高雄市茄萣區",
        "ZIP": "852",
        "CNAME": "高雄市",
        "AREASNM": "茄萣區"
    },
    {
        "AREANM": "澎湖縣馬公市",
        "ZIP": "880",
        "CNAME": "澎湖縣",
        "AREASNM": "馬公市"
    },
    {
        "AREANM": "澎湖縣西嶼鄉",
        "ZIP": "881",
        "CNAME": "澎湖縣",
        "AREASNM": "西嶼鄉"
    },
    {
        "AREANM": "澎湖縣望安鄉",
        "ZIP": "882",
        "CNAME": "澎湖縣",
        "AREASNM": "望安鄉"
    },
    {
        "AREANM": "澎湖縣七美鄉",
        "ZIP": "883",
        "CNAME": "澎湖縣",
        "AREASNM": "七美鄉"
    },
    {
        "AREANM": "澎湖縣白沙鄉",
        "ZIP": "884",
        "CNAME": "澎湖縣",
        "AREASNM": "白沙鄉"
    },
    {
        "AREANM": "澎湖縣湖西鄉",
        "ZIP": "885",
        "CNAME": "澎湖縣",
        "AREASNM": "湖西鄉"
    },
    {
        "AREANM": "金門縣金沙鎮",
        "ZIP": "890",
        "CNAME": "金門縣",
        "AREASNM": "金沙鎮"
    },
    {
        "AREANM": "金門縣金湖鎮",
        "ZIP": "891",
        "CNAME": "金門縣",
        "AREASNM": "金湖鎮"
    },
    {
        "AREANM": "金門縣金寧鄉",
        "ZIP": "892",
        "CNAME": "金門縣",
        "AREASNM": "金寧鄉"
    },
    {
        "AREANM": "金門縣金城鎮",
        "ZIP": "893",
        "CNAME": "金門縣",
        "AREASNM": "金城鎮"
    },
    {
        "AREANM": "金門縣烈嶼鄉",
        "ZIP": "894",
        "CNAME": "金門縣",
        "AREASNM": "烈嶼鄉"
    },
    {
        "AREANM": "金門縣烏坵鄉",
        "ZIP": "896",
        "CNAME": "金門縣",
        "AREASNM": "烏坵鄉"
    },
    {
        "AREANM": "屏東縣屏東市",
        "ZIP": "900",
        "CNAME": "屏東縣",
        "AREASNM": "屏東市"
    },
    {
        "AREANM": "屏東縣三地門鄉",
        "ZIP": "901",
        "CNAME": "屏東縣",
        "AREASNM": "三地門鄉"
    },
    {
        "AREANM": "屏東縣霧臺鄉",
        "ZIP": "902",
        "CNAME": "屏東縣",
        "AREASNM": "霧臺鄉"
    },
    {
        "AREANM": "屏東縣瑪家鄉",
        "ZIP": "903",
        "CNAME": "屏東縣",
        "AREASNM": "瑪家鄉"
    },
    {
        "AREANM": "屏東縣九如鄉",
        "ZIP": "904",
        "CNAME": "屏東縣",
        "AREASNM": "九如鄉"
    },
    {
        "AREANM": "屏東縣里港鄉",
        "ZIP": "905",
        "CNAME": "屏東縣",
        "AREASNM": "里港鄉"
    },
    {
        "AREANM": "屏東縣高樹鄉",
        "ZIP": "906",
        "CNAME": "屏東縣",
        "AREASNM": "高樹鄉"
    },
    {
        "AREANM": "屏東縣鹽埔鄉",
        "ZIP": "907",
        "CNAME": "屏東縣",
        "AREASNM": "鹽埔鄉"
    },
    {
        "AREANM": "屏東縣長治鄉",
        "ZIP": "908",
        "CNAME": "屏東縣",
        "AREASNM": "長治鄉"
    },
    {
        "AREANM": "屏東縣麟洛鄉",
        "ZIP": "909",
        "CNAME": "屏東縣",
        "AREASNM": "麟洛鄉"
    },
    {
        "AREANM": "屏東縣竹田鄉",
        "ZIP": "911",
        "CNAME": "屏東縣",
        "AREASNM": "竹田鄉"
    },
    {
        "AREANM": "屏東縣內埔鄉",
        "ZIP": "912",
        "CNAME": "屏東縣",
        "AREASNM": "內埔鄉"
    },
    {
        "AREANM": "屏東縣萬丹鄉",
        "ZIP": "913",
        "CNAME": "屏東縣",
        "AREASNM": "萬丹鄉"
    },
    {
        "AREANM": "屏東縣潮州鎮",
        "ZIP": "920",
        "CNAME": "屏東縣",
        "AREASNM": "潮州鎮"
    },
    {
        "AREANM": "屏東縣泰武鄉",
        "ZIP": "921",
        "CNAME": "屏東縣",
        "AREASNM": "泰武鄉"
    },
    {
        "AREANM": "屏東縣來義鄉",
        "ZIP": "922",
        "CNAME": "屏東縣",
        "AREASNM": "來義鄉"
    },
    {
        "AREANM": "屏東縣萬巒鄉",
        "ZIP": "923",
        "CNAME": "屏東縣",
        "AREASNM": "萬巒鄉"
    },
    {
        "AREANM": "屏東縣崁頂鄉",
        "ZIP": "924",
        "CNAME": "屏東縣",
        "AREASNM": "崁頂鄉"
    },
    {
        "AREANM": "屏東縣新埤鄉",
        "ZIP": "925",
        "CNAME": "屏東縣",
        "AREASNM": "新埤鄉"
    },
    {
        "AREANM": "屏東縣南州鄉",
        "ZIP": "926",
        "CNAME": "屏東縣",
        "AREASNM": "南州鄉"
    },
    {
        "AREANM": "屏東縣林邊鄉",
        "ZIP": "927",
        "CNAME": "屏東縣",
        "AREASNM": "林邊鄉"
    },
    {
        "AREANM": "屏東縣東港鎮",
        "ZIP": "928",
        "CNAME": "屏東縣",
        "AREASNM": "東港鎮"
    },
    {
        "AREANM": "屏東縣琉球鄉",
        "ZIP": "929",
        "CNAME": "屏東縣",
        "AREASNM": "琉球鄉"
    },
    {
        "AREANM": "屏東縣佳冬鄉",
        "ZIP": "931",
        "CNAME": "屏東縣",
        "AREASNM": "佳冬鄉"
    },
    {
        "AREANM": "屏東縣新園鄉",
        "ZIP": "932",
        "CNAME": "屏東縣",
        "AREASNM": "新園鄉"
    },
    {
        "AREANM": "屏東縣枋寮鄉",
        "ZIP": "940",
        "CNAME": "屏東縣",
        "AREASNM": "枋寮鄉"
    },
    {
        "AREANM": "屏東縣枋山鄉",
        "ZIP": "941",
        "CNAME": "屏東縣",
        "AREASNM": "枋山鄉"
    },
    {
        "AREANM": "屏東縣春日鄉",
        "ZIP": "942",
        "CNAME": "屏東縣",
        "AREASNM": "春日鄉"
    },
    {
        "AREANM": "屏東縣獅子鄉",
        "ZIP": "943",
        "CNAME": "屏東縣",
        "AREASNM": "獅子鄉"
    },
    {
        "AREANM": "屏東縣車城鄉",
        "ZIP": "944",
        "CNAME": "屏東縣",
        "AREASNM": "車城鄉"
    },
    {
        "AREANM": "屏東縣牡丹鄉",
        "ZIP": "945",
        "CNAME": "屏東縣",
        "AREASNM": "牡丹鄉"
    },
    {
        "AREANM": "屏東縣恆春鎮",
        "ZIP": "946",
        "CNAME": "屏東縣",
        "AREASNM": "恆春鎮"
    },
    {
        "AREANM": "屏東縣滿州鄉",
        "ZIP": "947",
        "CNAME": "屏東縣",
        "AREASNM": "滿州鄉"
    },
    {
        "AREANM": "臺東縣臺東市",
        "ZIP": "950",
        "CNAME": "台東縣",
        "AREASNM": "臺東市"
    },
    {
        "AREANM": "臺東縣綠島鄉",
        "ZIP": "951",
        "CNAME": "台東縣",
        "AREASNM": "綠島鄉"
    },
    {
        "AREANM": "臺東縣蘭嶼鄉",
        "ZIP": "952",
        "CNAME": "台東縣",
        "AREASNM": "蘭嶼鄉"
    },
    {
        "AREANM": "臺東縣延平鄉",
        "ZIP": "953",
        "CNAME": "台東縣",
        "AREASNM": "延平鄉"
    },
    {
        "AREANM": "臺東縣卑南鄉",
        "ZIP": "954",
        "CNAME": "台東縣",
        "AREASNM": "卑南鄉"
    },
    {
        "AREANM": "臺東縣鹿野鄉",
        "ZIP": "955",
        "CNAME": "台東縣",
        "AREASNM": "鹿野鄉"
    },
    {
        "AREANM": "臺東縣關山鎮",
        "ZIP": "956",
        "CNAME": "台東縣",
        "AREASNM": "關山鎮"
    },
    {
        "AREANM": "臺東縣海端鄉",
        "ZIP": "957",
        "CNAME": "台東縣",
        "AREASNM": "海端鄉"
    },
    {
        "AREANM": "臺東縣池上鄉",
        "ZIP": "958",
        "CNAME": "台東縣",
        "AREASNM": "池上鄉"
    },
    {
        "AREANM": "臺東縣東河鄉",
        "ZIP": "959",
        "CNAME": "台東縣",
        "AREASNM": "東河鄉"
    },
    {
        "AREANM": "臺東縣成功鎮",
        "ZIP": "961",
        "CNAME": "台東縣",
        "AREASNM": "成功鎮"
    },
    {
        "AREANM": "臺東縣長濱鄉",
        "ZIP": "962",
        "CNAME": "台東縣",
        "AREASNM": "長濱鄉"
    },
    {
        "AREANM": "臺東縣太麻里鄉",
        "ZIP": "963",
        "CNAME": "台東縣",
        "AREASNM": "太麻里鄉"
    },
    {
        "AREANM": "臺東縣金峰鄉",
        "ZIP": "964",
        "CNAME": "台東縣",
        "AREASNM": "金峰鄉"
    },
    {
        "AREANM": "臺東縣大武鄉",
        "ZIP": "965",
        "CNAME": "台東縣",
        "AREASNM": "大武鄉"
    },
    {
        "AREANM": "臺東縣達仁鄉",
        "ZIP": "966",
        "CNAME": "台東縣",
        "AREASNM": "達仁鄉"
    },
    {
        "AREANM": "花蓮縣花蓮市",
        "ZIP": "970",
        "CNAME": "花蓮縣",
        "AREASNM": "花蓮市"
    },
    {
        "AREANM": "花蓮縣新城鄉",
        "ZIP": "971",
        "CNAME": "花蓮縣",
        "AREASNM": "新城鄉"
    },
    {
        "AREANM": "花蓮縣秀林鄉",
        "ZIP": "972",
        "CNAME": "花蓮縣",
        "AREASNM": "秀林鄉"
    },
    {
        "AREANM": "花蓮縣吉安鄉",
        "ZIP": "973",
        "CNAME": "花蓮縣",
        "AREASNM": "吉安鄉"
    },
    {
        "AREANM": "花蓮縣壽豐鄉",
        "ZIP": "974",
        "CNAME": "花蓮縣",
        "AREASNM": "壽豐鄉"
    },
    {
        "AREANM": "花蓮縣鳳林鎮",
        "ZIP": "975",
        "CNAME": "花蓮縣",
        "AREASNM": "鳳林鎮"
    },
    {
        "AREANM": "花蓮縣光復鄉",
        "ZIP": "976",
        "CNAME": "花蓮縣",
        "AREASNM": "光復鄉"
    },
    {
        "AREANM": "花蓮縣豐濱鄉",
        "ZIP": "977",
        "CNAME": "花蓮縣",
        "AREASNM": "豐濱鄉"
    },
    {
        "AREANM": "花蓮縣瑞穗鄉",
        "ZIP": "978",
        "CNAME": "花蓮縣",
        "AREASNM": "瑞穗鄉"
    },
    {
        "AREANM": "花蓮縣萬榮鄉",
        "ZIP": "979",
        "CNAME": "花蓮縣",
        "AREASNM": "萬榮鄉"
    },
    {
        "AREANM": "花蓮縣玉里鎮",
        "ZIP": "981",
        "CNAME": "花蓮縣",
        "AREASNM": "玉里鎮"
    },
    {
        "AREANM": "花蓮縣卓溪鄉",
        "ZIP": "982",
        "CNAME": "花蓮縣",
        "AREASNM": "卓溪鄉"
    },
    {
        "AREANM": "花蓮縣富里鄉",
        "ZIP": "983",
        "CNAME": "花蓮縣",
        "AREASNM": "富里鄉"
    }
].reduce((last, pair) => {
    last[pair.CNAME] = (!!last[pair.CNAME] ? last[pair.CNAME] : {})
    last[pair.CNAME][pair.AREASNM] = !!last[pair.CNAME][pair.AREASNM] ? `${last[pair.CNAME][pair.AREASNM]}, ${pair.ZIP}` : pair.ZIP
    return last
}, {})