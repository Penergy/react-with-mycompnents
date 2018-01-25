import React, { Component } from 'react';
import Avator from './Avator'

class Comment extends Component {
    render(){
        return (
            <div className="comments-item" >
                <div className="pull-left">
                        <Avator />
                </div>
                <div className="comments-content">
                    <div className="comment-trigger">
                        <strong> 
                            <a target="_blank" href="/u/chengquan223"> {this.props.username} </a>
                        </strong>
                        <span> </span>
                        <span> {this.props.datetime} </span>
                    </div>
                    <div className="fmt mb10">
                        <p> {this.props.content} </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;