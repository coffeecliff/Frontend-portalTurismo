import React from "react";
import Footer from "../components/footer"
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import bg from "../assets/imagens/bg.png" 
import MikuSwiper from "../components/mikuSwiper";
import Carousel from "../components/carousel";
import HomeHero from "../components/homeHero";

const Home = () =>{
    return(
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <MikuSwiper/>
                <div>
                    <Hero background= {bg} titulo="Portal de Turismo da Miku!" paragrafo="Conheça nossas atrações" rota="/service" botao="Saiba mais"/>
                </div>
                <HomeHero/>
                <Carousel/>
                
                

                <Footer/>
            </div>
        </>
    )
}

export default Home;