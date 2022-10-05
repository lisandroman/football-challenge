import { Scorer } from '@/models'
import { addFavorite } from '@/redux/state'
import { AppStore } from '@/redux/store'
import { Checkbox } from '@mui/material'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export interface PlayerTableInterface {}

const PlayerTable: React.FC<PlayerTableInterface> = () => {

  const [selectedPlayer, setSelectedPlayer] = useState<Scorer[]>([])
  const pageSize = 5
  const dispatch = useDispatch()
  const statePlayer = useSelector((store: AppStore) => store.player)
  const favoritePeople = useSelector((store: AppStore) => store.favorites);

  const findScorer = (scorer: Scorer) => !!favoritePeople.find(p => p.id === scorer.id)
  const filterScorer = (scorer: Scorer) => favoritePeople.filter(p => p.id !== scorer.id)

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

  return (
    <DataGrid
    getRowId={(row: any) => row.id}
    rows={statePlayer}
    columns={columns}
    disableColumnSelector
    disableSelectionOnClick 
    autoHeight
    pageSize={pageSize}
    rowsPerPageOptions={[pageSize]}
  />
  )
}

export default PlayerTable