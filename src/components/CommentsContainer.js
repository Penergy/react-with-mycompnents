import React, {Component} from 'react';
import CommentsList from './CommentsList';
import CommentsBox from './CommentsBox';
import  '../styles/comments.css';

class CommentsContainer extends Component{
    render(){
        return(
            <div className="comments-container">
                <CommentsList />
                <CommentsBox />
            </div>
        )
    }
}

export default CommentsContainer;