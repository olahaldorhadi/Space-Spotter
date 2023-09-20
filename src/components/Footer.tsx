import './Footer.css';
import Logo from '../assets/SpaceSpotterLogo.png';

const Footer = () => {

  return (
    <>
      <div className='footer--footer'>
        <div className='footer--footer-content'>
          <div className='footer--explanation-text'>
          </div>
          <img src={Logo} />
        </div>
      </div>
    </>
  )
}

export default Footer
