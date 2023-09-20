import React, { useState, createContext, ReactNode, useContext } from 'react';

// interface Room {
//   id: string;
//   name: string;
//   acronym: string;
//   size: string;
//   size_exam: string;
//   buildingname: string;
//   areaname: string;
//   student_booking: string;
//   type: string;
//   favorite: boolean;
// }

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

}  

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [size, setSize] = useState('');
  const [roomType, setRoomType] = useState('');
  const [favorites, setFavorites] = useState(false);
  const [campus, setCampus] = useState('');


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
  );
};
export function useFilterContext(): FilterContextProps {
  const context = useContext(FilterContext);
  if (!context) {
      throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
}

export { FilterContext, FilterProvider };