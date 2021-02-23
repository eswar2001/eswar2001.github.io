import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import parse from 'html-react-parser'
export const Medium = () => {
    const [data, setData] = useState([])
    let outDatedData = [
        { link: 'https://eswar2001.medium.com/setting-up-codeblocks-for-programming-windows-edition-72149eb8c0c0?source=your_stories_page-------------------------------------', title: 'Setting Up CodeBlocks for Programming(Windows edition)' },
        { link: 'https://eswar2001.medium.com/boost-c-libraries-in-action-c5c73057ae35?source=your_stories_page-------------------------------------', title: 'Boost C++ Libraries in action' },
        { link: 'https://eswar2001.medium.com/setup-flutter-environment-bdffbf04f4c3?source=your_stories_page-------------------------------------', title: 'Setup Flutter Environment' },
        { link: 'https://eswar2001.medium.com/build-your-custom-kali-distro-e7d40fe68a39?source=your_stories_page-------------------------------------', title: 'Build your Custom Kali Distro' },
        { link: 'https://eswar2001.medium.com/open-source-intelligence-cc2e1de090f4?source=your_stories_page-------------------------------------', title: 'Open-source Intelligence' },
        { link: 'https://eswar2001.medium.com/blunder-htb-ab42f77fef46?source=your_stories_page-------------------------------------', title: 'Blunder HTB' },
        { link: 'https://eswar2001.medium.com/cross-site-scripting-xss-ef4b2eb92961?source=your_stories_page-------------------------------------', title: 'Cross-site scripting{XSS}' },
        { link: 'https://eswar2001.medium.com/editorial-for-codespec-contest-a9892f59b1fc?source=your_stories_page-------------------------------------', title: 'Editorial for cOdeSpeC Contest' },
        { link: 'https://eswar2001.medium.com/does-your-code-reveal-vulnerabilities-or-exploits-to-hackers-81279afda40?source=your_stories_page-------------------------------------', title: 'Does your code reveal vulnerabilities or exploits to hackers?' },
        { link: 'https://eswar2001.medium.com/hack-the-box-remote-c27278a60eca?source=your_stories_page-------------------------------------', title: 'Hack the Box: Remote' },
        { link: 'https://eswar2001.medium.com/htb-omni-b3633d999a13?source=your_stories_page-------------------------------------', title: 'Omni HTB' },
        { link: 'https://eswar2001.medium.com/android-firefox-users-at-risk-48807013510b?source=your_stories_page-------------------------------------', title: 'Firefox Bug' },
        { link: 'https://eswar2001.medium.com/tabby-htb-36b62a33c255?source=your_stories_page-------------------------------------', title: 'Tabby HTB' },
        { link: 'https://eswar2001.medium.com/hack-the-box-traverxec-ef2de7594240?source=your_stories_page-------------------------------------', title: 'Hack the Box: Traverxec' },
        { link: 'https://eswar2001.medium.com/unix-crash-course-767b7d8a9b83?source=your_stories_page-------------------------------------', title: 'UNIX crash course' }
    ]
    useEffect(() => {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eswar2001')
            .then(response => {
                setData(response.data.items)
            })
    }, [])
    console.log(data);
    return (<section className='container mt-6'>
        <h2>Blogs</h2>
        {data.map((i) => {
            return <MediumPost key={i.title} data={i} />
        })}
        {outDatedData.map((i) => {
            return <MediumPost key={i} data={i} />
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