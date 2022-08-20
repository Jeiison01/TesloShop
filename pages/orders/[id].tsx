import NextLink from 'next/link'
import { Box, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material';
import { CardList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { CreditCardOutlined, CreditScoreOutlined } from '@mui/icons-material';

const OrderPage = () => {
  return (
    <ShopLayout title={'Resumen de orden 1813584813'} pageDescription={'Resumen de la orden'}>
        <Typography variant='h1' component="h1">Orden:  ABC1234</Typography>
        
        <Chip 
            sx={{my: 2}} 
            label="Pendiente de pago" 
            variant="outlined" 
            color="error" 
            icon={<CreditCardOutlined/>}
        />

        <Chip 
            sx={{my: 2}} 
            label="Orden ya fue pagada" 
            variant="outlined" 
            color="success" 
            icon={<CreditScoreOutlined/>}
        />

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
                            {/**TODO */}
                            <h1>Pagar</h1>

                            <Chip 
                                sx={{my: 2}} 
                                label="Orden ya fue pagada" 
                                variant="outlined" 
                                color="success" 
                                icon={<CreditScoreOutlined/>}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default OrderPage