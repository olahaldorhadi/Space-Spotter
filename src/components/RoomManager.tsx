import React, { useState, useEffect, useRef } from 'react'
import { RoomManagerProps } from './RoomObject'
import './RoomManager.css'
import { addString, removeString, getList } from '../utils/localStorageUtil'

function RoomManager({
    rooms: initialRooms,
}: RoomManagerProps): React.ReactNode {
    const favoriteRooms = getList() || []

    const rooms = initialRooms.map((room) => ({
        ...room,
        favorite: favoriteRooms.includes(room.name),
    }))

    const [focusedRoom, setFocusedRoom] = useState({
        key: -1,
        name: '',
        size: '',
        bookable: '',
        type: '',
        buildingname: '',
        areaname: '',
        favorite: false,
    })

    const roomManagerContainerRef = useRef<HTMLDivElement | null>(null)

    const handleClick = (room: (typeof rooms)[0]) => {
        setFocusedRoom(room)
    }

    const handleFavoriteClick = () => {
        setFocusedRoom((prevState) => ({
            ...prevState,
            favorite: !prevState.favorite,
        }))
        if (!addString(focusedRoom.name)) {
            removeString(focusedRoom.name)
        }
    }

    useEffect(() => {
        // Scroll to the room-manager--container when it is updated with an offset
        if (roomManagerContainerRef.current) {
            const offset = -200 // Adjust the offset value as needed
            const { top } =
                roomManagerContainerRef.current.getBoundingClientRect()
            window.scrollTo({
                top: window.pageYOffset + top + offset,
                behavior: 'smooth',
            })
        }
    }, [focusedRoom])

    return (
        <>
            <div
                ref={roomManagerContainerRef}
                className="room-manager--container"
                style={{ display: focusedRoom.key === -1 ? 'none' : 'block' }}
            >
                <div className="room-manager--top-row">
                    <h2>{focusedRoom.name}</h2>
                    <button
                        className="room-manager--star-button"
                        onClick={handleFavoriteClick}
                    >
                        ☆
                    </button>
                </div>
                <p>Størrelse: {focusedRoom.size}</p>
                <p>{focusedRoom.bookable}</p>
                <p>Type: {focusedRoom.type}</p>
                <p>Bygning: {focusedRoom.buildingname}</p>
                <p>Campus: {focusedRoom.areaname}</p>
            </div>

            <div className="room-manager--entire-list">
                {rooms.map((room) => (
                    <div
                        className="room-manager--list-container"
                        key={room.key}
                    >
                        <div
                            className="room-manager--list-item"
                            onClick={() => handleClick(room)}
                        >
                            <p>
                                <b>{room.name}</b> Bygg: {room.buildingname} -
                                Størrelse: {room.size} plasser
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default RoomManager
