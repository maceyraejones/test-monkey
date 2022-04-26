import React from 'react'
import "./Home.css"
import Cards from "../components/Cards"

const Home = () => {
  return (
    <div>

    <header>
        <div className="wrapper">
            <h1>Pet Tindr<span className="color">.</span></h1>
          
        </div>
    </header>
    
    <div id="hero-image">
        <div className="wrapper">
            <h2><strong>A Minimal, clean</strong><br/>
            layout for web design.</h2>
            <a href="#primary-content" className="button-1">Get Started</a>
        </div>
    </div>
    
    <div id="primary-content">
        <div className="wrapper">
            <article>
                <h3>Swipe Through Pets</h3>
                <p>Example </p>

                <Cards/>
            </article>
        </div>
    </div>
    
    <div id="cta">
        <div className="wrapper">
            <h3>Liked Pets</h3>
            <p>Example</p>
            
        </div>
    </div>
    
    <footer>
        <div className="wrapper">
            <div id="footer-info">
                <p>Copyright 2022 Test-Monkey. All rights reserved.</p>
            </div>
            <div id="footer-links">
                    <h5>Team Test-Monkey</h5>
                    <a href="#">GitHub Repo</a>
                    <a href="#">Meet The Team</a>
                    <a href="#">Sprint 1 Review</a>
                    <a href="#">Sprint Backlog</a> 
            </div>
            <div className="clear"></div>
        </div>
    </footer>
    


    </div>
  )
}

export default Home