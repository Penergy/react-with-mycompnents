import React, { Component } from 'react';
import Child22 from './Child22.js';

class Child2 extends Component {
    
    render(){
        return (
            <div>
                <p>child_2 component </p>
                <Child22 {...this.props} /> 
            </div>
        )
    }
}

export default Child2;