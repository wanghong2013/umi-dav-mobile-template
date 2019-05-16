import React, { PureComponent } from 'react';
import { connect } from "dva";
import Redirect from 'umi/redirect';

class PrivateRoute extends PureComponent {
    render() {
        const { login: { isLogin } } = this.props;
        // console.log(isLogin, 'isLogin')
        console.log(this.props, '私有路由路由');
        console.log(isLogin, 'isLoginisLoginisLoginisLoginisLogin');
        if (isLogin) {
            return <>{this.props.children}</>;
        } else {
            return <Redirect to='/user/login' />
        }

    }
}

export default connect(({ login }) => ({ login }))(PrivateRoute);