// import { useState } from 'react'
// import logo from '@/assets/react.svg'
// import styled from 'styled-components'
import styles from '@/components/Header/Header.module.scss'
import Logo from '@/components/UI/Logo/Logo.jsx'
import Navbar from '@/components/UI/Navbar/Navbar'
import Social from '@/components/UI/Social/Social.jsx'
// import Button from '@/components/Button/Button.jsx'

// const HeadesStyle = styled.header`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem;
//     ${'' /* background-color: #689; */}
//     color: #fff;
// `

export default function Header() {
    return(
        <div className='container' style={{position: 'relative'}}>
            <header className={`${styles.menu__list} ${styles.header}`}>
                <Logo></Logo>
                <Navbar></Navbar>
                <Social></Social>
            </header>
        </div>
    )
}