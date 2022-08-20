import { Box, Button } from "@mui/material";
import { PropsWithChildren } from "react";
import { ISize } from "../../interfaces";

interface Props {
    selectedSize?: ISize;
    sizes: ISize[]
}

export const SizeSelector = ({selectedSize, sizes}: PropsWithChildren<Props>) => {
  return (
    <Box>
        {sizes.map(size => (
            <Button
                key={size}
                size='small'
                color={selectedSize == size ? 'primary' : 'info'}
            >
                {size}
            </Button>
        ))}
    </Box>
  )
}
