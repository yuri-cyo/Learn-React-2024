import { useState } from 'react'
import logo from '@/assets/react.svg'
import styled from 'styled-components'
import Button from '@/components/Button/Button.jsx'
import About from '@/components/About'
import arrList from "@/store/store.js"
import EffectSection from './EffectSection'

const HeadesStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #689;
    color: #fff;
`

export default function Header() {

    const [isTab, setIsTab] = useState('')

    function handleTab(e) {
        setIsTab(e.target.innerHTML)
    }

    return(
        <HeadesStyle style={{flexDirection: 'column'}}>
           <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <img src={logo} alt="Logo"/>
                <h1>Header</h1>
                <span>Дата: { new Date().toLocaleDateString() } </span>
           </div>
           <div>
            <Button
                onClick={handleTab}
                className={isTab === 'Про мене' ? 'active' : ''}
            > Про мене
            </Button>
            <Button
                onClick={handleTab}
            > Мої роботи
            </Button>
            <Button
                onClick={handleTab}
            > Effect
            </Button>
           </div>
            <div>{isTab === "Про мене" ? <About></About> : ''}</div>
            <div>{isTab === "Мої роботи" ? <p>{JSON.stringify(arrList)}</p> : ''}</div>
            <div>{isTab === "Effect" ? <EffectSection></EffectSection> : ''}</div>
        </HeadesStyle>
    )
}