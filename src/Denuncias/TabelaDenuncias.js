import React, { useState, useEffect } from 'react';

function TabelaDenuncias() {
    const [denuncias, setDenuncias] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/denuncias')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setDenuncias(data);
                } else {
                    console.error('Data received is not an array:', data);
                }
            })
            .catch(error => console.error('Erro ao buscar denúncias:', error));
    }, []);

    if (!Array.isArray(denuncias)) {
        return <div>Erro ao carregar denúncias</div>;
    }

    return (
        <div>
            <h2>Lista de Denúncias</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {denuncias.map((denuncia, index) => (
                        <tr key={index}>
                            <td>{denuncia.id}</td>
                            <td>{denuncia.descricao}</td>
                            <td>{denuncia.data}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaDenuncias;
