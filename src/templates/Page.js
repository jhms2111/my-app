
import Typography from '@mui/material/Typography';






     const templatePage = ({ title, Component }) => {
    
    
       return (
        <>   
        <Typography variant='h3'>
            {title}
        </Typography>
        <Component />
    </>
       )
     }
    
     export default templatePage