import React from 'react'
import './Portfolio.css'
import img1 from '../../Assets/Images/drop-image-here-data-digital-devices-internet-concept.jpg'
import img2 from '../../Assets/Images/finance-economics-work-male-discussion-laptop.jpg'

const portfolioArray = [
  {
    id: 1,
    image: img1,
    title: 'Project1',
    repoLink: '1',
    projectLink: '1'
  },
  {
    id: 2,
    image: img1,
    title: 'Project2',
    repoLink: '2',
    projectLink: '2'
  },
  {
    id: 3,
    image: img1,
    title: 'Project3',
    repoLink: '3',
    projectLink: '3'
  },
  {
    id: 4,
    image: img1,
    title: 'Project4',
    repoLink: '4',
    projectLink: '4'
  },
  {
    id: 5,
    image: img1,
    title: 'Project5',
    repoLink: '5',
    projectLink: '5'
  },
  {
    id: 6,
    image: img1,
    title: 'Project6',
    repoLink: '6',
    projectLink: '6'
  },
];

const portfolio = portfolioArray.map((ele, index)=>{
  return (
    <article key={ele.id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ele.image} alt="error loading" />
          </div>
          <h3>{ele.title}</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
    </article>
  )
})


function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {portfolio}
      </div>
    </section>
  )
}

export default Portfolio