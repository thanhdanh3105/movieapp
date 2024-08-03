import React, { useEffect, useState } from "react";
import BannerHome from "../component/BannerHome";
import { useSelector } from "react-redux";
import Card from "../component/Card";
import HorizontalScrollCard from "../component/HorizontalScrollCard";
import axios from "axios";
import useFetch from "../hooks/useFetch";
const Home = () => {
  const trendingData = useSelector((state) => state.movie.bannerData);
  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRateData } = useFetch("/movie/top_rated");
  const { data: popularTvShow } = useFetch("/tv/popular");
  const { data: onTheAirData } = useFetch("/tv/on_the_air");

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingData}
        heading={"Trending"}
        trending={true}
      />
      <HorizontalScrollCard
        data={nowPlayingData}
        heading={"Now Playing"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={topRateData}
        heading={"Top Rate Movie"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={popularTvShow}
        heading={"PopularTV Show"}
        media_type={"tv"}
      />
      <HorizontalScrollCard
        data={onTheAirData}
        heading={"On The Air"}
        media_type={"tv"}
      />
    </div>
  );
};

export default Home;
