import React, { useState } from "react";
import CloseIcon from "../SVG/CloseIcon";
import InstagramIcon from "../SVG/InstagramIcon";
import FacebookIcon from "../SVG/FacebookIcon";
import LinkedinIcon from "../SVG/LinkedinIcon";

const Contact = () => {
  const [showChat, setShowChat] = useState(false);

  const handleOpenChat = () => {
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  const handleSendEmail = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;
    window.location.href = `mailto:martin.zoubek17@gmail.com?subject=Message from ${email}&body=${message}`;
  };

  return (
    <div>
      <button
        className='text-base font-poppins px-3'
        onClick={handleOpenChat}
      >
        Contact
      </button>
      {showChat && (
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen duration-300 bg-gradient-to-br from-lightGreen to-darkGreen'>
          <div className='flex items-center justify-around bg-grayWhite h-[88px]'>
            <h2 className='font-laperhens leading-none font-bold text-xl'>
              Contact Me
            </h2>
            <button onClick={handleCloseChat}>
              <CloseIcon />
            </button>
          </div>
          <div className='flex justify-center items-center bg-darkGreen gap-12 h-20'>
            <a
              href='https://www.instagram.com/martin_zoubek420/'
              target='_blank'
            >
              <InstagramIcon />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100009724780665'
              target='_blank'
            >
              <FacebookIcon />
            </a>
            <a
              href='https://www.linkedin.com/in/martin-zoubek-761539247/'
              target='_blank'
            >
              <LinkedinIcon />
            </a>
          </div>
          <div className='flex flex-col gap-8 pt-8'>
            <h2 className='font-poppins font-thin italic text-betrWhite text-3xl text-center'>
              Or write me an email!
            </h2>
            <form
              className='flex flex-col items-center gap-4'
              onSubmit={handleSendEmail}
            >
              <input
                className='w-4/5 lg:w-2/4 h-12 bg-medGreen placeholder:text-betrWhite pl-6 focus:outline-none rounded-3xl'
                type='email'
                name='email'
                placeholder='Your email'
                required
              />
              <textarea
                className=' w-4/5 lg:w-2/4 h-32 pl-6 pt-1 focus:outline-none rounded-3xl'
                name='message'
                placeholder='Your message'
                required
              />
              <button
                className='bg-neonGreen w-2/3 lg:w-1/4 h-12 mx-auto rounded-full'
                type='submit'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
