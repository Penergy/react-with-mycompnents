import React, {Component} from 'react'
import Child11 from './Child11.js'

class Child1 extends Component{
    render(){
        return (
            <div>
                <p> {this.props.msg} </p>
                <Child11 {...this.props} />
            </div>
        )
    }
}

export default Child1;