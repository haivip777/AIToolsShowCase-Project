import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Unlock Limitless Potential with AI</h4>
        <h1 className='gradient__text'>Discover What's Possible with the Right AI Tools</h1>
        <p>From generating content and designing visuals to creating videos and enhancing productivity, AI tools can transform the way you work and create. The only limit is your imagination.</p>
        <h4>Start Exploring the Future Today</h4>
      </div>
    </div>
  )
}

export default Possibility