import React from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
// import FilterSection from './components/FilterSection';
import { QueryClient, QueryClientProvider } from 'react-query';
import RoomManager from './components/RoomManager';
import useFilteredRooms from './components/useFilteredRooms';
// import FilterButton from './components/FilterButton';
import { FilterProvider } from './components/FilterContext';
import Footer from './components/Footer';

const queryClient = new QueryClient();

const AppContent = () => {
  const { rooms: fetchedRooms, isLoading, error } = useFilteredRooms();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  
  // const testRoom = {
  //     key: 1,
  //     name: "Test Room",
  //     size: "20",
  //     bookable: "Yes",
  //     type: "Seminar",
  //     buildingname: "Test Building",
  //     areaname: "Test Area",
  // };

  return (
    <>
      <div className="main-content">
        <div className="app-styling">
          <Header />
          <Filters />
          <div className="roommanager-div">
            <RoomManager rooms={fetchedRooms || []} />
          </div>
        </div>
        <div>
          <p>Pssst, du kan trykke på et rom for å se mer informasjon eller opprette en favoritt</p>
        </div>
        <Footer />
      </div>
    </>
  );
};

const App = () => {
  return (
    <FilterProvider >
      <AppContent />
    </FilterProvider >
  )
}


const AppWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default AppWrapper;
