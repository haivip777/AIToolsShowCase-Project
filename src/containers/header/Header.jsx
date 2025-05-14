import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>Explore the Future with Top AI Tools</h1>
        <p>Discover the best AI tools for creativity, productivity, and innovation — from text generation to image and video creation. Stay ahead in the AI era with our curated collection of powerful technologies.</p>
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
          <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header