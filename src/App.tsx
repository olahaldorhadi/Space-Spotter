
import React from 'react'
import './App.css'
import Header from './components/Header'
import Filters from './components/Filters'
import FilterSection from './components/FilterSection'
// import { QueryClient, QueryClientProvider } from 'react-query';
// import MyComponent from './components/MyComponent';

// const queryClient = new QueryClient();

const App = () => {

  return (
    // <QueryClientProvider client={queryClient}>
    <div className = "app-styling">
      <Header />
      <Filters />
      {/* <MyComponent /> */}
      <div>
      <FilterSection />
    </div>
    </div>
    // </QueryClientProvider>
  )
}

export default App
