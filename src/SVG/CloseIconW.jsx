const CloseIconW = ({ onClick }) => (
  <svg
    className='cursor-pointer'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    onClick={onClick}
  >
    <path
      d='M18 6L6 18'
      stroke='#F0F2EB'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6 6L18 18'
      stroke='#F0F2EB'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default CloseIconW;
