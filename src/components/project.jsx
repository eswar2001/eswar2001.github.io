import React, { useState, useEffect } from 'react';
import moment from 'moment'
import axios from "axios";
export const Project = (props) => {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get(props.__.languages_url)
            .then(response => {
                console.log(response);
                setList(Object.keys(response.data))
            })
    })
    var m = 99999;
    if (props.__.homepage)
        return (<div className='project' key={m++}>
            <p style={{ fontWeight: 'bold' }} className="mt-1 ml-2"><a rel="noreferrer" href={props.__.homepage} title={props.__.name}>{props.__.name}</a></p>
            <p className="mt-1 ml-2">
                {props.__.description}<br />
                <strong>Languages Used:</strong> {list.map((j) => {
                    return (<span> {j} </span>)
                })}<br />
                <strong>Created at: </strong>{moment(props.__.created_at).format('LL')}<br />
                <strong>Last Pushed: </strong>{moment(props.__.pushed_at).format('LL')}
            </p>
            <a rel="noreferrer" href={props.__.html_url}
                title={props.__.name} className='ico-visit ml-5 mb-1' target='_blank' >Gtihub</a>
            <a rel="noreferrer" href={props.__.homepage}
                title={props.__.name} className='ico-visit ml-5 mb-1' target='_blank' >Visit</a>
        </div>)
    else {
        return (<div className='project' key={m++}>
            <p style={{ fontWeight: 'bold' }} className="mt-1 ml-2"><a rel="noreferrer" href={props.__.html_url} title={props.__.name}>{props.__.name}</a></p>
            <p className="mt-1 ml-2">{props.__.description}<br />
                <strong> Languages Used:</strong> {list.map((j) => {
                    return (<span> {j} </span>)
                })}<br />
                <strong>Created at: </strong>{moment(props.__.created_at).format('LL')}<br />
                <strong>Last Pushed: </strong>{moment(props.__.pushed_at).format('LL')}</p>
            <a rel="noreferrer" href={props.__.html_url}
                title={props.__.name} className='ico-visit ml-5 mb-1' target='_blank' >Gtihub</a>
        </div>)
    }
}