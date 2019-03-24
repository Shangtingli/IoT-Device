import React from 'react';
import {AppConsumer} from "./context/context";

export class Topbar extends React.Component{

    componentDidMount(){
        this.context.watchIOTData();
        debugger;
    }
    render(){
        return(
            <AppConsumer>
                {
                    (context) => (
                        <div id="topbar-container" ref = {(ref) => {this.context = context}}>
                            <p>
                                Welcome to Smart Home!
                            </p>
                        </div>
                    )
                }
            </AppConsumer>
        )
    }
}
