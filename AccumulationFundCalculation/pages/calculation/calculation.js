Page({
  /**
   * 页面的初始数据
   */
  data: {
    showIndex: false,
    showRes: 0,
    totalMonth: '',         // 总月份
    lastMonthBalance: '',   // 上月底余额
    paymentAmount: '',      // 每月缴纳数量
    res: 0,
    array:[]
  },

  saveTotalMonth: function(e) {
    let value = e.detail.value.replace(/\D/g, '')
    if (value === '') {
      wx.showToast({
        title: '输入有误，重新输入！',
        icon: 'none',
        duration: 2000
      })
    }
    if (value < 6) {
      wx.showToast({
        title: '输入小于六个月，重新输入！',
        icon: 'none',
        duration: 2000
      })
    }
    this.setData({
      totalMonth: value
    })
    if (this.data.totalMonth!=='') {
      this.initArray()
      this.calcRes()
    }
  },

  saveLastMonthBalance: function(e) {
    let value = e.detail.value.replace(/\D/g, '')
    this.setData({
      lastMonthBalance: value
    })
    if (this.data.totalMonth!=='') {
      this.initArray()
      this.calcRes()
    }
  },

  savePaymentAmount: function(e) {
    let value = e.detail.value.replace(/\D/g, '')
    this.setData({
      paymentAmount: value
    })
    if (this.data.totalMonth!=='') {
      this.initArray()
      this.calcRes()
    }
  },

  onClickCalc() {
    const result = this.data.res
    wx.showModal({
      title: '可贷金额',
      content: '' + result,
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
  },

  onClickQuestion() {
    wx.showModal({
      title: '什么是上月底余额？',
      content: '一般公积金打入账户的时间是当月的25号，以25号为界，到账为准。',
      showCancel: false,
      confirmText: '原来如此',
      confirmColor: "#f5a77d",
      complete: (res) => {
        if (res.cancel) {
          
        }
    
        if (res.confirm) {
          
        }
      }
    })
  },

  initArray() {
    let temp = parseInt(this.data.lastMonthBalance)
    let tempArray = []
    for (var i = 0; i < 12 && i < this.data.totalMonth; i++) { 
      const arrayLike = {id: i + 1,
                         content: '近'+(i+1)+'个月余额: ',
                         amount: temp
                        }
      tempArray.push(arrayLike)
      temp -= this.data.paymentAmount
    }
    this.setData({
      array: tempArray
    })
  },

  calcRes() {
    let tempRes = parseInt(0)
    let tempTotalMonth = this.data.totalMonth > 12 ? 12 : this.data.totalMonth
    let tempArray = this.data.array
    for (var i = 0; i < 12 && i < this.data.totalMonth; i++) { 
      tempRes += tempArray[i].amount
    }
    console.log(tempRes)
    let finalRes = tempRes / tempTotalMonth * 15
    let subfix = finalRes % 1000
    finalRes -= subfix
    if (subfix >= 500) {
      finalRes += 1000;
    }
    if (finalRes < 150000) {
      finalRes = 150000
    }
    if (finalRes > 600000) {
      finalRes = 600000
    }
    this.setData({
      res: finalRes
    })
  },

  onClickDown() {
    console.log("this.data.showIndex: " + this.data.showIndex)
    if (this.data.showIndex) {
      this.setData({
        showIndex: false
      })
    } else {
      this.setData({
        showIndex: true
      })
    }
  },

  // 输入每月的余额
  inputMonthly(e) { 
    console.log(e)
    const val = e.detail.value * 1
    const name = 'array[' + (e.target.dataset.index - 1) + '].amount'
    this.setData({
      [name]: val
    })
    this.calcRes()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '公积金贷款额度计算器'
    })
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

  }
})