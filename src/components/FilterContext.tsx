import React, { useState, createContext, ReactNode } from 'react';

interface Room {
  id: string;
  name: string;
  acronym: string;
  size: string;
  size_exam: string;
  buildingname: string;
  areaname: string;
  student_booking: string;
  type: string;
  favorite: boolean;
}

interface FilterProviderProps {
    children: ReactNode;
}

interface FilterContextProps {
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
  roomType: string;
  setRoomType: React.Dispatch<React.SetStateAction<string>>;
  favorites: boolean;
  setFavorites: React.Dispatch<React.SetStateAction<boolean>>;
  campus: string;
  setCampus: React.Dispatch<React.SetStateAction<string>>;
  // favoriteRooms: Room[]; 
  // addFavoriteRoom: (room: Room) => void;
  // removeFavoriteRoom: (roomId: string) => void;
}  

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [size, setSize] = useState('');
  const [roomType, setRoomType] = useState('');
  const [favorites, setFavorites] = useState(false);
  const [campus, setCampus] = useState('');
  // const [favoriteRooms, setFavoriteRooms] = useState<Room[]>([]);

  // const addFavoriteRoom = (room: Room) => {

  //   setFavoriteRooms((prev) => [...prev, room]);
  // };

  // const removeFavoriteRoom = (roomId: string) => {
  //   setFavoriteRooms((prev) => prev.filter((room) => room.id !== roomId));
  // };

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
        // favoriteRooms,  // add this line
        // addFavoriteRoom,  // add this line
        // removeFavoriteRoom  // add this line
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };