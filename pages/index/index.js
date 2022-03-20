// index.js
Page({
    data:{
        firstname:"谢",
        lastname:"先生",
        nowtime:new Date().toLocaleString(),
        age:18,
        isShow:true,
        number:10,
        lists:[[1,2,3,4],[11,22,33,44],[12,23,34,14]]
    },
    onLoad(){
        setInterval(()=>{
            this.setData({
                // 获取当前时间
                nowtime:new Date().toLocaleString()
            })
        },1000)
    },
    handleShow(){
        this.setData({
            isShow:!this.data.isShow
        })
    },
    handleAdd(){
        const score = this.data.number + 6
        this.setData({
            number:score <= 120 ? score : 120
        })
    },
    handleReduce(){
        const score = this.data.number - 5
        this.setData({
            number:score >= 0 ? score : 0
        })
    }
})
