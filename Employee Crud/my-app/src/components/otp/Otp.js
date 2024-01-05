import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
const Otp = () => {
    const [otp, setOtp] = useState('');
    const inputStyle = {
        width: '40px',
        height: '60px',
        fontSize: '18px',
        textAlign: 'center',
        margin: '5px',
      };
  return (
    <div>
        <OTPInput
            value ={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props)=> <input{...props}/>}
            inputStyle={inputStyle}
            />
    </div>
  )
}

export default Otp