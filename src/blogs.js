import React from 'react';
import { blogsData } from './data';
export const Medium = () => {
    var k = 1;
    return (<section className='container mt-6'>
        <h2>Blogs</h2>
        {
            blogsData.map((i) => {
                return (<div className="post" key={k++}>
                    <div className="content">
                        <div className="preview">
                            <a href={i.link}>{i.title}</a>
                        </div>
                    </div>
                </div>
                );
            })
        }
    </section>
    );
}