import React, { Component } from 'react'
import defaultImg from '../images/room1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import {RoomContext} from '../context';


export default class SingleRoom extends Component {
    constructor(props){
        super(props)

        this.state={
            slug:this.props.match.params.slug,
            defaultImg
        }
    }

    static contextType = RoomContext
    
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)

        return (
            <div>
                hello from single room
                
            </div>
        )
    }
}
