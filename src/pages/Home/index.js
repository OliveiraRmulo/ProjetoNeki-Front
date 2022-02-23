import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Logo from "../../assets/NEKINOME.png";
import Comunicacao from "../../assets/comunicacao.png";
import Criatividade from "../../assets/criatividade.png";
import "./home.css";
import { BsTrash, BsPencil } from "react-icons/bs";



function Home() {
    return (
        <div className="home">
            <img src={Logo} alt="Neki" />

            <div className="home-line" >

            </div>

            <div className="home-add">
                <IoAddCircleOutline />

            </div>
            <div className="home-cards">

                <h1>Comunicação</h1>
                <h2>10</h2>
                <img src={Comunicacao} alt="Comunição" />

                <div className="homeCardsIconsPencil">
                    <BsPencil />
                </div>
                <div className="homeCardsIconsTrash">
                    <BsTrash />
                </div>

            </div>

            <div className="home-cards2">

                <h1>Criatividade</h1>
                <h2>9</h2>
                <img src={Criatividade} alt="Criatividade" />

                <div className="homeCardsIconsPencil">
                    <BsPencil />
                </div>
                <div className="homeCardsIconsTrash">
                    <BsTrash />
                </div>

            </div>

        </div>
    )
}

export default Home;