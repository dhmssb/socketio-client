import React, {useContext, useState, useEffect} from 'react'
import {UserContext} from '../../UserContext'
import {Link} from 'react-router-dom'
import RoomList from './RoomList'
import io from 'socket.io-client'
let socket

const Home = () => {
    const {user,setUser} = useContext (UserContext)
    const [room, setRoom] = useState('')
    const [rooms, setRooms] = useState([])

    const ENDPT = 'localhost:5000'
    useEffect(() => {
        socket =io(ENDPT)
        return() => {
            socket.emit('disconnect')
            socket.off()
        }
    }, [ENDPT])
    useEffect(() => {
        socket.on('output-rooms', rooms => {
            setRooms(rooms)
        })
        
    }, [])

    useEffect(() => {
        socket.on('room-created', room => {
            setRooms([...rooms,room])
        })     
    }, [rooms])
    useEffect(() => {
        console.log(rooms)    
    }, [rooms])

    const handleSubmit =  e=> {
        e.preventDefault()
        socket.emit('create-room',room)
        console.log(room)
        setRoom('')
    }
    
    const setAsRed = () =>{
        const red = {
            name: 'redV',
            email: 'redV@gmail.com',
            password: '123',
            id:'123'
        }
        setUser(red)
    }
    const setAsBlue = () =>{
        const blue = {
            name: 'blueV',
            email: 'blueV@gmail.com',
            password: '456',
            id:'456'
        }
        setUser(blue)
    }
    return (
        <div>
            <div className="row">
            <div className="col s12 m6">
            <div className="card blue-grey darken-1">
        <div className="card-content white-text">
         <span className="card-title">Welcome {user? user.name:''}</span>
        
        <form onSubmit= {handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
               <input 
               placeholder='Enter a room name' id="room" type="text" class="validate"
               value= {room}
               onChange= {e => setRoom(e.target.value)}
               />
              <label htmlFor="room">Room</label>
            </div>
         </div>  
             <button className='btn'>Create Room</button>
        </form>
        
        </div>
        <div className="card-action">
          <a href="#" onClick ={setAsRed}>Set as red</a>
          <a href="#" onClick ={setAsBlue}>set as blue</a>
        </div>
      </div>
    </div>
    <div className='col s6 m5 offset-1'>
        <RoomList rooms = {rooms}/>
    </div>

  </div>
            <Link to ={'/chat'}>
                <button>go to chat</button>
            </Link>
        </div>
    )
}

export default Home