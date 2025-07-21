import React, { useState, useEffect } from 'react';
 
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
 
    useEffect(() => {
        // Verifica se há um token (ou usuário) no localStorage
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
    }, []);
 
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
 
    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        window.location.href = '/'; // redireciona para Home
    };
 
    const menuLinks = (
        <>
            <a href="/" className="text-[#63ebe4] hover:text-cyan-100 transition-colors duration-300 text-lg font-medium">Home</a>
            <a href="/about" className="text-[#63ebe4] hover:text-cyan-100 transition-colors duration-300 text-lg font-medium">Sobre</a>
            <a href="/service" className="text-[#63ebe4] hover:text-cyan-100 transition-colors duration-300 text-lg font-medium">Serviços</a>
            <a href="/contact" className="text-[#63ebe4] hover:text-cyan-100 transition-colors duration-300 text-lg font-medium">Contato</a>
            {isAuthenticated ? (
                <>
                    <a href="/profile" className="text-[#63ebe4] hover:text-cyan-100 transition-colors duration-300 text-lg font-medium cursor-pointer">Perfil</a>
                    <button onClick={handleLogout} className="text-[#63ebe4] hover:text-cyan-100 transition-colors duration-300 text-lg font-medium cursor-pointer">Sair</button>
                </>
            ) : (
                <a href="/login" className="text-[#63ebe4] hover:text-cyan-100 transition-colors duration-300 text-lg font-medium">Login</a>
            )}
        </>
    );
 
    return (
        <nav className=" bg-[#3a3a3a] text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              
              {/* Logo / Título */}
              <div className="flex items-center">
                <a href="/" className="text-[32px] font-extrabold -tracking-wider text-[#f797ef]">
                  Portal de Turismo da Miku!
                </a>
              </div>
      
              {/* Botão Mobile */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-white hover:text-[#e4884a] transition duration-200 focus:outline-none"
                  aria-label="Abrir menu"
                >
                  {isMenuOpen ? '✖' : '☰'}
                </button>
              </div>
      
              {/* Menu Desktop */}
              <div className="hidden md:flex md:space-x-8 font-medium text-white">
                {menuLinks}
              </div>
            </div>
          </div>
      
          {/* Menu Mobile */}
          {isMenuOpen && (
            <div className="md:hidden px-4 pb-4 space-y-2 text-white font-medium">
              {menuLinks}
            </div>
          )}
        </nav>
      );
      
};

export default Navbar;