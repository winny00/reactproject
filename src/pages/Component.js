import React from 'react';
import ClassComponent from './ClassComponent';
import FuncComponent from "./FuncComponent";
import EventHandle from './EventHandle';
import LifeCycle from './LifeCycle';

/** 
 * 
 * function 组件
 * 又称函数组件 通常无状态，仅关注内容展示，返回渲染结果即可
 * 命名 首字母大写
 * 
 props属性传递可用于父子组件相互通讯

 如果是父组件传递的是函数，则可以把子组件信息传入父组件，这个常称为状态提升
*/

const store = {
    user:'winny00'
}
function tellme(msg) {
    console.log('msg',msg)
}
function FunComp() {
    return (
        <div>
            function 组件
            {/* <ClassComponent /> */}
            {/* <FuncComponent />
            <EventHandle store={store} tellme={tellme}/> */}
            <LifeCycle />
        </div>
    )
}
export default FunComp;