export default function ButtonKategori({ onClick, buttonName }) {
  return (
    <button className='text-left py-2 md:py-3 px-4 w-full lg:w-4/5 border rounded-lg flex justify-between' type='button' onClick={onClick} >
      <span className='text-[#83858A]'>{buttonName}</span>
      <span className='text-[#055EA8]'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-down" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 5l0 14"></path>
          <path d="M16 15l-4 4"></path>
          <path d="M8 15l4 4"></path>
        </svg>
      </span>
    </button>
  )
}