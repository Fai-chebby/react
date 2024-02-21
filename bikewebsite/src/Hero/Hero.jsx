import './Hero.css'
import arrow_btn from '../Assets/arrow_btn.png'
import pause_icon from '../Assets/pause_icon.png'
import play_icon from '../Assets/play_icon.png'
const Hero=()=>{
    return(
        <div className='hero'>
            <div className='hero-text'>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
<div className='hero-explore'>
    <p>Explore the features</p>
    <img src={arrow_btn } alt={}/>

</div>
       <div className='hero-dot-play'>
           <ul className='hero-dots'>
               <li className='hero-dot'></li>
           </ul>
       </div>

        </div>

    )
}
export default Hero