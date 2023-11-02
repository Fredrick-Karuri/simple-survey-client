import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import SurveyHeader from 'components/SurveyHeader'
import { Button, Img, Text } from 'components'
// import { SurveyForm } from 'components/SurveyForm'

const ProgrammingStackPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='bg-white-A700 flex flex-col font-robotoserif items-center justify-start mx-auto py-12 sm:py-8 w-auto sm:w-full md:w-full'>
        <div className='flex flex-col gap-8 h-[864px] md:h-auto items-start justify-center md:px-5 w-auto sm:w-full'>
          {SurveyHeader()}

          <div className='flex flex-col h-full items-start justify-between pt-4 w-full'>
            {ProgrammingStackSelection()}
            <div className='flex flex-col gap-6 items-center justify-start w-full'>
              <div className='flex flex-row gap-10 items-start justify-start w-full'>
                <Button
                  className='common-pointer cursor-pointer flex-1 rounded-[13px] text-base text-center w-full'
                  onClick={() => navigate('/profile')}
                  size='sm'
                  variant='outline'
                >
                  Previous
                </Button>
                <Button
                  className='common-pointer cursor-pointer flex-1 outline outline-[1px] outline-light_blue-A700 text-base text-center w-full'
                  onClick={() => navigate('/certificateupload')}
                  shape='round'
                  size='sm'
                >
                  Next
                </Button>
              </div>
              <div className='flex flex-row gap-0.5 items-start justify-start w-auto'>
                <Button
                  className='border border-black-900 border-solid cursor-pointer h-10 text-base text-center w-10'
                  shape='square'
                  color='blue_300'
                >
                  1
                </Button>
                <Button
                  className='cursor-pointer h-10 text-base text-center w-10'
                  shape='square'
                  color='black_900'
                  variant='outline'
                >
                  2
                </Button>
                <div className='flex flex-col h-10 items-center justify-start rounded-lg w-10'>
                  <div className='flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10'>
                    <Text
                      className='text-base text-black-900 text-center w-auto'
                      size='txtRobotoSerifRegular16'
                    >
                      3
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProgrammingStackPage
function ProgrammingStackSelection () {
  const [selectedLanguages, setSelectedLanguages] = useState({
    JavaScript: false,
    Python: false,
    CSharp: false,
    Ruby: false,
    AngularJS: false,
    ReactJS: false,
    VueJS: false,
    MYSQL: false,
    Rust: false,
    SQL: false,
    GO: false,
    CSS: false
  })
  const handleChange = event => {
    setSelectedLanguages({
      ...selectedLanguages,
      [event.target.name]: event.target.checked
    })
  }

  return (
    <div className=' mr-auto mt-auto text-black-900 text-lg w-auto z-[1]  '>
      <span className='text-black-900 font-robotoserif text-left font-normal '>
        What programming stack are you familiar with?
      </span>
      <span className='text-black-900 font-roboto text-left text-base font-normal italic'>
        (Check all that apply)
      </span>
      <form className='mb-4 mt-4'>
        {Object.keys(selectedLanguages).map(language => (
          <div key={language} className='mb-4'>
            <input
              type='checkbox'
              id={language}
              name={language}
              checked={selectedLanguages[language]}
              onChange={handleChange}
              className='mr-2 border-blue-300 p-2.5'
            />
            <label htmlFor={language}>{language}</label>
          </div>
        ))}
      </form>
    </div>
  )
}

// return (
//   <div className='flex flex-col gap-4 h-[595px] md:h-auto items-start justify-center w-auto sm:w-full'>
//     <Text className=' mr-auto mt-auto text-black-900 text-lg w-auto z-[1]'>
//       <span className='text-black-900 font-robotoserif text-left font-normal'>
//         What programming stack are you familiar with?
//       </span>
//       <span className='text-black-900 font-roboto text-left text-base font-normal italic'>
//         (Check all that apply)
//       </span>
//     </Text>

//     <div className='flex flex-col gap-0.5 items-start justify-center w-auto'>
//       <div className='flex flex-row gap-3 items-center justify-start pb-4 w-auto'>
//         <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]'></div>
//         <Text
//           className='text-base text-black-900 w-auto'
//           size='txtRobotoSerifRegular16'
//         >
//           React
//         </Text>
//       </div>
//       <div className='flex flex-row gap-3 items-center justify-start pb-4 w-auto'>
//         <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]'></div>
//         <Text
//           className='text-base text-black-900 w-auto'
//           size='txtRobotoSerifRegular16'
//         >
//           Angular JS
//         </Text>
//       </div>
//       <div className='flex flex-row gap-3 items-center justify-start pb-4 w-auto'>
//         <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]'></div>
//         <Text
//           className='text-base text-black-900 w-auto'
//           size='txtRobotoSerifRegular16'
//         >
//           Vue JS
//         </Text>
//       </div>
//       <div className='flex flex-row gap-3 items-center justify-start pb-4 w-auto'>
//         <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]'></div>
//         <Text
//           className='text-base text-black-900 w-auto'
//           size='txtRobotoSerifRegular16'
//         >
//           MySQL
//         </Text>
//       </div>
//       <div className='flex flex-row gap-3 items-center justify-start pb-4 w-auto'>
//         <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]'></div>
//         <Text
//           className='text-base text-black-900 w-auto'
//           size='txtRobotoSerifRegular16'
//         >
//           Rust
//         </Text>
//       </div>
//       <div className='flex flex-row gap-3 items-center justify-start pb-4 w-auto'>
//         <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]'></div>
//         <Text
//           className='text-base text-black-900'
//           size='txtRobotoSerifRegular16'
//         >
//           JS
//         </Text>
//       </div>
//       <div className='flex flex-row gap-3 items-center justify-start pb-4 w-auto'>
//         <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]'></div>
//         <Text
//           className='text-base text-black-900 w-auto'
//           size='txtRobotoSerifRegular16'
//         >
//           SQL
//         </Text>
//       </div>
//       <div className='flex flex-col items-start justify-center w-auto'>
//         <div className='flex flex-row gap-3 items-center justify-start pb-4 w-auto'>
//           <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]'></div>
//           <Text
//             className='text-base text-black-900 w-auto'
//             size='txtRobotoSerifRegular16'
//           >
//             Go
//           </Text>
//         </div>
//       </div>
//       <div className='flex flex-col items-start justify-center w-auto'>
//         <div className='flex flex-row gap-3 items-center justify-start pb-4 w-auto'>
//           <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]'></div>
//           <Text
//             className='text-base text-black-900 w-auto'
//             size='txtRobotoSerifRegular16'
//           >
//             Java
//           </Text>
//         </div>
//       </div>
//       <div className='flex flex-row gap-3 items-center justify-start pb-4 w-auto'>
//         <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]'></div>
//         <Text
//           className='text-base text-black-900 w-auto'
//           size='txtRobotoSerifRegular16'
//         >
//           PHP
//         </Text>
//       </div>
//       <div className='flex flex-row gap-3 items-center justify-start pb-4 w-auto'>
//         <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]'></div>
//         <Text
//           className='text-base text-black-900 w-auto'
//           size='txtRobotoSerifRegular16'
//         >
//           Postgres
//         </Text>
//       </div>
//       <div className='flex flex-col items-start justify-center w-auto'>
//         <div className='flex flex-row gap-3 items-center justify-start pb-4 w-auto'>
//           <div className='bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]'></div>
//           <Text
//             className='text-base text-black-900 w-auto'
//             size='txtRobotoSerifRegular16'
//           >
//             Microsoft SQL Server
//           </Text>
//         </div>
//       </div>
//     </div>
//   </div>
// )
