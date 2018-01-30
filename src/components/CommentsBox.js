import React, { Component } from 'react';
import Avator from './Avator'

class CommentsBox extends Component {
    constructor(props){
        super(props);
        this.state = {value:''}
        this.handleText = this.handleText.bind(this)
    }
    handleText(event){
        this.setState({value: event.target.value})
        console.log(this.state.value)
    }
    render() {
        return (
            <div className="comments-box">
                <div className="pull-left">
                    <Avator />
                </div>
                <div className="comments-box-content">
                    <form action="tt">
                        <div className="form-group mb0">
                            <textarea name="text" rows="3" className="form-control" placeholder="文明社会，理性评论" onChange={this.handleText}></textarea>
                            <div className="mt15 text-right">
                                <button type="button" className="hide"></button>
                                <button className=" btn btn-primary" type="button">发布评论</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CommentsBox;