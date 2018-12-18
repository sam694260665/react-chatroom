import React, {Component} from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, Radio, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from "../../redux/user.redux";
import {Redirect} from 'react-router-dom'
import '../../index.css'

@connect(
    state => state.user,
    {register}
)

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "genius",  //or boss
            user: '',
            pwd: '',
            repeatpwd: ''
        }
    }

    handleChange = (key, val) => {
        this.setState({
            [key]: val
        })
    }
    register = () => {
        const {type, user, pwd, repeatpwd} = this.state;
        this.props.register(this.state)
    }

    render() {
        const RadioItem = Radio.RadioItem;
        const {type} = this.state;
        console.log(this.props)
        return (
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                <Logo/>
                <List>
                    {this.props.msg && <p className='error-msg'>{this.props.msg}</p>}
                    <InputItem
                        onChange={v => this.handleChange('user', v)}>
                        用户</InputItem>
                    <WhiteSpace/>

                    <InputItem
                        onChange={v => this.handleChange('pwd', v)}
                        type='password'>
                        密码</InputItem>
                    <WhiteSpace/>

                    <InputItem
                        onChange={v => this.handleChange('repeatpwd', v)}
                        type='password'>
                        确认密码</InputItem>
                    <WhiteSpace/>
                    <RadioItem checked={type === 'genius'}
                               onChange={v => this.handleChange('type', 'genius')}>

                        牛人
                    </RadioItem>
                    <RadioItem checked={type === 'boss'}
                               onChange={v => this.handleChange('type', 'boss')}>

                        Boss
                    </RadioItem>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>注册</Button>
                </List>

            </div>
        )
    }
}

export default Register