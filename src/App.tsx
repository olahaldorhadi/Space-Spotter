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
        <div className="app-styling">
          <Header />
          <Filters />
          {/* <FilterButton description={''} /> */}
          <div>
            {/* <FilterSection /> */}
            <RoomManager rooms={fetchedRooms || []} />
          </div>
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
