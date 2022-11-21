import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components';
import axios from 'axios';
import UserContext from './UserContext';



export default function Entradas() {
    const [deposit, setDeposit] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()
    const {token} = useContext(UserContext);

    console.log(token)
    const config = {headers: {authorization: `Bearer ${token}`}}

    function depositValue(event) {
        event.preventDefault(); 

        const request = {
            deposit: Number(deposit),
            description
        };

        const promise = axios.post("http://localhost:5000/novaEntrada", request, config)

        promise.then((res) => {
            navigate('/extrato')
        });

        promise.catch((err) => {
            alert(err.response.data.message)
        });
    }

    return (
        <ExtractStyled>
            <HeaderStyle>
                <h1>Nova entrada</h1>
            </HeaderStyle>
            <GeralFormStyled onSubmit={depositValue}>
                <StyledForm>
                    <input
                        id="value"
                        name="value"
                        type="number"
                        placeholder="Valor"
                        onChange={(e) => setDeposit(e.target.value)}
                        required>
                    </input>
                </StyledForm>
                <StyledForm>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Descrição"
                        onChange={(e) => setDescription(e.target.value)}
                        required>
                    </input>
                </StyledForm>
                <button type="submit"><h4>Salvar entrada</h4></button>
            </GeralFormStyled>
        </ExtractStyled>
    )
}

const ExtractStyled = styled.div`
    display: flex;
    flex-direction: column;
`

const HeaderStyle = styled.div`
    box-sizing: border-box;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    padding: 25px 24px 22px 24px;
    h1 {
        font-size: 26px;
        color: #FFFFFF;
        font-weight: 700;
    }
`

const GeralFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
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