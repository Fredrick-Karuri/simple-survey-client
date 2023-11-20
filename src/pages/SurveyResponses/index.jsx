import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Text } from 'components'
import { useNavigate } from 'react-router-dom'

function SurveyResponses () {
  const [responses, setResponses] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [emailFilter, setEmailFilter] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    axios
      //api link to the responses
      .get(
        `http://localhost:8000/api/questions/responses?page=${currentPage}&page_size=${pageSize}&email=${emailFilter}`
      )
      .then(res => {
        console.log(res.data) // Log the response data
        setResponses(res.data.results) // Update this line
      })
      .catch(err => console.error(err))
  }, [currentPage, pageSize, emailFilter])
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }
  return (
    <div className='  flex flex-col gap-3 items-center'>
      <div className='flex items-center  gap-10  m-4 '>
        <div className='text-3xl '>
          <Text> Survey Responses</Text>
        </div>
        <button
          className='text-blue-500 border-blue-500 border-[2px] p-3 '
          onClick={() => navigate('/')}
        >
          Back to home
        </button>
      </div>

      <input
        type='text'
        value={emailFilter}
        onChange={e => setEmailFilter(e.target.value)}
        placeholder='Filter by email'
      />
      <table className='m-2  table-fixed w-[72vw]  md:w-[90vw] text-center'>
        <thead>
          <tr className=' bg-blue-200'>
            <th className='w-1/3 p-2'>ID</th>
            <th className='w-1/3 p-2'>User Details</th>
            <th className='w-1/3 p-2'>File Uploaded</th>
            <th className='w-1/3 p-2'>Date Responded</th>
          </tr>
        </thead>
        <tbody>
          {responses &&
            responses.map(response => (
              <tr key={response.id}>
                <td className='p-2 text-base'>{response.id}</td>
                <td className='p-2 text-base'>{response.text}</td>
                <td className='p-2 text-base'>{response.file}</td>
                <td className='p-2 text-base'>
                  {new Date(response.date_responded).toLocaleString()}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className='my-4 mx-4 gap-2 flex text-base'>
        <button
          className='text-blue-500 border-blue-500 border-[2px] p-3'
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className='bg-blue-500 p-3 text-white  '
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default SurveyResponses
