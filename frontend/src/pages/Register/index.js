import  React, {useState} from 'react';
import {Link , useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[whatsapp, setWhatsapp] = useState('');
  const[city, setCity] = useState('');
  const[uf, setUf] = useState('');

  const history = useHistory ();//serve para fazer navegaçao atraves de javascript quando nao podemos colocar link
  async function handleRegister(e) {
    e.preventDefault();//prevenir evento para não atualizar a pagina

      const data = {
        name,
        email,
        whatsapp,
        city,
        uf,
      };
      try {
        const response = await api.post('ongs', data)
        alert( `Seu ID de Acesso: ${response.data.id}` );//agraze no lugar da aspa simples
        history.push('/');
      } catch (error) {  
        alert('Erro no Cadastro, tente novamente.')
      }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça Seu Cadastro, entre na plataforma e ajude pessoas a entrarem os casos da sua ONG.</p>
         
          <Link className="back-link" to="/">
            <FiArrowLeft  size={16} color="#E02041"/>
            Nao tenho Cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Nome da ONG" 
            value={name}
            onChange={e => setName(e.target.value)}//representa valor de input e represntaçao de uma funçao
          />
          <input 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            type="number" 
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input 
              type="text" 
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="UF" 
              style={{ width:80}}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>

      </div>

    </div>
  );
  
}