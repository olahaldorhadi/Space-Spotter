import { useQuery } from 'react-query'; 
import { useContext } from 'react';
import { FilterContext } from './FilterContext';

//This is a custom hook

interface CustomError {
  message: string;
}
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
  // add other properties as necessary
}

interface DataResponse {
  name: string;
  version: string;
  timestamp: string;
  data: Room[];
}

function getCurrentWeek() {
  const date = new Date();
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

const currentWeek = getCurrentWeek();
const currentYear = new Date().getFullYear().toString();

const fetchRoomDetails = async () => {
  const response = await fetch('/ntnu/ws/room/2.0/allrooms.php?year=' + currentYear + '&week=' + currentWeek + '&fulldetails=1', {
    method: "GET",
    headers: {
      "accept": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

interface UseFilteredRoomsReturnType {
  rooms: {
    key: number;
    name: string;
    size: string;
    bookable: string;
    type: string;
    buildingname: string;
    areaname: string;
  }[] | undefined;
  isLoading: boolean;
  error: CustomError | null;
}

function useFilteredRooms(): UseFilteredRoomsReturnType {
  const { data, error, isLoading } = useQuery<DataResponse, CustomError>('roomDetails', fetchRoomDetails);
  
  const { campus, size, roomType, favorites } = useContext(FilterContext);
  console.log("Size: " + size)
  console.log("Size: " + size)

  // Define your filters here
  const sizeFilter = (room: Room) => parseInt(room.size) >= size; // Example: size greater than or equal to 20
  const areaNameFilter = (room: Room) => room.areaname === campus; // Replace with actual area name
  const typeFilter = (room: Room) => room.type === roomType;

  
  // Apply the filters and transform the data to the desired format
  const filteredRooms = data?.data.filter(room => sizeFilter(room) && areaNameFilter(room) && typeFilter(room) )
    .map((room, index) => ({
      key: index,
      name: room.name,
      size: room.size, // Assuming `room.size` is the property for size
      bookable: room.student_booking == "1" ? "Kan bookes" : "Kan ikke bookes",
      type: room.type, // You might want to replace this with actual data from your dataset
      buildingname: room.buildingname, // You might want to replace this with actual data from your dataset
      areaname: room.areaname // You might want to replace this with actual data from your dataset
    }));
  

  return { rooms: filteredRooms, isLoading, error };
}


export default useFilteredRooms;
