import React, { Component } from 'react'
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state ={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    };

    


    render() {
        return <RoomContext.Provider value={"Hello guys"}>
            {this.props.children}
        </RoomContext.Provider>
    }
}


const RoomConsumer = RoomContext.Consumer;

export {RoomConsumer,RoomProvider,RoomContext};