(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.csdnApi = factory());
}(this, (function () {
'use strict';
const callbacks = {}

class csdnApi {
  constructor() {
    this.equipmentInfo = this.getOperationSys()
  }

  getOperationSys() {
    const UserAgent = navigator.userAgent.toLowerCase().toLowerCase()
    return UserAgent.indexOf('android') > -1 ? "android" : "ios"
  }

  isFunction(fun) {
    return typeof fun === 'function'
  }

  // toast 提示
  toast(title) {
    const content = title || '提示信息'
    if ( this.equipmentInfo === "ios") {
      this.invoke('toast', {text: content})
    } else {
      this.invoke('notification.toast', {text: content})
    }
  }

  // 确定框
  alert(param) {
    const parameter = Object.assign({},
      {
        message: '确认取消吗',
        title: "提示",
        buttonLabels: ['是', '否'],
        onSuccess: ""
      },
      param
    )

    delete parameter.onSuccess
    if ( this.equipmentInfo === "ios") {
      this.invoke('confirm', parameter, param.onSuccess)
    } else {
      this.invoke('notification.confirm', parameter, param.onSuccess)
    }
  }

  // 扫码
  scan(param) {
    const parameter = Object.assign({},
      {
        type: 'all',
        action: "util.scan",
        onSuccess: ""
      },
      param
    )
    delete parameter.onSuccess
    if ( this.equipmentInfo === "ios") {
      this.invoke('scan', parameter, param.onSuccess)
    } else {
      this.invoke('util.scan', parameter, param.onSuccess)
    }
  }

  // 拨打电话
  call(param) {
    const parameter = Object.assign({},
      {
        phone: '',
        onSuccess: ""
      },
      param
    )
    delete parameter.onSuccess
    if ( this.equipmentInfo === "ios") {
      this.invoke('call', parameter, param.onSuccess)
    } else {
      this.invoke('telephone.call', parameter, param.onSuccess)
    }
  }

  // 修改当前标题
  setTitle(param) {
    const parameter = Object.assign({},
      {
        title: '改标题',
        onSuccess: ""
      },
      param
    )
    delete parameter.onSuccess
    if ( this.equipmentInfo === "ios") {
      this.invoke('setTitle', parameter, param.onSuccess)
    } else {
      this.invoke('navigation.setTitle', parameter, param.onSuccess)
    }
  }

  // 关闭当前页面
  close() {
    if ( this.equipmentInfo === "ios") {
      this.invoke('close')
    } else {
      this.invoke('navigation.close', {
        "action":"close"
      })
    }
  }

  // 获取网络类型
  getWifiStatus(param) {
    if ( this.equipmentInfo === "ios") {
      this.invoke('getNetworkType', {}, param.onSuccess)
    } else {
      this.invoke('device.getNetworkType', {
        "action": "getNetworkType"
      }, param.onSuccess)
    }
  }

  //位置信息
  getGeolocation(param) {
    if ( this.equipmentInfo === "ios") {
      this.invoke('getGeolocation', {}, param.onSuccess)
    } else {
      this.invoke('geolocation.get', {
        "action":"geolocation.get"
      }, param.onSuccess)
    }
  }

  //上传图片
  toUploadImage(param) {
    if ( this.equipmentInfo === "ios") {
      this.invoke('uploadImage', {}, param.onSuccess)
    } else {
       this.invoke('util.uploadImage', {
        "action":"util.uploadImage"
       }, param.onSuccess)
    }
  }

  // 调用 Native
  invoke(callbackName, data, callback) {
      if ( this.isFunction(callback) ) {
        callbacks[callbackName+'Sucess'] = callback
      }
    if ( this.equipmentInfo === "ios") {
      window.webkit.messageHandlers.invoke.postMessage({
        callbackName: callbackName,
        data: data || {}
      })
    } else if ( this.equipmentInfo === 'android') {
      window.CityOS_JsBridge.nativeBridgeMethod(JSON.stringify({
        callbackName: callbackName,
        data: data || {}
      }))
    }
  }


  receiveMessage(msg) {
    let bridgeName = msg.callbackName,
        data = msg.data || {};
    if (bridgeName) {
      if (callbacks[bridgeName+'Sucess']) { // 找到相应句柄
          callbacks[bridgeName+'Sucess'](data); // 执行调用
      }
    }
  }
}


return new csdnApi()

})));
