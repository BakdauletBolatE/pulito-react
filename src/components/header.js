import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
const Header = (props) => {
  
    return (
        <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link className="nav-link" to="/">Главная</Link>
                <Link className="nav-link" to="/login">Логин</Link>
                <Link className="nav-link" to="/register">Регистрация</Link>
            </div>
            </div>
        </div>
        </nav>
        </header>
    )
   
}


export default Header;