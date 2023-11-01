import { Img, Text } from 'components'
import React, { useState } from 'react'

function ProfileRadios () {
  const [gender, setGender] = useState('male')

  const handleChange = event => {
    setGender(event.target.value)
  }

  return (
    <form>
      <div className='flex w-full flex-col items-start text-lg text-black-900 font-robotoserif gap-2'>
        <div>
          <Text className='relative'>What is your gender?</Text>
        </div>
        <div className='flex flex-col gap-4 text-base'>
          <div className='mb-1'>
            <input
              type='radio'
              id='male'
              name='gender'
              value='male'
              checked={gender === 'male'}
              onChange={handleChange}
              className='mr-2 '
              />
            <label htmlFor='male'>Male</label>
          </div>
          <div className='mb-1'>
            <input
              type='radio'
              id='female'
              name='gender'
              value='female'
              className='mr-2 '
              checked={gender === 'female'}
              onChange={handleChange}
              
              />
            <label htmlFor='female'>Female</label>
          </div>
          <div className='mb-1'>
            <input
              type='radio'
              id='other'
              name='gender'
              value='other'
              className='mr-2 '
              checked={gender === 'other'}
              onChange={handleChange}
            />
            <label htmlFor='other'>Other</label>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ProfileRadios

// import React from 'react'
// const ProfileRadios = props => {
//   return (
//     <>
//       <div className={props.className}>
//         <Text
//           className='relative text-black-900 sm:text-left text-lg w-auto sm:w-full'
//           size='txtRobotoSerifRegular18'
//         >
//           {props?.txtfive}
//         </Text>
//         <div className=' bottom-[9%] flex flex-1 flex-col inset-x-[0] items-center justify-start mx-auto w-full'>
//           <div className='flex flex-col gap-3.5 items-start justify-start w-full'>
//             <div className='flex flex-row gap-3 items-center justify-start w-auto'>
//               {!!props?.radiotwo ? (
//                 <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-black-900 rounded-[50%] w-[18px]'></div>
//               ) : null}
//               {!!props?.txtsix ? (
//                 <Text
//                   className='text-base text-black-900 w-auto'
//                   size='txtRobotoSerifRegular16'
//                 >
//                   {props?.txtsix}
//                 </Text>
//               ) : null}
//             </div>
//             <div className='flex flex-row gap-3 items-center justify-start w-auto'>
//               {!!props?.radiotwo ? (
//                 <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-black-900 rounded-[50%] w-[18px]'></div>
//               ) : null}
//               {!!props?.txtsix ? (
//                 <Text
//                   className='text-base text-black-900 w-auto'
//                   size='txtRobotoSerifRegular16'
//                 >
//                   {props?.txtsix}
//                 </Text>
//               ) : null}
//             </div>
//             <div className='flex flex-row gap-3 items-center justify-start w-auto'>
//               {!!props?.radiotwo ? (
//                 <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-black-900 rounded-[50%] w-[18px]'></div>
//               ) : null}
//               {!!props?.txtsix ? (
//                 <Text
//                   className='text-base text-black-900 w-auto'
//                   size='txtRobotoSerifRegular16'
//                 >
//                   {props?.txtsix}
//                 </Text>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// ProfileRadios.defaultProps = { txtfive: 'What is your gender?' }

// export default ProfileRadios
