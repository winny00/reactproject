import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styles from './index2.module.scss'
/**  
 * react负责逻辑控制、数据 --> VDOM
 * ReactDom负责渲染实际DOM、VDOM-->DOM
 * React使用jsx来描述UI
 * 入口文件定义.webpack.config.js
*/
/** 
 * 使用jsx
 * 1.表达式{}的使用
 * 2.函数也是合法表达式
 * 3.jsx是js对象，也是合法表达式
 * 4.条件语句可以基于上面结论实现
 * 5.数组会被作为一组子元素对待，数组中存放一组jsx可用于显示列表数据
 * 6.属性使用
 */
import logo from './logo.svg';
import FunComp from './pages/Component';
const name = '小明啦啦';
function formatName(user) {
    return `${user.firstName} ${user.lastName}`
}
const greet = <p>hello</p>;
const jsx = (
    <div className={styles.app}>
        winny00
        <p>{ name}</p>
        <p>{formatName({firstName:'harry',lastName:'good'})}</p>
        <p>
            {name ? name : '登录'}
        </p>
        <p>
            {name && '小红'}
        </p>
        <p>
            {name || '小红'}
        </p>
        <ul>
            {
                [0,1,2,3].map(item=>{
                    return <li key={item}>{item}</li>
                })
            }
        </ul>
        {greet}
        <img className={styles.logo} src={logo} style={{width:'200px'}}/>
    </div>
)
ReactDOM.render(
    <FunComp />,
  document.getElementById('root')
);

