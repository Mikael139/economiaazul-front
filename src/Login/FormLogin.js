function Login({ eventoTeclado, cadastrar, obj }) {
  return (
      <main className="fundo">
          <div className="box">
              <div className="box_logo"></div>
              <div className="box_login">
                  <h1 className="box_login_titulo">Que bom te ver por aqui! <br></br>Faça seu login</h1>
                  <div className="box_inputs">
                      <div className="box_input email">
                          <input type="email" value={obj.username} onChange={eventoTeclado} name="username" className="input" placeholder="Email" />
                      </div>
                      <div className="box_input senha">
                          <input type="password" value={obj.password} onChange={eventoTeclado} name="password" className="input" placeholder="Senha" />
                      </div>
                  </div>
                  <div className="button-row">
                      <input type="button" value="Login" onClick={cadastrar} className="botao_login" />
                  </div>
              </div>
          </div>
      </main>
  );
}

export default Login;
