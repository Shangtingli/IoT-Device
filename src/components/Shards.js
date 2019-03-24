import React,{Component} from 'react';
import shards_open from '../assets/shards_open.png';
import shards_close from '../assets/shards_close.png';
import {AppConsumer} from "./context/context";
export class Shards extends Component{
    constructor(props) {
        super(props);
        this.state = {
            status: 'close'
        };
        this.getShards = this.getShards.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);

    }
    componentDidMount(){
        this.context.watchIOTData();
    }

    getShards(){
        return (this.state.status === 'open') ? shards_open: shards_close;
    }

    open(){
        this.setState({status: 'open'})
    }

    close(){
        this.setState({status: 'close'})
    }

    render(){
        return(
            <AppConsumer>
                {
                    (context) => (
                        <div className="device_container" ref={(ref) => {
                            this.context = context
                        }}>
                            <img src={this.getShards()} alt="not found" id="shards_image"/>
                            <div id="shards_button_container">
                                <button onClick={this.open}> OPEN</button>
                                <button onClick={this.close}> CLOSE</button>
                            </div>
                        </div>
                    )
                }

            </AppConsumer>
        );
    }
}
