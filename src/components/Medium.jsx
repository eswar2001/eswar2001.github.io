import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { outDatedData } from '../medium.js'
// import parse from 'html-react-parser'
export const Medium = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eswar2001')
            .then(response => {
                setData(response.data.items)
            })
    }, [])
    var k = 1000
    return (<section className='container mt-6'>
        <h2>Blogs</h2>
        {data.map((i) => {
            return <MediumPost key={k = k + 1} data={i} />
        })}
        {outDatedData.map((i) => {
            return <MediumPost key={k = k + 1} data={i} />
        })}
    </section>
    )
}

export const MediumPost = (props) => {
    var k = 9999999
    let item = props.data;
    return (
        <div className="post" key={k}>
            <div className="content">
                <div className="preview">
                    <a href={item.link}>{item.title}</a>
                </div>
            </div>
        </div>
    )
}