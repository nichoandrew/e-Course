import Link from 'next/link'

const BreadcrumbsVendor = ({title, nav, link}) => {
  return (
    <div className='w-full flex flex-col justify-center text-[#055EA8] bg-transparent'>
      <h6 className='text-md font-bold '>{title}</h6>
      <Link href={link} className='text-base hover:brightness-125'>{nav}</Link>
    </div>
  )
}

export default BreadcrumbsVendor