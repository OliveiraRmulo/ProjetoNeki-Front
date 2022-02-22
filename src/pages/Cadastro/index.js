import React, { useState } from "react";
import "./cadastro.css";
import Logo from "../../assets/NEKILOGO.png";
import { MdAccountCircle, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";


function Cadastro() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    function alerta() {
        alert("Casdastrado com sucesso")
    }
    return (
        <div className="cadastro">

            <div className="cadastro-rigth">


                <img src={Logo} alt="Neki" />

                    <div className="CadastroInputLogin">
                        <MdAccountCircle />
                        <input className={login !== "" ? "has-val input" : "input"} type="login" placeholder="Login" value={login}
                            onChange={e => setLogin(e.target.value)} />
                    </div>

                    <div className="CadastroInputPassword">
                        <MdLock />
                        <input className={password !== "" ? "has-val input" : "input"} type={show ? "text" : "password"}
                         placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />

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
                
                <button type="submit" onClick={alerta} >
                    Cadastrar
                </button>


            </div>

        </div>
    )
}

export default Cadastro;
