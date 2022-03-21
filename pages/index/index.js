// index.js
Page({
    data:{
        sort:['电影','电视剧','网剧'],
        currentIndex:0
    },
    // handleStart(){
    //    console.log("手指触摸动作开始touchstart") 
    // },
    // handleMove(){
    //     console.log("手指触摸移动touchmove") 
    // },
    // handleCancel(){
    //     console.log("手指触摸动作被打断touchcancel") 
    // },
    // handleEnd(){
    //     console.log("手指触摸动作结束touchend") 
    // },
    // handleTap(event){
    //     console.log("手指触摸马上离开tap",event) 
    // },
    // handleLongpress(){
    //     console.log("手指触摸350ms后离开longpress") 
    // },
    handleEvent(event){
        console.log("父组件",event)
    },
    handleEventson(event){
        console.log("子组件",event)
    } ,
    handleChangeindex(event){
        console.log(event)
        const dataset = event.currentTarget.dataset
        const index = dataset.index
        const item = dataset.item
        this.setData({
            currentIndex:index
        })
    },
    captureOuterTap(){
        console.log('captureOuterTap')
    },
    bindOuterTap(){
        console.log('bindOuterTap')
    },
    captureTwoTap(){
        console.log('captureTwoTap')
    },
    bindTwoTap(){
        console.log('bindTwoTap')
    },
    captureInnerTap(){
        console.log('captureInnerTap')
    },
    bindInnerTap(){
        console.log('bindInnerTap')
    }

    
})
