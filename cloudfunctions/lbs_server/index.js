const work = require('./work') // 引入work文件模块

exports.main = async (event, context) => {
  if (event.type === 'address') { // 文字地址到经纬度转换
    return await work.address(event.data)
  } else if (event.type === 'location') { // 经纬度到文字地址的转换
    return await work.location(event.data)
  } else {
    return {
      code: -1
    }
  }
}
