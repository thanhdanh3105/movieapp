import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDataDetails";
import { useSelector } from "react-redux";
import moment from "moment";
import Divider from "../component/Divider";
import useFetch from "../hooks/useFetch";
import HorizontalScrollCard from "../component/HorizontalScrollCard";
import axios from "axios";
const DetailsPage = () => {
  const param = useParams();
  const imageURL = useSelector((state) => state.movie.imageURL);
  const { data } = useFetchDetails(`/${param?.explore}/${param?.id}`);
  const { data: castData } = useFetchDetails(
    `/${param?.explore}/${param?.id}/credits`
  );
  const { data: similarData } = useFetch(
    `${param?.explore}/${param?.id}/similar`
  );
  const { data: recommendationData } = useFetch(
    `${param?.explore}/${param?.id}/recommendations`
  );
  const duration = (Number(data?.runtime) / 60).toFixed(1).split(".");
  const writer = castData?.crew
    ?.filter((el) => el?.job === "Writer")
    .map((el) => el?.name)
    ?.join(",");

  return (
    <div>
      <div className="w-full h-[280px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={imageURL + data?.backdrop_path}
            className="h-full w-full object-center "
          />
        </div>
        <div className="absolute bg-gradient-to-t from-neutral-900/90 to-transparent w-full h-full top-0"></div>
      </div>
      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className=" relative mx-auto lg:-mt-28  lg:mx-0 w-fit">
          <img
            src={imageURL + data?.poster_path}
            className="h-80 w-60 object-center rounded"
          />
        </div>
        <div>
          <h2 className=" text-2xl font-bold text-white">
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-400">{data?.tagline}</p>
          <Divider />
          <div className="flex items-center  gap-3">
            <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
            <p>View : {Number(data?.vote_count)}</p>
            <p>
              Duration : {duration[0]}h {duration[1]}m
            </p>
          </div>
          <Divider />
          <div>
            <h3 className="text-xl font-bold text-white ">OverView</h3>
            <Divider />
            <p>{data?.overview}</p>
            <div className="flex items-center gap-3 my-3 text-center">
              <p>Status : {data?.status}</p>
              <span>|</span>
              <p>
                Release Date :{" "}
                {moment(data?.release_date).format("MMMM Do YYYY")}{" "}
              </p>
              <span>|</span>
              <p></p>
              <p>Revenue : {Number(data?.revenue)}</p>
            </div>
            <Divider />
          </div>
          <div>
            <p>
              <span className="text-white">Director</span> :
              {castData?.crew[0]?.name}
            </p>
            <Divider />
            <p>
              <span className="text-white">Write : {writer}</span>
            </p>
          </div>
          <Divider />
          <h2 className="font-bold text-lg">Cast : </h2>
          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-3">
            {castData?.cast
              ?.filter((el) => el?.profile_path)
              .map((startCast, index) => {
                return (
                  <div>
                    <div>
                      <img
                        src={imageURL + startCast?.profile_path}
                        className="w-24 h-24 object-cover rounded-full"
                      />
                    </div>
                    <p className="font-bold text-center text-sm">
                      {startCast.name}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div>
        <HorizontalScrollCard
          data={similarData}
          heading={"Similar " + param?.explore}
          media_type={param?.explore}
        />
        <HorizontalScrollCard
          data={recommendationData}
          heading={"Recommendation Movie " + param?.explore}
          media_type={param?.explore}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
