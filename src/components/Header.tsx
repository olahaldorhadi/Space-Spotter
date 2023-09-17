import './Header.css';
import Logo from '../assets/SpaceSpotterLogo.png';

const Header = () => {

  return (
    <>
      <div className='header'>
        <div className='header-content'>
          <img src={Logo} />
          <div className='explanation-text'>
            <h1>Hvor vil du sitte?</h1>
            <p>Søk etter ledige grupperom på din campus</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
