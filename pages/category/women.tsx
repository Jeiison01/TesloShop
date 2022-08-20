import { ShopLayout } from '../../components/layouts/ShopLayout';

import { Typography } from '@mui/material';
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { FullScreenLoading } from '../../components/ui';


const WomenPage = () => {
  const { products, isLoading } = useProducts('/products?gender=women')

  return (
    <ShopLayout title={'Teslo-Shop Women'} pageDescription={'Encuentra los mejores productos de Teslo para ellas'}>
        <Typography variant="h1" component="h1">Mujeres</Typography>
        <Typography variant="h2" sx={{mb: 1}}>Productos Para Mujeres</Typography>

      {
        isLoading
        ? <FullScreenLoading/>
        : <ProductList products={products}/>
      }
    </ShopLayout>
  )
}

export default WomenPage