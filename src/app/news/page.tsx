'use client'

import "./news.css"
import React from 'react';
import Image from 'next/image'
import { Clock } from '@/app/hooks/clock'

export default function NewsPage() {
  const now = new Date();
  return (
    <nav>
        <div className="top">
          <h1>Welcome!</h1>
          <div className="clock">
            <p>Local time:</p>
            <Clock time={now.getTime()} />
          </div>
        </div>
        <div className="news">
          <a href="/indev"><h1>NewsName1</h1></a>
          <div className="news-main">
          <div className="image">
          <a href="/indev"><Image src={'/blank.jpg'} width={120} height={120} alt="Blank image"></Image></a>
          </div>
          <div className="desc"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue mauris, egestas nec sollicitudin quis, tempor et nisi. Nulla tincidunt vulputate neque et mattis. Praesent blandit euismod convallis. Aenean eu interdum nisi, ac molestie diam. Cras convallis elementum velit eget molestie. In et ipsum erat. Cras consectetur tortor nec massa blandit eleifend. Pellentesque velit sapien, egestas ut aliquam at, gravida sit amet augue. Curabitur pretium tortor sit amet velit tincidunt ultricies. Nam posuere nisl vitae massa aliquet, eu imperdiet leo dignissim. Cras interdum libero nec nulla ornare tempor. Vestibulum sed leo maximus, suscipit sapien nec, pellentesque ex. Maecenas posuere consequat placerat. </span></div>
          </div>
        </div>
        <div className="news">
          <a href="/indev"><h1>NewsName2</h1></a>
          <div className="news-main">
          <div className="image">
          <a href="/indev"><Image src={'/blank.jpg'} width={120} height={120} alt="Blank image"></Image></a>
          </div>
          <div className="desc"><span>Phasellus et posuere augue. Nam sem ante, dignissim eget nisi at, ornare auctor ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt felis iaculis sem fringilla gravida. Praesent venenatis efficitur turpis eget posuere. Vestibulum id urna placerat, sodales metus ac, congue sem. Ut blandit aliquam purus nec pulvinar. Aliquam ex lorem, porttitor quis sagittis maximus, sagittis a turpis. Suspendisse eu leo nec dui egestas posuere. Pellentesque tempus aliquet dignissim. </span></div>
          </div>
        </div> 
        <div className="news">
          <a href="/indev"><h1>NewsName3</h1></a>
          <div className="news-main">
          <div className="image">
          <a href="/indev"><Image src={'/blank.jpg'} width={120} height={120} alt="Blank image"></Image></a>
          </div>
          <div className="desc"><span>Fusce fringilla nulla vitae egestas porttitor. Donec vulputate sodales est id porta. Maecenas egestas nisl ut eros tincidunt tincidunt. Nam ullamcorper, nisi eu ultrices hendrerit, nulla arcu venenatis ex, vel mattis lacus nunc at nunc. Maecenas pharetra finibus velit vitae ornare. Fusce ut elementum lectus. Nam mollis tincidunt elit, eget laoreet risus aliquam pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In aliquam enim quis dapibus egestas. Nam quis congue augue. Aliquam porttitor sem id justo ultricies tempus. Ut egestas libero nec magna sollicitudin malesuada. Fusce in eleifend lorem, id condimentum leo. </span></div>
          </div> 
        </div>    
    </nav>
  )
}


