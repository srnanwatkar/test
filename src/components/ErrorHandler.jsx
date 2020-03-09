import React, { Component } from 'react';

export default class ErrorHandler extends Component {
    render() {
        return (
            <div>
                Something went wrong.....
        <p>{this.props.info}</p>
            </div>
        )
    }
}