import { HiOutlineHome, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCompassDiscoverLine, RiHashtag } from 'react-icons/ri';

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'K-Pop', value: 'K_POP' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'House', value: 'HOUSE' },
  { title: 'Film', value: 'FILM_TV' },

];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: RiCompassDiscoverLine },
  { name: 'Top Charts', to: '/top-charts', icon: RiHashtag },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
];
