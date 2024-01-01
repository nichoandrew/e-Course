const Skeleton = ({ count }) => {
  return (
    <>
      {
        [...Array(count)].map((__, i) => (
          <div key={i}>
            <div className={` w-full shadow-card rounded-[20px] `}>
              <div className='skeleton h-[220px] rounded-t-[20px]' />
              <div className="px-5 pt-5 pb-10">
                <div className="w-full h-8 skeleton rounded-sm" />
                <div className="w-full h-14 my-3 skeleton rounded-sm" />
                <div className="w-full h-8 skeleton rounded-sm" />
              </div>
            </div>
          </div>
        ))
      }
    </>
  )

}

export default Skeleton