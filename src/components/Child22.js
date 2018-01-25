import React, { Component } from 'react';

class Child22 extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.transferMsg('end')
        }, 1000);
    }
    render(){
        return (
            <div>
                <p>child_2_2 component </p>
            </div>
        )
    }
}

export default Child22;
