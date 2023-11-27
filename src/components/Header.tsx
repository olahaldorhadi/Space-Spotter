import './Header.css'
import Logo from '../assets/SpaceSpotterLogo.png'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-content">
                    <img src={Logo} />
                    <div className="explanation-text">
                        <h1>Trenger du et rom?</h1>
                        <p>Finn oversikt over rom på din campus!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
