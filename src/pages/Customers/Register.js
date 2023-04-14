import * as React from 'react';
import { TextField } from "@mui/material"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Register = () => {
    return (
        <>
        <div>
        <TextField label='Digite o seu nome' />
        </div>
        <div>
        <TextField label='Digite o seu cargo' />
        </div> 
        <Stack  direction="row" marginTop={1}>
      <Button variant="contained">Contained</Button>
        </Stack>

        </>
        ) 
}

export default Register