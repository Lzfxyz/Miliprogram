// components/my-prop/my-prop.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title:{
            type:String,
            value:'我是my-prop的标题',
            observer:function(newVal,oldVal){
                console.log(newVal,oldVal)
            }
        }
    },
    // 组件的样式
    externalClasses:['content-style'],

    /**
     * 组件的初始数据
     */
    data: {
        content:'我是内容'
    }
})
