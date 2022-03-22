// index.js
Page({
    data:{
        count:0,
        list:['流行','新款','精选','过季'],
        isShow:true
    },
    myEventListener(){
        this.setData({
            count:this.data.count + 1
        })
    },
    myPractListener(event){
        console.log(event)
    },
    handleMyselClick(){
        // 获取组件对象
        const mysel = this.selectComponent('#my-sel')
        // console.log(mysel)
        // 通过setData修改组件内的数据（不推荐）
        // mysel.setData({
        //     counter:mysel.data.counter + 2
        // })
        // 通过方法修改组件内数据
        mysel.addCounter(2)
    },
    // 
    controlMyslots(){
        this.setData({
            isShow:!this.data.isShow
        })
    }
})
