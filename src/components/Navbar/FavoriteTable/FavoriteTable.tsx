import { Scorer } from '@/models';
import { removeFavorite } from '@/redux/state/favorites';
import { AppStore } from '@/redux/store';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface FavoriteTable {}

const FavoriteTable: React.FC<FavoriteTable> = () => {

  const pageSize = 5
  const dispatch = useDispatch()
  const stateFavorites = useSelector((store: AppStore) => store.favorites)

  const handleClick = (scorer: Scorer) => {
    dispatch(removeFavorite(scorer));
  }

  const columns =[
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Favs',
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
              <Delete />
            </IconButton>
          }
        </>
      )
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
    rows={stateFavorites}
    columns={columns}
    disableColumnSelector
    disableSelectionOnClick 
    autoHeight
    pageSize={pageSize}
    rowsPerPageOptions={[pageSize]}
  />
  )
}

export default FavoriteTable