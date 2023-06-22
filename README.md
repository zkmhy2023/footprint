# footprint足迹地图
这个项目是一个足迹地图，用于显示不同城市的标记和相关信息。调用百度地图API绘制，请提前申请百度地图api，参考文档：https://lbs.baidu.com/index.php?title=jspopularGL/guide/getkey


## 功能

- 在地图上显示多个城市的标记
- 点击标记显示城市的信息


## 数据

这个项目使用了以下数据：
-  API设置：
html中代码<script src="https://api.map.baidu.com/api?v=2.0&ak=6B18dmxOHXGyP3Z3jUM8AG5zDpUf2SbU"></script>
“6B18dmxOHXGyP3Z3jUM8AG5zDpUf2SbU”部分请改成你自己的API

footprintJS中的以下代码定制你的足迹信息：
-  locations = [
      { city: "无锡市", text: "无锡市，2023年6月18日点亮" },
      { city: "常州市", text: "常州市，2023年6月16日点亮" },
      { city: "岳阳市", text: "岳阳市，2023年5月30日点亮" },
         // 添加更多城市和文本信息...
  ];
  其中city中的城市和text中的文本修改成你的足迹城市和要显示的文本信息。

- 地图样式修改
     
   // json设置地图样式部分json代码可更换成你喜欢的地图样式，参考文档https://lbs.baidu.com/apiconsole/custommap




## 技术栈

- HTML
- JavaScript


## 贡献

欢迎贡献您的代码或提出建议来改进这个项目。如果您有任何问题或想法，请提供反馈。

## 许可证

该项目使用 [MIT 许可证](LICENSE)。
