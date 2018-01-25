import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Child_1 from './components/Child_1';
import Child_2 from './components/Child_2';
import CommentsContainer from './components/CommentsContainer';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'start'
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                msg: 'end'
            })
        }, 5000)
    }
    render() {
        return (
            <Child1 msg={this.state.msg} />
        )
    }
}

class Parent2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg: 'start'
        }
    }
    transferMsg(msg){
        this.setState({
            msg
        })
    }
    render(){
        return (
            <div>
                <p>Child msg: {this.state.msg} </p>
                <Child2 transferMsg = { msg => this.transferMsg(msg)} />
            </div>
        )
    }
}

class Parent3 extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg: 'start'
        }
    }
    transferMsg(msg){
        this.setState({
            msg
        })
    }
    componentDidUpdate(){
        console.log('Parent update');
    }
    render(){
        return(
            <div>
                <Child_1 transferMsg = { msg => this.transferMsg(msg)} />
                <Child_2 msg={this.state.msg} /> 
            </div>
        )
    }
}


ReactDOM.render(<CommentsContainer />, document.getElementById('root'));
// registerServiceWorker();
