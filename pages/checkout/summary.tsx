import NextLink from 'next/link'
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';
import { CardList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts/ShopLayout';

const SummaryPage = () => {
  return (
    <ShopLayout title={'Resumen de orden'} pageDescription={'Resumen de la orden'}>
        <Typography variant='h1' component="h1">Resumen de la orden</Typography>

        <Grid container marginTop={2} display="flex">
            <Grid item xs={12} sm={7} sx={{alignItems: 'flex-start'}}>
                <CardList />
            </Grid>
            <Grid item xs={12} sm={5} sx={{alignItems: 'flex-end', mt: 1}}>
                <Card className="summary-card">
                    <CardContent>
                        <Typography variant='h2'>Resumen {'3 Productos'} </Typography>
                        <Divider  sx={{my: 1}} />

                        <Box display="flex" justifyContent="space-between">
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <NextLink href='/checkout/address' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>
                        <Typography>Fernando Herrera</Typography>
                        <Typography>323 Algun lugar</Typography>
                        <Typography>Bogota, BOG 11504</Typography>
                        <Typography>Colombia</Typography>
                        <Typography>+57 311111111</Typography>

                        <Divider sx={{my:1}} />

                        <Box display="flex" justifyContent="space-between">
                        <Typography variant='subtitle1'>Productos</Typography>
                            <NextLink href='/cart' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary/>

                        <Box sx={{mt:3}} >
                            <Button color="secondary" className="circular-btn" fullWidth>Confirmar Orden</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default SummaryPage