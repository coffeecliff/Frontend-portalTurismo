import React from "react";
import Footer from "../components/footer"
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import bg from "../assets/imagens/servicesbg.png"
import Carousel from "../components/carousel";
import MikuSwiper from "../components/mikuSwiper";

const ServicePage = () =>{
    return(
        <>
            <Navbar/>
            <div className="flex flex-col min-h-screen">
            <MikuSwiper/>

                <div>
                    <Hero background = {bg} titulo="Serviços" paragrafo="Venha conhecer os mais novos serviços de turismo" rota="#" botao="Saiba mais"/>
                </div>

                <Carousel/>
         
                
            </div>
            <Footer/>
        </>
    )
}

export default ServicePage;
