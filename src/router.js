import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home/home';

/* 
    Função que contém todas as rotas do app.
*/
export default function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                {/* Rota base "root" do app (Primeira tela) */}
                <Route path="/" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

