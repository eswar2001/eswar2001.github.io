import React, { useEffect } from 'react';
import { Medium } from './components/blogs';
import { Footer } from './components/footer';
import { Github } from './components/github';
import { Header } from './components/header';
import { Hero } from './components/hero';
export const App = () => {
    return (
        <>
            <Header />
            <div className="content">
                <div className='single'>
                    <Hero />
                    <Github />
                    <Medium />
                </div>
            </div>
            <Footer />
        </>
    )
}
