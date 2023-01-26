import './css/App.css';
import Resultat from './Components/resultats';

import { useState } from 'react';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';



function App() {
  
  //Gestion 
    const [result, setresult] = useState('');
    const [showAlert, setshowAlert] = useState(false);

  //Gestion de la modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  
  //fonction de calcul des chances et montant a gagner
    function WinnableChance(min, max) {
      //Renvoie vrai ou faux
        let winOrNot = Math.random() < 0.5;
      //Renvoie un nombre aléatoire entre le min et max
        let Montant = Math.floor(Math.random() * (max - min));
      //Message de gains ou pertes
        if (winOrNot) {
          setresult(<Alert severity="success">Bravo, vous avez gagné {Montant} euros</Alert>);
          setshowAlert(true);
        }else{
          setresult(<Alert severity="error">Désolé, vous avez perdu</Alert>);
          setshowAlert(false);
        }
        handleOpen(); 
    }



  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">
          Bienvenue à la loterie !
        </Typography>
        <Typography variant="p">
          Vous avez une chance sur deux d'obtenir de 1000 à 20 000 euros !
        </Typography><br/>
        <Button variant="outlined" onClick={() => WinnableChance(1000, 20000)}>Lancer la loterie</Button>
        <Resultat result={result} showAlert={showAlert} handleClose={handleClose} open={open}/>
      </header>
    </div>
  );
}

export default App;
