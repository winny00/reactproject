import React, { Component } from "react";
/** 
 * class组件 
 * 必须 extends Component 才拥有状态和生命周期
 * 有关UI的变量必须放在state里定义,因为每次执行 setState都会重新执行render函数
*/
// clock
export default class componentName extends Component {
    /** 
     * 组件状态管理：如果组件中数据会变化，并影响页面内容，则组件需要拥有状态(state)并维护状态。
     * 类组件里的状态管理
     *      class组件使用state和setState维护状成
     * 
    */
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            counter:0
        }
    }
    // 组件挂载完成
    /** 
     * setState特性，用它更新状态而不能直接修改
     * this.state.counter +=1 // 错误
     * 
     * setState是批量执行的，因此对同一个状态执行多次只能起一次作用，多个状态更新
     * 
     * setState通常是异步的，因此如果要获取到最新状态值有以下三种方式
     * 1.传递函数给setState方法
     *          this.setState((nextState,props) => ({counter:state.counter + 1)}))
     * 2.使用定时器
     *          setTimeout(()=>{
     *              this.changeValue()
     *          })
     * 3.使用原生事件中修改状态
     *         componentDidMount(){
     *              document.body.addEventListener('click',this.changeValue,false)
     *          }
     * 
     * 总结：setState 只有在合成事件和生命周期函数中是异步的。在原生事件中如addEventListener和setTimeout、setInterval中是同步的。
     * ---拓展:为什么setState只有在React合成事件和生命周期中是异步的，在原生事件和setTimeout、setInterval、addEventListener中是同步的??
     *      原生事件绑定不会通过合成事件的方式处理，自然也不会进入更新事务的处理流程。
     *      setTimeout也一样，在setTimeout回调执行时已经是完成了原更新组件流程，也不会进入到异步更新流程，其结果自然也是同步
     *      
     *      
    */
    componentDidMount() {
        console.log('mount');
        this.timer = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
        document.getElementById('test').addEventListener('click',()=>{
            this.setState({
                counter: this.state.counter + 1
            })
            console.log('state:counter:' + this.state.counter)
        })
    }
    // 组件卸载之前完成
    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');              
    }
    setCounter=()=>{
        // this.setState({
        //     counter:this.state.counter + 1
        // },()=>{
        //     console.log('state:counter:' + this.state.counter)
        // })

        // 异步方式处理
        // this.setState(nextState=>{
        //     return {
        //         counter: nextState.counter + 1
        //     }
        // })
        // this.setState(nextState => {
        //     return {
        //         counter: nextState.counter + 2
        //     }

        // })


        // 实现同步
        // setTimeout(()=>{
        //     this.setState({
        //         counter: nextState.counter + 1
        //     })
        // },)
        // console.log('state:counter:' + this.state.counter)
    }
    render() {
        const name = '小明';
        const { date, counter} = this.state;
        return (
            <div>
                <h1>ClassComponent</h1>
                <p>{name}</p>
                <p id="test" onClick={this.setCounter}>counter:{counter}</p>
                <div>{date.toLocaleTimeString()}</div>
            </div>
        )
    }
}