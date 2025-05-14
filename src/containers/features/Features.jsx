import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'AI-Powered Content Creation',
    text: 'Generate high-quality content instantly with tools like ChatGPT and Jasper. From blog posts to marketing copy, AI makes content creation faster and easier.'
  },
  {
    title: 'Creative Image & Video Generation',
    text: 'Create stunning images and videos with AI tools like Midjourney and D-ID. Unlock your creativity by turning text prompts into visual masterpieces.'
  },
  {
    title: 'Boost Your Productivity with AI',
    text: 'Enhance your workflow with AI assistants like Notion AI and Copy.ai. Organize tasks, write emails, and more, all with the help of AI.'
  },
  {
    title: 'AI for Business & Marketing',
    text: 'Leverage AI for smarter business decisions, customer service automation, and personalized marketing strategies. Tools like Synthesia offer unique ways to connect with customers.'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          Unlock the Power of AI Tools and Transform Your Work
        </h1>
        <p>Unlock the Power of AI Tools and Transform Your Work</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => {
          return (
            <Feature key={item.title + index} title={item.title} text={item.text} />
          )
        })}
      </div>
    </div>
  )
}

export default Features