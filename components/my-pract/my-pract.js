// components/my-pract/my-pract.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        titles:{
            type:Array,
            value:['衣服','裤子','鞋子']
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        currentIndex:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        itemClick(event){
            // console.log(event)
            const dataset = event.currentTarget.dataset
            const index = dataset.index
            this.setData({
                currentIndex:index
            })
            // 通知引用页面内部的点击事件
            this.triggerEvent("itemClick",{index,title:this.properties.titles[index]},{})
        }
    }
})
