import React from 'react';

const HomePage = ({loading, data}) => {
  if(loading) return <div>Loading...</div>
  return <div>{data.testString}</div>;
};

export default HomePage;
