import { useState } from "react";

const LinkedinIcon = () => {
  const [hover, setHover] = useState(false);

  return (
    <svg
      className='cursor-pointer duration-200'
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={
        hover ? { filter: "drop-shadow(0 0 0 #8EF506)" } : { filter: "none" }
      }
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.98693 0C3.57587 0 0 3.58172 0 8V40C0 44.4183 3.57587 48 7.98693 48H39.0131C43.4241 48 47 44.4183 47 40V8C47 3.58172 43.4241 0 39.0131 0H7.98693ZM6.45044 10.7376C6.45044 13.151 8.27723 14.9147 10.5306 14.9147C12.7844 14.9147 14.6112 13.151 14.6112 10.7376C14.6112 8.32453 12.7844 6.55884 10.5306 6.55884C8.27723 6.55884 6.45044 8.32453 6.45044 10.7376ZM33.0838 41.2525H40.1612V26.9552C40.1612 19.8941 35.8936 17.4858 31.9445 17.4858C28.2929 17.4858 25.8122 19.9153 25.1274 21.3385V18.1355H18.321V41.2525H25.3984V28.7192C25.3984 25.3774 27.4569 23.7522 29.557 23.7522C31.5434 23.7522 33.0838 24.9011 33.0838 28.6264V41.2525ZM14.0692 18.1177V41.2347H6.99214V18.1177H14.0692Z'
        fill='#F0F2EB'
        fillOpacity='0.6'
      />
    </svg>
  );
};

export default LinkedinIcon;
