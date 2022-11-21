import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import Login from './Login';
import Cadastro from './Cadastro';
import Entradas from './Entradas';
import Saidas from './Saidas';
import Extrato from './Extrato';
import UserContext from './UserContext';
import { useState } from 'react';


export default function App() {
    const [token, setToken] = useState()
    const [nameUser, setNameUser] = useState("")

    return (
        <UserContext.Provider value={{token, setToken, nameUser, setNameUser}}>
            <BrowserRouter>
                <GlobalStyle />
                <StyledPattern>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/cadastro" element={<Cadastro />}></Route>
                        <Route path="/entradas" element={<Entradas />}></Route>
                        <Route path="/saidas" element={<Saidas />}></Route>
                        <Route path="/extrato" element={<Extrato />}></Route>
                    </Routes>
                </StyledPattern>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

const StyledPattern = styled.div`
    font-family: 'Raleway', sans-serif;
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    box-sizing: border-box;
    position: relative;
`