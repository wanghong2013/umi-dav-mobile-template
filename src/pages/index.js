
import React, { Component, PureComponent } from "react";
import { connect } from "dva";
@connect(({ login, user }) => ({
  login,
  user
}))

class Index extends Component {
  render() {
    console.log(this.props);
    const { user: { nickName, age }, login: { isLogin }, dispatch } = this.props;
    return (
      <div className="g-wrapper">
        <div>{age}</div>
        <div>{nickName}</div>
        <div>{isLogin}</div>
        <button onClick={() => dispatch({ type: "user/saveAge", payload: 22 })}>修改年龄</button>
        <Test />
      </div>
    )
  }
}


class Test extends PureComponent {
  render() {
    console.log('Test')
    return (
      <div>Test</div>
    )
  }
}

export default Index;

