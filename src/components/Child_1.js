import React, { Component } from 'react'

class Child_1 extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.transferMsg('end')
        }, 2000);
    }
    componentDidUpdate(){
        console.log('Child_1 update')
    }
    render(){
        return(
            <div>
                <p> Child_1 component </p>
            </div>
        )
    }
}

export default Child_1;