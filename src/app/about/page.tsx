import './about.css'
import Image from 'next/image'
import vamae from './vamae.svg'

export default function AboutUsPage() { 
    return (
        <div className="about-us-wrapper">
            <div className='about-us-content'>
                <div className='about-us-logo'>
                    <Image src={vamae} width={500} height={700} alt={"logo"}/>
                </div>
                <div className='about-us-main'>
                <h1>About VAMAE</h1>
                    <p>Our dream is to create a convenient and beautiful service for playing<br></br> your favorite board games with friends.</p>
                    <div className='team'>
                        <p>We are a young independent team of developers from Kyiv (and Bila Tserkva)<br></br>Our team:</p>
                        <p>Vladyslav Yemelianov (Team Lead)<br></br>
                        <a href='https://www.linkedin.com/in/vladyslav-yemelianov-b92986250/' target="_blank">LinkedIn</a><br></br>
                        <a href='https://github.com/v1adem' target="_blank">Github</a></p>
                        <p>Andriy Makarov (FullStack)<br></br>
                        <a href='https://github.com/makandrii' target="_blank">Github</a></p>
                        <p>Mykhail Varych (FullStack)<br></br>
                        <a href='https://github.com/MihaVar' target="_blank">Github</a></p>
                        <p>Andriy Dykalo (FullStack)<br></br>
                        <a href='https://github.com/harpestes' target="_blank">Github</a></p>
                    </div>
                </div>
                <div className='desc'>
                    <div className='desc-box'>
                        <p>This website is our joint PET-project, in which we all work as professional developers. Project consists of two parts:</p>
                        <p>1. Back-end - Java-21 Spring 3 <a href='https://github.com/vamae-co/vamae' target='_blank'>https://github.com/vamae-co/vamae</a></p>
                        <p>2. Front-end - NEXT.js <a href='https://github.com/vamae-co/vamae-client' target='_blank'>https://github.com/vamae-co/vamae-client</a></p>
                        <p>You can watch how we grow with the development of this project, and you can join us by simply becoming a user of our site</p>
                    </div>
                    <h1>Development in development</h1>
                </div>
            </div>
        </div>
    )
}