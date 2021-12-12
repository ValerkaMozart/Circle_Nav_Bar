import React from "react"
import classes from './CircleNav.module.scss'
import logo from './Group 309.svg'
let CircleNav: React.FC = () => {


    return (
        <div className={classes.CircleNav}>
            <div className={classes.circle}>
                <img src={logo} alt=""/>
                <ul>
                    <li>
                        <a href="#title">
                            <span><small>Welcome on </small>  Tomatobil.com <small>online platform! </small>   <strong>WHO WE ARE?</strong> </span>
                        </a>
                    </li>
                    <li>
                        <a href="#title"><span>HOW IT WORKS</span> </a>
                    </li>
                    <li>
                        <a href="#title"> <span>What you`ll get here</span> </a>
                    </li>
                    <li>
                        <a href="#title"> <span>5 seasons to work with us</span> </a>
                    </li>
                    <li>
                        <a href="#title"> <span>Where to begin</span> </a>
                    </li>
                    <li>
                        <a href="#title"> <span>Contact <br></br> us and get support</span> </a>
                    </li>
                    <li>
                    </li>
                    <li>
                    </li>

                </ul>
            </div>

            <h1 id='title'>Somebody title!</h1>
        </div>

    )
}

export default CircleNav