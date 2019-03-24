
import React from 'react';
import * as firebase from 'firebase';
//
// Initial State...
//

const initialState = {
    door: "closed",
    lamp: "off",
    shard: "closed",
    iotData: {}
};

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export class AppProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;

        this.setDoorStatus = this.setDoorStatus.bind(this);
        this.setLampStatus = this.setLampStatus.bind(this);
        this.setShardStatus = this.setShardStatus.bind(this);
        this.watchIOTData = this.watchIOTData.bind(this);
        this.getDoorLog= this.getDoorLog.bind(this);
        this.getShardLog= this.getShardLog.bind(this);
        this.getLampLog= this.getLampLog.bind(this);
    }

    getDoorLog(){
        debugger;
        return this.state.iotData.log.door;
    }

    getShardLog(){
        debugger;
        return this.state.iotData.log.shard;
    }

    getLampLog(){
        return this.state.iotData.log.lamp;
    }
    setDoorStatus(text){
        this.setState({door:text})
    }

    setLampStatus(text){
        this.setState({lamp:text})
    }

    setShardStatus(text){
        this.setState({shard:text})
    }

    watchIOTData = () =>{
        firebase.database().ref('root').on('value',function(snapshot){
            const data = snapshot.val();
            this.setState({iotData: data});
        }.bind(this),function(error){debugger;console.log(error);});
    }

    render() {
        return (
            <AppContext.Provider value={{
                setShardStatus: this.setShardStatus,
                setLampStatus: this.setLampStatus,
                setDoorStatus: this.setDoorStatus,
                watchIOTData:this.watchIOTData,
                getDoorLog: this.getDoorLog,
                getShardLog:this.getShardLog,
                getLampLog: this.getLampLog,
                iotData:this.state.iotData
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}