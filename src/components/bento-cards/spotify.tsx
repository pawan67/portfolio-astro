import { useEffect, useState } from "react";
import CustomCard from "../shared/custom-card";
import { recentTrack } from "@/lib/fetcher";
import AnimatedBars from "../shared/animated-bars";

const SpotifyBentoCard = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await recentTrack();
    setData(res);
  };

  const song = data?.name;
  const artist = data?.artist["#text"];
  const isListening = data?.["@attr"]?.nowplaying;
  const updatedAt = data?.date?.uts;
  const image = data?.image[3]["#text"];
  const url = data?.url;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CustomCard
      // @ts-ignore
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className=" relative "
    >
      <a target="_blank" rel="noreferrer" href={url}>
        <div className=" absolute top-3 left-3">
          <img
            className={`w-6 `}
            src="/images/social/spotify.webp"
            alt="Spotify Logo"
          />
        </div> 
        <div className=" rounded-b-[22px] absolute bg-gradient-to-t from-black p-3 to-transparent inset-x-0 bottom-0 ">
          <div>
            {/* <div className=" flex items-center space-x-2">
            <AnimatedBars />
          </div> */}
            <p className="text-xs moranga-bold font-semibold  text-white ">
              {isListening ? "Listening to" : " Last Listened"}{" "}
            </p>
            <p className="  text-white moranga-bold text-lg line-clamp-3 ">
              {song}
            </p>
            <p className="  text-white font-semibold text-xs  ">by {artist}</p>
          </div>
        </div>
      </a>
    </CustomCard>
  );
};

export default SpotifyBentoCard;
