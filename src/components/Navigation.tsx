import { NavLink } from "react-router"
import "./Navigation.css";


export const Navigation = ()=>{
    return<>
    <ul className="navigation">
        <li>
            <NavLink to={"/"}>Projects</NavLink>
        </li>
        <li>
            <NavLink to={"/about"}>About me</NavLink>
        </li>
         <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
         <li>
            <a href="/CV.pdf" target="_blank">CV</a>
        </li>
    </ul>
</>
}