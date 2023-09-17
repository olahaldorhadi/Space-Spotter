import { useQuery } from 'react-query';

interface CustomError {
  message: string;
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

function MyComponent() {
  const { data, error, isLoading } = useQuery<unknown, CustomError>('roomDetails', fetchRoomDetails);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return <div style={{ color: 'black' }}>Data: {JSON.stringify(data)}</div>;
}

export default MyComponent;
