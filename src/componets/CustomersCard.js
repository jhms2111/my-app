import * as React from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'


import CardActions from '@mui/material/CardActions'

import Avatar from '@mui/material/Avatar'
import IconButton  from '@mui/material/IconButton'

import { grey,blue,red,green } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'




function CustomerCard({
    name,
    lastname,
    email,
    avatar,
}) { 

  return (
    <Card
    sx={{ maxWidth: 345, bgcolor:blue[300],marginTop: '5px' }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe" src={avatar}>
            R
          </Avatar>
        }
        title= {`${name}${lastname}`}
        subheader={email}
      />
      <CardActions sx={{ bgcolor: red[500] }}  disableSpacing >
        <IconButton   aria-label="add to favorites" >
          <FavoriteIcon sx={{ bgcolor: green[500] }}  />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon  sx={{ bgcolor: green[500] }} />
        </IconButton>
      </CardActions>
    </Card>
  )
}


export default CustomerCard