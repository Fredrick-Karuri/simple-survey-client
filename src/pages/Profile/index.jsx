import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import SurveyHeader from 'components/SurveyHeader'

import { Button, Img, Input, Line, List, Text } from 'components'
import ProfileColumntxtfour from 'components/ProfileColumntxtfour'
import ProfileRadios from 'components/ProfileRadios'

const ProfilePage = () => {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/questions')
      .then(res => {
        setQuestions(res.data)
      })
      .catch(err => {
        console.log(' There was an error!', err)
      })
  }, [])

  const userNameQuestion = questions.find(
    question => question.name === 'user_name'
  )
  const emailAddressQuestion = questions.find(
    question => question.name === 'email_address'
  )
  const descriptionQuestion = questions.find(
    question => question.name === 'description'
  )
  const genderQuestion = questions.find(question => question.name === 'gender')
  return (
    <>
      <div className='bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto py-12 md:py-8  w-auto sm:w-full md:w-full md:h-[90vh]'>
        <div className='flex flex-col gap-12 h-full items-center justify-start md:px-5 w-auto sm:w-full'>
          {SurveyHeader()}
          <div className='flex flex-col gap-6 items-center justify-start w-[560px] sm:w-full'>
            <div className='flex flex-col items-start justify-end w-full'>
              <div className='flex sm:flex-col flex-row gap-6 items-end justify-start w-full'>
                {/* <div className='flex relative flex-col w-full sm:w-full'>
                  <div className='flex flex-col gap-2 items-start justify-start my-auto w-full'>
                    <Text
                      className='text-black-900 text-lg w-[Auto%]'
                      size='txtRobotoSerifRegular18'
                    >
                      What is your full name?
                    </Text>
                  </div>
                  <div className='flex flex-row sm:flex-col gap-4 '>
                    <div className=''>
                      <Input
                        name='textinput'
                        placeholder='Name'
                        className='font-roboto p-0 placeholder:text-black-900_7f text-left text-sm w-full text'
                        wrapClassName='outline outline-[1px] outline-black-900 '
                        type='text'
                        cla
                      ></Input>
                    </div>
                    <div>
                      <Input
                        name='textinput'
                        placeholder='Other Names (optional)'
                        className='font-roboto p-0 placeholder:text-black-900_7f text-left text-sm w-full'
                        wrapClassName='outline outline-[1px] outline-black-900 '
                        type='text'
                      ></Input>
                    </div>
                    <div>
                      <Input
                        name='textinput'
                        placeholder='Last Name'
                        className='font-roboto p-0 placeholder:text-black-900_7f text-left text-sm w-full'
                        wrapClassName='outline outline-[1px] outline-black-900 '
                        type='text'
                      ></Input>
                    </div>
                  </div>
                </div> */}

                <div className='flex relative flex-col w-full sm:w-full'>
                  {userNameQuestion && (
                    <div className='flex flex-col gap-2 items-start justify-start my-auto w-full'>
                      <Text
                        className='text-black-900 text-lg w-[Auto%]'
                        size='txtRobotoSerifRegular18'
                      >
                        {userNameQuestion.text}
                      </Text>
                      <div className='flex flex-row sm:flex-col gap-4 '>
                        <div className=''>
                          <Input
                            name='textinput'
                            placeholder='Name'
                            className='font-roboto p-0 placeholder:text-black-900_7f text-left text-sm w-full text'
                            wrapClassName='outline outline-[1px] outline-black-900 '
                            type='text'
                          ></Input>
                        </div>
                        <div>
                          <Input
                            name='textinput'
                            placeholder='Other Names (optional)'
                            className='font-roboto p-0 placeholder:text-black-900_7f text-left text-sm w-full'
                            wrapClassName='outline outline-[1px] outline-black-900 '
                            type='text'
                          ></Input>
                        </div>
                        <div>
                          <Input
                            name='textinput'
                            placeholder='Last Name'
                            className='font-roboto p-0 placeholder:text-black-900_7f text-left text-sm w-full'
                            wrapClassName='outline outline-[1px] outline-black-900 '
                            type='text'
                          ></Input>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Add similar blocks for emailAddressQuestion, descriptionQuestion, and genderQuestion */}
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2 items-start justify-start w-full'>
              {emailAddressQuestion && (
                <>
                  <Text
                    className='text-black-900 text-lg w-full'
                    size='txtRobotoSerifRegular18'
                  >
                    {emailAddressQuestion.text}
                  </Text>
                  <Input
                    name='textinputthree'
                    placeholder='Email'
                    className='font-roboto p-0 placeholder:text-black-900_7f text-left text-sm w-full'
                    wrapClassName='outline outline-[1px] outline-black-900 w-full'
                    type='email'
                  ></Input>
                </>
              )}
            </div>
            <div className='flex flex-col font-robotoserif gap-2 items-start justify-start w-full'>
              {descriptionQuestion && (
                <>
                  <Text
                    className='text-black-900 text-lg w-full'
                    size='txtRobotoSerifRegular18'
                  >
                    {descriptionQuestion.text}
                  </Text>
                  <Input
                    name='aboutText'
                    placeholder='Type your message...'
                    className='font-roboto p-0 placeholder:text-black-900_7f text-left text-sm w-full'
                    wrapClassName='outline outline-[1px] outline-black-900 w-full h-40'
                    type='text'
                  ></Input>
                </>
              )}
              {/* <ProfileColumntxtfour className='bg-white-A700 flex flex-col md:gap-10 gap-[117px] h-40 md:h-auto items-start justify-start outline outline-[1px] outline-black-900 p-3 w-full' /> */}
            </div>

            <div className='flex relative flex-col w-full sm:w-full'>
              {genderQuestion && (
                <div className='flex flex-col gap-2 items-start justify-start my-auto w-full'>
                  <Text
                    className='text-black-900 text-lg w-[Auto%]'
                    size='txtRobotoSerifRegular18'
                  >
                    {genderQuestion.text}
                  </Text>
                  <div className='flex flex-row sm:flex-col gap-4 '>
                    <div className=''>
                      <select name='gender' id='gender'>
                        {genderQuestion.choices.map((choice, index) => (
                          <option value={choice.value} key={index}>
                            {choice.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className='flex flex-col font-robotoserif gap-6 items-center justify-start w-full'>
              <Button
                className='common-pointer cursor-pointer outline outline-[1px] outline-black-900 text-base text-center w-full'
                onClick={() => navigate('/programmingstack')}
                shape='round'
                size='sm'
              >
                Next
              </Button>
              <div className='flex flex-row gap-0.5 items-start justify-start w-auto'>
                <Button
                  className='cursor-pointer h-10 text-base text-center w-10'
                  shape='square'
                  color='black_900'
                  variant='outline'
                >
                  1
                </Button>
                <List
                  className='sm:flex-col flex-row gap-0.5 grid grid-cols-2 w-[67%]'
                  orientation='horizontal'
                >
                  <div className='flex flex-col h-10 items-center justify-start rounded-lg w-full'>
                    <div className='flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10'>
                      <Text
                        className='text-base text-black-900 text-center w-auto'
                        size='txtRobotoSerifRegular16'
                      >
                        2
                      </Text>
                    </div>
                  </div>
                  <div className='flex flex-col h-10 items-center justify-start rounded-lg w-full'>
                    <div className='flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10'>
                      <Text
                        className='text-base text-black-900 text-center w-auto'
                        size='txtRobotoSerifRegular16'
                      >
                        3
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage


