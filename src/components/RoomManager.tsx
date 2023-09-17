import React from 'react';
import { RoomObject, RoomManagerProps } from './RoomObject'



// function RoomManager(){

//     const result = FilterRoomList(); // FilterRoomList returns the room objects
//     const allRoomObjects: never[] = []

//     if (Array.isArray(result)) { // result is an array of objects
//         result.forEach(item => {
//             allRoomObjects.add(item.name); // or any other property
//         });
//     } else if (result === undefined) {
//         // handle the undefined case
//         console.log("Result is undefined");
//     } else {
//         // result is a JSX.Element
//         // Typically, you can't "iterate" over a JSX.Element in the same way you iterate over an array.
//         // Depending on your needs, you might want to render it, manipulate it, etc.
//         console.log("Result is a JSX.Element");
//     }
// }

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
