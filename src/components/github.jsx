import React, { useState, useEffect } from 'react';
import { githubData } from '../data/data';
import { Project } from './projects';
export const Github = () => {
    const [__, set__] = useState([]);
    useEffect(() => {
        set__(githubData);
    }, [])
    var k = 1000
    return (<section className='open-source'>
        <h2>Some of my open source work</h2>
        <div className='grid'>
            {__.map((i) => {
                k = k + 1
                return (<Project key={k + 1} __={i} />)
            })}
        </div>
    </section>)
}
