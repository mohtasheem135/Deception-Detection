import React from 'react';
import Carousel from '../components/home/Carousel';
import { useNavigate } from 'react-router-dom';
import HomeHeader from '../components/home';
import VideoUpload from '../components/home/VideoUpload';

const Home = () => {
  const navigate = useNavigate();

  const handleImageClick = (path) => {
    navigate(path);
  };

  return (
    <div className=''>
      {/* <HomeHeader />
      <Carousel /> */}
     <VideoUpload />
     </div>
  );
};

export default Home;