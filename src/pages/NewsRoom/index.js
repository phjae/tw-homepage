import React from 'react';
import FeaturedStoryCards from '../../components/FeaturedStoryCards';
import LatestNewsCards from '../../components/LatestNewsCards';
import PressReleaseCards from '../../components/PressReleaseLists';
import BlogPosts from '../../components/BlogPosts';
import { NavLink } from 'react-router-dom';


const NewsRoom = () => {
  return (
    <div>
      <h1>Latest News</h1>
      <LatestNewsCards />
      <h1>Press Release</h1>
      <NavLink to='/pressroom'>
        <button>more</button>
      </NavLink>
      <PressReleaseCards />
      <h1>Featured Stories</h1>
      <NavLink to='/storiesroom'>
        <button>more</button>
      </NavLink>
      <FeaturedStoryCards />
      <h1>최신 블로그 게시물</h1>
      <BlogPosts />

    </div>
  );
};

export default NewsRoom;
