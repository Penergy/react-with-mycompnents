import React, { Component } from 'react';
import Comment from './Comment.js'

class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                { username: 'chengquan223', time: '2017年02月21日', content: '支持一下。', id: 1 },
                { username: 'ntscshen ', time: '2017年02月21日', content: '学习、支持一下。', id: 2 },
                { username: '布瓜忘记了', time: '2017年03月02日', content: '大神你终于又回来了，可以开心的学习了', id: 3 }
            ]
        }
    }
    render() {
        var getCommetList = (comments => {
            var res = [];
            for (let i = 0; i < comments.length; i++) {
                res.push(<Comment username={comments[i].username} datetime={comments[i].time} content={comments[i].content} key={comments[i].id} />)
            }
            return res;
        })
        return (
            <div className="comment-list">
                {getCommetList(this.state.comments)}
            </div>
        )
    }
}

export default CommentsList;