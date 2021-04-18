import {Link} from 'react-router-dom'
import kunai from '../images/kunai.png'
import useSound from 'use-sound'
import kunai_hover from '../sounds/kunai_hover.wav'
import {useContext} from 'react'
import {SettingsContext} from '../states/SettingsContext.js'

const Main = () => {
    const [getSettings] = useContext(SettingsContext)

    const [play, { stop }] = useSound(kunai_hover, (getSettings.sound) ? {volume: 0.1} : {volume: 0.0});

    return (
        <div className='flex-grow flex justify-center items-center'>
            <div className='links'>
            <div className='mb-3 text-center md:text-left'>
                <Link to='/start' className='link' onMouseEnter={play} onMouseLeave={stop}>
                    <img className='h-8 inline-block link-img' src={kunai} alt=''></img>
                    <div className='text-4xl sm:text-6xl' style={{display: 'inline-block'}}>Start Game</div>
                </Link>
            </div>
            <div className='mb-3 text-center md:text-left'>
                <Link to='/settings' className='link smaller' onMouseEnter={play} onMouseLeave={stop}>
                    <img className='h-8 inline-block link-img' src={kunai} alt=''></img>
                    <div className='text-2xl sm:text-4xl' style={{display: 'inline-block'}}>Settings</div>
                </Link>
            </div>
            <div className='mb-3 text-center md:text-left'>
                <Link to='/about' className='link smaller' onMouseEnter={play} onMouseLeave={stop}>
                    <img className='h-8 inline-block link-img' src={kunai} alt=''></img>
                    <div className='text-2xl sm:text-4xl' style={{display: 'inline-block'}}>About</div>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Main
