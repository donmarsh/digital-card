import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import github from '../images/github.svg'


export default function Footer() {
    return(
        <footer className="footer">
            <img src={facebook} alt="facebook"/>
            <img src={twitter} alt="twitter"/>
            <img src={instagram} alt="instagram"/>
            <img src={github} alt="github"/>
        </footer>
    )
}
