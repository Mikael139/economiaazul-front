import { useState } from 'react';
import FormularioDenuncias from './FormularioDenuncias';
import './../style.css';

function Formulario() {
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

    const aoDigitar = (e) => {
        setObjControle({...objControle, [e.target.name]:e.target.value});
    }

    const cadastrarClientes = () => {
      const formData = new FormData();
      formData.append('datadadenuncia', objControle.datadadenuncia);
      formData.append('horarioDenuncia', objControle.horarioDenuncia);
      formData.append('observacao', objControle.observacao);
      formData.append('imagem', objControle.imagem);

      fetch('http://localhost:8080/cadastrarDenuncias', {
          method:'post',
          body: formData
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

    return (
      <div className="container mt-5">
        <FormularioDenuncias botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrarClientes} obj={objControle} setObjControle={setObjControle} cancelar={limparFomularioCliente}/>
      </div>
    );
}

export default Formulario;