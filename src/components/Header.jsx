import logo from '@/assets/react.svg'

export default function Header() {
    return(
        <header>
            <img src={logo} alt="Logo"/>
            <h1>Header</h1>
            <span>Дата: { new Date().toLocaleDateString() } </span>
        </header>
    )
}