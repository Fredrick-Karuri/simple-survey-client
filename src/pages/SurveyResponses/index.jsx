import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Text } from 'components'
import { useNavigate } from 'react-router-dom'

function SurveyResponses () {
  const [responses, setResponses] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [emailFilter, setEmailFilter] = useState('')
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/questions/responses?page=${currentPage}&page_size=${pageSize}&email=${emailFilter}`
      ) // Update this line
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
          onClick={() => navigate("/")}
          
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
      <table className='m-2 table-fixed w-full text-center'>
        <thead>
          <tr>
            <th className='w-1/3'>ID</th>
            <th className='w-1/3'>Text</th>
            <th className='w-1/3'>Date Responded</th>
          </tr>
        </thead>
        <tbody>
          {responses &&
            responses.map(response => (
              <tr key={response.id}>
                <td className='p-2 text-base'>{response.id}</td>
                <td className='p-2 text-base'>{response.text}</td>
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

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const SurveyResponses = () => {
//   const [responses, setResponses] = useState({ results: [] })
//   const [filteredResponses, setFilteredResponses] = useState([])
//   const [filter, setFilter] = useState('')

//   useEffect(() => {
//     axios
//       .get('http://localhost:8000/api/questions/responses')
//       .then(response => {
//         console.log('API Response:', response.data.results) // Log the API response
//         setResponses(response.data)
//         setFilteredResponses(response.data.results)
//       })
//       .catch(error => {
//         console.error('There was an error!', error)
//       })
//   }, [])

//   const handleFilterChange = event => {
//     setFilter(event.target.value)
//     if (event.target.value) {
//       if (responses.results && Array.isArray(responses.results)) {
//         setFilteredResponses(
//           responses.results.filter(
//             response =>
//               response.user &&
//               response.user.email &&
//               response.user.email.includes(event.target.value)
//           )
//         )
//       } else {
//         console.error('responses.results is not an array:', responses.results)
//       }
//     } else {
//       setFilteredResponses(responses.results)
//     }
//   }

//   const handleDownload = response => {
//     axios
//       .get(
//         `http://localhost:8000/api/questions/responses/${response.id}/certificate`
//       )
//       .then(response => {
//         const url = window.URL.createObjectURL(new Blob([response.data]))
//         const link = document.createElement('a')
//         link.href = url
//         link.setAttribute('download', 'certificate.pdf')
//         document.body.appendChild(link)
//         link.click()
//       })
//       .catch(error => {
//         console.error('There was an error!', error)
//       })
//   }
//   return (
//     <div>
//       <div className='text-2xl font-bold'>Survey Responses</div>
//       {filteredResponses &&
//         filteredResponses.map((response, index) => (
//           <div className='mb-4 flex items-center justify-start ml-4' key={index}>
//             <div style={{width: '100%'}}>
//               <div className='flex flex-row'>{response.text}</div>
//             </div>
//             {response.certificates &&
//               response.certificates.map((certificate, i) => (
//                 <div key={i} style={{width: '100%'}}>
//                   <a href={certificate} download>
//                     {certificate}
//                   </a>
//                 </div>
//               ))}
//           </div>
//         ))}
//     </div>
//   )

{
  /* <p>Date Responded: {response.date_responded}</p> */
}

//   return (
//     <div>
//       <h1>Survey Responses</h1>
//       {filteredResponses &&
//         filteredResponses.map((response, index) => (
//           <div key={index}>
//             <h2>{response.user_name}</h2>
//             <p>Email: {response.email_address}</p>
//             <p>Description: {response.description}</p>
//             <p>Gender: {response.gender}</p>
//             <p>Programming Stack: {response.programming_stack}</p>
//             <p>Certificates:</p>
//             {response.certificates &&
//               response.certificates.map((certificate, i) => (
//                 <li key={i}>{certificate}</li>
//               ))}
//             <p>Date Responded: {response.date_responded}</p>
//           </div>
//         ))}
//     </div>
//   )

//   return (
//     <div>
//       <h1>Survey Responses</h1>
//       <input
//         type='text'
//         value={filter}
//         onChange={handleFilterChange}
//         placeholder='Filter by email address'
//       />
//       {Array.isArray(filteredResponses) &&
//         filteredResponses.map((response, index) => (
//           <div key={index}>
//             <h2>{response.email_address}</h2>
//             <p>{response.response}</p>
//             <button onClick={() => handleDownload(response)}>
//               Download Certificate
//             </button>
//           </div>
//         ))}
//     </div>
//   )
