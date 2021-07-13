/*
 * @Author: 
 * @Date: 2021-06-15 20:15:24
 * @LastEditTime: 2021-07-12 11:19:23
 * @LastEditors: Please set LastEditors
 * @Description:  跨组件通信---除去一层一层传递比较麻烦,所以react提供了其他方案
 * 1.1通过context上下文传递
 * 1.2通过redux传递(相当于VueX)
 * 1.3通过hooks传递(相当牛X)
 * 
 */
//1.创建一个上下文对象
import React from 'react';
// 创建上下文的时候 已经生产了
const AppContext = React.createContext({
  name: "汪苏泷", age: 18
});
//2.从上下文对象获取容器组件
//Provider:生产者容器组件,专门用于负责生产数据
//Consumer:消费者容器组件,专门用于消费生产者容器组件产生的数据
//容器组件:专门用于包裹其他组件的组件

const { Provider, Consumer } = AppContext;
// 可以提供多个上下文 使用多个消费者
const AppContext1 = React.createContext({});
const AppContext2 = React.createContext({});
class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      // <div>
      //   <Son></Son>
      //   父亲
      //   <p>{this.context.name}</p>
      //   <p>{this.context.age}</p>

      // </div>

      // 多个消费者
      <AppContext1.Consumer>
        {(value1) => {
          return (
            <AppContext2.Consumer>
              {value2 => {
                return (
                  <div>
                    <p>{value1.name}</p>
                    <p>{value1.age}</p>
                    <p>{value2.gender}</p>
                  </div>
                )
              }}
            </AppContext2.Consumer>
          )
        }}
      </AppContext1.Consumer>
    );
  }
}
Father.contextType = AppContext;
class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      // <Consumer>
      //   {
      //     (value) => {
      //       {/* value 是生产者生产的数据 */ }
      //       return (
      //         <div>
      //           儿子
      //           <p>{value.name}</p>
      //           <p>{value.age}</p>
      //         </div>
      //       )
      //     }
      //   }
      // </Consumer>
      // 使用创建上下文的时候创建数据时 不需要通过Provider Consumer标签 直接使用this.context
      <div>
        儿子
        <p>{this.context.name}</p>
        <p>{this.context.age}</p>
      </div>
    );
  }
}

// 在不同的地方进行消费
Son.contextType = AppContext;
class Main4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      // 生产数据 从生产者的value 生产数据,从消费者接收
      // <Provider value={{ name: "汪苏泷", age: 18 }}>
      // 我是爷爷
      // <Father />

      // </Provider>
      // 多个消费者
      <AppContext1.Provider value={{ name: "wsl", age: 17 }}>
        <AppContext2.Provider value={{ gender: "男" }}>
          <Father></Father>
        </AppContext2.Provider>
      </AppContext1.Provider>
    )
  }
}

export default Main4;