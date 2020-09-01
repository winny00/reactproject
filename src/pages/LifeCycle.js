
import React, { Component } from 'react'

export default class LifeCycle extends Component {
    
    // rconst 创建构造函数快捷方法。
    constructor(props) {
        super(props)
    
        this.state = {
            counter: 0
        }
        console.log('constructor::' + this.state.counter)
    }
    // 废弃 用要在前面加上 UNSAFE_component...., 后面用getDerivedStateFromProps替代
    // componentWillMount() {
    //     console.log('componentWillMount',this.state.counter)
    // }
    componentDidMount() {
        console.log('componentDidMount', this.state.counter)
    }
    // 废弃 用要在前面加上 UNSAFE_component...., 后面用getDerivedStateFromProps替代
    // componentWillUpdate() {
    //     console.log('componentWillUpdate', this.state.counter)
    // }
    componentDidUpdate() {
        console.log('componentDidUpdate', this.state.counter)
    }
    shouldComponentUpdate(nextProps,nextState) {
        console.log('shouldComponentUpdate--->', nextProps, nextState)
        // 返回值为 ture 才执行willUpdate\didUpdate

        return nextState.counter !==11;
    }
    // react16.4新引入的两个生命周期函数
    // getDerivedStateFromProps,getSnapshotBeforeUpdate
    /** getDerivedStateFromProps会在调用render方法之前调用，
     * 并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新state，如果返回null则不更新任何内容。
     * 
     * 请注意：不管原因是什么，都会在每次渲染前触发此方法。
     * 这与UNSAFE_componentWillReceiveProps形成对比，后者仅在父组件重新渲染时触发，而不是在内部调用setState时。
     * */ 
    static getDerivedStateFromProps(props,state) {
        console.log('getDerivedStateFromProps;;getDerivedStateFromProps')
        console.log(state)
        // 返回null 不对state做改变，
        return state.counter !== 105 ? null : {counter:0};
    }
    /** 
     * getSnapshotBeforeUpdate()在最近一次渲染输出(提交到DOM节点)之前调用。
     * 它使组件在发生改变之前从DOM中捕获一些信息(如，滚动位置)，
     * 此生命周期的任何返回值将作为参数传递给componentDidUpdate().
     * 此用法并不常见，但它可能出现在UI处理中，如需以特殊方式处理滚动位置的聊天线程等，
     * 返回 snapshot的值或飞田
    */
    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('getSnapshotBeforeUpdate--->', prevState)
        // 返回null 不对state做改变，
        return null
    }
    setCounter=()=>{
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        const { counter } = this.state;
        console.log('render',counter)
        return (
            <div>
                <h1>LifeCycle</h1>
                <p onClick={this.setCounter}>{counter}</p>
                {
                    counter != 2 && <Foo counter={counter} />
                }
            </div>
        )
    }
}

class Foo extends Component{
    // 只有在挂载的组件接收到的props变化时候才会执行。
    // // 废弃 用要在前面加上 UNSAFE_component...., 后面用getDerivedStateFromProps替代
    // componentWillReceiveProps(props,state) {
    //     console.log('Foo----componentWillReceiveProps--->',props)
    // }
    componentWillUnmount() {
        console.log('Foo----componentWillUnmount--good')
    }
    render() {
        const { counter } = this.props;
        return (
            <div>
                <h1>Foo----{counter}</h1>
            </div>
        )
    }
}

