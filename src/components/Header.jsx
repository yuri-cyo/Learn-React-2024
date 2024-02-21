import logo from '@/assets/react.svg'
import styled from 'styled-components'

const HeadesStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #689;
    color: #fff;
`

export default function Header() {
    return(
        <HeadesStyle>
            <img src={logo} alt="Logo"/>
            <h1>Header</h1>
            <span>Дата: { new Date().toLocaleDateString() } </span>
        </HeadesStyle>
    )
}