import React from 'react';

const Home = () => {
    return (
        <div className="flex items-center justify-center h-[80vh]">
        <span className="countdown text-9xl">
          <span style={{ "--value": 10 }}></span>: 
          <span style={{ "--value": 24 }}></span>: 
          <span style={{ "--value": 36 }}></span>
        </span>
      </div>
    );
};

export default Home;