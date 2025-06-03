import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import "./Contact.css"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Contact = ()=>{

    const contactInfo = [
        {label: "Email", value: "Amanda.Balk@medieinstitutet.se", link: "mailto:Amanda.Balk@medieinstitutet.se", icon: faEnvelope},
        {label: "Phone", value: "070 023 56 31", link: "tel:0700235631", icon: faPhone},
        {label: "LinkedIn", value: "Amanda Balk", link: "https://www.linkedin.com/in/amanda-balk/", icon: faLinkedin},
        {label: "GitHub", value: "AmandaBalk", link:"https://github.com/AmandaBalk", icon: faGithub}
    ]

    return <>
    <h2 id="contact" className="contact-title">Let's get in touch</h2>
    <section className="contact-section">
    <ul>
        {contactInfo.map((info, i)=>(
          <li key={i}>
            <span className="contact-label">
              <FontAwesomeIcon icon={info.icon} style={{ marginRight: "0.5rem" }} />
              {info.label}
            </span>
            <a
              className="contact-value"
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {info.value}
            </a>
          </li>
        ))}
    </ul>
    </section>
    </>
}