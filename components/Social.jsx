import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/UGC2885"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/lucas-unzer-78b9b3274/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/lucas_unzer"},
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
           ) 
        })}
    </div>
  )
}

export default Social