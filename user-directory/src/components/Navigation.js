import React, { Component } from 'react';

export default class DirectoryApp extends Component {

    render() {
        
        return (
            <div>
            <button onClick={this.props.previous}>{'<Previous '}</button>
            <button onClick={this.props.next}>Next></button>
            </div>
        )
    }
}