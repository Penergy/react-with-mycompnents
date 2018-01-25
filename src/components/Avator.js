import React, {Component} from 'react';
import avatorImage from '../images/user-avator.png';

class Avator extends Component{
    render(){
        return(
            <img src={avatorImage} className="avator-comments" alt="logo" />
        )
    }
}
export default Avator;