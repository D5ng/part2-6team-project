/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const siteKey = process.env.REACT_APP_RECAPTCHA_SITEKEY;

function Captcha() {
  const [capVal, setCapVal] = useState(null);

  return (
    <div>
      <ReCAPTCHA sitekey="6LfHUJIpAAAAAFfrrtCbg1ZWIHibctgGULM3LRwt" onChange={(val) => setCapVal(val)} />
    </div>
  );
}

export default Captcha;
