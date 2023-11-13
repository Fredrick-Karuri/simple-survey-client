import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button, Img, Input, Text } from 'components'
import ProfileRadios from 'components/ProfileRadios'
import SurveyHeader from 'components/SurveyHeader'

const SurveyForm = () => {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [responses, setResponses] = useState({})

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/questions')
      .then(response => {
        const sortedQuestions = response.data.sort((a, b) => a.id - b.id)
        setQuestions(sortedQuestions)
      })
      .catch(error => {
        console.error('There was an error!', error)
      })
  }, [])


  const handleInputChange = (event, questionName, choiceText) => {
    if (event.target.type === 'checkbox') {
      setResponses(prevResponses => ({
        ...prevResponses,
        [questionName]: {
          ...prevResponses[questionName],
          [choiceText]: event.target.checked
        }
      }))
    } else if (event.target.type === 'file') {
      setResponses(prevResponses => ({
        ...prevResponses,
        [questionName]: event.target.files
      }))
    } else {
      setResponses(prevResponses => ({
        ...prevResponses,
        [questionName]: event.target.value
      }))
    }
  }

  const handleNext = () => {
    const currentQuestion = questions[currentQuestionIndex]
    if (currentQuestion.required && !responses[currentQuestion.name]) {
      alert(
        'This question is required. Please provide a response before proceeding.'
      )
      return
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const handleSubmit = () => {
    const formData = new FormData()
    Object.keys(responses).forEach(key => {
      formData.append(key, responses[key])
    })
    console.log(formData)
    axios
      .put('http://localhost:8000/api/questions/responses', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('Responses submitted successfully!')
      })
      .catch(error => {
        console.error('There was an error!', error)
      })
  }

  let nextButton = (
    <Button
      className='common-pointer cursor-pointer flex-1 outline outline-[1px] outline-light_blue-A700 text-base text-center w-full'
      onClick={
        currentQuestionIndex < questions.length ? handleNext : handleSubmit
      }
      shape='round'
      size='sm'
    >
      {currentQuestionIndex < questions.length ? 'Next' : 'Submit'}
    </Button>
  )

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1)
  }

  if (questions.length === 0) {
    return <div>Loading...</div>
  }

  const question = questions[currentQuestionIndex]
  let inputElement = null
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex]
    if (question.question_type === 'CH') {
      if (question.name === 'programming_stack') {
        inputElement = question.choices.map(choice => (
          <div
            key={choice.id}
            className='flex items-center justify-start w-full gap-2 my-2'
          >
            <input
              type='checkbox'
              id={choice.id}
              name={choice.text}
              checked={
                responses[question.name] &&
                responses[question.name][choice.text]
              }
              onChange={event =>
                handleInputChange(event, question.name, choice.text)
              }
            />
            <label htmlFor={choice.id}>{choice.text}</label>
          </div>
        ))
      } else if (question.name === 'gender') {
        // handle radio button inputs
        inputElement = question.choices.map(choice => (
          <div
            key={choice.id}
            className='flex items-center justify-start w-full gap-2 my-2'
          >
            <input
              type='radio'
              id={choice.id}
              name={question.name}
              value={choice.text}
              checked={responses[question.name] === choice.text}
              onChange={event => handleInputChange(event, question.name)}
            />
            <label htmlFor={choice.id}>{choice.text}</label>
          </div>
        ))
      } else {
        inputElement = (
          <select
            name={question.name}
            value={responses[question.name] || ''}
            // onChange={handleInputChange}
            onChange={event => handleInputChange(event, question.name)}
          >
            {question.choices.map(choice => (
              <option key={choice.id} value={choice.value}>
                {choice.text}
              </option>
            ))}
          </select>
        )
      }
    } else if (question.question_type === 'LT') {
      inputElement = (
        <textarea
          name={question.name}
          value={responses[question.name] || ''}
          // onChange={handleInputChange}
          onChange={event => handleInputChange(event, question.name)}
        />
      )
    } else if (question.question_type === 'EM') {
      inputElement = (
        <input
          type='email'
          name={question.name}
          value={responses[question.name] || ''}
          // onChange={handleInputChange}
          onChange={event => handleInputChange(event, question.name)}
        />
      )
    } else if (question.question_type === 'FL') {
      inputElement = (
        <input
          type='file'
          name={question.name}
          // onChange={handleInputChange}
          onChange={event => handleInputChange(event, question.name)}
          accept='*'
          multiple
          wrapClassName='bg-gray-200 flex rounded w-full'
        />
      )
    } else {
      inputElement = (
        <input
          type='text'
          name={question.name}
          value={responses[question.name] || ''}
          // onChange={handleInputChange}
          onChange={event => handleInputChange(event, question.name)}
        />
      )
    }
  }
  let preview = null
  if (currentQuestionIndex === questions.length) {
    preview = (
      <div className='flex flex-col gap-3'>
        <div>
          <Text>Preview</Text>
        </div>
        {Object.entries(responses).map(([questionName, response], index) => (
          <div
            className='border-[1px] py-2 px-6 border-blue-200 rounded '
            key={index}
          >
            <h3 className='my-[4px]'>{questionName}</h3>
            <p>
              {response instanceof File
                ? response.name
                : typeof response === 'object'
                ? Object.keys(response)
                    .filter(key => response[key])
                    .join(', ')
                : response}
            </p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className='bg-white-A700 flex flex-col font-robotoserif items-center justify-start mx-auto py-12 sm:py-8 w-auto sm:w-full md:w-full h-full'>
      <div className='flex flex-col gap-12 h-[864px]  md:h-full items-center justify-between pb-10 sm:pb-0 md:px-5 w-auto sm:w-full sm:h-[76vh] md:h-[88vh] h-[90vh]'>
        <SurveyHeader />
        {currentQuestionIndex < questions.length ? (
          <div className='flex flex-col gap-4 items-start justify-center w-auto'>
            <Text>{question.text}</Text>
            <div className='flex flex-col  items-center justify-center w-full'>
              {inputElement}
            </div>
          </div>
        ) : (
          preview
        )}
        <div className='flex flex-col gap-6 items-center justify-start w-full'>
          <div className='flex sm:flex-col flex-row gap-10 sm:gap-4 items-start justify-start w-full'>
            {currentQuestionIndex > 0 && (
              <Button
                className='common-pointer cursor-pointer flex-1 rounded-[13px] text-base text-center w-full'
                onClick={handlePrevious}
                size='sm'
                variant='outline'
              >
                Previous
              </Button>
            )}
            {nextButton}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurveyForm

// ) : (
//   <Button
//     className='common-pointer cursor-pointer flex-1 outline outline-[1px] outline-light_blue-A700 text-base text-center w-full'
//     onClick={handleSubmit}
//     shape='round'
//     size='sm'
//   >
//     Submit
//   </Button>
// const handleSubmit = () => {
//   const formData = new FormData();
//   Object.keys(responses).forEach(key => {
//     formData.append(key, responses[key]);
//   });

//   axios.put('http://localhost:8000/api/questions/responses', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   })
//   .then(response => {
//     console.log('Responses submitted successfully!');
//     // You can navigate to another page or show a success message here
//   })
//   .catch(error => {
//     console.error('There was an error!', error);
//     // You can show an error message here
//   });
// };

// const handleSubmit = () => {
//   axios.put('http://localhost:8000/api/questions/responses', responses)
//     .then(response => {
//       console.log('Responses submitted successfully!');
//     })
//     .catch(error => {
//       console.error('There was an error!', error);
//     });
// };

// const handleSubmit = () => {
//   const formData = new FormData()
//   Object.entries(responses).forEach(([questionName, response]) => {
//     if (
//       typeof response === 'object' &&
//       response !== null &&
//       !(response instanceof File)
//     ) {
//       response = Object.entries(response)
//         .filter(([choiceText, checked]) => checked)
//         .map(([choiceText]) => choiceText)
//         .join(', ')
//     }
//     formData.append(questionName, response)
//   })

//   axios
//     .put('http://localhost:8000/api/questions/responses', formData, {

//     })
//     .then(response => {
//       console.log('Responses submitted successfully!')
//       alert('Responses submitted successfully!')
//     })
//     .catch(error => {
//       console.error('There was an error!', error)
//       alert('There was an error submitting your responses. Please try again.')
//     })
// }

// const handleSubmit = () => {
//   axios
//     .put('http://localhost:8000/api/questions/responses', responses)
//     .then(response => {
//       console.log('Responses submitted successfully!')
//     })
//     .catch(error => {
//       console.error('There was an error!', error)
//     })
// }
