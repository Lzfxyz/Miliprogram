// pages/inputs/inputs.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    handleInput(event){
        console.log("输入",event)
    },
    handleFocus(event){
        console.log("聚焦",event)
    },
    handleBlur(event){
        console.log("失去焦距",event)
    }

})