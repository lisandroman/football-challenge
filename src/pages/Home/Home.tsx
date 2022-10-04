import React from 'react'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Player } from '@/data/player';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const pageSize = 5

  const columns =[
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
      rows={Player}
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