import React from 'react';

const HomePage = () => {
  return (
  <div className="flex w-full h-full justify-center items-center">
    <div className="flex flex-col space-y-4">
      <h1 className="text-3x-1 font-bold">Create your own photorealistic AI avatars</h1>
      <button className="rounded-full bg-gradient-to-tr from-sky-400 via-lime-300 to-yellow-400 p-2">
        <div className="rounded-full bg-white p-4">
          Create your own AI avators now
        </div>
      </button>
    </div>
  </div>
  );
}

export default HomePage;