import { useState } from 'react';
import FormLogin from './FormLogin';

function Login() {
    const controles = {
        id: 0,
        username:"",
        password: ""
    }
    
    const [btnCadastrar, setBtnCadastrar] = useState(true);
    const [controle, setControle] = useState([]);
    const [objControle, setObjControle] = useState(controles);

    const aoDigitar = (e) => {
        setObjControle({...objControle, [e.target.name]:e.target.value});
    }

    const cadastrarUsuarios = () => {
        fetch('http://localhost:8080/login', {
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
        <FormLogin botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrarUsuarios} obj={objControle} setObjControle={setObjControle} cancelar={limparFomularioCliente}/>
      </div>
    );
}

export default Login;