import { Grid } from '@mui/material';
import { PropsWithChildren } from 'react';
import { IProduct } from '../../interfaces';
import { ProductCard } from '.';

interface Props {
    products: IProduct[]
}

export const ProductList = ({products}: PropsWithChildren<Props>) => {
  return (
    <Grid container spacing={4}>
        {products.map(product => (
            <ProductCard 
                product={product} 
                key={product.slug}
            />
            ))
        }
    </Grid>
  )
}
