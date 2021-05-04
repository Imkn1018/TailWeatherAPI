import React, {useEffect, useState} from 'react';
import axios from "axios"

export const Weather = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(()=>{
  //   fetch(`${process.env.REACT_APP_OW_API_URL}/weather/?q=Tokyo&APPID=${process.env.REACT_APP_OW_API_KEY}&units=metric`)
  //   .then(res => res.json())
  //   .then(result => {
  //     setData(result);
  //     setLoading(false);
  //   })
  // },[])

  useEffect(()=>{
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=TOKYO&appid=87523b37f07dc98459ab02bf12970183")
    
    .then((res) => {
      setData(res.data);
      setLoading(false);
    })
  },[])

  if (loading) {
    return <div>
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg></div>;
  }
  
  return (
    <div className="p-4">
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
              <p className="text-lg font-medium tracking-widest">Tokyo</p>
            </div>
            <div>画像</div>
          </div>
          <div className="pt-2">
            <p className="font-light">Weather Condition</p>
            <p className="text-lg font-medium tracking-widest">Cloudy</p>
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
                <p className="font-bold tracking-more-wider text-sm">20°C</p>
              </div>
              <div>
                <p className="font-light text-xs">Humidity</p>
                <p className="font-bold tracking-more-wider text-sm">40%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
