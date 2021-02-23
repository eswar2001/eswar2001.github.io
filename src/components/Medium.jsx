import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import parse from 'html-react-parser'
export const Medium = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eswar2001')
            .then(response => {
                setData(response.data.items)
            })
    }, [])
    console.log(data);
    return (<section className='container mt-6'>
        <h2>My thoughts</h2>
        {data.map((i) => {
            return <MediumPost key={i.title} data={i} />
        })}
    </section>
    )
}

export const MediumPost = (props) => {
    let item = props.data;
    return (
        <div className="post">
            <div className="content">
                <div className="preview">
                    <a href={item.link}>{item.title}</a>
                </div>
            </div>
        </div>
    )
}