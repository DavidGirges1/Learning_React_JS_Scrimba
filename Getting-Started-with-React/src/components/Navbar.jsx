import logo from "../assets/react-logo.png";

export default function Navbar() {
    return (

        <header>
            <nav className="nav">
                <img src={logo} alt="logo" className="logo" />
                <span>React Facts</span>
            </nav>
        </header>

        )
}