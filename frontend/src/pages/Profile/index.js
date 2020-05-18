import  React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidentes] = useState([]);

  const history = useHistory();
  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  useEffect(()=> {
    api.get('profile',{
      headers:{
        Authorization:ongId
      }
    }).then(Response =>{
      setIncidentes(Response.data);

    })
  },[ongId]);

  async function handleDeleteIncident(id){
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });//Crase no lugar de aspa

      setIncidentes(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert('Erro ao deletar caso, tete novamente.')
      
    }
  }
  
  function handlLogout(){
    localStorage.clear();

    history.push('/');
          
    }

  return(
   <div className="profile-container">
     <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem Vindo, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handlLogout} >
            <FiPower  size={18} color="#E02041"/>
        </button>
     </header>

     <h1> Casos Castrados</h1>

     <ul>
       {incidents.map(incident =>(
         <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇAO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency:'BRL'}).format(incident.value)}</p>
            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              < FiTrash2  size={20} clor="#a8a8b3"/>
            </button>
          </li>
       ))}
     </ul>
     
  </div>
  );
  
}