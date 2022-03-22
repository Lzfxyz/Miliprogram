// components/my-slots/my-slots.js
Component({
    options:{
        //  在组件定义时的选项中启用多slot支持
        multipleSlots:true
    },
    // ---------组件监听生命周期函数------------
    // 监听所在页面的生命周期
    pageLifetimes:{
        show(){
            console.log('监听组件所在页面被展示')
        },
        hide(){
            console.log('监听组件所在页面被隐藏')
        },
        resize(){
            console.log('监听组件所在页面尺寸变化')
        }
    },
    // 组件本身生命周期
    lifetimes:{
        created(){
            console.log('组件被创建时执行')
        },
        attached(){
            console.log('组件被添加到页面中时执行')
        },
        ready(){
            console.log('组件被渲染出来时')
        },
        moved(){
            console.log('组件实例被移动到节点树另一个位置时执行')
        },
        detached(){
            console.log('组件实例被从页面节点树中移除时执行')
        }
    }
})
