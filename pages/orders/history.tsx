import NextLink from 'next/link'
import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { ShopLayout } from '../../components/layouts/ShopLayout';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100},
  { field: 'fullname', headerName: 'Nombre Completo', width: 300},

  {
    field: 'paid', 
    headerName: 'Pagada', 
    description: 'Muesta información si está pagada la orden o no',
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return(
        params.row.paid
        ? <Chip  color="success" label="Pagada" variant="outlined"/>
        : <Chip  color="error" label="No Pagada" variant="outlined"/>
      )
    }
  },
  {
    field: 'orden',
    headerName: 'Ver Pedido',
    width: 200,
    sortable: false,
    renderCell: (params: GridValueGetterParams) => {
      return(
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline="always">
            Ver orden
          </Link>
        </NextLink>
      )
    }
  }
]

const rows = [
  {id: 1, paid: true, fullname: 'Jeison Rodriguez'},
  {id: 2, paid: false, fullname: 'Juan Lopez'},
  {id: 3, paid: true, fullname: 'Jesus Perez'},
  {id: 4, paid: false, fullname: 'Jesus Garcia'},
  {id: 5, paid: true, fullname: 'Roberto Garcia'},
  {id: 6, paid: false, fullname: 'Maria Duran'},
]

const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
        <Typography variant="h1" component="h1">Historial de Ordenes</Typography>

        <Grid container>
            <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                <DataGrid 
                columns={columns} 
                rows={rows} 
                pageSize={10}
                rowsPerPageOptions={[10]}
                />

            </Grid>
        </Grid>


    </ShopLayout>
  )
}

export default HistoryPage