// index.js
Page({
    data:{
        message:'您好！谢先生',
        movies:['三国演义','水浒传','红楼梦','西游记','海盗贼','鸣人传'],
        userInfo:{}
    },
    // 页面加载
    onLoad(){
        console.log('页面onLoad')
    },
    // 页面显示
    onShow(){
        console.log('页面onShow')
    },
    // 页面初次渲染完成
    onReady(){
        console.log('页面onReady')
    },
    // 页面隐藏
    onHide(){
        console.log('页面onHide')
    },
    // 页面卸载
    onUnload(){
        console.log('页面onUnload')
    },
    handlegetUserInfo(event){
        console.log(event)
        this.setData({
            userInfo:event.detail.rawData
        })
    },
    // 监听用户下拉动作
    onPullDownRefresh(){
        console.log('上拉刷新')
    },
    // 上拉触底事件
    onReachBottom(){
        console.log('已经到达低部')
    }
})
