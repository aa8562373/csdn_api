# 引入文件

#### 1. 浏览器引入
```javascript
<script src="相对路径/csdn_api.js"></script>
```
#### 2. 模块引入
```javascript
import csdnApi from "相对路径/csdn_api.js"
```

#### 3. 接口约定
（1）所有接口都为异步
（2）接受一个object类型的参数 或者 string
（3）成功回调 onSuccess(某些异步接口的成功回调，将在事件触发时被调用，具体详情请查看相关onSuccess回调时机)

```javascript
import csdnApi from "相对路径/csdn_api.js"

csdnApi.功能({
  参数1: '',
  参数2: '',
  ...,
  onSuccess: function(result) {
  }
})
```

#### 4. h5微应用api
**toast 轻提示**

```javascript
// csdnApi.toast(name)
  csdnApi.toast("我是提示信息")
```
###### 参数说明
|参数|说明|
| :--------:| :---:|
| name | 消息内容 |

-----
**alert确定弹窗**

```javascript
csdnApi.alert({
  message: '确认取消吗',
  title: "提示",
  buttonLabels: ['是', '否'],
  onSuccess: (data) {
    /*
    {
      success: 0, //0 成功， 1 失败
      data: '' //返回值 
      message: "" //说明字段
    }
    */
  }
})
```
###### 说明：
|参数|参数类型|说明|
| :---:| :---:|:---:|
| message | string| 消息内容 |
| title | string | 消息标题 |
| buttonLabels | Array[String] | 按钮名称 |
| onSuccess | function | 回调函数 |

-----
**scan扫码**

```javascript
csdnApi.scan({
	onSuccess: (data) {
		/*
		{
			success: 0, //0 成功， 1 失败
			data: '' //返回扫码内容
			message: "" //说明字段
		}
		*/
	}
})
```
###### 参数说明：
|参数|参数类型|说明|
| :---:| :---:|:---:|
| onSuccess | function | 回调函数 |

###### 返回说明：
|参数|参数类型|说明|
| :---:| :---:|:---:|
| data | string | 返回扫码内容（图片已base64返回）|

-----
**call拨打电话**

```javascript
csdnApi.call({
  onSuccess: (data) {
  /*
  {
				success: 0, //0 成功， 1 失败
				message: "" //说明字段
			}
			*/
  }
})
```
###### 参数说明：
|参数|参数类型|说明|
| :---:| :---:|:---:|
| onSuccess | function | 回调函数 |

-----
**setTitle修改当前标题**

```javascript
csdnApi.setTitle({
	onSuccess: (data) {
		/*
		{
			success: 0, //0 成功， 1 失败
			message: "" //说明字段
		}
		*/
	}
})
```
###### 参数说明：
|参数|参数类型|说明|
| :---:| :---:|:---:|
| onSuccess | function | 回调函数 |

-----
**close关闭当前页面**

```javascript
	csdnApi.close()
```

-----
**getWifiStatus获取网络类型**

```javascript
	csdnApi.getWifiStatus({
		onSuccess: (data) {
			/*
			{
				success: 0, //0 成功， 1 失败
				data: "", //返回网络类型,
				message: "" //说明字段
			}
			*/
		}
	})
```
###### 参数说明：
|参数|参数类型|说明|
| :---:| :---:|:---:|
| onSuccess | function | 回调函数 |

###### 返回说明：
|参数|参数类型|说明|
| :---:| :---:|:---:|
| data | string | 返回网络类型|

-----
**getGeolocation获取位置信息**

```javascript
	csdnApi.getGeolocation({
		onSuccess: (data) {
			/*
			{
				success: 0, //0 成功， 1 失败
				data: { //返回位置信息对象
				  "accuracy":67.0,
				  "address":"浙江省杭州市xxx"
				  "city":"杭州市",
				  "district":"西湖区",
				  "latitude":30.129636,
				  "longitude":120.083034,
				  "province":"浙江省"
				}, 
				message: "" //说明字段
			}
			*/
		}
	})
```
###### 参数说明：
|参数|参数类型|说明|
| :---:| :---:|:---:|
| onSuccess | function | 回调函数 |

###### 返回说明：
|参数|参数类型|说明|
| :---:| :---:|:---:|
| accuracy|string|实际的定位精度半径（单位米） |
| address|string|格式化地址，如：北京市朝阳区南磨房镇北京国家广告产业园区 |
|province|string|省份，如：北京市 |
|city|string|城市，直辖市会返回空 |
|district|string|行政区，如：朝阳区 |
|longitude|string|POI的经度，高德坐标|
|latitude|string|POI的纬度，高德坐标|

-----
**toUploadImage上传图片**

```javascript
	csdnApi.toUploadImage({
		onSuccess: (data) {
			/*
			{
				success: 0, //0 成功， 1 失败
				data: '' //返回图片base64编码
				message: "" //说明字段
			}
			*/
		}
	})
```
###### 参数说明：
|参数|参数类型|说明|
| :---:| :---:|:---:|
| onSuccess | function | 回调函数 |

###### 返回说明：
|参数|参数类型|说明|
| :---:| :---:|:---:|
| data | string | 返回图片base64编码|
