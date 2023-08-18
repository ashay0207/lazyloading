import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {}, 5000); // Introduce a delay of 2 seconds (2000 milliseconds)
  }, []);

  return <h2>Welcome to the Home Page</h2>;
};

export default Home;
