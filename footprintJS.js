// 在页面加载完成后执行代码
window.onload = function () {
  // 定义城市名称和文本信息数组
  var locations = [
      { city: "无锡市", text: "无锡市，2023年6月18日点亮" },
      { city: "常州市", text: "常州市，2023年6月16日点亮" },
      { city: "岳阳市", text: "岳阳市，2023年5月30日点亮" },
      { city: "厦门市", text: "厦门市，2023年5月10日点亮" },
      { city: "莆田市", text: "莆田市，2023年5月4日点亮" },
      { city: "泉州市", text: "泉州市，2023年5月2日点亮" },
      { city: "河池市", text: "河池市，2023年4月27日点亮" },
      { city: "咸宁市", text: "咸宁市，2023年3月16日点亮" },
      { city: "益阳市", text: "益阳市，2022年9月27日点亮" },
      { city: "保定市", text: "保定市，2022年9月14日点亮" },
      { city: "玉溪市", text: "玉溪市，2022年9月5日点亮" },
      { city: "红河哈尼彝族自治州", text: "红河哈尼彝族自治州，2022年8月22日点亮" },
      { city: "南宁市", text: "南宁市，2022年8月6日点亮" },
      { city: "平凉市", text: "平凉市，2022年8月1日点亮" },
      { city: "天津市", text: "天津市，2022年7月28日点亮" },
      { city: "锡林郭勒盟", text: "锡林郭勒盟，2022年7月17日点亮" },
      { city: "鹤岗市", text: "鹤岗市，2022年7月4日点亮" },
      { city: "鹤壁市", text: "鹤壁市，2022年2月17日点亮" },
      { city: "濮阳市", text: "濮阳市，2022年2月16日点亮" },
      { city: "安阳市", text: "安阳市，2022年2月15日点亮" },
      { city: "德阳市", text: "德阳市，2022年2月4日点亮" },
      { city: "绵阳市", text: "绵阳市，2022年2月4日点亮" },
      { city: "三门峡", text: "三门峡，2021年11月28日点亮" },
      { city: "黄冈市", text: "黄冈市，2021年10月30日点亮" },
      { city: "邢台市", text: "邢台市，2021年10月18日点亮" },
      { city: "嘉兴市", text: "嘉兴市，2021年10月5日点亮" },
      { city: "台州市", text: "台州市，2021年10月3日点亮" },
      { city: "绍兴市", text: "绍兴市，2021年9月29日点亮" },
      { city: "菏泽市", text: "菏泽市，2021年9月16日点亮" },
      { city: "赣州市", text: "赣州市，2021年9月4日点亮" },
      { city: "吉林市", text: "吉林市，2021年8月7日点亮" },
      { city: "延边朝鲜自治州", text: "延边朝鲜自治州，2021年7月17日点亮" },
      { city: "沈阳市", text: "沈阳市，2021年7月17日点亮" },
      { city: "张家界", text: "张家界，2021年7月8日点亮" },
      { city: "长春市", text: "长春市，2021年6月4日点亮" },
      { city: "河源市", text: "河源市，2021年5月28日点亮" },
      { city: "惠州市", text: "惠州市，2021年5月27日点亮" },
      { city: "深圳市", text: "深圳市，2021年5月25日点亮" },
      { city: "阿拉善盟", text: "阿拉善盟，2021年5月10日点亮" },
      { city: "嘉峪关市", text: "嘉峪关市，2021年5月2日点亮" },
      { city: "泸州市", text: "泸州市，2021年4月28日点亮" },
      { city: "内江市", text: "内江市，2021年4月24日点亮" },
      { city: "朝阳市", text: "朝阳市，2021年4月19日点亮" },
      { city: "福州市", text: "福州市，2020年10月6日点亮" },
      { city: "晋中市", text: "晋中市，2020年9月24日点亮" },
      { city: "安庆市", text: "安庆市，2020年9月6日点亮" },
      { city: "西安市", text: "西安市，2020年8月25日点亮" },
      { city: "泰州市", text: "泰州市，2020年8月20日点亮" },
      { city: "扬州市", text: "扬州市，2020年8月16日点亮" },
      { city: "镇江市", text: "镇江市，2020年8月14日点亮" },
      { city: "潍坊市", text: "潍坊市，2020年8月11日点亮" },
      { city: "庆阳市", text: "庆阳市，2020年7月29日点亮" },
      { city: "吴忠市", text: "吴忠市，2020年7月29日点亮" },
      { city: "南京市", text: "南京市，2020年7月14日点亮" },
      { city: "安顺市", text: "安顺市，2020年4月20日点亮" },
      { city: "南通市", text: "南通市，2020年4月15日点亮" },
      { city: "赤峰市", text: "赤峰市，2020年4月4日点亮" },
      { city: "合肥市", text: "合肥市，2020年1月8日点亮" },
      { city: "芜湖市", text: "芜湖市，2020年1月7日点亮" },
      { city: "湖州市", text: "湖州市，2020年1月6日点亮" },
      { city: "珠海市", text: "珠海市，2019年10月22日点亮" },
      { city: "湘西土家族苗族自治州", text: "湘西土家族苗族自治州，2019年10月1日点亮" },
      { city: "常德市", text: "常德市，2019年9月27日点亮" },
      { city: "昭通市", text: "昭通市，2019年9月24日点亮" },
      { city: "邯郸市", text: "邯郸市，2019年9月12日点亮" },
      { city: "大同市", text: "大同市，2019年9月10日点亮" },
      { city: "张家口市", text: "张家口市，2019年9月3日点亮" },
      { city: "信阳市", text: "信阳市，2019年9月1日点亮" },
      { city: "清远市", text: "清远市，2019年8月27日点亮" },
      { city: "淮安市", text: "淮安市，2019年8月25日点亮" },
      { city: "盐城市", text: "盐城市，2019年8月25日点亮" },
      { city: "宿迁市", text: "宿迁市，2019年8月23日点亮" },
      { city: "淮南市", text: "淮南市，2019年8月4日点亮" },
      { city: "周口市", text: "周口市，2019年8月3日点亮" },
      { city: "亳州市", text: "亳州市，2019年8月2日点亮" },
      { city: "临沂市", text: "临沂市，2019年7月29日点亮" },
      { city: "济宁市", text: "济宁市，2019年7月28日点亮" },
      { city: "南昌市", text: "南昌市，2019年7月26日点亮" },
      { city: "吉安市", text: "吉安市，2019年7月26日点亮" },
      { city: "孝感市", text: "孝感市，2019年7月24日点亮" },
      { city: "随州市", text: "随州市，2019年7月20日点亮" },
      { city: "廊坊市", text: "廊坊市，2019年6月27日点亮" },
      { city: "中卫市", text: "中卫市，2019年6月15日点亮" },
      { city: "银川市", text: "银川市，2019年6月11日点亮" },
      { city: "呼和浩特市", text: "呼和浩特市，2019年5月25日点亮" },
      { city: "襄阳市", text: "襄阳市，2019年4月25日点亮" },
      { city: "平顶山市", text: "平顶山市，2019年4月23日点亮" },
      { city: "漯河市", text: "漯河市，2019年2月1日点亮" },
      { city: "青岛市", text: "青岛市，2018年11月4日点亮" },
      { city: "南平市", text: "南平市，2018年10月20日点亮" },
      { city: "衡阳市", text: "衡阳市，2018年10月2日点亮" },
      { city: "株洲市", text: "株洲市，2018年10月1日点亮" },
      { city: "龙岩市", text: "龙岩市，2018年9月27日点亮" },
      { city: "牡丹江市", text: "牡丹江市，2018年9月13日点亮" },
      { city: "长沙市", text: "长沙市，2018年9月11日点亮" },
      { city: "邵阳市", text: "邵阳市，2018年9月8日点亮" },
      { city: "黄山市", text: "黄山市，2018年9月4日点亮" },
      { city: "宣城市", text: "宣城市，2018年9月4日点亮" },
      { city: "杭州市", text: "杭州市，2018年9月4日点亮" },
      { city: "滁州市", text: "滁州市，2018年9月2日点亮" },
      { city: "阜新市", text: "阜新市，2018年8月23日点亮" },
      { city: "承德市", text: "承德市，2018年8月22日点亮" },
      { city: "徐州市", text: "徐州市，2018年8月22日点亮" },
      { city: "连云港市", text: "连云港市，2018年8月16日点亮" },
      { city: "宜宾市", text: "宜宾市，2018年8月10日点亮" },
      { city: "乐山市", text: "乐山市，2018年8月9日点亮" },
      { city: "成都市", text: "成都市，2018年8月7日点亮" },
      { city: "滨州市", text: "滨州市，2018年8月1日点亮" },
      { city: "铜仁地区", text: "铜仁地区，2018年7月26日点亮" },
      { city: "怀化市", text: "怀化市，2018年7月21日点亮" },
      { city: "太原市", text: "太原市，2018年7月16日点亮" },
      { city: "忻州市", text: "忻州市，2018年7月16日点亮" },
      { city: "亚庇", text: "亚庇，2018年5月29日点亮" },
      { city: "佳木斯市", text: "佳木斯市，2018年5月14日点亮" },
      { city: "哈尔滨市", text: "哈尔滨市，2018年5月13日点亮" },
      { city: "锦州市", text: "锦州市，2018年5月13日点亮" },
      { city: "茂名市", text: "茂名市，2018年4月30日点亮" },
      { city: "百色市", text: "百色市，2018年4月9日点亮" },
      { city: "楚雄彝族自治州", text: "楚雄彝族自治州，2018年4月8日点亮" },
      { city: "昆明市", text: "昆明市，2018年4月1日点亮" },
      { city: "江门市", text: "江门市，2018年3月25日点亮" },
      { city: "新乡市", text: "新乡市，2018年3月24日点亮" },
      { city: "上海市", text: "上海市，2018年3月6日点亮" },
      { city: "宿州市", text: "宿州市，2018年3月6日点亮" },
      { city: "商丘市", text: "商丘市，2017年11月28日点亮" },
      { city: "阜阳市", text: "阜阳市，2017年11月28日点亮" },
      { city: "东莞市", text: "东莞市，2017年11月19日点亮" },
      { city: "广州市", text: "广州市，2017年11月19日点亮" },
      { city: "南阳市", text: "南阳市，2017年11月5日点亮" },
      { city: "洛阳市", text: "洛阳市，2017年10月9日点亮" },
      { city: "十堰市", text: "十堰市，2017年10月9日点亮" },
      { city: "遵义市", text: "遵义市，2017年10月5日点亮" },
      { city: "重庆市", text: "重庆市，2017年10月2日点亮" },
      { city: "恩施土家族苗族自治州", text: "恩施土家族苗族自治州，2017年10月2日点亮" },
      { city: "武汉市", text: "武汉市，2017年10月1日点亮" },
      { city: "济南市", text: "济南市，2017年9月16日点亮" },
      { city: "景德镇市", text: "景德镇市，2017年9月9日点亮" },
      { city: "衢州市", text: "衢州市，2017年8月10日点亮" },
      { city: "北京市", text: "北京市，2017年8月10日点亮" },
      { city: "石家庄市", text: "石家庄市，2017年7月30日点亮" },
      { city: "贵阳市", text: "贵阳市，2017年7月29日点亮" },
      { city: "黔东南苗族侗族自治州", text: "黔东南苗族侗族自治州，2017年7月26日点亮" },
      { city: "黔南布依族苗族自治州", text: "黔南布依族苗族自治州，2017年7月25日点亮" },
      { city: "九江市", text: "九江市，2017年7月17日点亮" },
      { city: "驻马店市", text: "驻马店市，2017年7月17日点亮" },
      { city: "广元市", text: "广元市，2017年6月10日点亮" },
      { city: "汉中市", text: "汉中市，2017年6月9日点亮" },
      { city: "宝鸡市", text: "宝鸡市，2017年6月9日点亮" },
      { city: "黄石市", text: "黄石市，2017年4月7日点亮" },
      { city: "鄂州市", text: "鄂州市，2017年4月7日点亮" },
      { city: "兰州市", text: "兰州市，2017年3月11日点亮" },
      { city: "渭南市", text: "渭南市，2017年2月20日点亮" },
      { city: "焦作市", text: "焦作市，2016年10月24日点亮" },
      { city: "开封市", text: "开封市，2016年10月11日点亮" },
      { city: "郑州市", text: "郑州市，1990年10月11日点亮" },
      { city: "洛阳市", text: "洛阳市，2012年7月7日点亮" },
      { city: "三门峡市", text: "三门峡市，2012年7月9日点亮" },
      { city: "西安市", text: "西安市，2012年7月11日点亮" },
      { city: "汉中市", text: "汉中市，2012年7月17日点亮" },
      { city: "广元市", text: "广元市，2012年7月20日点亮" },
      { city: "绵阳市", text: "绵阳市，2012年7月23日点亮" },
      { city: "成都市", text: "成都市，2012年7月25日点亮" },
      { city: "雅安市", text: "雅安市，2012年7月28日点亮" },
      { city: "泸定县", text: "泸定县，2012年7月30日点亮" },
      { city: "康定县", text: "康定县，2012年7月31日点亮" },
      { city: "雅江县", text: "雅江县，2012年8月2日点亮" },
      { city: "理塘县", text: "理塘县，2012年8月5日点亮" },
      { city: "巴塘县", text: "巴塘县，2012年8月8日点亮" },
      { city: "芒康县", text: "芒康县，2012年8月10日点亮" },
      { city: "左贡县", text: "左贡县，2012年8月12日点亮" },
      { city: "八宿县", text: "八宿县，2012年8月14日点亮" },
      { city: "波密县", text: "波密县，2012年8月15日点亮" },
      { city: "林芝市", text: "林芝市，2012年8月16日点亮" },
      { city: "工布江达县", text: "工布江达县，2012年8月17日点亮" },
      { city: "墨竹工卡县", text: "墨竹工卡县，2012年8月18日点亮" },
      { city: "拉萨市", text: "拉萨市，2012年8月19日点亮" },
      { city: "桂林市", text: "桂林市，2016年2月17日点亮" },
      { city: "Ko Samui", text: "苏梅岛，2016年9月27日点亮" },
      { city: "Negeri Sabah", text: "沙巴，2016年9月27日点亮" },


      
    // 添加更多城市和文本信息...
  ];

  // 创建地图实例
  var map = new BMap.Map("map"); // "map"是地图容器的id

  // 设置地图中心点和缩放级别
  var point = new BMap.Point(113.6401, 34.72468); // 设置地图中心点坐标
  map.centerAndZoom(point, 5); // 设置地图中心和缩放级别
  

  // json设置地图样式
  var styleJson = [{
    "featureType": "land",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "color": "#f1f1f1ff"
    }
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "color": "#54afebff"
    }
}, {
    "featureType": "green",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "color": "#65a7fcff"
    }
}, {
    "featureType": "building",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "building",
    "elementType": "geometry.topfill",
    "stylers": {
        "color": "#ffffffb3"
    }
}, {
    "featureType": "building",
    "elementType": "geometry.sidefill",
    "stylers": {
        "color": "#ffffffb3"
    }
}, {
    "featureType": "building",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#dadadab3"
    }
}, {
    "featureType": "subwaystation",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "color": "#b15454B2"
    }
}, {
    "featureType": "education",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "color": "#cdebffff"
    }
}, {
    "featureType": "medical",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "color": "#cdebffff"
    }
}, {
    "featureType": "scenicspots",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "color": "#cdebffff"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": 4
    }
}, {
    "featureType": "highway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#9dcaffff"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#fed66900"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "highway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#8f5a33ff"
    }
}, {
    "featureType": "highway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "highway",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": 2
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#428ee9ff"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#428ee900"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#428ee9ff"
    }
}, {
    "featureType": "local",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": 1
    }
}, {
    "featureType": "local",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "local",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "local",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "local",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#979c9aff"
    }
}, {
    "featureType": "local",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "railway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "weight": 1
    }
}, {
    "featureType": "railway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#949494ff"
    }
}, {
    "featureType": "railway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "subway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "weight": 1
    }
}, {
    "featureType": "subway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#d8d8d8ff"
    }
}, {
    "featureType": "subway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "subway",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "subway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#979c9aff"
    }
}, {
    "featureType": "subway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "continent",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "continent",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "continent",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#333333ff"
    }
}, {
    "featureType": "continent",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "city",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "city",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "city",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "city",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#428ee9ff",
        "weight": 3
    }
}, {
    "featureType": "town",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "town",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "town",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#454d50ff"
    }
}, {
    "featureType": "town",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#bddbfdff"
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#428ee9ff",
        "weight": 3
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "districtlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "manmade",
    "elementType": "geometry",
    "stylers": {
        "color": "#cdebffff"
    }
}, {
    "featureType": "restaurantlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "restaurantlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "lifeservicelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "lifeservicelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "carservicelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "carservicelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "financelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "financelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "otherlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "otherlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "companylabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "companylabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "businesstowerlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "businesstowerlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "estatelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "estatelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "highwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "highwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "provincialwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "provincialwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiarywaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiarywaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subwaylabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subwaylabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#78b6ffff"
    }
}, {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#69acffff"
    }
}, {
    "featureType": "entertainment",
    "elementType": "geometry",
    "stylers": {
        "color": "#cdebffff"
    }
}, {
    "featureType": "estate",
    "elementType": "geometry",
    "stylers": {
        "color": "#cdebffff"
    }
}, {
    "featureType": "shopping",
    "elementType": "geometry",
    "stylers": {
        "color": "#cdebffff"
    }
}, {
    "featureType": "transportation",
    "elementType": "geometry",
    "stylers": {
        "color": "#cdebffff"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#428ee9ff"
    }
}, {
    "featureType": "districtlabel",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "districtlabel",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#428ee9ff"
    }
}, {
    "featureType": "village",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "district",
    "elementType": "labels.text",
    "stylers": {
        "fontsize": 20
    }
}, {
    "featureType": "district",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "district",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#428ee9ff"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "6"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "7"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "8"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "9"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "10"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "6"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "7"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "8"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "9"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "10"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "6"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "7"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "8"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "9"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "10"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "6"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "7"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "8"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "9"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "10"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "6"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "7"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "8"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "9"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "10"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "6"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "7"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "8"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "9"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,10",
        "level": "10"
    }
}, {
    "featureType": "district",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "8,10",
        "level": "8"
    }
}, {
    "featureType": "district",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "8,10",
        "level": "9"
    }
}, {
    "featureType": "district",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "8,10",
        "level": "10"
    }
}, {
    "featureType": "district",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "8,10",
        "level": "8"
    }
}, {
    "featureType": "district",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "8,10",
        "level": "9"
    }
}, {
    "featureType": "district",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "8,10",
        "level": "10"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "cityhighway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "6"
    }
}, {
    "featureType": "cityhighway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "7"
    }
}, {
    "featureType": "cityhighway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "8"
    }
}, {
    "featureType": "cityhighway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "9"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "6"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "7"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "8"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "9"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "6"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "7"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "8"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "9"
    }
}, {
    "featureType": "districtlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "country",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "country",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#428ee9ff",
        "weight": 6
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff00"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#8ec1ffff"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "governmentlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "governmentlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#428ee9ff",
        "weight": 3
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#c8e1ffff"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff00"
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels.text",
    "stylers": {
        "fontsize": 20
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#428ee9ff",
        "weight": 3
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "8,10",
        "level": "8"
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "8,10",
        "level": "9"
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "8,10",
        "level": "10"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "weight": 3,
        "curZoomRegion": "8,10",
        "level": "8"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "weight": 3,
        "curZoomRegion": "8,10",
        "level": "9"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "weight": 3,
        "curZoomRegion": "8,10",
        "level": "10"
    }
}]

   // 设置地图样式
  map.setMapStyle({ styleJson: styleJson });


  // 添加缩放控件
  map.addControl(new BMap.NavigationControl());

  // 开启鼠标滚轮缩放
  map.enableScrollWheelZoom(true);

  // 循环遍历城市数组
  for (var i = 0; i < locations.length; i++) {
    // 创建闭包来保存城市名称和文本信息
    (function () {
      var city = locations[i].city;
      var text = locations[i].text;

      // 使用地理编码将城市名称转换为经纬度
      var geoc = new BMap.Geocoder();
      geoc.getPoint(city, function (point) {
        if (point) {
          // 添加标注
          var marker = new BMap.Marker(point);
          map.addOverlay(marker);

          // 创建信息窗口
          var infoWindow = new BMap.InfoWindow(text, { enableMessage: true });

          // 绑定点击事件
          marker.addEventListener("click", function () {
            this.openInfoWindow(infoWindow);
          });
        }
      }, city);
    })();
  }
};
