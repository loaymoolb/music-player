import React from 'react'
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[250px] bg-primary/20 bg-opacity-20 hover:bg-primary/[0.5] p-4 backdrop-blur-sm animate-slideup rounded-lg current" onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}>
      <img src={track?.images?.coverart} alt="Artist" 
        className="w-full h-56 rounded-lg"
      />
      <p className="mt-4 font-semibold text-lg truncate">{track?.subtitle}</p>
    </div>
  )
}

export default ArtistCard