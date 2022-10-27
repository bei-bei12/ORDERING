// pages/index/index.js
wx.cloud.init({
    env: 'cloud1-0gpvrkrd5fae9e86',
    traceUser: true,
  })
  const db=wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mglist:'',
        rmbs:"",
        msgList:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        /**/db.collection("banner").get({
            success:res=>{
                console.log(res)
                this.setData({
                    mglist:res.data
                })
            }
        })
        db.collection("tzgg").get({
            success:res=>{
              console.log(res)
              this.setData({
                msgList:res.data
              })
            }
          })
          db.collection("mslb").get().then(res=>{
            console.log(res)
            this.setData({
              rmbs:res.data
            })
             })
    },
    showlist:function(e){
      console.log(e.currentTarget.id)
      wx.navigateTo({
        url: '../dpfl/dp?text_id='+e.currentTarget.id,
      })
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
    showwd:function(){
      wx.navigateTo({
        url: '../jqqt/jqqd',
      })
    },
    showtk:function(){
      wx.switchTab({
        url: '../gltl/gltl',
      })
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
    }
})