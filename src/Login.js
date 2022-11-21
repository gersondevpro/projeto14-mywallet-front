import { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components';
import axios from 'axios';
import UserContext from './UserContext';

export default function Login() {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const navigate = useNavigate()
    const {setToken, setNameUser} = useContext(UserContext)

    function login(event) {
        event.preventDefault()

        /* setLoading(true) */

        const request = {
            email: userEmail,
            password: userPassword
        }

        const promise = axios.post("http://localhost:5000/login", request)

        promise.then((res) => {
            console.log(res)
            setToken(res.data)
            /* setNameUser() */
            navigate('/extrato')
        })

        promise.catch((err) => {
            alert(err.response.data.message)
            /* setLoading(false) */
        })
    }
    
    return (
        <LoginStyled>
            <LogoStyled>MyWallet</LogoStyled>
            <GeralFormStyled onSubmit={login}>
                <StyledForm>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="E-mail"
                        onChange={(e) => setUserEmail(e.target.value)}
                        required>
                    </input>
                </StyledForm>
                <StyledForm>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setUserPassword(e.target.value)}
                        required>
                    </input>
                </StyledForm>
                <button type="submit"><h4>Entrar</h4></button>
            </GeralFormStyled>
            <Link to={`/cadastro`}><p>Não tem uma conta? Cadastre-se!</p></Link>
        </LoginStyled>
    );
}

const LoginStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        margin-top: 84px;
        text-decoration: none;
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 700;
    }
`

const LogoStyled = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    color: #FFFFFF;
`

const GeralFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    gap: 13px;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 326px;
        height: 46px;
        background-color: #A328D6;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: none;
        h4 {
            font-size: 20px;
            font-weight: 700;
            color: #FFFFFF;
            text-align: center;
        }
    }
`

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    input {
        width: 306px;
        height: 58px;
        border-radius: 5px;
        border: none;
        color: #000000;
        font-size: 20px;
        padding-left: 20px;
        ::placeholder {
            color: gray;
        }
    }
`