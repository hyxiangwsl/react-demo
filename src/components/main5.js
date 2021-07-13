/*
 * @Author: 
 * @Date: 2021-06-15 20:15:24
 * @LastEditTime: 2021-07-12 13:50:56
 * @LastEditors: Please set LastEditors
 * @Description:  跨组件通信---除去一层一层传递比较麻烦,所以react提供了其他方案
 * 1.1通过context上下文传递
 * 1.2通过redux传递(相当于VueX)
 * 1.3通过hooks传递(相当牛X)
 */
/**
 *  1.4通过第三方库events
 */
import React from 'react';

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>
        <Son></Son>
        父亲
      </div>
    );
  }
}
class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>
        儿子
      </div>
    );
  }
}

class Main4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <Father />
    )
  }
}

export default Main4;