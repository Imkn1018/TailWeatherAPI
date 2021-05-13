import React, { useEffect, useState, VFC } from 'react';
import Data from '../../data.json';

type WEATHER = typeof Data;
type Props = {
  datas: WEATHER;
};
export const Weather: VFC<Props> = ({ datas }) => {
  return (
    <>
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
      )
    </>
  );
};
