import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import Motion from '../../components/motion/Motion'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <Motion direction="left" delay={0.2}>
          <h1 className='gradient__text'>Explore the Future with Top AI Tools</h1>
          <p>Discover the best AI tools for creativity, productivity, and innovation — from text generation to image and video creation. Stay ahead in the AI era with our curated collection of powerful technologies.</p>
        </Motion>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Enter your email' />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600+ users joined our AI newsletter this week</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <Motion direction="right" delay={0.2}>
            <img src={ai} alt="ai" />
          </Motion>
      </div>
    </div>
  )
}

export default Header