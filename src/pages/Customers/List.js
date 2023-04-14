import { useState, useEffect } from "react"
import axios from "axios"
import CustomersCard from "../../componets/CustomersCard"
import Grid from '@mui/material/Grid'

const List = () => {
    const [customers, setcustomers] = useState([])


    useEffect(() => {
        axios.get('https://reqres.in/api/users')
        .then(response => {
            const { data } = response.data

            setcustomers(data)
        })
    }, [])

        const handleRemoveCustomers =  id  => {
          axios.delete(`https://reqres.in/api/users/${id}`)
          .then(() => {
            const newCustomerState = customers.filter(customer => customer.id !== id )

            setcustomers(newCustomerState)
          })

        }


    return (
      <>
        <Grid container>
        {
          customers.map(item => (
         <Grid item xs={12} md={4}>
          <CustomersCard
          id={item.id}
          name={item.first_name}
          lastname={item.last_name}
          email={item.email}
          avatar={item.avatar}
          onRemoveCustomer={handleRemoveCustomers}
        /> 
         </Grid>
          ))
        } 
        </Grid>
        </>
      )
  }


  export default List