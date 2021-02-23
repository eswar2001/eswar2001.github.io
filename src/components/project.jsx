import React, { useState, useEffect } from 'react';
import moment from 'moment'
import axios from "axios";
export const Project = (props) => {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get(props.data.languages_url)
            .then(response => {
                setList(Object.keys(response.data))
            })
    })
    if (props.data.homepage)
        return (<div className='project'>
            <h3><a rel="noreferrer" href={props.data.homepage} title={props.data.name}>{props.data.name}</a></h3>
            <p>{props.data.description}</p>
            <p>Languages Used: {list.map((j) => {
                return (<span> {j} </span>)
            })}</p>
            <p><strong>Created at: </strong>{moment(props.data.created_at).format('LL')}</p>
            <p><strong>Last Pushed: </strong>{moment(props.data.pushed_at).format('LL')}</p>
            <a rel="noreferrer" href={props.data.html_url}
                title={props.data.name} className='ico-visit' target='_blank' >Gtihub</a>
            <a rel="noreferrer" href={props.data.homepage}
                title={props.data.name} className='ico-visit' target='_blank' >Visit</a>
        </div>)
    else {
        return (<div className='project'>
            <h3><a rel="noreferrer" href={props.data.homepage} title={props.data.name}>{props.data.name}</a></h3>
            <p>{props.data.description}</p>
            <p>Languages Used: {list.map((j) => {
                return (<span> {j} </span>)
            })}</p>
            <p><strong>Created at: </strong>{moment(props.data.created_at).format('LL')}</p>
            <p><strong>Last Pushed: </strong>{moment(props.data.pushed_at).format('LL')}</p>
            <a rel="noreferrer" href={props.data.html_url}
                title={props.data.name} className='ico-visit' target='_blank' >Gtihub</a>
        </div>)
    }
}