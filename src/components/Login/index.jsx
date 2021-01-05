import React, { useState } from 'react'
import  { StylesProvider } from '@material-ui/core/styles'
import './style.css'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

function Login() {
    const [ isVisible, setIsVisible ] = useState(false)
    const handleVisibilityChange = () => {
        setIsVisible(!isVisible)
    }

    const [ loginAreaClassName , setLoginAreaClassName ] = useState("login_area_init")
    const validarUsuario = () => {
        /*
        *   Validar usuário.
        */

        // Acesso Permitido.
         setLoginAreaClassName("login_area_hide")

        // Acesso Negado.
        /* setLoginAreaClassName("login_area_shake")
        setTimeout(() => {
            setLoginAreaClassName("login_area")
        }, 500) */
    }
    return (
        <StylesProvider injectFirst>
            <section className="login_page">
                <Grid>
                    <Paper className={ loginAreaClassName }>
                        <Grid>
                            <h2 className="sig">SIG</h2>
                        </Grid>
                        <TextField className="login" label="Login"/>
                        <TextField className="password" label="Senha" type={ isVisible ? "text" : "password" } InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={ handleVisibilityChange }>
                                        { isVisible ? <Visibility/> : <VisibilityOff/> }
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}/>
                        <Button className="login_btn" variant="contained" size="large" onClick={ validarUsuario }>Login</Button>
                        <Typography className="pass_reminder_link">
                            <Link href="#">
                                Esqueci a Senha
                            </Link>
                        </Typography>
                    </Paper>
                </Grid>
            </section>
        </StylesProvider>
    )
}

export default Login