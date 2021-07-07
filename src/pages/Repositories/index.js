import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {

    const history = useHistory();
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        
        if(repositoriesName !== null){
            console.log(repositoriesName);
        setRepositories(repositoriesName)
        localStorage.clear();
        }else{
            history.push('/')
        }
        
    }, []);

    return (
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                {repositories.map((elem, index) => {
                    return (
                        <S.LisItem key={index}> Repositorio: {elem}</S.LisItem>
                    )
                })}
            </S.List>
            <S.LinkHome to='/'>Voltar</S.LinkHome>
        </S.Container>
    )
}