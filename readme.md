# LBS定位工具 ｜ 微信云开发模版

## 项目介绍
本项目是一个实用的LBS定位工具，功能地址搜索定位，经纬度搜索定位，地图选点确认信息等。

项目涉及到的云开发知识包含云函数，微信小程序对组件MAP使用较为丰富，定位信息API使用的是腾讯地图API。云函数作为中间件隐藏了地图API，更加安全，适合自有后台使用云函数中转请求的场景使用。

另外作者在项目逻辑代码中编写了详细的注释说明，非常适合初入门开发者学习和参考开发。

## 部署步骤
- 在左上角点击【云开发】按钮，进入云开发控制台。
- 如果没有环境则按照提示开通云开发环境
- 进入云开发环境，在【设置】页复制`环境ID`
- 前往[腾讯地图控制台](https://lbs.qq.com/dev/console/application/mine)，参照此[文档](https://lbs.qq.com/service/webService/webServiceGuide/webServiceGcoder)申请key
- 将申请的key，填写到 `cloudfunctions/lbs_server/config.json` 文件的 `key` 字段中。
- 右键点击 `cloudfunctions/lbs_server` 文件夹，选择云函数云端安装依赖上传
- 如果在新建项目时，小程序下有云开发环境，则会默认注入第一个环境，如果想更换为自己想要的环境，只需要将 `miniprogram/envList.js` 文件里的内容全部替换成如下，注意替换envId
``` js
module.exports = {
  envList: [{
    envId:'上述步骤中你获得的环境ID'
  }]
}
```