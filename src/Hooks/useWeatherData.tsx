import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Data from '../data.json';

type WEATHER = typeof Data;

export const useWeatherData = () => {
  const [datas, setData] = useState<WEATHER | null>(null);
  const [cityName, setCityName] = useState('');
  const [loading, setLoading] = useState(true);
  const getWeatherData = useCallback(
    (cityName) => {
      setLoading(true);
      axios
        .get<WEATHER>(
          `http://${process.env.REACT_APP_OW_API_URL}/weather?q=${cityName}&appid=${process.env.REACT_APP_OW_API_KEY}&units=metric`
        )
        .then((res) => {
          setData(res.data);
          console.log(typeof datas);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [cityName]
  );
  return { datas, loading, getWeatherData, cityName, setCityName };
};
