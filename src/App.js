/*
 * @Author: 
 * @Date: 2021-05-28 16:51:00
 * @LastEditTime: 2021-07-14 13:53:44
 * @LastEditors: Please set LastEditors
 * @Description:  
 */
import './App.css';
// import Header from "./components/communication/header.js"
// import Main from "./components/communication/main.js"
// import Main2 from "./components/communication/main2.js"
// import Main4 from "./components/communication/main4.js"
// import Main3 from "./components/communication/main3.js"
// import Main1 from "./components/life/main1.js"
// import Main1 from "./components/ref/main1.js"
// import Main from "./components/ref/main2.js"
// import Main from "./components/HOC/main1.js"
import React from 'react';
// import Main1 from './components/ref/main1.js';
import Main from './components/router/main1.js';
import {BrowserRouter} from 'react-router-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true
    }
  }
  render () {
    return (
      <div className="App">
        {/* 父子通信 */}
        {/* <Header name={"汪苏泷"} age={18} /> */}
        {/* <Main fatherFn={this.myFn} /> */}
        {/* <Main2></Main2> */}
        {/* <Main3/> */}
        {/* <Main4/> */}

        {/* 生命周期 */}
        {/* <div>{this.state.flag && <Main1 name={"汪苏泷"} age={18}></Main1>}</div>
        <button onClick={() => {
          this.change()
        }}>父按钮</button> */}

        {/* ref */}
        {/* <Main1/> */}
        {/* <Main /> */}

        {/* 高阶组件(省略了一部分 具体看文档) */}
        {/* <Main /> */}


        {/* router路由部分 */}
        {/* 包括路由 */}
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>

    );
  }
  change () {
    this.setState(
      { flag: false }
    )
  }
}
export default App;


