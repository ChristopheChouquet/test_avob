import { useState } from 'react';
import axios from "axios";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  textAlign: 'center'
};


function Resultat({result, showAlert, open, handleClose }) {

  //Stockage du message de récompense
    const [reward, setReward] = useState('');

  //Récupération des données de l'API
    function getReward(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          response.data.forEach(element => {
            console.log(element.title);
          });
          setReward('Vous avez récupéré votre récompense');
        })
        .catch(function (error) {
          setReward('Un problème a eut lieu');
        });
    }

  //Fermeture modal et clean du message
    function clearAfterReward() {
      handleClose();
      setReward('');
    }


  return (
      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
        <Box sx={style}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {reward}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {result}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {showAlert ? ("Vous pouvez choisir de réclamer vos gains ou alors de tenter de nouveau votre chance" ) 
                : ("Vous pouvez tenter de nouveau votre chance")}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'block' }}>
              <Button onClick={clearAfterReward}  color="error" variant="outlined">Retour</Button>
              {showAlert && ( <Button color="success" variant="outlined" onClick={getReward}>Je veux récupérer mon gain</Button> )}  
            </CardActions>
          </Card>
        </Box>
      </Modal>
  );
}

export default Resultat;
