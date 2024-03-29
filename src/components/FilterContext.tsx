import React, { useState, createContext, ReactNode } from 'react'

interface FilterProviderProps {
    children: ReactNode
}

export interface FilterContextProps {
    size: string
    setSize: React.Dispatch<React.SetStateAction<string>>
    roomType: string
    setRoomType: React.Dispatch<React.SetStateAction<string>>
    favorites: boolean
    setFavorites: React.Dispatch<React.SetStateAction<boolean>>
    campus: string
    setCampus: React.Dispatch<React.SetStateAction<string>>
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined)

const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
    const [size, setSize] = useState('')
    const [roomType, setRoomType] = useState('')
    const [favorites, setFavorites] = useState(false)
    const [campus, setCampus] = useState('')

    return (
        <FilterContext.Provider
            value={{
                size,
                setSize,
                roomType,
                setRoomType,
                favorites,
                setFavorites,
                campus,
                setCampus,
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}
export { FilterContext, FilterProvider }
