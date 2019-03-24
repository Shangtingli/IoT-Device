import React, { Component } from 'react';
import {DevicePanel} from './DevicePanel';
import {Topbar} from './Topbar';
import '../styles/App.css';
import {AppProvider} from './context/context';
import * as firebase from "firebase"
import {config} from "./context/FirebaseConfig"
import {Log} from './Log';
class App extends Component {
    constructor(props){
        super(props);
        if (!firebase.apps.length){
            firebase.initializeApp(config);
        }
    }
  render() {
    return (
        <AppProvider>
              <div className="App">
                  <Topbar/>
                  <DevicePanel/>
                  <Log/>
              </div>
        </AppProvider>

    );
  }
}

export default App;
