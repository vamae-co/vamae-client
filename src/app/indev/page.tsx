import './indev.css'
import Image from 'next/image'
import indev from './indev.png'

export default function InDevPage() {
  return (
    <nav> 
      <h1>Sorry, but this page is currently in development.</h1>
      <div className='image-indev'>
        <Image src={indev} width={700} height={600} alt="In development"/>
      </div>
    </nav>
  )
}