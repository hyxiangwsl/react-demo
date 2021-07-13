/*
 * @Author: 
 * @Date: 2021-07-13 14:21:49
 * @LastEditTime: 2021-07-13 15:00:15
 * @LastEditors: Please set LastEditors
 * @Description:  获取页面上的元素 ref
 */
import { Component, createRef } from 'react';
class Main1 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.refBox = createRef();
    this.refBox2 = null;//在ref中赋值
  }
  render () {
    return (
      <div>
        <p ref={"box"}>boxboxbox</p>
        <p ref={this.refBox}>我是段落</p>
        {/* 这个arg就是ref的数据 */}
        <p ref={(arg) => { this.refBox2 = arg }}>我是回调函数段落</p>
        <button onClick={() => { this.btnClick() }}>点击按钮</button>
      </div>
    );
  }
  btnClick () {
    // 1.原生js方式
    // 2.通过ref='字符串' 通过this.refs.字符串的形式获取 通过字符串的方式即将被废弃了
    let op = this.refs.box;
    op.innerHTML = "汪苏泷汪苏泷"
    // 3.推荐 使用createRef
    // 通过createRef创建一个对象,然后再将这个对象传递给ref
    let op2 = this.refBox.current;
    op2.innerHTML = "汪苏泷汪苏泷222"
    // 4.通过回调函数的形式
    let op3 =  this.refBox2;
    op3.innerHTML = "汪苏泷汪苏泷333"
    console.log(op);
  }
}

export default Main1;