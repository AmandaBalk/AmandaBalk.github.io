import { Navigation } from "./Navigation"
import "./Header.css"

export const Header = ()=>{
    return<>
    <header>
    <Navigation/>
    <div className="name">
    <h2>Amanda Balk </h2>
    <p className="typewriter">Frontend developer in the making</p>
    </div>
    <svg className="header-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill-opacity="1" d="M0,128L26.7,117.3C53.3,107,107,85,160,90.7C213.3,96,267,128,320,149.3C373.3,171,427,181,480,176C533.3,171,587,149,640,128C693.3,107,747,85,800,85.3C853.3,85,907,107,960,144C1013.3,181,1067,235,1120,234.7C1173.3,235,1227,181,1280,170.7C1333.3,160,1387,192,1413,208L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
    </header>
    </>
}