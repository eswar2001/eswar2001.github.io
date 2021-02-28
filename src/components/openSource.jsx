import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Project } from './project'
export const OpenSource = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://api.github.com/users/eswar2001/repos')
            .then(response => {

                setData(response.data.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at)
                }));

            })
    }, [])
    var k = 0
    return (<section className='open-source'>
        <h2>Some of my open source work</h2>
        <div className='grid'>
            {data.map((i) => {
                k = k + 1
                return (<Project key={k + 1} data={i} />)
            })}
        </div>
    </section>)
}
