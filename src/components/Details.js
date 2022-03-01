
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Details() {
    return(
        <main>
            <p className="name">Laura Smith</p>
            <p className="role">Frontend Developer</p>
            <p className="website">laurasmith.website</p>
            <div className = "contacts">
                <div className="email"><FontAwesomeIcon icon={faEnvelope} />&nbsp;Email</div>
                <div className="linkedin"><FontAwesomeIcon icon={faLinkedin} />&nbsp;LinkedIn</div>
            </div>
            <div className = "about">
                <p className="title">About</p>
                <p className="body">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className = "interests">
                <p className="title">Interests</p>
                <p className="body">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            
            </div>
        </main>
    )
}