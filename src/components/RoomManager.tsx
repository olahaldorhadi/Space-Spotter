import React, { useState } from 'react';
import {  RoomManagerProps } from './RoomObject'
import './RoomManager.css'

function RoomManager({ rooms: initialRooms }: RoomManagerProps): React.ReactNode {

    const rooms = initialRooms.map(room => ({
        ...room,
        favorite: false,
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
        setFocusedRoom(room);
    }

    const handleFavoriteClick = () => {
        console.log(focusedRoom.favorite)
        setFocusedRoom(prevState => ({
            ...prevState,
            favorite: !prevState.favorite,
        }))
        console.log(focusedRoom.favorite)
    }

    return (
        <>
            <div className='RoomManager--Container' style={{ display: focusedRoom.key === -1 ? 'none' : 'block' }}>
                <div className="RoomManager--Top-row">
                    <h2>{focusedRoom.name}</h2>
                    <div className='RoomManager-Star-button'>
                        <button onClick={handleFavoriteClick}>
                            ☆
                        </button>
                    </div>
                </div>  
                <p>Størrelse: {focusedRoom.size}</p>
                <p>{focusedRoom.bookable}</p>
                <p>Type: {focusedRoom.type}</p>
                <p>Bygning: {focusedRoom.buildingname}</p>
                <p>Campus: {focusedRoom.areaname}</p>
            </div>

            <div className='RoomManager--EntireList'>
                {rooms.map(room => (
                    <div className='RoomManager--ListContainer'>
                        <div className="RoomManager--ListItem" key={room.key} onClick={() => handleClick(room)}>
                            <p><b>{room.name}</b> Bygg: {room.buildingname} - Størrelse: {room.size} plasser</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RoomManager
