// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      {
        id: 0,
        icon: '/images/question-circle-fill.png',
        title: '目前支持哪些城市？',
        content: '目前只支持杭州，后续会扩展其他城市。感谢大家支持！'
      },
      {
        id: 1,
        icon: '/images/question-circle-fill.png',
        title: '为什么是上个月余额？',
        content: '单位应当于每月发放职工工资之日起五日内将单位缴存的和为职工代缴的住房公积金汇缴到住房公积金专户内。 所以如果贵单位是当月发放当月工资，则缴纳的公积金是当月的，如果是发放上月工资，则缴纳的是上月的。一般来说，单位都是当月发放上月的工资，因此，这里是上月的余额。'
      },
      {
        id: 2,
        icon: '/images/rmb.png',
        title: '你的计算公式正确吗？',
        content:
          '以下为计算器所用公式:\n\n1.如果您缴纳的月份小于6个月，无法进行贷款；\n\n2.如果您缴纳的月份在6~12个月之间，计算公式为：Σ(月余额) / 实际的月数 * 15\n\n3.如果您缴纳的月份大于12个月，计算公式为：Σ(月余额) / 12 * 15\n\n\n出处：https://www.hangzhou.gov.cn/art/2022/6/15/art_1229063385_1820961.html'
      },
      {
        id: 3,
        icon: '/images/message.png',
        title: '这个计算器有什么用？',
        content:
          '这个计算器可以帮助你快速计算可以贷款的公积金额度，无需了解相关政策，无需关注计算细节。'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
   
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  dialog(e) {
    wx.showModal({
      title: this.data.array[e.target.dataset.index].title,
      content: this.data.array[e.target.dataset.index].content,
      showCancel: false,
      confirmText: '我知道啦',
      confirmColor: "#f5a77d",
      complete: (res) => {
        if (res.cancel) {
          
        }
    
        if (res.confirm) {
          
        }
      }
    })
  }

})