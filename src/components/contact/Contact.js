import React from "react";
import { Element } from "react-scroll";
import {IconButton} from "@mui/material"
import "./contact.css"
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Contact =() =>{
    return(
        <Element className="contact" id="contact">
            <h1 className="header">Contact</h1>
            <div className="contact">
            <div className="contact_container">
                <p>
                    Email: <span>kapilesh1@gmail.com</span>
                </p>
                <p>
                    GitHub Username: <span><a href="https://github.com/kapileshc?tab=repositories">@kapileshc</a></span>
                </p>
                </div>
                <div className="contact_icons">
                    <a href="google.com">
                        <IconButton color='error'>
                            <Instagram/>
                        </IconButton>
                    </a> 
                    <a href="google.com">
                        <IconButton color='info'>
                            <LinkedIn />
                        </IconButton>
                    </a>
                    <a href="google.com">
                        <IconButton color='info'>
                            <Facebook/>
                        </IconButton>
                    </a>

                </div>
            </div>
        </Element>
    )
}

export default Contact;