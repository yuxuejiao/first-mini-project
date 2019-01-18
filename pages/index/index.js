// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "../../assets/img/banner.jpg",
      "../../assets/img/banner1.jpg",
      "../../assets/img/banner2.jpg"
    ],
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    navList: [
      {title: "现在下单", subTitle: "ORDER NOW", icon: "coffee", id: 1},
      {title: "咖啡钱包", tip: "充2赠1", subTitle: "COFFEE WALLET", icon: "wallet", id: 2},
      {title: "邀请得杯", subTitle: "SHARE & GET IT FREE", icon: "love", id: 3}
    ]
  },

  gotoPage: (event)=>{
    console.log("event: ", event);
    const { id } = event.currentTarget.dataset.item;
    if(id === 1){
      wx.switchTab({
        url: "/pages/menu/menu"
      })
    }else if(id === 2){
      wx.navigateTo({
        url: '/pages/coffeeWallet/coffeeWallet',
      })
    }
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