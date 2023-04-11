import Container from '@mui/material/Container';
import { makeStyles } from 'tss-react/mui'; 

import Header from '../partials/Header'


    const useStyles = makeStyles()((theme) => {
       return {
         container: {
           padding:'15px 0'
         }
       }
     })
    
     function Default({children}) {

     const { classes } = useStyles();
    
       return (
        <>   
        <Header />
        <Container className={classes.container}>
        {children}
        </Container>
    </>
       )
     }
    
     export default Default
