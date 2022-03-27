import React, { useState, useEffect } from 'react'
import RepositoryItem from './RepositoryItem'
import '../styles/repositories.scss';


export default function RepositoryList() {
    
    interface Repository {
        name: string;
        description: string;
        html_url: string;
    }
    
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/matheus-ferreira1/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    console.log(repositories) // havera dois consoles, pq quando a pagina carrega a API não terminou de enviar as informações.

    return (
        <section className='repository-list'>
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
                
            </ul>
        </section>
    )
    }
