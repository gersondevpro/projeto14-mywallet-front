import { useEffect, useState, useContext} from 'react';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logout from './img/assets/Vector.png'
import axios from 'axios';
import UserContext from './UserContext';

export default function Extrato() {
    const [extratoConta, setExtratoConta] = useState("")
    const {token} = useContext(UserContext);
    const [values, setValues] = useState();

    console.log(token)
    const config = {headers: {authorization: `Bearer ${token[0]}`}}
    useEffect(() => {

        const promise = axios.get("http://localhost:5000/extrato", config)

        promise.then((res) => {
            setValues(res.data)
        })
        promise.catch((erro) => { console.log(erro.response.data) })

    }, [])
    console.log(values)
    if(!values) {
        return <div>Carregando...</div>
    }
return (
    <ExtractStyled>
        <HeaderStyle>
            <h1>Olá, {token[1]}</h1>
            <Link to={`/`}><img src={logout} /></Link>
        </HeaderStyle>
        <RegistersStyled>
            <h3>
                {values.map((mov) => {
                    return mov.deposit
                })}
                {values.map((mov) => {
                    return mov.withdraw
                })}
            </h3>
        </RegistersStyled>
        <OptionsStyled>
            <Link to={`/entradas`}>
                <DepositStyled>
                    <h2>Nova entrada</h2>
                </DepositStyled>
            </Link>
            <Link to={`/saidas`}>
                <WithdrawStyled>
                    <h2>Nova saída</h2>
                </WithdrawStyled>
            </Link>
        </OptionsStyled>
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
    justify-content: space-between;
    padding: 25px 24px 22px 24px;
    h1 {
        font-size: 26px;
        color: #FFFFFF;
        font-weight: 700;
    }
    img {
        width: 24px;
        height: 24px;
    }
`

const RegistersStyled = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 326px;
    height: 446px;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-size: 14px;
    h3 {
        text-align: center;
        font-size: 20px;
        color: gray;
        padding: 70px;
        line-height: 23.5px;
    }
`

const OptionsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 13px;
    gap: 15px;
`

const DepositStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 155px;
    height: 114px;
    background: #A328D6;
    cursor: pointer;
    h2 {
        font-size: 17px;
        font-weight: 700;
        padding: 0 0 10px 10px;
        color: #FFFFFF;
        padding-right: 70px;
        line-height: 20px;
    }
`

const WithdrawStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 155px;
    height: 114px;
    background: #A328D6;
    cursor: pointer;
    h2 {
        font-size: 17px;
        font-weight: 700;
        padding: 0 0 10px 10px;
        color: #FFFFFF;
        padding-right: 70px;
        line-height: 20px;
    }
`