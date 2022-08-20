
import NextLink from 'next/link'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../../components/layouts'

const RegisterPage = () => {
  return (
    <AuthLayout title={'Ingresar'}>
        <Box sx={{width: 350, padding: '10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h1" component="h1">Crear Cuenta</Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField label="Ingrese Su Nombre Completo" variant="filled" fullWidth/>
                </Grid>

                <Grid item xs={12}>
                    <TextField label="Correo" variant="filled" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Repita su Correo" variant="filled" fullWidth/>
                </Grid>

                <Grid item xs={12}>
                    <TextField label="Contraseña" type="password" variant="filled" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Repita la Contraseña" type="password" variant="filled" fullWidth/>
                </Grid>

                <Grid item xs={12}>
                    <Button color="secondary" className='circular-btn' size='large' fullWidth>
                        Ingresar
                    </Button>
                </Grid>

                <Grid item xs={12} display="flex" justifyContent="start">
                    <NextLink href="/auth/login" passHref>
                        <Link underline="always">
                            ¿Ya tienes una cuenta? Inicia Sesión
                        </Link>
                    </NextLink>
                </Grid>
            </Grid>

        </Box>

    </AuthLayout>
  )
}

export default RegisterPage