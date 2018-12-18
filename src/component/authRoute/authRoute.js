import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {loadData} from "../../redux/user.redux";
import {connect} from 'react-redux'

@withRouter
@connect(
    null,
    {loadData}
)
class AuthRoute extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const publickList = ['/login', '/register'];
        const pathname = this.props.location.pathname
        if (publickList.indexOf(pathname) > -1) {
            return null
        }
        // 获取用户信息
        axios.get('/user/info')
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    if (res.data.code === 0) {
                        // return
                        this.props.loadData(res.data.data)
                    } else {
                        this.props.history.push('/login')
                    }
                }
            })
        // 是否登录
        // 现在的url地址 Login是不需要跳转的
        // 用户的type 身份是Boss还是牛人
        // 用户是否完善信息
    }

    render() {
        return null
    }
}

export default AuthRoute