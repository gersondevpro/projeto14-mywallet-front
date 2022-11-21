import { useState } from 'react';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';

export default function Cadastro() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const navigate = useNavigate()

    function addNewUser(event) {
        event.preventDefault()

        const request = {
            name,
            email,
            password,
            passwordConfirm,
        }

        const promise = axios.post("http://localhost:5000/novoCadastro", request)

        promise.then(() => {
            navigate("/")
        })

        promise.catch((err) => {
            console.log("entrei")
            console.log(err.response.data.message)
        })
    }

    return (
        <LoginStyled>
            <LogoStyled>MyWallet</LogoStyled>
            <GeralFormStyled onSubmit={addNewUser}>
                <StyledForm>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                        required>
                    </input>
                </StyledForm>
                <StyledForm>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        required>
                    </input>
                </StyledForm>
                <StyledForm>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        required>
                    </input>
                </StyledForm>
                <StyledForm>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Confirme a senha"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        required>
                    </input>
                </StyledForm>
                <button type="submit"><h4>Cadastrar</h4></button>
            </GeralFormStyled>
            <Link to={`/`}><p>Já tem uma conta? Entre agora!</p></Link>
        </LoginStyled>
    )
}

const LoginStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        margin-top: 32px;
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
            font-size: 20px;
        }
    }
`