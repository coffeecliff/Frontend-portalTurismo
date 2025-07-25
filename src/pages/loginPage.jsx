import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import LoginForm from "../components/loginForm";
import bg from "../assets/imagens/bg.png"

const LoginPage = () => {
    return(
        <>
            <div className="flex flex-col min-h-screen">
                <div
                className="flex flex-col min-h-screen relative h-[500px] bg-cover bg-center"
                style={{backgroundImage: `url(${bg})`}}
                >  
                <Navbar/>
                <div className="flex-grow flex items-center justify-center">
                <LoginForm/>
                </div>
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default LoginPage;