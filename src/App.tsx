import React from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import { QueryClient, QueryClientProvider } from 'react-query';
import RoomManager from './components/RoomManager';
import useFilteredRooms from './components/useFilteredRooms';
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
