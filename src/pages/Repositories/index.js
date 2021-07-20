import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {

    const history = useHistory();
    const [repositories, setRepositories] = useState([])
    const [links, setLinks] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        let repositoriesLink = localStorage.getItem('repositoriesLink');
        repositoriesName = JSON.parse(repositoriesName);
        repositoriesLink = JSON.parse(repositoriesLink);

        if (repositoriesName !== null) {
            setRepositories(repositoriesName)
            setLinks(repositoriesLink);
            localStorage.clear();
        } else {
            history.push('/')
        }

    }, []);

    return (
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                {repositories.map((elem, index) => {
                    return (
                        <a target="_blank" href={`${links[index]}`}><S.LisItem key={index}> Repositorio: {elem}</S.LisItem></a>
                    )
                })}
            </S.List>
            <S.LinkHome to='/'>Voltar</S.LinkHome>
        </S.Container>
    )
}