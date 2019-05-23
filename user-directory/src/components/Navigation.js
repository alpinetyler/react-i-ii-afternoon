import React, { Component } from 'react';

export default class DirectoryApp extends Component {

    render() {
        
        return (
            <div className="navigation">
            <span className='button' onClick={this.props.previous}>{'<Previous '}</span>
            <span className='otherbuttons'>
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
                </span>
            <span className='button' onClick={this.props.next}>Next></span>
            </div>
        )
    }
}