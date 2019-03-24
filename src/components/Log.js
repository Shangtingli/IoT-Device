import React from 'react';
import {AppConsumer} from './context/context';

export class Log extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            log: {},
            log_type: 'none'
        }
        this.changeVisibility = this.changeVisibility.bind(this);
        this.getDoorLog = this.getDoorLog.bind(this);
        this.getLampLog = this.getLampLog.bind(this);
        this.getShardLog = this.getShardLog.bind(this);
        this.clearLog = this.clearLog.bind(this);
        this.constructTable = this.constructTable.bind(this);
    }

    clearLog(){
        this.setState({log:{},log_type: 'none'})
    }

    componentDidMount(){
        this.context.watchIOTData();
    }

    changeVisibility(){
        if (this.state.visibility === 'none'){
            this.setState({visibility:'block'});
        }
        else{
            this.setState({visibility:'none'})
        }
    }


    getDoorLog(){
        debugger;
        this.setState({log:this.context.getDoorLog(), log_type:'door'});
    }
    getShardLog(){
        this.setState({log:this.context.getShardLog(), log_type:'shard'});
    }
    getLampLog(){
        this.setState({log:this.context.getLampLog(), log_type:'lamp'});
    }

    constructTable(){
        debugger;
        return (
            <div style = {{display: (Object.keys(this.state.log).length === 0) ? 'none':'block'}} id = 'history-log-table'>
                <table>
                    <tbody>
                    <tr>
                        <th> Time </th>
                        <th> Status </th>
                    </tr>
                    {
                        Object.keys(this.state.log).map(function(key){
                            debugger;
                            return(
                                <tr key= {key}>
                                    <td>{key}</td>
                                    <td>{this.state.log[key]}</td>
                                </tr>
                            )
                        }.bind(this))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
    render(){
        return(
            <AppConsumer>
            {
                (context) => (
                    <div style={{display:(this.state.visibility === 'none') ? ('none'):('block')}} id = "log-container" ref = {(ref) => {this.context = context}}>
                        <span> Show Log for: </span>
                        <button onClick = {this.getDoorLog}>Door</button>
                        <button onClick = {this.getShardLog}>Shard</button>
                        <button onClick = {this.getLampLog}> Lamp </button>
                        <button onClick = {this.clearLog}> Clear </button>
                        {this.constructTable()}
                        <p>===================</p>
                    </div>
                )
            }
            </AppConsumer>

        );
    }
}

// function writeUserData(userId, name, email, imageUrl) {
//     firebase.database().ref('users/' + userId).set({
//         username: name,
//         email: email,
//         profile_picture : imageUrl
//     });
// }

// function writeNewPost(uid, username, picture, title, body) {
//     // A post entry.
//     var postData = {
//         author: username,
//         uid: uid,
//         body: body,
//         title: title,
//         starCount: 0,
//         authorPic: picture
//     };
//
//     // Get a key for a new Post.
//     var newPostKey = firebase.database().ref().child('posts').push().key;
//
//     // Write the new post's data simultaneously in the posts list and the user's post list.
//     var updates = {};
//     updates['/posts/' + newPostKey] = postData;
//     updates['/user-posts/' + uid + '/' + newPostKey] = postData;
//
//     return firebase.database().ref().update(updates);
// }