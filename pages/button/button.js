// pages/button/button.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading:true,
        userInfo:{}
    },
    handleUserInfo(event){
        console.log(event)
        this.setData({
            userInfo:event.detail.rawData
        })
    }
})