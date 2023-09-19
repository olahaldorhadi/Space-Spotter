import React, { useState } from 'react';
import {  RoomManagerProps } from './RoomObject'
import './RoomManager.css'
import StarButton from "./StarButton";

function RoomManager({ rooms }: RoomManagerProps): React.ReactNode {

    const [focusedRoom, setFocusedRoom] = useState({
        key: 1,
        name: "Test Room",
        size: "20",
        bookable: "Yes",
        type: "Seminar",
        buildingname: "Test Building",
        areaname: "Test Area",
    });

    const handleClick = (room: typeof rooms[0]) => {
        setFocusedRoom(room);
    }

    return (
        <>
            <div className='RoomManager--Container'>
                <div className="RoomManager--Top-row">
                    <h2>{focusedRoom.name}</h2>
                    <StarButton description={"☆"} />
                </div>  
                <p>Størrelse: {focusedRoom.size}</p>
                <p>Bookable{focusedRoom.bookable}</p>
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
