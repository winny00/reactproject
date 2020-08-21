import React from 'react';
import ReactDOM from 'react-dom';

/**  
 * react负责逻辑控制、数据 --> VDOM
 * ReactDom负责渲染实际DOM、VDOM-->DOM
 * React使用jsx来描述UI
 * 入口文件定义.webpack.config.js
*/
ReactDOM.render(
  <div>jsx</div>,
  document.getElementById('root')
);

