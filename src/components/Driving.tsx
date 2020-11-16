import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStoreActions } from '../store';
import { motion } from 'framer-motion';

import { Element, animateScroll as scroll, scroller } from 'react-scroll';

const InsurancePolicy = () => {
  const history = useHistory();
  const [activeArea, setActiveArea] = useState('');
  // const setProgress = useStoreActions((actions) => actions.setProgress);

  return (
    <motion.section transition={{ duration: 0.3, ease: 'easeInOut' }} animate={{ x: [-100, 0], opacity: [0, 1] }} className='main-content-wrapper container'>
      <Element name='driving-wrapper'>
        <div className='licence-area-content'>
          <Element name='license-plate-input'>
            <div className='reg-search'>
              <h3>What is your car’s licence plate?</h3>
              <div className='reg-input-wrapper'>
                <input type='search' placeholder='UR REG' />
                <span
                  onClick={() => {
                    scroller.scrollTo('purchase-year', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 });
                    setActiveArea(activeArea + ' purchase-year');
                  }}>
                  <svg version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 56.966 56.966' enableBackground='new 0 0 56.966 56.966' xmlSpace='preserve'>
                    <path
                      d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                  s-17-7.626-17-17S14.61,6,23.984,6z'
                    />
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </span>
              </div>
            </div>
          </Element>

          <Element name='purchase-year'>
            <div className='comon-list-card purchase-year'>
              <h3 className='card-title'>What year did you purchase the car?</h3>
              <ul className='card-list'>
                {['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', 'Before 2010'].map((year) => (
                  <li>{year}</li>
                ))}
              </ul>
            </div>
          </Element>

          <Element name='purchase-month' className='comon-list-card purchase-month'>
            <h3 className='card-title'>In which month did you purchase it?</h3>
            <ul className='card-list'>
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
                <li>{month}</li>
              ))}
            </ul>
            <a href=''>I don’t remember</a>
          </Element>

          <Element name='have-ukLicense' className='comon-list-card others-car'>
            <h3 className='card-title'>Do you now have a full UK licence?</h3>
            <ul className='card-list'>
              <li>Yes</li>
              <li>No</li>
            </ul>
          </Element>

          <Element name='car-used-for-work' className='comon-list-card purchase-month'>
            <h3 className='card-title'>Will this car be used for work?</h3>
            <ul className='card-full-list'>
              <li>
                <div className='card-full-list-box'>
                  <a href=''>Nope</a>
                </div>
              </li>
              <li>
                <div className='card-full-list-box'>
                  <a href=''>I drive to and from work (commute)</a>
                </div>
              </li>
              <li>
                <div className='card-full-list-box'>
                  <a href=''>Yes, I drive between work locations and occasionally to clients</a>
                </div>
                <p>Covers occasionally travelling to different sites. Does not cover working as a travelling service/sales person. Covers main driver and spouse (if added to policy).</p>
              </li>
              <li>
                <div className='card-full-list-box'>
                  <a href=''>Yes, the car will be used frequently to drive to multiple locations/clients</a>
                </div>
                <p>Includes frequently travelling to clients’ locations & storing work related items in the car.</p>
              </li>
            </ul>
          </Element>

          <div className='comon-list-card  estimate-area'>
            <h3 className='card-title'>In which month did you purchase it?</h3>
            <div className='miles-box-card'>
              <h3>up to</h3>
              <div className='miles-mitter-wrapper'>
                <button className='miles-btn'>-</button>
                <div className='mile-count'>
                  <h4>0</h4>
                </div>
                <button className='miles-btn'>+</button>
              </div>
              <h6>miles a year</h6>
              <h4>That's roughly</h4>
              <div className='monthly-mile-unit'>
                <div className='mile-week comon-unit'>
                  <h4>0</h4>
                  <p>miles a week</p>
                </div>
                <div className='mile-day comon-unit'>
                  <h4>0</h4>
                  <p>miles a day</p>
                </div>
              </div>
              <button className='paste-btn'>i'm happy with this</button>
            </div>
          </div>
          <div className='comon-list-card  select-box-area'>
            <div className='select-box-area-wrap border-className'>
              <h3 className='card-title'>How many years No Claims Discount do you have?</h3>
              <div className='card-heading'>
                <div className='card-tooltip tooltip-left'>
                  <span>
                    <svg width='15' height='15' viewBox='0 0 32 32' fill='none'>
                      <path
                        fill='#000000'
                        d='M17.3 19.4c.16-1.313 1.164-2.202 2.156-2.932C20.962 15.36 22 13.935 22 11.996 22 8.802 19 7 16.08 7 12.92 7 10 8.996 10 12.373c0 .388.034.775.091 1.152l3.628.296a4.273 4.273 0 01-.092-.855c0-1.426.924-2.59 2.419-2.59 1.106 0 2.144.57 2.144 1.803 0 2.6-4.403 3.17-4.403 6.524 0 .229.023.468.046.696H17.3zm-3.89 4.186c0-1.244 1.016-2.27 2.236-2.27a2.28 2.28 0 012.293 2.27c0 1.243-1.015 2.258-2.293 2.258-1.22 0-2.235-1.015-2.235-2.258z'></path>
                    </svg>
                  </span>
                  <div className='tooltip-content'>
                    <p>No Claims Discount is the official documented years you’ve been driving with insurance without making a claim.</p>
                  </div>
                </div>
                <h3 className='card-title'>WHAT IS NO CLAIMS DISCOUNT?</h3>
              </div>
              <div className='select-box-wrapper'>
                <div className='single-select-box-wrap'>
                  <svg width='100%' height='100%' viewBox='0 0 32 32' fill='none'>
                    <path d='M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z' fill='#F0F0F0'></path>
                    <path
                      d='M6.48 8.694a11.956 11.956 0 00-2.067 4.176h6.243L6.481 8.694zM27.587 12.87a11.957 11.957 0 00-2.068-4.176l-4.175 4.175h6.243zM4.413 19.13a11.958 11.958 0 002.068 4.176l4.175-4.175H4.413zM23.306 6.48a11.956 11.956 0 00-4.176-2.067v6.243l4.176-4.175zM8.694 25.52a11.958 11.958 0 004.176 2.067v-6.243l-4.176 4.175zM12.87 4.413a11.958 11.958 0 00-4.176 2.068l4.175 4.175V4.413zM19.13 27.587a11.958 11.958 0 004.176-2.068l-4.175-4.175v6.242zM21.344 19.13l4.175 4.176a11.957 11.957 0 002.068-4.175h-6.243z'
                      fill='#0052B4'></path>
                    <path
                      d='M27.898 14.435H17.565V4.102a12.121 12.121 0 00-3.13 0v10.333H4.102a12.121 12.121 0 000 3.13h10.333v10.333a12.12 12.12 0 003.13 0V17.565h10.333a12.12 12.12 0 000-3.13z'
                      fill='#D80027'></path>
                    <path
                      d='M19.13 19.13l5.355 5.355c.247-.246.482-.503.706-.77l-4.585-4.584H19.13zM12.87 19.13l-5.355 5.355c.246.247.503.482.77.706l4.585-4.585V19.13zM12.87 12.87L7.514 7.514a12.03 12.03 0 00-.706.77l4.585 4.585h1.476zM19.13 12.87l5.355-5.355a12.023 12.023 0 00-.77-.706l-4.584 4.585v1.476z'
                      fill='#D80027'></path>
                  </svg>
                  <div className='single-select-box'>
                    <label htmlFor='cars'>UK NO CLAIMS DISCOUNT</label>
                    <select name='cars'>
                      <option value='Select years'>Select years</option>
                      <option value='2020'>2020</option>
                      <option value='2019'>2019</option>
                      <option value='2018'>2018</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='select-box-wrapper mt-30'>
                <div className='single-select-box-wrap'>
                  <svg width='100%' height='100%' viewBox='0 0 32 32' fill='none'>
                    <g clip-path='url(#clip0)'>
                      <path d='M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z' fill='#BEE6FA'></path>
                      <path
                        d='M18 23.07c0-.669.334-1.293.891-1.664l1.219-.812c.556-.371.89-.996.89-1.664V18a2 2 0 00-2-2h-3a2 2 0 01-2-2v-1a2 2 0 012-2c.613 0 1.173.346 1.447.895l.211.422A1.236 1.236 0 0020 11.764V4.698A11.941 11.941 0 0016 4C10.056 4 5.134 8.327 4.18 14H10a2 2 0 012 2v11.302c1.253.444 2.595.698 4 .698.683 0 1.348-.07 2-.18v-4.75z'
                        fill='#8CBE3C'></path>
                    </g>
                    <defs>
                      <clipPath id='clip0'>
                        <path fill='#fff' transform='translate(4 4)' d='M0 0h24v24H0z'></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className='single-select-box'>
                    <label htmlFor='cars'>INTERNATIONAL NO CLAIMS DISCOUNT</label>
                    <select name='cars'>
                      <option value='Select years'>Select years</option>
                      <option value='2020'>2020</option>
                      <option value='2019'>2019</option>
                      <option value='2018'>2018</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <button className='paste-btn d-center mb-30 py-40'>Continue</button>
          </div>
          <div className='comon-list-card policy'>
            <h3 className='card-title'>Have you, or any other driver on the policy, made any claims in the last 5 years?</h3>
            <ul className='card-list'>
              <li>Yes</li>
              <li>No</li>
            </ul>
            <div className='status-card'>
              <div className='status-card-img'>
                <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' fill='none' viewBox='0 0 32 32'>
                  <path fill='none' d='M0 0h32v32H0z'></path>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M25 4H7C5.346 4 4 5.346 4 7v13c0 1.654 1.346 3 3 3h4.52l3.699 4.625a1 1 0 0 0 1.562 0L20.48 23H25c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3zm-10 6a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4zm0 6.99a1 1 0 1 1 2 0c0 .552-.447 1.005-1 1.005-.553 0-1-.443-1-.995v-.01zM25 21c.552 0 1-.449 1-1V7c0-.551-.448-1-1-1H7c-.552 0-1 .449-1 1v13c0 .551.448 1 1 1h5a1 1 0 0 1 .781.375L16 25.399l3.219-4.024A1 1 0 0 1 20 21h5z'
                    fill='#D82C2C'></path>
                </svg>
              </div>
              <div className='status-card-content'>
                <p>
                  We need to know about all your <span>motor-related incidents, claims or losses</span> from the <span>past 5 years.</span> This includes <span>fault</span> and non-fault claims,
                  already settled or still outstanding. Omitting to declare a claim might result in a <span>price increase</span> or even <span>cancellation of your policy.</span>
                </p>
              </div>
            </div>
          </div>
          <div className='comon-list-card conviction'>
            <h3 className='card-title'>Have you, or any other driver on the policy, had any motoring conviction, fixed penalty notices or criminal convictions in the last 5 years?</h3>
            <ul className='card-list'>
              <li>Yes</li>
              <li>No</li>
            </ul>
            <div className='status-card'>
              <div className='status-card-img'>
                <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' fill='none' viewBox='0 0 32 32'>
                  <path fill='none' d='M0 0h32v32H0z'></path>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M25 4H7C5.346 4 4 5.346 4 7v13c0 1.654 1.346 3 3 3h4.52l3.699 4.625a1 1 0 0 0 1.562 0L20.48 23H25c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3zm-10 6a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4zm0 6.99a1 1 0 1 1 2 0c0 .552-.447 1.005-1 1.005-.553 0-1-.443-1-.995v-.01zM25 21c.552 0 1-.449 1-1V7c0-.551-.448-1-1-1H7c-.552 0-1 .449-1 1v13c0 .551.448 1 1 1h5a1 1 0 0 1 .781.375L16 25.399l3.219-4.024A1 1 0 0 1 20 21h5z'
                    fill='#D82C2C'></path>
                </svg>
              </div>
              <div className='status-card-content'>
                <p>
                  If you don’t tell us about any <span>motoring</span> or <span>non-motoring</span> convictions, it will result in a cancellation which will affect your future insurance purchases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </motion.section>
  );
};

export default InsurancePolicy;
