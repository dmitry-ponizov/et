
import React, { Component } from 'react'
import { Props } from './types';
import { connected } from './connect';

class Logout extends Component<Props>{

    componentDidMount() {
        this.props.logoutAction()
    }
    render() {
        return <></>
    }
}

export default connected(Logout)