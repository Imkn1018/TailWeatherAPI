import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Data from '../../data.json';

type WEATHER = typeof Data;
const Name = 'Tokyo';

export const Weather = () => {
  const [datas, setData] = useState<WEATHER>();
  const [loading, setLoading] = useState(true);

  // HooksにできるuseGetWeather
  useEffect(() => {
    setLoading(true);
    axios
      .get<WEATHER>(
        `http://${process.env.REACT_APP_OW_API_URL}/weather?q=TOKYO&appid=${process.env.REACT_APP_OW_API_KEY}&units=metric`
      )
      .then((res) => {
        setData(res.data);
        console.log(typeof datas);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
        <div className="p-4">
          {/* {datas.map((data) => ( */}
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-300
                  w-96 h-56 m-auto rounded-xl shadow-2xl 
                  transform hover:scale-110 transition-transform
                  text-white relative"
          >
            <div className="w-full px-8 absolute top-6">
              <div className="flex justify-between">
                <div>
                  <p className="font-light">City Name</p>
                  <p className="text-lg font-medium tracking-widest">
                    {datas?.name}
                  </p>
                </div>
                <div>
                  <img
                    src={`${process.env.REACT_APP_OW_ICON_URL}/${datas?.weather[0].icon}.png`}
                    alt={datas?.weather[0].description}
                  />
                </div>
              </div>
              <div className="pt-2">
                <p className="font-light">Weather Condition</p>
                <p className="text-lg font-medium tracking-widest">
                  {datas?.weather[0].main}
                </p>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div>
                    <p className="font-light text-xs">Date</p>
                    <p className="font-bold tracking-more-wider text-sm">
                      2021-03-16
                    </p>
                  </div>
                  <div>
                    <p className="font-light text-xs">Temprature</p>
                    <p className="font-bold tracking-more-wider text-sm">
                      {datas?.main.temp}°C
                    </p>
                  </div>
                  <div>
                    <p className="font-light text-xs">Humidity</p>
                    <p className="font-bold tracking-more-wider text-sm">
                      {datas?.main.humidity}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            ;
          </div>
          {/* ))}    */}
        </div>
      )}
    </>
  );
};
