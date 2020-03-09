import React, { Component } from 'react';

export default class ErrorHandler extends Component {
    render() {
        return (
            <div>
                Something went wrong.....
                {this.props.info}
                {/* <p>{this.props.info}</p> */}
            </div>
        )
    }
}