/*
 * @Author: 
 * @Date: 2021-07-13 17:11:06
 * @LastEditTime: 2021-07-13 17:24:09
 * @LastEditors: Please set LastEditors
 * @Description:  高阶组件之应用场景--权限控制
 */
import { Component, PureComponent } from 'react'
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>
        用户信息界面
      </div>
    );
  }
}
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>
        登录界面
      </div>
    );
  }
}
function EnhancedComponent (WrapperComponent) {
  class Authority extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {}
    }
    render () {

      if (this.props.isLogin) {
        return <Info />
      } else {
        return <Login />
      }
    }
  }

  return Authority;
}

const AuthorityInfo = EnhancedComponent(Info);
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>
        <AuthorityInfo isLogin={false}/>
      </div>
    );
  }
}

export default Main;
