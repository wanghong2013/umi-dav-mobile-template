import React, { PureComponent } from 'react';
import { connect } from "dva";
import Redirect from 'umi/redirect';

/**
 * @class PrivateRoute 
 * @extends {PureComponent}
 * @description 权限路由
 */
class PrivateRoute extends PureComponent {
    render() {
        const { login: { isLogin } } = this.props;
        if (isLogin) {
            return <>{this.props.children}</>;
        } else {
            return <Redirect to='/user/login' />
        }

    }
}

export default connect(({ login }) => ({ login }))(PrivateRoute);