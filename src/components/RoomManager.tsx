import React, { useState } from 'react';
import {  RoomManagerProps } from './RoomObject'
import './RoomManager.css'
import { addString, removeString, getList } from '../utils/localStorageUtil';

function RoomManager({ rooms: initialRooms }: RoomManagerProps): React.ReactNode {
    const favoriteRooms = getList() || [];

    const rooms = initialRooms.map(room => ({
        ...room,
        favorite: favoriteRooms.includes(room.name),    
    }));

    const [focusedRoom, setFocusedRoom] = useState({
        key: -1,
        name: "",
        size: "",
        bookable: "",
        type: "",
        buildingname: "",
        areaname: "",
        favorite: false,
    });

    const handleClick = (room: typeof rooms[0]) => {
        console.log(focusedRoom.areaname)
        console.log(focusedRoom.favorite)
        console.log(room.key)
        setFocusedRoom(room);
    }

    const handleFavoriteClick = () => {   //should change text to ★
        console.log(focusedRoom.favorite)
        setFocusedRoom(prevState => ({
            ...prevState,
            favorite: !prevState.favorite,
        }))
        if (!addString(focusedRoom.name)){ //Returns true and adds roomname if localStorage already contains room, else false
            console.log("room " + focusedRoom.name + " already favorite, localstorage before rm: " + favoriteRooms)
            removeString(focusedRoom.name)
            console.log("localstorage after rm: " + getList())
        }
    }


    return (
        <>
            <div className='room-manager--container' style={{ display: focusedRoom.key === -1 ? 'none' : 'block' }}>
                <div className="room-manager--top-row">
                    <h2>{focusedRoom.name}</h2>
                    <button className='room-manager--star-button'
                         onClick={handleFavoriteClick}>
                            ☆
                    </button>
                </div>  
                <p>Størrelse: {focusedRoom.size}</p>
                <p>{focusedRoom.bookable}</p>
                <p>Type: {focusedRoom.type}</p>
                <p>Bygning: {focusedRoom.buildingname}</p>
                <p>Campus: {focusedRoom.areaname}</p>
            </div>

            <div className='room-manager--entire-list'>
                {rooms.map(room => (
                    <div className='room-manager--list-container'>
                        <div className="room-manager--list-item" key={room.key}
                        onClick={() => handleClick(room)}>
                            <p><b>{room.name}</b> Bygg: {room.buildingname} - Størrelse: {room.size} plasser</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RoomManager
