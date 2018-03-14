import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {Card, WhiteSpace,WingBlank} from 'antd-mobile'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../../conponent/usercard/usercard'
@connect(
    state=>state.chatuser,
    {getUserList}
)
class Genius extends React.Component{

    componentDidMount() {
        this.props.getUserList('boss')
    }

    render() {
        console.log(this.state)
        return <UserCard userlist={this.props.userlist}></UserCard>
    }
}

export default Genius