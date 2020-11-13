import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useStoreActions } from 'easy-peasy';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, Element, animateScroll as scroll, scroller } from 'react-scroll';

const License = () => {
  const history = useHistory();
  return (
    <Element name='license-area' className='main-content-wrapper container'>
      <Element name='country-search'>
        <div className='licence-area-content'>
          <div className='country-search'>
            <h3>In which country did you first pass your driving test?</h3>
            <div className='country-input-wrapper'>
              <span>
                <svg version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 512 512' enableBackground='new 0 0 512 512'>
                  <g>
                    <g>
                      <path
                        d='M508.875,493.792L353.089,338.005c32.358-35.927,52.245-83.296,52.245-135.339C405.333,90.917,314.417,0,202.667,0
                                        S0,90.917,0,202.667s90.917,202.667,202.667,202.667c52.043,0,99.411-19.887,135.339-52.245l155.786,155.786
                                        c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125C513.042,504.708,513.042,497.958,508.875,493.792z
                                        M202.667,384c-99.979,0-181.333-81.344-181.333-181.333S102.688,21.333,202.667,21.333S384,102.677,384,202.667
                                        S302.646,384,202.667,384z'
                      />
                    </g>
                  </g>
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
              <input
                type='search'
                placeholder='Search and select your country'
                onKeyPress={(e) => {
                  if (e.key == 'Enter') scroller.scrollTo('years-test-passed', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 });
                }}
              />
            </div>
          </div>
        </div>
      </Element>
      <Element name='years-test-passed' className='comon-list-card test-card'>
        <h3 className='card-title'>How many years ago did you pass that test?</h3>
        <ul className='card-list'>
          <li onClick={() => scroller.scrollTo('UK-license', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 })}>
            0<span>-</span>1
          </li>
          <li onClick={() => scroller.scrollTo('UK-license', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 })}>
            1<span>-</span>2
          </li>
          <li onClick={() => scroller.scrollTo('UK-license', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 })}>
            2<span>-</span>3
          </li>
          <li onClick={() => scroller.scrollTo('UK-license', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 })}>
            3<span>-</span>4
          </li>
          <li onClick={() => scroller.scrollTo('UK-license', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 })}>
            4<span>-</span>5
          </li>
          <li onClick={() => scroller.scrollTo('UK-license', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 })}>
            5<span>-</span>6
          </li>
          <li onClick={() => scroller.scrollTo('UK-license', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 })}>
            6<span>-</span>7
          </li>
          <li onClick={() => scroller.scrollTo('UK-license', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 })}>
            7<span>-</span>8
          </li>
          <li onClick={() => scroller.scrollTo('UK-license', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 })}>
            8<span>-</span>9
          </li>
          <li onClick={() => scroller.scrollTo('UK-license', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 })}>
            9<span>-</span>10
          </li>
          <li onClick={() => scroller.scrollTo('UK-license', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 })}>10+</li>
        </ul>
      </Element>
      <Element name='UK-license'>
        <div className='comon-list-card licence'>
          <h3 className='card-title'>Do you now have a full UK licence?</h3>
          <ul className='card-list'>
            <li onClick={() => scroller.scrollTo('uk-license-longer', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 })}>Yes</li>
            <li onClick={() => scroller.scrollTo('uk-license-longer', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 })}>No</li>
          </ul>
        </div>
      </Element>
      <Element name='uk-license-longer'>
        <div className='comon-list-card licence-time'>
          <div className='card-heading'>
            <h3 className='card-title'>How long have you had a full UK licence?</h3>
            <div className='card-tooltip'>
              <span>
                <svg width='15' height='15' viewBox='0 0 32 32' fill='none'>
                  <path
                    fill='#000000'
                    d='M17.3 19.4c.16-1.313 1.164-2.202 2.156-2.932C20.962 15.36 22 13.935 22 11.996 22 8.802 19 7 16.08 7 12.92 7 10 8.996 10 12.373c0 .388.034.775.091 1.152l3.628.296a4.273 4.273 0 01-.092-.855c0-1.426.924-2.59 2.419-2.59 1.106 0 2.144.57 2.144 1.803 0 2.6-4.403 3.17-4.403 6.524 0 .229.023.468.046.696H17.3zm-3.89 4.186c0-1.244 1.016-2.27 2.236-2.27a2.28 2.28 0 012.293 2.27c0 1.243-1.015 2.258-2.293 2.258-1.22 0-2.235-1.015-2.235-2.258z'></path>
                </svg>
              </span>
              <div className='tooltip-content'>
                <p>The number of years you have held a full, non-provisional, UK driving licence.</p>
              </div>
            </div>
          </div>
          <ul className='card-list'>
            <li>
              0<span>-</span>1
            </li>
            <li>
              1<span>-</span>2
            </li>
            <li>
              2<span>-</span>3
            </li>
            <li>
              3<span>-</span>4
            </li>
            <li>
              4<span>-</span>5
            </li>
            <li>
              5<span>-</span>6
            </li>
            <li>
              6<span>-</span>7
            </li>
            <li>
              7<span>-</span>8
            </li>
            <li>
              8<span>-</span>9
            </li>
            <li>
              9<span>-</span>10
            </li>
            <li>10+</li>
          </ul>
        </div>
      </Element>
    </Element>
  );
};

export default License;