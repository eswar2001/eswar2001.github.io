import React from 'react';
export const Projects = () => {
    return (<section className='projects'>
        <h2>I'm currently working on</h2>
        <div className='project'>
            <div className='details'>
                <h3><a href='https://indiemaker.co' title='IndieMaker'>IndieMaker</a></h3>
                <p className='mono'>IndieMaker is the largest maker-orientated marketplace to buy and sell
                    side-projects, micro-saas, domains and more.</p>
                <p>I&rsquo;ve been responsible for all the planning, design, infrastructure and software
                development behind the IndieMaker platform. Initially, we had a simple Laravel PHP
                application that I eventually rebuilt in Ruby on Rails. Our next release is around the
                corner, and it will take the platform into the next level. We&rsquo;re currently growing
                    with around 1000 new makers a month.</p><a href='https://indiemaker.co'
                    title="Visit IndieMaker" className='ico-visit' target='_blank' rel='noopener'>Visit IndieMaker</a>
            </div><img src='/img/indiemaker.webp' alt='IndieMaker' />
        </div>
        <div className='project'>
            <div className='details'>
                <h3><a href='https://myperks.co.za' title='MyPerks'>MyPerks</a></h3>
                <p className='mono'>Everyday Perks that save you money and provide the best discounts from your
                    favourite brands.</p>
                <p>MyPerks started out providing specially negotiated discounts to organisations to offer to
                their employees as an extended benefit. We&rsquo;ve recently opened to the public, and the
                app can be downloaded and used if you are in a supported region. We aggressively work to
                    bring users the best in className Perks in the form of discounts and deals.</p><a
                    href='https://myperks.co.za' title="Visit MyPerks" className='ico-visit' target='_blank'
                    rel='noopener'>Visit MyPerks</a>
            </div><img src='/img/myperks.webp' alt='MyPerks' />
        </div>
    </section>)
}
