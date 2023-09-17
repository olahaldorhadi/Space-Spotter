
import React from 'react'
import './App.css'
import Header from './components/Header'
import Filters from './components/Filters'
import { QueryClient, QueryClientProvider } from 'react-query';
import MyComponent from './components/MyComponent';

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
    <>
      <Header />
      <Filters />
      <MyComponent />
    </>
    </QueryClientProvider>
  )
}

export default App
