import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const BannerHome = () => {
  const bannerDate = useSelector((state) => state.movie.bannerData);
  const imageURL = useSelector((state) => state.movie.imageURL);
  const [currentImage, setCurrentImage] = useState(0);
  const handleNext = () => {
    if (currentImage < bannerDate.length - 1) {
      setCurrentImage((preve) => preve + 1);
    }
  };
  const handlePre = () => {
    if (currentImage > 0) {
      setCurrentImage((preve) => preve - 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerDate.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [currentImage, bannerDate, bannerDate]);

  return (
    <section className="w-full h-full overflow-hidden">
      <div className="flex min-h-full max-h-[95vh]">
        {bannerDate.map((item, index) => {
          return (
            <div
              key={item.id + "bannerHome" + index}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className="w-full h-full">
                <img
                  src={imageURL + item.backdrop_path}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* button next and previous image */}
              <div className="absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex ">
                <button
                  onClick={handlePre}
                  className="bg-white p-2 rounded-full text-xl z-10 text-black"
                >
                  <FaAngleLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white p-2 rounded-full text-xl z-10 text-black"
                >
                  <FaAngleRight />
                </button>
              </div>
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
              <div className="container mx-auto">
                <div className="container w-full mx-auto absolute bottom-0 max-w-md px-3">
                  <h2 className="font-bold text-4xl lg:text-4xl text-white drop-shadow-2xl">
                    {item?.title || item?.name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {item.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <p>Rating : {Number(item.vote_average).toFixed(1)}+</p>
                    <span>|</span>
                    <p>View : {Number(item.popularity).toFixed()}</p>
                  </div>
                  <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 bg-white hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
