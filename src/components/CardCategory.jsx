import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CardCategory = (props) => {
  const { image, title, video, rating, price } = props
  return (
    <Link {...props}>
      <div className="w-full  rounded-[20px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.3)]">
        <Image src={image} alt={title} sizes={"(max-width: 768px) 100vw, 700px"} className='w-full object-cover object-center rounded-t-[20px]' />
        <div className="px-5 pt-5 pb-10">
          <h1 className='font-bold text-lg'>{title}</h1>
          <div className="pt-6 pb-3">
            <div className="flex items-center space-x-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube-filled" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" strokeWidth="0" fill="#E43535"></path>
              </svg>
              <h2 className='text-sm'>{video}</h2>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star-filled" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" strokeWidth="0" fill="#FDD835"></path>
              </svg>
              <h2 className='text-sm'>{rating}/5</h2>
            </div>
          </div>
          <h2 className="font-bold ms-1">$ {price}</h2>
        </div>
      </div>
    </Link>
  )
}

export default CardCategory