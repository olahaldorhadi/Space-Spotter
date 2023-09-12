import { useQuery } from 'react-query';
// import axios from 'axios';

function MyComponent() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://tp.educloud.no/tp/ws/roombooking/possible.php?start=2023-09-235T12%3A15%3A00&end=2023-09-23T14%3A00%3A00').then(
            (res) => res.json(),
          ),
      })
    
      if (isLoading) return 'Loading...'
    
      if (error) return 'An error has occurred: ' // + error.message
    
      return (
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <strong>👀 {data.subscribers_count}</strong>{' '}
          <strong>✨ {data.stargazers_count}</strong>{' '}
          <strong>🍴 {data.forks_count}</strong>
        </div>
      )
    }

export default MyComponent;
