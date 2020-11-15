import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Element, animateScroll as scroll, scroller } from 'react-scroll';
// @ts-ignore
import ClassNames from 'classnames';
import { countryList } from '../utlities/countries';

const License = () => {
  const history = useHistory();
  const [activeArea, setActiveArea] = useState('');
  const [state, setState] = useState<{ country: string; passYearsAgo: string; haveUKLicense?: boolean; ukLicencePeriod: string }>({
    country: '',
    passYearsAgo: '',
    ukLicencePeriod: '',
  });
  const [input, setInput] = useState('');
  const [activeInputClass, setActiveInputClass] = useState(false);
  return (
    <Element name='license-area' className='main-content-wrapper container'>
      <Element name='country-search'>
        <div className='licence-area-content'>
          <div className='country-search'>
            <h3>In which country did you first pass your driving test?</h3>
            <div className={ClassNames('country-input-wrapper', { 'active-input': activeInputClass === true })}>
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
                onChange={(e) => {
                  setInput(e.target.value);

                  if (e.target.value.length > 0) setActiveInputClass(true);
                  else setActiveInputClass(false);
                }}
                value={input}
              />
              <div className={ClassNames('country-list-wrapper', { 'list-hidden': activeInputClass == false })}>
                <ul className='countryList'>
                  {input.length > 0 &&
                    countryList
                      .filter((country) => country.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
                      .map((country) => (
                        <li
                          onClick={() => {
                            scroller.scrollTo('years-test-passed', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 });
                            setActiveArea(activeArea + ' years-test-passed');
                            setInput(country);
                            setActiveInputClass(false);
                            setState({ ...state, country });
                          }}>
                          {country}
                        </li>
                      ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <Element name='years-test-passed' className={ClassNames('comon-list-card test-card', { active: activeArea.includes('years-test-passed') })}>
        <h3 className='card-title'>How many years ago did you pass that test?</h3>
        <ul className='card-list'>
          {['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10', '10+'].map((single) => (
            <li
              onClick={() => {
                scroller.scrollTo('UK-license', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 });
                setActiveArea(activeArea + ' UK-license');
                setState({ ...state, passYearsAgo: single });
              }}
              className={ClassNames({ active: state.passYearsAgo === single })}>
              {single.includes('-') ? (
                <>
                  {single.substr(0, 1)} <span>-</span>
                  {single.substr(single.indexOf('-') + 1, single.length)}
                </>
              ) : (
                single
              )}
            </li>
          ))}
        </ul>
      </Element>
      <Element name='UK-license'>
        <div className={ClassNames('comon-list-card licence', { active: activeArea.includes('UK-license') })}>
          <h3 className='card-title'>Do you now have a full UK licence?</h3>
          <ul className='card-list'>
            {[true, false].map((value) => (
              <li
                onClick={() => {
                  scroller.scrollTo('uk-license-longer', { duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -100 });
                  setActiveArea(activeArea + ' uk-license-longer');
                  setState({ ...state, haveUKLicense: value });
                }}
                className={ClassNames({ active: state.haveUKLicense == value })}>
                {value ? 'Yes' : 'No'}
              </li>
            ))}
          </ul>
        </div>
      </Element>
      <Element name='uk-license-longer'>
        <div className={ClassNames('comon-list-card licence-time', { active: activeArea.includes('uk-license-longer') })}>
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
            {['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10', '10+'].map((single) => (
              <li
                onClick={() => {
                  setState({ ...state, ukLicencePeriod: single });
                }}
                className={ClassNames({ active: state.ukLicencePeriod === single })}>
                {single.includes('-') ? (
                  <>
                    {single.substr(0, 1)} <span>-</span>
                    {single.substr(single.indexOf('-') + 1, single.length)}
                  </>
                ) : (
                  single
                )}
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </Element>
  );
};

export default License;
