import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () =>{
    return(
        <>
        <footer className="w-full bg-[#ebebeb] text-gray-800 py-6 px-4 shadow-lg mt-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                
                {/* Coluna 1: Institucional */}
                <div>
                <h4 className="text-lg font-semibold mb-2">Sobre nós</h4>
                <ul className="text-sm space-y-1">
                    <li><a href="about" className="hover:underline">Quem somos</a></li>
                    <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
                    <li><a href="#" className="hover:underline">Termos de Uso</a></li>
                </ul>
                </div>

                {/* Coluna 2: Contato */}
                <div>
                <h4 className="text-lg font-semibold mb-2">Atendimento</h4>
                <ul className="text-sm space-y-1">
                    <li>Telefone: (11) 4002-8922</li>
                    <li>Email: contato@novaserraverde.com</li>
                    <li>Horário: Seg a Sex - 08h às 18h</li>
                </ul>
                </div>

                {/* Coluna 3: Redes Sociais */}
                <div>
                <h4 className="text-lg font-semibold mb-2">Redes sociais</h4>
                <div className="flex space-x-4 text-2xl">
                    <a href="#" className="hover:text-[#63b9ae]"><RiInstagramFill /></a>
                    <a href="#" className="hover:text-[#63b9ae]"><IoLogoWhatsapp /></a>
                    {/* Você pode adicionar mais ícones como Facebook, Instagram, etc. */}
                </div>
                </div>

            </div>

            {/* Rodapé inferior */}
            <div className="border-t border-[#b6b6b6] mt-6 pt-1 text-center text-xs text-[#333]">
                © {new Date().getFullYear()} Portal de Turismo da Miku. Vocaloid. Todos os direitos reservados.
            </div>
        </footer>

        </>
    )
}

export default Footer;