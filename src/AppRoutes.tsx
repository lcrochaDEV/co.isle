import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'componentes/Header';
import PethRouter from 'componentes/PethRouter';
import Footer from 'componentes/Footer';
import Erro404 from 'componentes/Erro404';
import Home from 'componentes/Home';
import PethRouterAdmin from 'componentes/AdminGlobal/src/componentes/PethRouterAdmin';
import AreaAdmin from 'componentes/AdminGlobal/src/componentes/AreaAdmin';
import Login from 'componentes/AdminGlobal/src/componentes/Login';
import Produtos from 'componentes/AdminGlobal/src/componentes/Produtos';
import UserContext from 'componentes/ContextApi';
//import { useState } from 'react';

function AppRoutes() {
  //const [user, setUser] = useState("Jesse Hall");

  let url = window.location.pathname;
  let parts = url.split(/\/admincoisle\/?.*/gm);
  let lastPart = parts.pop(); 

  return (
    <>
    {lastPart
    ?
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route>
              <Route  path={'/'} element={<PethRouter />}>
                <Route  path={'' || '/'} element={<Home />}/>
                <Route  path={'/masculino'} element={<p>Masculino</p>}/>
                <Route  path={'/feminino'} element={<p>Feminino</p>}/>
                <Route  path={'/kids'} element={<p>Kids</p>}/>
                <Route  path={'/sobre'} element={<p>Sobre</p>}/>
                <Route  path={'/produto'} element={<p>Produto</p>}/>
              </Route>
            </Route>
            <Route  path='*' element={<Erro404 />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    :
    //ROTA PARA ÁREA ADMINISTRATIVA
    <UserContext.Provider value={{user: 'Lucas Rocha'}}>
      <BrowserRouter>
          <Routes>
          <Route  path={'/admincoisle'} element={<Login/>}/>
          <Route  path={'/admincoisle'} element={<PethRouterAdmin/>}>
            <Route  path={'/admincoisle/admin'} element={<AreaAdmin/>}/>
            <Route  path={'/admincoisle/produtos'} element={<Produtos/>}/>
          </Route>
          <Route  path='*' element={<Erro404 />}/>
          </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    }
    </>
  );
}

export default AppRoutes;

