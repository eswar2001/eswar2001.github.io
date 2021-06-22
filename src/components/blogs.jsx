import React from 'react';
import { blogsData } from '../data/data';
export const Medium = () => {
    var k = 1;
    return (
        <section className='container mt-6'>
            <h2>Blogs</h2>
            <ol>
                {
                    blogsData.map((i) => {
                        return (<li className="post" key={k++}>
                            <div className="content">
                                <div className="preview">
                                    <a href={i.link}>{i.title}</a>
                                </div>
                            </div>
                        </li>
                        );
                    })
                }
            </ol>
        </section>
    );
}