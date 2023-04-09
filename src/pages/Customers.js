import { useState, useEffect } from "react"
import axios from "axios"
import CustomersCard from "../componets/CustomersCard"
import Grid from '@mui/material/Grid'

const Customers = () => {
    const [customers, setcustomers] = useState([])


    useEffect(() => {
        axios.get('https://reqres.in/api/users')
        .then(response => {
            const { data } = response.data

            setcustomers(data)
        })
    }, [])


// xs EXTRA SMALL
// sm SMALL
// md MEDIUM
// lg LARGE
// xl EXTRA LARGE

    return (
      <>
        <Grid container>
        {
          customers.map(item => (
         <Grid item xs={12} md={4}>
          <CustomersCard
          name={item.first_name}
          lastname={item.last_name}
          email={item.email}
          avatar={item.avatar}
        /> 
         </Grid>
          ))
        } 
        </Grid>
        </>
      )
  }


  export default Customers