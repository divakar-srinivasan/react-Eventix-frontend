import React, { useState ,useEffect ,useRef } from 'react';
import logo from '../images/EVENTIX.png';
import { useNavigate } from 'react-router-dom';
import gsap from "gsap"

const Signup = () => {
  const [step, setStep] = useState('email'); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleNext = () => {
    if (email) {
      setStep('password'); 
    }
  };
  const handleBack = () => setStep('email'); 
  const handleSubmit = () => {
    navigate('/home')
  };

  const logoTransition = useRef(null);
  const textRef = useRef(null);
  const pRef = useRef(null);
  const welcome = useRef(null);
  const bg = useRef(null);
  const input = useRef(null);
  const btn=useRef(null);

  useEffect(()=>{
    const text = "KONGU ENGINEERING COLLEGE";
    const chars = text.split("");
    textRef.current.innerHTML = "";
  
    chars.forEach((char, i) => {
      const span = document.createElement("span");
      span.innerHTML = char;
      textRef.current.appendChild(span);
    });

    const t1=gsap.timeline();
    t1.from(logoTransition.current,{
      xPercent: -100, 
      opacity: 0,  
      scale: 0.5,    
      duration: 1,   
      ease: 'power2.out'

    })
    t1.from(welcome.current,{
      opacity:0,
      y:20,
      duration:1,
      ease: 'power2.out',
    })
    t1.fromTo(
      textRef.current.children,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(textRef.current.children, {
            delay: 2,
            opacity: 0,
            x: 20,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.in",
          });
        },
      })
      t1.from(pRef.current,{
        opacity:0,
        y:20,
        duration:1,
        ease: 'power2.out',
      })
      t1.to(pRef.current,{
        delay:1,
        opacity:0,
        y:0,
        duration:1,
        ease: 'power2.out',
      })
      
    t1.to(welcome.current,{
      delay:1,
      opacity:0,
      y:0,
      duration:1,
      ease: 'power2.out',
    })
    t1.to(logoTransition.current,{
      delay:1,
      scale: 0.5,
      xPercent:100,
      opacity:0,
      duration:2,
      ease: 'power2.out',
    })
    t1.to(bg.current,{
      y:'-100%',
      duration:2,
      ease: 'power2.out',
    })
    t1.from(input.current,{
      x:-500,
      opacity:0,
      duration:0.5,
      ease: 'power2.out',
    })
    t1.from(btn.current,{
      x:500,
      opacity:0,
      duration:0.5,
      ease: 'power2.out',
    })

  },[])

  return (
    <div className='flex relative h-screen w-full'>
      <div ref={bg} className="absolute z-10 h-full w-full bg-black flex flex-col  items-center">
      <img ref={logoTransition} src={logo} alt='loading' className='h-48 w-72' />
      <div className='flex flex-col items-center gap-5'>
        <h1 ref={welcome} className='font-bold text-custom-red text-5xl'>WELCOME</h1>
        <h1 ref={textRef} className='text-white font-bold text-5xl text-center'>.</h1>
        <h1 ref={pRef} className=' p-4 text-gray-400 font-semibold text-center'>Your Gateway to Unforgettable Events – Book with Ease, Enjoy with Joy!</h1>

      </div>
      </div>
    <div className='bg-img z-0 h-screen absolute '>
    <div className='flex itmes-center justify-between px-24 py-5'>
    <img src={logo} alt='loading' className='h-18 w-32' />
    <button className='btn' onClick={()=>navigate('/signin')}>Signin</button>
    </div>
    <div className='flex items-center justify-center min-h-screen'>
      {step === 'email' && (
        <div className='flex-col space-y-10'>
          <div className='flex justify-center px-7'>
            <div className='flex flex-col items-center justify-center text-center space-y-4'>
            <h1 className='text-4xl text-white font-bold'>Unlock Exclusive Access to College Events! Sign Up Today!</h1>
            <h1 className='text-white text-xl font-semibold'>Book anywhere. Cancel anytime.</h1>
            <h1 className='text-white text-xl '>Ready to Register? Book your Tickets, Enjoy the Events with your Friends</h1>
            </div>
          </div>
          <div className='flex flex-col space-y-4 md:flex-row md:space-x-5 items-center justify-center'>
          
          <input
          ref={input}
            className='input md:mt-5'
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
          />
          <button ref={btn} className='btn' 
          onClick={handleNext}>Next </button>
          </div>
        </div>
      )}

      {step === 'password' && (
        
        <div className='flex flex-col'>
          <div className='flex justify-center '>
            <div className='flex flex-col items-center justify-center text-center space-y-4'>
            <h1 className='text-4xl text-white font-bold'>Join the Fun! Sign Up Now to Book Your Event Tickets!</h1>
            <h1 className='text-white text-xl font-semibold'>Ready for Fun. Sign Up.</h1>
            <h1 className='text-white text-xl '>Ready for Events? Confirm your Slots</h1>
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-center mt-9 md:space-x-5 space-y-5'>
          <button className='btn md:mt-4' onClick={handleBack}>Back</button>
          <input
          className='input'
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className='btn' onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
      </div>
    </div>
  </div>
  );
}

export default Signup;
