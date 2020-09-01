import React, { Component } from 'react'

/** 
 * 事件回调函数注意绑定this指向，常见三种方法
 * 1.构造函数中绑定并覆盖:this.change = this.change.bind(this)
 * 2.方法定义为箭头函数： change=()=>{}
 * 3.事件中定义为箭头函数： onChange={()=>this.change()}
 * 
 * react里尊循单项数据流，没有双向绑定，输入框里要设置value和onChange ，称为受控组件
*/
export default class EventHandle extends Component {
    constructor(props) {
        super(props)
        this.state={
            name:''
        }
    }
    submit=()=>{
        console.log('submit',this.state.name)
        console.log('submit2:', this.refs['input'].value)
        // 此处通知父组件并传值
        this.props.tellme('good--->!!!' + this.state.name)
    }
    setChange=(event)=>{
        this.setState({
            name: event.target.value
        })
    }
    render() {
        const {name} = this.state;
        const { store } = this.props;
        return (
            <div>
                <h1>EventHandle__{store.user}</h1>
                <input value={name} onChange={this.setChange} ref="input" />
                <button onClick={this.submit}>点击_{store.user}</button>
            </div>
        )
    }
}
