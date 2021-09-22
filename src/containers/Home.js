import logo from '../files/logo.png'
import { Link } from 'react-router-dom'
import Landing from '../containers/Landing/landing'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <header className='Home-header'>
        {/* <img src={logo} className='Home-logo' alt='logo' /> */}
        <p>Webarch Site 2021</p>
        <a
          className='Home-link'
          href='https://webarchsrm.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Main Branch
        </a>
        <Landing />
        <Link to='/'>Home</Link>
        <Link to='/team'>Team</Link>
      </header>
    </div>
  )
}

export default Home
