import { Player } from '@/data';
import { addPlayer } from '@/redux/state';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PlayerTable } from './components';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  
  const dispatch = useDispatch()
  
  useEffect(( )=> {
    dispatch(addPlayer(Player))
  }, [])

  return (
    <PlayerTable />
  )
}

export default Home