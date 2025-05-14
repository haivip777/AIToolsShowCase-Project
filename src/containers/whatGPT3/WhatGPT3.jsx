import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is AI Tools Showcase?' text='AI Tools Showcase is a curated platform highlighting powerful, easy-to-use AI tools for creators, professionals, and developers. Discover what’s possible with the latest innovations in artificial intelligence.' />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>Discover AI That Transforms The Way You Work</h1>
        <p>Explore the Collection</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Content Generation' text='Tools like ChatGPT and Jasper help you generate blog posts, ads, emails, and more with just a few prompts.'/>
        <Feature title='Image & Video Creation' text='Use tools like Midjourney, Runway, or D-ID to create stunning visuals and AI-generated videos in minutes.'/>
        <Feature title='Productivity Boosters' text='AI assistants like Notion AI or Copy.ai help streamline your daily work and enhance creativity and efficiency.'/>
      </div>
    </div>
  )
}

export default WhatGPT3