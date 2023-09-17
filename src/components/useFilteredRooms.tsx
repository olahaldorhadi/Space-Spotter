import { useQuery } from 'react-query'; 

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


function useFilteredRooms() {
  const { data, error, isLoading } = useQuery<DataResponse, CustomError>('roomDetails', fetchRoomDetails);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  // Define your filters here
  const sizeFilter = (room: Room) => parseInt(room.size) >= 2; // Example: size greater than or equal to 20
  const buildingNameFilter = (room: Room) => room.buildingname === "Realfagbygget"; // Replace with actual building name
  const areaNameFilter = (room: Room) => room.areaname === "Gl\u00f8shaugen"; // Replace with actual area name

  
  // Apply the filters and transform the data to the desired format
  const filteredRooms = data?.data.filter(room => sizeFilter(room) && buildingNameFilter(room) && areaNameFilter(room))
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
