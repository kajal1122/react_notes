import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Footer = ()=>{
    return(
        <div className="footer" >
            <div>
                <h5 >Made with ❤️ by Kajal</h5>
                <a href="https://www.linkedin.com/in/kajal-kumari-44723a168"><CiLinkedin className="icon" /></a>
                <a href="https://github.com/kajal1122"><FaGithub className="icon" /></a>
                <a href="mailto:connectwith.kajal11@gmail.com"><BiLogoGmail className="icon"/></a>

            </div>
            
           
           

            
            
        </div>
    )
}

export default Footer;