// pages/write/write.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    domain:'https://www.shangsanruoshui.top',
    title:'',
    content:''
  },

  //输入标题
  inputtitle: function (e) {
    this.setData({
      title: e.detail.value
    })
  },

  //输入内容
  inputcontent: function (e) {
    this.setData({
      content: e.detail.value
    })
  },
  //发布
  fabu:function(e){
    var title=this.data.title;
    var content=this.data.content;
    var th = this;
    wx.request({
      url: this.data.domain + '/poetry/Index/postPoetry', //仅为示例，并非真实的接口地址
      data: {
        "title": title,
        "content": content,
        "user_id":1,
        "author":'现代人'
      },
      dataType: 'json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var r = res.data;
        if(r.code==0){
          wx.showToast({
            title:'发布成功！',
            icon: 'none'
          })
          th.setData({
            content:'',
            title:''
          })
        }else{
          wx.showToast({
            title: r.message,
            icon:'none'
          })
        }
      }
    })

  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})