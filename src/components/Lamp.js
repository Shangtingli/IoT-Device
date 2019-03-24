import React,{Component} from 'react';
import lamp_on from '../assets/lamp_on.png';
import lamp_off from '../assets/lamp_off.png';
import {AppConsumer} from "./context/context";
export class Lamp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            status: 'off',
            authStatusReported: false,
            isUserSignedIn: false
        };
        this.getLamp = this.getLamp.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    componentDidMount(){
        this.context.watchIOTData();
    }
    getLamp(){
        return (this.state.status === 'on') ? lamp_on:lamp_off;
    }

    open(){
        this.setState({status: 'on'})
    }

    close(){
        this.setState({status:'off'})
    }

    render(){
        return(
            <AppConsumer>
                {
                    (context) => (
                        <div className="device_container" ref = {(ref) => {this.context = context}}>
                            <img src={this.getLamp()} alt = "not found" id = "lamp_image"/>
                            <div id = "lamp_button_container">
                                <button onClick = {this.open} > TURN ON </button>
                                <button onClick = {this.close} > TURN OFF </button>
                            </div>


                        </div>
                    )
                }
            </AppConsumer>
        );
    }
}