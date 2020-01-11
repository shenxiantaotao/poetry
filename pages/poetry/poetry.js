// pages/poetry/poetry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phtml: 'test',
    domain: 'https://www.shangsanruoshui.top',
    title: '',
    author: '',
    content: '',
    poe_class: {
      'content_width': '13rem'
    }
  },

  /**
   * 首页获取诗集
   */
  getPoetry: function () {
    var th = this;
    wx.request({
      url: this.data.domain + '/poetry/Index/getPoetry', //仅为示例，并非真实的接口地址
      data: {
      },
      dataType: 'json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var r = res.data;
        th.setData({ title: r.response.title, author: r.response.author, content: r.response.content });
        var len = r.response.content.split("，");
        if (len[0].length > 5) {
          th.setData({
            poe_class: {
              'content_width': '16rem'
            }
          });
        }
      }
    })
  },

  /**
   * 点击获取下一首
   */
  nextPoetry: function () {
    this.getPoetry();
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
    this.getPoetry();
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