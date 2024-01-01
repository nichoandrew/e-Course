"use client"

export default function stepContent({ currentStep }) {
  const tabBar = [
    {
      id: 1,
      stepNow: "Step 1: ",
      title: "Pilih Course"
    },
    {
      id: 2,
      stepNow: "Step 2: ",
      title: "Informasi Dasar"
    },
    {
      id: 3,
      stepNow: "Step 3: ",
      title: "Pertanyaan"
    },
    {
      id: 4,
      stepNow: "Step 4: ",
      title: "Overview"
    },
    {
      id: 5,
      stepNow: "Step 5: ",
      title: "Submit"
    },
  ]
  return (
    <div className="grid grid-cols-5">
      {
        tabBar.map((step, index) => (
          <div type='button' className={`flex flex-col text-start py-3 px-2 space-y-3 border-b-2 border-r relative ${index + 1 <= currentStep ? ' text-blue border-b-2 border-b-blue' : 'text-gray-400'}`} key={index}>
            <h3 className='text-sm'>{step.stepNow}</h3>
            <h4 className='hidden md:block md:text-base font-bold'>{step.title}</h4>
          </div>
        ))
      }
    </div>
  )
}
