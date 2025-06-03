import { useState } from "react"
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export const About = ()=>{

    const aboutSections = [
        {
        title: "Education", content:["Medieinstitutet - Frontend developer (2024-2026)", "Södertörn University - Bachelor's degree in media and communication studies (2020-2023)"]
        },
        {
        title: "Experience", content:["Lykke Coffee Farms - Freelance Video Content Creator (June 2023 - Sept 2023)",
            "Lykke Coffee Farms - Digital Marketing & Content Production Internship (Jan 2023 - May 2023)"
        ] },
        {title: "Skills", content: ["HTML", "CSS", "TypeScript", "JavaScript", "React", "API development", "Agile methods", "Figma", "UX/UI Design", "Testing"]},
        {title: "Soft Skills", content: ["Curiosity", "Communication","Adaptability", "Teamwork", "Creativity", "Eager to learn"]}
        
    ]

    const [openSection, setOpenSection] = useState<number | null>(null);

    const toggleSection = (section: number)=>{
        setOpenSection(openSection === section? null : section);
    }

    return (
      <>
        <div className="profile-img">
          <img src="/profile.png" alt="Amanda Balk" />
        </div>
        <section className="introduction">
          <h2>Amanda Balk</h2>
          <h3>Frontend Developer Student</h3>
          <p>I'm a frontend developer student at Medieinstitutet, currently looking for an internship placement (LIA) for the fall of 2025. With a background in media and communication studies, I'm looking for an opportunity to grow as a developer in a creative and collaborative team, where curiosity is encouraged. </p>
        </section>
        <div className="about-section">
          <div className="about-titles-row">
            {aboutSections.map((aboutSection, id) => (
              <h2
                key={aboutSection.title}
                onClick={() => toggleSection(id)}
                className={`about-title${openSection === id ? " active" : ""}`}
              >
                <span className="about-title-text">{aboutSection.title}</span>
                <span className={`arrow${openSection === id ? " open" : ""}`}>
      <FontAwesomeIcon icon={faCaretDown} />
    </span>
              </h2>
            ))}
          </div>
          {aboutSections.map((aboutSection, id) =>
            openSection === id ? (
              <ul
                className={`about-content${aboutSection.title === "Skills" ? " skills-list" : ""}${aboutSection.title === "Soft Skills" ? " soft-skills-list" : ""}`}
                key={aboutSection.title + "-content"}
              >
                {aboutSection.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : null
          )}
        </div>
      </>
    )
}