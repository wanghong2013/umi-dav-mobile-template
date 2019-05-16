import React, { Component } from "react";
import { connect } from "dva";
// import { connect } from "dva";
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
      </div>
    )
  }
}

export default Index;

