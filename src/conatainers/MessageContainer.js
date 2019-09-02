import React, { Component } from 'react';
import { connect } from 'react-redux'
import Message from './../component/Message'

class MessageContainer extends Component {

    render() {
        const { message } = this.props;
        return (
            <Message message={message} />
        );
    }


}


const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

const mapDispactchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispactchToProps)(MessageContainer)