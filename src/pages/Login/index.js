import React, { useState, useEffect } from "react";
import api from "../../service/api";
import "./login.css";
import Logo from "../../assets/NEKILOGO.png";
import { Link, useHistory } from "react-router-dom";
import { MdAccountCircle, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Login() {

    const history = useHistory();

    const [user, setUser] = useState({
        login: "",
        password: ""
    })

    const [saveSenha, setSaveSenha] = useState(false)
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    useEffect(() => {
        setUser({ ...user, password: localStorage.getItem("password"),
            login: localStorage.getItem("login")})
         }, [])

    function HandleLogin() {
        if (saveSenha) {
            localStorage.setItem("password", user.password)
            localStorage.setItem("login", user.login)
        }

        api.post("/neki/user/login", user).then((response) => {
            console.log(response)
            history.push("/home")
        }).catch((err) => {
            console.log(err)
        })
    }

    function Save() {
        saveSenha === true ? setSaveSenha(false) : setSaveSenha(true)
    }

    return (
        <div className="login">

            <div className="login-rigth">


                <img src={Logo} alt="Neki" />


                <div className="LoginInputLogin">
                    <MdAccountCircle />
                    <input className={user.login !== "" ? "has-val input" : "input"} type="login" placeholder="Login" 
                    value={user.login} onChange={e => setUser({ ...user, login: e.target.value})} />
                </div>

                <div className="LoginInputPassword">
                    <MdLock />
                    <input className={user.password !== "" ? "has-val input" : "input"} type={show ? "text" : "password"} 
                    placeholder="Senha" value={user.password} onChange={e => setUser({ ... user, password :e.target.value})} />

                    <div className="login-eye">
                        {show ? (<HiEye onClick={handleClick} />) : (<HiEyeOff onClick={handleClick} />)}
                    </div>

                </div>

                <div className="checkbox">
                    <input type="checkbox" onClick={Save} />
                    <h7>Salvar senha</h7>

                </div>

                <button type="submit" onClick={HandleLogin}>
                    <Link className="link" to="/home">
                    Entrar
                    </Link>
                </button>

                <h4>Não possui conta?</h4>

                <button type="submit">
                    <Link className="link" to="/cadastro">
                    Cadastrar
                    </Link>
                </button>

            </div>

        </div>
    )
}

export default Login;
