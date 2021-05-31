import React from 'react';
import { Medium } from './blogs';
import { Github } from './projects';
export const App = () => {
    return (
        <>
            <Header />
            <div className="content">
                <div className='single'>
                    <Hero />
                    <Medium />
                    <Github />
                </div>
            </div>
            <Footer />
        </>
    )
}

const Footer = () => {
    return (<footer>
        <span>&copy; 2021. All rights reserved</span>
        <div className='social'><a href='https://github.com/eswar2001' className="icon github" title="Follow me on Github"
            rel="author noopener">Github</a>
            <a href='https://twitter.com/_eswar2001' className="icon twitter" title="Follow me on Twitter"
                rel="author noopener">Twitter</a>
            <a href='https://www.linkedin.com/in/eswar2001' className="icon linkedin"
                title="Connect on LinkedIn" rel="author noopener">LinkedIn</a>
        </div>
    </footer >)
}

const Header = () => {
    return (<header>
        <a href="mailto:eswar.abisheak94@gmail.com" title="Contact Me"
            rel='author'>Contact Me</a>
        <a href="https://docs.google.com/document/d/1Qx8xBd9yMQ7jNC0nJZHoHwPjOjxb7Hu16P0oD3Hp2G8/edit?usp=sharing" title="Website"
            rel="noreferrer" target='_blank'>🌏</a>
    </header>)
}

const Hero = () => {
    return (<section className='hero'>
        <strong>Hi, I'm Eswar Abisheak.</strong>
        <h1>A Computer Science Engineer, who loves to code and solve problems 🚀.</h1>
        <p className='mono'>Developer Students Club lead for DSCVIIT | CodechefVIIT Representative | OSC LEAD</p>
    </section >)
}
