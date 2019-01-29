import React,{Component} from 'react';
import door_open from '../assets/door_open.png';
import door_close from '../assets/door_close.png';
export class Door extends Component{
    constructor(props) {
        super(props);
        this.state = {
            status: 'close'
        };
        this.getDoor = this.getDoor.bind(this);
        this.getIn = this.getIn.bind(this);
        this.getOut = this.getOut.bind(this);
        this.close = this.close.bind(this);

    }
    getDoor(){
        return (this.state.status === 'close') ?door_close : door_open
    }

    getIn(){
        this.setState({status: 'in'})
    }

    getOut(){
        this.setState({status: 'out'})
    }

    close(){
        this.setState({status:'close'})
    }

    render(){
        return(
            <div className="device_container">
                <img src={this.getDoor()} alt = "not found" id = "door_image"/>
                <div id='door_button_container'>
                    <button onClick = {this.getIn}> GET IN </button>
                    <button onClick = {this.getOut}> GET OUT </button>
                    <button onClick = {this.close}> CLOSE</button>
                </div>
            </div>
        );
    }
}