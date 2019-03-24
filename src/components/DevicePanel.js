import React,{Component} from 'react';
import {Shards} from "./Shards"
import {Door} from "./Door"
import {Lamp} from "./Lamp"
import {AppConsumer} from "./context/context";

export class DevicePanel extends Component{
    constructor(props) {
        super(props);
        this.openShards = this.openShards.bind(this);
        this.closeShards = this.closeShards.bind(this);
        this.closeLamp= this.closeLamp.bind(this);
        this.openLamp= this.openLamp.bind(this);
        this.shardsChild = React.createRef();
        this.lampChild = React.createRef();

    }
    componentDidMount(){
        this.context.watchIOTData();
    }
    openShards(){
        this.shardsChild.current.open();
    }

    closeShards(){
        this.shardsChild.current.close();
    }

    openLamp(){
        this.lampChild.current.open();
    }

    closeLamp(){
        this.lampChild.current.close();
    }
    render(){
        return(
            <AppConsumer>
                {
                    (context) => (
                        <div id="panel" ref={(ref) => {
                            this.context = context
                        }}>
                            <Shards ref={this.shardsChild}/>
                            <Door openShards={this.openShards} closeShards={this.closeShards}
                                  openLamp={this.openLamp} closeLamp={this.closeLamp}/>
                            <Lamp ref={this.lampChild}/>
                        </div>
                    )
                }

            </AppConsumer>
        );
    }
}
