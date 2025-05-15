import { Article } from '../../components'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import Motion from '../../components/motion/Motion'

const Blog = () => {
  return (
    <Motion direction="right" delay={0.2}>
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Discover What’s New in the World of AI</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date='September 10, 2022' title='The Rise of AI Assistants: What You Should Know'/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date='September 10, 2022' title='Is GPT-3 and OpenAI the Future? Let’s Explore How!'/>
          <Article imgUrl={blog03} date='September 10, 2022' title='How AI Tools Are Changing the Creative Industry'/>
          <Article imgUrl={blog04} date='September 10, 2022' title='5 Ways to Use GPT-3 in Your Daily Workflow'/>
          <Article imgUrl={blog05} date='September 10, 2022' title='Understanding the Power of Large Language Models'/>
        </div>
      </div>
    </div>
    </Motion>
  )
}

export default Blog