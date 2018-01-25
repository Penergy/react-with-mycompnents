import React, { Component } from 'react'

class Child_2_1 extends Component {
    componentDidUpdate() {
        console.log('Child_2_1 update');
    }

    render() {
        return <div>
            <p>child_2_1 component</p>
        </div>
    }
}

class Child_2 extends Component {
    componentDidUpdate() {
        console.log('Child_2 update')
    }
    render() {
        return (
            <div>
                <p>child_2 component: {this.props.msg}</p>
                <Child_2_1 />
            </div>
        )
    }
}

export default Child_2;