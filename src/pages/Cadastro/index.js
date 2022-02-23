import React, { useState } from "react";
import "./cadastro.css";
import Logo from "../../assets/NEKILOGO.png";
import { MdAccountCircle, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import api from "../../service/api";


function Cadastro() {
    const [cadastro, setCadastro] = useState ({
        login: "",
        password: ""
    });

    const [confPassword, setConfPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    function Cadastrar() {
            api.post("/neki/user" , cadastro).then((res) => {
                alert("Usuario Cadastrado com Sucesso!");
            }).catch((err) => {
                    alert("Verifique se as senhas estão iguais e tente novamente")
                })
            }


    return (
        <div className="cadastro">

            <div className="cadastro-rigth">


                <img src={Logo} alt="Neki" />

                    <div className="CadastroInputLogin">
                        <MdAccountCircle />
                        <input className={cadastro.login !== "" ? "has-val input" : "input"} type="login" placeholder="Login" value={cadastro.login}
                            onChange={e => setCadastro({ ...cadastro, login:e.target.value})} />
                    </div>

                    <div className="CadastroInputPassword">
                        <MdLock />
                        <input className={cadastro.password !== "" ? "has-val input" : "input"} type={show ? "text" : "password"}
                         placeholder="Senha" value={cadastro.password} onChange={e => setCadastro({ ...cadastro, password:e.target.value})} />

                        <div className="cadastro-eye">
                            {show ? (<HiEye onClick={handleClick} />) : (<HiEyeOff onClick={handleClick} />)}
                        </div>

                    </div>
                    <div className="CadastroInputPasswordAgain">
                        <MdLock />
                        <input className={confPassword !== "" ? "has-val input" : "input"} type={show ? "text" : "password"} placeholder="Repitir Senha" value={confPassword}
                            onChange={e => setConfPassword(e.target.value)} />

                        <div className="cadastro-eye">
                            {show ? (<HiEye onClick={handleClick} />) : (<HiEyeOff onClick={handleClick} />)}
                        </div>

                    </div>
                
                <button type="submit" onClick={Cadastrar} >
                    Cadastrar
                </button>


            </div>

        </div>
    )
}

export default Cadastro;
