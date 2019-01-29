import React,{Component} from 'react';
import bulb_on from '../assets/bulb_on.png';
import bulb_off from '../assets/bulb_off.png';
export class Bulb extends Component{
    constructor(props) {
        super(props);
        this.state = {
            status: 'on'
        };
        this.getBulb = this.getBulb.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    getBulb(){
        return (this.state.status === 'on') ? bulb_on:bulb_off;
    }

    open(){
        this.setState({status: 'on'})
    }

    close(){
        this.setState({status:'off'})
    }
    render(){
        return(
            <div className="device_container">
                <img src={this.getBulb()} alt = "not found" id = "bulb_image"/>
                <div id = "bulb_button_container">
                    <button onClick = {this.open} > TURN ON </button>
                    <button onClick = {this.close} > TURN OFF </button>
                </div>
            </div>
        );
    }
}