import React from 'react'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { OpenSource } from './components/openSource'
import { Medium } from './components/Medium'
export const App = () => {
    return (
        <>
            <Header />
            <div className="content">
                <div className='single'>
                    <Hero />
                    <Medium />
                    <OpenSource />
                </div>
            </div>
            <Footer />
        </>
    )
}
