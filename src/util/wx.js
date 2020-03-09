

const link = (code, type) => {
  wx.getStorage({
    key: 'host',
    success(res) {
      console.log(res)
      if (res.data) {
        wx.request({
          url: `http://${res.data}:8080/v1/keyevent`, // 仅为示例，并非真实的接口地址
          method: 'POST',
          data: {
            keycode: code,
            longclick: false
          }
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '请在「设置」中添加IP地址'
        })
      }
    },
    fail() {
      wx.showModal({
        title: '提示',
        content: '请在「设置」中添加IP地址'
      })
    }
  })
}

export {
  link
}

