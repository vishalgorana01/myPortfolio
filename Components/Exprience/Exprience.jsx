import React from 'react'
import './Exprience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Exprience() {
  return (
    <section id='exprience'>
      <h5>What skills I have</h5>
      <h2>My Exprience</h2>

      <div className='container exprience_container'>
        <div className="exprience_frontend">
          <h2>Frontend Development</h2>
          <div className="exprience_content">
            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Exprienced</small>
              </div>
            </article>
            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Exprienced</small>
              </div>
            </article>
            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Exprienced</small>
              </div>
            </article>
            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Exprienced</small>
              </div>
            </article>
            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>SASS</h4>
                <small className='text-light'>Exprienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="exprience_backend">
          <h2>Backend Development</h2>
          <div className="exprience_content">
            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>Node js</h4>
                <small className='text-light'>Exprienced</small>
              </div>
            </article>
            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>MongoDb</h4>
                <small className='text-light'>Exprienced</small>
              </div>
            </article>
            {/* <article className="exprience_details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Exprienced</small>
            </article>
            <article className="exprience_details">
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
              <small className='text-light'>Exprienced</small>
            </article>
            <article className="exprience_details">
              <BsPatchCheckFill />
              <h4>SASS</h4>
              <small className='text-light'>Exprienced</small>
            </article> */}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Exprience