import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Project } from './project'
import moment from 'moment'
export const OpenSource = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://api.github.com/users/eswar2001/repos')
            .then(response => { setData(response.data.sort((a, b) => (moment(a.created_at).fromNow(true) > moment(b.created_at).fromNow(true)) ? 1 : -1)) })
    }, [])
    console.log(data);
    return (<section className='open-source'>
        <h2>Some of my open source work</h2>
        <div className='grid'>
            {data.map((i) => {
                if (i.fork === false && i.name !== 'eswar2001')
                    return (<Project key={i.title} data={i} />)
                return ""
            })}
        </div>
    </section>)
}
