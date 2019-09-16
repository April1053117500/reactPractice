import React from 'react'

class welcome extends React.Component {
  render () {
    
    const todoList = ['adssadsad','123123123123']
    const isLogin = false
    return (
        // jsx的属性基本和html属性一致，除了两个属性class和for作为关键字被保留，需要变为className和htmlFor
        <div className="this" htmlFor="hahah">
          <h1> hello react </h1>
          {React.createElement("h1", null, "hello world222")}
          <ul>
            {
              todoList.map(item=>
                <li>{item}</li>
              )
            }
          </ul>
          {isLogin ? <p>您已经登陆</p>:<p>请登录</p>}
        </div>
    )
  }
}

export default welcome