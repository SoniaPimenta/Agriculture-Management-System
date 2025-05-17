// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const OtpVerification = () => {
//   const [otp, setOtp] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   // Read email from localStorage
//   const email = localStorage.getItem('email');

//   useEffect(() => {
//     if (!email) {
//       navigate('/signup'); // redirect if no email found
//     }
//   }, [email, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/verify-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, otp }),
//       });
//       const data = await res.json();

//       setMessage(data.message);
//       if (res.ok) {
//         setTimeout(() => {
//           localStorage.removeItem('email');
//           navigate('/login');
//         }, 2000);
//       }
//     } catch (error) {
//       setMessage('Verification failed');
//     }
//   };

//   return (
//     <div className="wrapper">
//       <h1>OTP Verification</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           maxLength={6}
//           placeholder="Enter OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//           required
//         />
//         <button type="submit">Verify</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default OtpVerification;
