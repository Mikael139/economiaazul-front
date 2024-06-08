import React, { useState, useEffect } from 'react';
import TabelaDenuncias from './TabelaDenuncias';

function Denuncias() {
    const controles = {
      codigo: 0,
      datadadenuncia:"",
      horarioDenuncia: "",
      observacao:"",
      imagem: ""
    }
  
    const [btnCadastrar, setBtnCadastrar] = useState(true);
    const [controle, setControle] = useState([]);
    const [objControle, setObjControle] = useState(controles);
    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/listarDenuncias")
          .then(retorno => retorno.json())
          .then(retorno_convertido => setControle(retorno_convertido));
      }, []);
    
      const aoDigitar = (e) => {
        setObjControle({...objControle, [e.target.name]:e.target.value});
      }
    
      const cadastrarClientes = () => {
        fetch('http://localhost:8080/cadastrarDenuncias', {
          method:'post',
          body:JSON.stringify(objControle),
          headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
          }
        })
        .then(retorno => retorno.json())
        .then(retorno_convertido => {
          if(retorno_convertido.mensagem !== undefined) {
            alert(retorno_convertido.mensagem)
          } else {
            setControle([...controle, retorno_convertido]);
            alert('Denuncia cadastrada com sucesso!');
            limparFomularioCliente();
          }
        })
      }
    
      const limparFomularioCliente = () => {
        setObjControle(controles);
        setBtnCadastrar(true);
      }
    
      const selecionarItemCliente = (indice) => {
        setObjControle(controle[indice]);
        setBtnCadastrar(false);
      }

      const visualizarImagem = (id) => {
        fetch(`http://localhost:8080/verImagem/${id}`)
          .then(response => response.blob())
          .then(imageBlob => {
            setImagemSelecionada(URL.createObjectURL(imageBlob));
          })
          .catch(error => {
            console.error('Erro ao carregar a imagem:', error);
          });
      }
    
    return (
        <div className="container mt-5">
          <TabelaDenuncias vetor={controle} selecionar={selecionarItemCliente} visualizarImagem={visualizarImagem} />
          {imagemSelecionada && <img src={imagemSelecionada} alt="Imagem da denúncia" />}
        </div>
      );
    }

export default Denuncias;
