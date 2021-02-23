import React from 'react'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { OpenSource } from './components/openSource'
import { Projects } from './components/projects'
export const App = () => {
    return (
        <>
            <Header />
            <div className="content">
                <div className='single'>
                    <Hero />
                    <Projects />
                    <OpenSource />
                </div>
            </div>
            <Footer />
        </>
    )
}
