import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore'; 

const AroundYou = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_bjNhF2yFCM697Li6x9yaBDcbOyAfD&`)
    .then((res) => setCountry(res?.data?.location?.country))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
  }, [country]);

  if(isFetching && loading) return <Loader title="Loading songs around you" />

  if(error && country) return <Error />

  return (
    <div className="flex flex-col">
      <h2 className="heading-1 text-left mt-4 mb-10">
        Around you <span className="font-black text-red">{country}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard 
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}          
          />
        ))}
      </div>
    </div>
  )
}

export default AroundYou;