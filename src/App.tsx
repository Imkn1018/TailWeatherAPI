import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import { Weather } from '../src/components/Molucules/Weather';
import { SearchInput } from '../src/components/Molucules/SearchInput';
import Data from './data.json';
import { useWeatherData } from './Hooks/useWeatherData';
import { Map } from './components/Organisms/Map';

type WEATHER = typeof Data;

function App() {
  const {
    datas,
    loading,
    getWeatherData,
    cityName,
    setCityName,
  } = useWeatherData();

  // HooksにできるuseGetWeather

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };
  const onClickSearch = () => {
    getWeatherData(cityName);
    setCityName('');
  };
  return (
    <div className="min-h-screen  justify-center items-center　inline-flex m-auto">
      <div className="justify-center text-center items-center mx-auto">
        <SearchInput
          onChangeInputValue={onChangeInputValue}
          value={cityName}
          onClickSearch={onClickSearch}
        />
      </div>

      {loading ? (
        <div></div>
      ) : datas ? (
        <Weather datas={datas} />
      ) : (
        <div>nodata</div>
      )}
      <Map />
    </div>
  );
}

export default App;
