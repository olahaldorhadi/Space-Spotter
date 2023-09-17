import React from 'react';
import {  RoomManagerProps } from './RoomObject'
import './RoomManager.css'

function RoomManager({ rooms }: RoomManagerProps): React.ReactNode {
    return (
        <div className='RoomManager--EntireList'>
            {rooms.map(room => (
                // <div key={RoomObject.key}>
                //     <h2>{RoomObject.name}</h2>
                //     <p>Size: {RoomObject.size}</p>
                //     <p>Bookable: {RoomObject.bookable}</p>
                //     <p>Type: {RoomObject.type}</p>
                //     <p>Building: {RoomObject.buildingname}</p>
                //     <p>Area: {RoomObject.areaname}</p>
                // </div>
                <div className='RoomManager--ListContainer'>
                    <div className="RoomManager--ListItem" key={room.key}>
                        <p><b>{room.name}</b> Bygg: {room.buildingname} - Størrelse: {room.size} plasser</p>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default RoomManager
