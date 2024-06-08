function FormularioDenuncias({ eventoTeclado, cadastrar, obj, setObjControle }) {
    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setObjControle({ ...obj, imagem: e.target.files[0] });
        }
    }

    return (
        <form className="denuncia">
            <div className="container">
                <div className="conteudo">
                    <div className="formulario">
                        <h1 className="denuncia_titulo">Faça sua denuncia anônima</h1>

                        <div className="input-container-data">
                            <input
                                type="date"
                                value={obj.datadadenuncia}
                                onChange={eventoTeclado}
                                name="datadadenuncia"
                                className="denuncia_input horario"
                            />
                            <label className={obj.datadadenuncia ? "filled" : ""}>Data da denúncia</label>
                        </div>

                        <div className="input-container-hora">
                            <input
                                type="time"
                                value={obj.horarioDenuncia}
                                onChange={eventoTeclado}
                                name="horarioDenuncia"
                                className="denuncia_input horario"
                            />
                            <label className={obj.horarioDenuncia ? "filled" : ""}>Horário</label>
                        </div>

                        <input
                            type="text"
                            value={obj.observacao}
                            onChange={eventoTeclado}
                            name="observacao"
                            placeholder="Observação"
                            className="denuncia_input obs"
                        />

                        <div className="button-row">
                            <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary" />
                        </div>
                    </div>

                    <div className="upload-imagem">
                        <label htmlFor="denuncia_imagem" className="denuncia_input imagem">
                            <input type="file" id="denuncia_imagem" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
                            <i className="fas fa-upload"></i>
                            <span>Upload de Imagem</span>
                        </label>

                        {obj.imagem && <div className="imagem"><img src={URL.createObjectURL(obj.imagem)} alt="Imagem selecionada" className='imagem_envio' /></div>}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default FormularioDenuncias;
