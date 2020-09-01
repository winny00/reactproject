import React,{useState,useEffect}from 'react'

/** 
 * 
 * 函数组件通过hooks api维护状态
 * 
 * 提示：如果熟悉react class的生命周期函数，
 * 你可以把useEffect Hook看做componentDidMount,componentDidUpdate 和 componentWillUnmount 这三个函数的组合
*/
export default function FuncComponent() {
    const [date,setDate] = useState(new Date());
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('useEffect:2222')
        const timer = setInterval(()=>{
            setDate(new Date())
        },1000)
        return ()=>clearInterval(timer) // return 里的方法是在当前组件销毁时执行的
    },[]) // 后面加[]表示不依赖全部参数，执行一次就完事
    // console.log('hahaha:1111')
    return (
        <div>
            <h1>FuncComponent--DEMO</h1>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}
