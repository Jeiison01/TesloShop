import type { NextPage, GetServerSideProps } from 'next'
import { Box, Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { dbProducts } from '../../database';
import { IProduct } from '../../interfaces';

interface Props {
    products: IProduct[];
    fountProducts: boolean;
    query: string
}


const SearchPage: NextPage<Props> = ({products, fountProducts, query}) => {


  return (
    <ShopLayout title={'Teslo-shop- Search'} pageDescription={'Encuentra los mejores productos de Teslo Aquí'}>
      <Typography variant="h1" component="h1">Buscar producto</Typography>

        {
            fountProducts
            ? <Typography variant="h2" sx={{mb: 1}} textTransform="capitalize"> Término: {query}</Typography>
            : (
                <Box display="flex">
                    <Typography variant="h2" sx={{mb: 1}}> No encontramos ningun producto: </Typography>
                    <Typography variant="h2" sx={{ml: 1}} color="secondary" textTransform="capitalize">{query}</Typography>
                </Box>)
        }

      

      <ProductList products={products}/>

    </ShopLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const {query = ''} = params as {query: string}

    if(query.length === 0){
        return {
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }

    let products = await dbProducts.getProductsByTerm(query)
    const fountProducts = products.length > 0

    //Todo: retornar otros productos
    if(!fountProducts){
        //products = await dbProducts.getAllProducts()
        products = await dbProducts.getProductsByTerm('kids')
    }


    return {
        props: {
            products,
            fountProducts,
            query
        }
    }
}

export default SearchPage
