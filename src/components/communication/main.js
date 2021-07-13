/*
 * @Author: 
 * @Date: 2021-06-01 21:30:25
 * @LastEditTime: 2021-06-01 21:31:03
 * @LastEditors: Please set LastEditors
 * @Description:  
 */
import React from 'react';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>
        <div>
          我是main
        </div>
        <button onClick={() => { this.btnClick() }}>子组件按钮</button>
      </div>
    );
  }
  btnClick(){
    this.props.fatherFn("从子传出去的",111121);
  }
}

export default Main;