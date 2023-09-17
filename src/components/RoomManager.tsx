import React from 'react';
import { RoomObject, RoomManagerProps } from './RoomObject'

function RoomManager({ rooms }: RoomManagerProps): React.ReactNode {
    return (
        <div>
            {rooms.map(RoomObject => (
                <div key={RoomObject.key}>
                    <h2>{RoomObject.name}</h2>
                    <p>Size: {RoomObject.size}</p>
                    <p>Bookable: {RoomObject.bookable}</p>
                    <p>Type: {RoomObject.type}</p>
                    <p>Building: {RoomObject.buildingname}</p>
                    <p>Area: {RoomObject.areaname}</p>
                </div>
            ))}
        </div>
    );
}

export default RoomManager
