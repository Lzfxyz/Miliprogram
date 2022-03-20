// pages/image/image.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imagesrc:''
    },
    handleImage(){
        // 在用户相册中选择图片或者拍照
        wx.chooseImage({
          success:(res)=>{
            console.log(res)
            this.setData({
                imagesrc:res.tempFilePaths[0]
            })
          }
        })
    },
    Imagelazyload(){
        console.log('图片加载完成')
    }
})