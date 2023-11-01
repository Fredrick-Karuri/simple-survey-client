import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Button, Img, Input, Text } from 'components'
import ProfileRadios from 'components/ProfileRadios'

const CertificateUploadPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='bg-white-A700 flex flex-col font-robotoserif items-center justify-start mx-auto py-12 sm:py-8 w-auto sm:w-full md:w-full h-full'>
        <div className='flex flex-col gap-12 h-[864px]  md:h-full items-center justify-between pb-10 sm:pb-0 md:px-5 w-auto sm:w-full sm:h-[76vh] md:h-[88vh]'>
          <div className='flex flex-col gap-4 items-center justify-start w-[560px] sm:w-full'>
            <Text
              className='sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-full'
              size='txtRobotoCondensedBold40'
            >
              Sky World Survey Form
            </Text>
            <Text
              className='text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full'
              size='txtRobotoSerifRegular24'
            >
              Please take a minute to help us know you.
            </Text>
          </div>
          {/* <div className='flex flex-col sm:gap-[auto] md:h-[Auto%] h-full items-center justify-between sm:p-[] md:p-[] pt-10 sm:pt-[] md:pt-[] w-[50vw] sm:w-full'> */}
          <div className='flex flex-col gap-4 items-start justify-center w-auto'>
            <Text>Upload any of your certificates.</Text>
            <div className='flex flex-col  items-center justify-center w-full'>
              <Input
                name='frameone'
                placeholder='Upload'
                className='font-robotoserif items-center  placeholder:text-black-900 sm:pr-5 text-black-900 text-left text-sm w-full border-2 border-black-900 rounded-md p-1.5'
                wrapClassName='bg-gray-200 flex rounded w-full'
                type='file'
                accept='*'
              ></Input>
              <Text
                className='italic text-black-900 text-sm w-auto'
                size='txtRobotoItalicRegular14'
              >
                You can upload multiple (.pdf)
              </Text>
            </div>
          </div>
          <div className='flex flex-col gap-6 items-center justify-start w-full'>
            <div className='flex sm:flex-col flex-row gap-10 sm:gap-4 items-start justify-start w-full'>
              <Button
                className='common-pointer cursor-pointer flex-1 rounded-[13px] text-base text-center w-full'
                onClick={() => navigate('/programmingstack')}
                size='sm'
                variant='outline'
              >
                Previous
              </Button>
              <Button
                className='common-pointer cursor-pointer flex-1 outline outline-[1px] outline-light_blue-A700 text-base text-center w-full'
                onClick={() => navigate('/review')}
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
                className='border border-black-900 border-solid cursor-pointer h-10 text-base text-center w-10'
                shape='square'
                color='blue_300'
              >
                2
              </Button>
              <Button
                className='cursor-pointer h-10 text-base text-center w-10'
                shape='square'
                color='black_900'
                variant='outline'
              >
                3
              </Button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default CertificateUploadPage

// prefix={
//   <Img
//     className='h-8 mr-2.5 my-auto'
//     src='images/img_icons_blue_300_32x32.svg'
//     alt='Icons'
//   />
// }
