// app.js
App({
    // 小程序初始化
    onLaunch(options){
        // console.log('onLaunch')

        // console.log(options)
        // switch(options.scene){
        //     case 1005:
        //         console.log("1005")
        //         break
        // }
    },
    // 小程序页面的显示
    onShow(options){
        // 获得用户信息
        // wx.getUserInfo({
        //   success(res){
        //     console.log(res)
        //   }
        // })

        // console.log('onShow')
        // const err = new Error()
        // throw err
        // 判断小程序的进入场景
        // switch(options.scene){
        //     case 1012:
        //         break
        //     case 1013:
        //         console.log("1013")
        //         break
        // }
    },
    // 小程序页面的隐藏
    onHide(){
        // console.log('onHide')
    },
    // 小程序的错误监听
    onError(){
        // console.log('onError')
    }
})
