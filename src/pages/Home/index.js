import React, { useState } from "react";
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function Home() {

  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false)

  const handlePesquisa = () => {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        const respositoriesLink = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
          respositoriesLink.push(repository.html_url)
        })
        JSON.stringify(repositoriesName);
        JSON.stringify(respositoriesLink);
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        localStorage.setItem('repositoriesLink', JSON.stringify(respositoriesLink));
        setErro(false)
        history.push('/repositories')
      })
      .catch(err => {
        setErro(true);
      })
  }

  return (


    <S.HomeContainer>
      <p> Digite o usuário do GitHub para fazer a listagem de repositórios.</p>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuário do GitHub" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa} >Pesquisar</S.Button>
      </S.Content>

      { erro && <S.ErrorMsg>Ocorreu um erro. Tente novamente.(Confira o nome do usuário)</S.ErrorMsg>}
      
    </S.HomeContainer>

  );
}

export default Home;
