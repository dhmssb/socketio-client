import React from 'react'
import Room from './Room'
import {Link} from 'react-router-dom'

const RoomList = ({rooms}) => {
    return (
        <div>
            {rooms && rooms.map(room => (
            <Link to={'/chat/' + room._id + '/' + room.name}
            key={room._id}>
            <Room key={room._id} name={room.name} /> 
            </Link>
            ))}
        </div>
    )
}

export default RoomList
