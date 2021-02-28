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
    var m = 99999;
    if (props.data.homepage)
        return (<div className='project' key={m++}>
            <p style={{ fontWeight: 'bold' }} className="mt-1 ml-2"><a rel="noreferrer" href={props.data.homepage} title={props.data.name}>{props.data.name}</a></p>
            <p className="mt-1 ml-2">
                {props.data.description}<br />
                <strong>Languages Used:</strong> {list.map((j) => {
                    return (<span> {j} </span>)
                })}<br />
                <strong>Created at: </strong>{moment(props.data.created_at).format('LL')}<br />
                <strong>Last Pushed: </strong>{moment(props.data.pushed_at).format('LL')}
            </p>
            <a rel="noreferrer" href={props.data.html_url}
                title={props.data.name} className='ico-visit ml-5 mb-1' target='_blank' >Gtihub</a>
            <a rel="noreferrer" href={props.data.homepage}
                title={props.data.name} className='ico-visit ml-5 mb-1' target='_blank' >Visit</a>
        </div>)
    else {
        return (<div className='project' key={m++}>
            <p style={{ fontWeight: 'bold' }} className="mt-1 ml-2"><a rel="noreferrer" href={props.data.homepage} title={props.data.name}>{props.data.name}</a></p>
            <p className="mt-1 ml-2">{props.data.description}<br />
                <strong> Languages Used:</strong> {list.map((j) => {
                    return (<span> {j} </span>)
                })}<br />
                <strong>Created at: </strong>{moment(props.data.created_at).format('LL')}<br />
                <strong>Last Pushed: </strong>{moment(props.data.pushed_at).format('LL')}</p>
            <a rel="noreferrer" href={props.data.html_url}
                title={props.data.name} className='ico-visit ml-5 mb-1' target='_blank' >Gtihub</a>
        </div>)
    }
}