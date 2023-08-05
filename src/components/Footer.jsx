import logo_white from '../assets/logo_white.svg'
import classes from './Footer.module.scss'

const Footer = () => {
    return <div className={classes.Container}>
        <img src={logo_white} alt="" />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
}

export default Footer;