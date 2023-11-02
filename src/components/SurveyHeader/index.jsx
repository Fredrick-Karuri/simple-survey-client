import React from 'react'
import { Text } from 'components'

function SurveyHeader () {
  return (
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
  )
}

export default SurveyHeader
