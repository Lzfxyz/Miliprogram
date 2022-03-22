// components/my-cpn/my-cpn.js
Component({
    options:{
        // 组件样式隔离,组件样式的优先级高于引用组件的页面
        styleIsolation:'page-apply-shared'
    },
    /**
     * 组件的初始数据
     */
    data: {
        title:'我是标题',
        text:'我是内容'     
    }
})
