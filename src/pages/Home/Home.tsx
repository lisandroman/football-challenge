import React, { useEffect } from 'react'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Player } from '@/data/player';
import { useState } from 'react';
import { Scorer } from '@/models';
import { Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addFavorite, addPlayer } from '@/redux/state';
import store from '@/redux/store';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {

  const [selectedPlayer, setSelectedPlayer] = useState<Scorer[]>([])
  const pageSize = 5
  const dispatch = useDispatch()

  const findScorer = (scorer: Scorer) => !!selectedPlayer.find(p => p.id === scorer.id)
  const filterScorer = (scorer: Scorer) => selectedPlayer.filter(p => p.id !== scorer.id)

  const handleChange = (scorer: Scorer) => {
    const filteredPlayers = findScorer(scorer) ? filterScorer(scorer) : [...selectedPlayer, scorer]
    dispatch(addFavorite(filteredPlayers))
    setSelectedPlayer(filteredPlayers);
  }

  const columns =[
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Favs',
      sortable: false,
      renderCell: (params: GridRenderCellParams) => <>{
        <Checkbox
          size="small"
          checked={findScorer(params.row)}
          onChange={() => handleChange(params.row)}
        />
      }</>
    },
    {
      field: 'id',
      headerName: '#',
      renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth:150,
      renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
    },
    {
      field: 'country',
      headerName: 'Country',
      flex: 1,
      renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
    },
    {
      field: 'primeTeam',
      headerName: 'Prime Team',
      flex: 1,
      renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
    },
    {
      field: 'goals',
      headerName: 'Goals',
      flex: 1,
      renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
    },
]
  useEffect(( )=> {
    dispatch(addPlayer(Player))
  }, [])

  return (
    <DataGrid
      getRowId={(row: any) => row.id}
      rows={store.getState().player}
      columns={columns}
      disableColumnSelector
      disableSelectionOnClick 
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
    />
  )
}

export default Home