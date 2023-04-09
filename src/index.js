import React from 'react'
import ReactDOM from 'react-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './App'
import './index.css'
import { blue } from '@mui/material/colors';
 

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
},
    },
  },
);


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

export default createTheme
