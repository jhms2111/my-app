import   React, { useState } from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'


import CardActions from '@mui/material/CardActions'

import Avatar from '@mui/material/Avatar'
import IconButton  from '@mui/material/IconButton'

import { grey } from '@mui/material/colors'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import ModalConfirm from './ModalConfirm'



function CustomerCard({
    id,
    name,
    lastname,
    email,
    avatar,
    onRemoveCustomer,
}) { 

  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = id => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
  }

  const hadleRemoveCustomers = () => {
    handleToggleOpenModal()
  }

  return (
    <>
    <Card
    sx={{ maxWidth: 345, marginTop: '5px' }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe" src={avatar}>
            R
          </Avatar>
        }
        title= {`${name}${lastname}`}
        subheader={email}
      />
      <CardActions disableSpacing >
        <IconButton   aria-label="editar cadastro" >
          <EditIcon />
        </IconButton>
        <IconButton aria-label="remover cadastro" onClick={hadleRemoveCustomers}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
    <ModalConfirm 
    open={openModal}
    onClose={handleToggleOpenModal}
    onConfirm={() => handleConfirmModal(id)}
    title="Deseja realmente excluir este cadastro?"
    message="Ao confirmar nao ser possivel reverter esta operacao."
    />
        </>
  )
}


export default CustomerCard