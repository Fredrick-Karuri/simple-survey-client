// import React from "react";

// import { useNavigate } from "react-router-dom";

// import { Button, Img, List, Text } from "components";

// const ResponsesPage = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="bg-white-A700 flex flex-col font-robotoserif items-start justify-start mx-auto md:px-10 px-16 sm:px-5 py-28 w-auto sm:w-full md:w-full">
//         <div className="flex flex-col h-full items-start justify-start max-w-[1312px] mx-auto w-full">
//           <div className="border border-black-900 border-solid flex md:flex-col flex-row gap-3 items-center justify-start p-6 sm:px-5 w-full">
//             <div className="flex flex-1 flex-col font-robotocondensed items-start justify-start w-full">
//               <Text
//                 className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
//                 size="txtRobotoCondensedBold40"
//               >
//                 Sky World Survey Responses
//               </Text>
//             </div>
//             <Button
//               className="common-pointer cursor-pointer font-robotoserif min-w-[150px] outline outline-[1px] outline-light_blue-A700 text-base text-center"
//               onClick={() => navigate("/")}
//               shape="square"
//             >
//               Back to home
//             </Button>
//           </div>
//           <div className="flex flex-col gap-[43px] h-full items-start justify-between w-full">
//             <div className="flex flex-col h-[621px] md:h-auto items-start justify-start w-full">
//               <div className="border-black-900 border-solid border-x flex sm:flex-col flex-row md:gap-5 items-start justify-start w-full">
//                 <List
//                   className="sm:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-4/5 sm:w-full"
//                   orientation="horizontal"
//                 >
//                   <div className="flex flex-col h-full items-start justify-start w-full">
//                     <Text
//                       className="border-b border-black-900 border-solid pl-6 pr-[35px] sm:px-5 py-[18px] text-base text-black-900 w-full"
//                       size="txtRobotoSerifSemiBold16"
//                     >
//                       Name
//                     </Text>
//                   </div>
//                   <div className="flex flex-col h-full items-start justify-start w-full">
//                     <Text
//                       className="border-b border-black-900 border-solid pl-6 pr-[35px] sm:px-5 py-[18px] text-base text-black-900 w-full"
//                       size="txtRobotoSerifSemiBold16"
//                     >
//                       Gender
//                     </Text>
//                   </div>
//                   <div className="flex flex-col h-full items-start justify-start w-full">
//                     <Text
//                       className="border-b border-black-900 border-solid pl-6 pr-[35px] sm:px-5 py-[18px] text-base text-black-900 w-full"
//                       size="txtRobotoSerifSemiBold16"
//                     >
//                       Description
//                     </Text>
//                   </div>
//                   <div className="flex flex-col h-full items-start justify-start w-full">
//                     <Text
//                       className="border-b border-black-900 border-solid pl-6 pr-[35px] sm:px-5 py-[18px] text-base text-black-900 w-full"
//                       size="txtRobotoSerifSemiBold16"
//                     >
//                       Certificates
//                     </Text>
//                   </div>
//                 </List>
//                 <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
//                   <div className="border-b border-black-900 border-solid flex flex-row items-center justify-start pl-6 pr-[35px] sm:px-5 py-[18px] w-full">
//                     <Text
//                       className="text-base text-black-900 w-auto"
//                       size="txtRobotoSerifSemiBold16"
//                     >
//                       Date
//                     </Text>
//                     <Img
//                       className="h-6 w-6"
//                       src="images/img_arrowdown.svg"
//                       alt="arrowdown"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col items-start justify-start w-auto md:w-full">
//                 <div className="flex md:flex-col flex-row md:gap-5 h-[16vh] items-center justify-evenly w-full">
//                   <div className="flex flex-row gap-3 items-center justify-start px-5 py-7 w-[260px]">
//                     <Img
//                       className="h-6 w-6"
//                       src="images/img_arrowup.svg"
//                       alt="arrowup"
//                     />
//                     <Text
//                       className="flex-1 text-base text-black-900 w-auto"
//                       size="txtRobotoSerifNormalRomanMedium16"
//                     >
//                       John Doe
//                     </Text>
//                   </div>
//                   <List
//                     className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-4/5 md:w-full"
//                     orientation="horizontal"
//                   >
//                     <div className="flex flex-col items-start justify-center sm:ml-[0] sm:px-5 px-6 py-7 w-[262px]">
//                       <Text
//                         className="text-base text-black-900 w-full"
//                         size="txtRobotoSerifRegular16"
//                       >
//                         Male
//                       </Text>
//                     </div>
//                     <div className="flex flex-col items-start justify-center sm:ml-[0] sm:px-5 px-6 py-7 w-[262px]">
//                       <Text
//                         className="text-base text-black-900 w-full"
//                         size="txtRobotoSerifRegular16"
//                       >
//                         I am an experienced FullStack Engineer with over 2 years
//                         experience.
//                       </Text>
//                     </div>
//                     <div className="flex flex-col items-start justify-center sm:ml-[0] sm:px-5 px-6 py-7 w-[262px]">
//                       <Text
//                         className="text-base text-black-900 w-full"
//                         size="txtRobotoSerifRegular16"
//                       >
//                         2
//                       </Text>
//                     </div>
//                     <div className="flex flex-col items-start justify-center sm:ml-[0] sm:px-5 px-6 py-7 w-[262px]">
//                       <Text
//                         className="text-base text-black-900 w-full"
//                         size="txtRobotoSerifRegular16"
//                       >
//                         Jan 11, 2050
//                       </Text>
//                     </div>
//                   </List>
//                 </div>
//                 <div className="flex sm:flex-col flex-row md:gap-5 h-[32vh] items-center justify-evenly w-full">
//                   <div className="bg-blue-50 border-b border-black-900 border-solid flex flex-col gap-10 md:h-auto h-full items-start justify-start md:pl-10 pl-14 pr-6 sm:px-5 py-7 w-[262px]">
//                     <div className="flex flex-col gap-1 items-start justify-start w-full">
//                       <Text
//                         className="text-black-900 text-sm w-full"
//                         size="txtRobotoSerifSemiBold14"
//                       >
//                         Date joined
//                       </Text>
//                       <Text
//                         className="text-base text-black-900 w-full"
//                         size="txtRobotoSerifRegular16"
//                       >
//                         1/11/2050
//                       </Text>
//                     </div>
//                     <div className="flex flex-col gap-1 items-start justify-start w-full">
//                       <Text
//                         className="text-black-900 text-sm w-full"
//                         size="txtRobotoSerifSemiBold14"
//                       >
//                         Email
//                       </Text>
//                       <Text
//                         className="text-base text-black-900 w-full"
//                         size="txtRobotoSerifRegular16"
//                       >
//                         johndoe@gmail.com
//                       </Text>
//                     </div>
//                   </div>
//                   <div className="bg-blue-50 border-b border-black-900 border-solid flex flex-col h-full items-start justify-start sm:px-5 px-6 py-7 w-[262px]">
//                     <div className="flex flex-col gap-1 items-start justify-start w-full">
//                       <Text
//                         className="text-black-900 text-sm w-full"
//                         size="txtRobotoSerifSemiBold14"
//                       >
//                         Programming Stack
//                       </Text>
//                       <Text
//                         className="text-base text-black-900 w-full"
//                         size="txtRobotoSerifRegular16"
//                       >
//                         React, Vue
//                       </Text>
//                     </div>
//                   </div>
//                   <div className="bg-blue-50 border-b border-black-900 border-solid flex flex-col h-full items-start justify-start min-h-[25vh] sm:px-5 px-6 py-7 w-[262px]">
//                     <div className="flex flex-col gap-1 items-start justify-start w-full">
//                       <Text
//                         className="text-black-900 text-sm w-full"
//                         size="txtRobotoSerifSemiBold14"
//                       >
//                         Description
//                       </Text>
//                       <Text
//                         className="leading-[150.00%] max-w-[214px] md:max-w-full text-base text-black-900"
//                         size="txtRobotoSerifRegular16"
//                       >
//                         I am an experienced FullStack Engineer with over 2 years
//                         experience
//                       </Text>
//                     </div>
//                   </div>
//                   <div className="bg-blue-50 border-b border-black-900 border-solid flex flex-col md:h-auto h-full items-start justify-start sm:px-5 px-6 py-7 w-[262px]">
//                     <div className="flex flex-col gap-2 items-start justify-start w-full">
//                       <Text
//                         className="text-black-900 text-sm w-full"
//                         size="txtRobotoSerifSemiBold14"
//                       >
//                         Certificates
//                       </Text>
//                       <div className="flex flex-col gap-1.5 items-start justify-start w-full">
//                         <div className="bg-white-A700 cursor-pointer flex flex-col items-start justify-start px-2.5 py-[5px] rounded w-full">
//                           <Text
//                             className="leading-[150.00%] max-w-[194px] md:max-w-full text-black-900 text-sm"
//                             size="txtRobotoSerifRegular14"
//                           >
//                             Oracle Java Certification 19-08-2023.pdf
//                           </Text>
//                         </div>
//                         <div className="bg-white-A700 cursor-pointer flex flex-col items-start justify-start px-2.5 py-[5px] rounded w-full">
//                           <Text
//                             className="leading-[150.00%] max-w-[194px] md:max-w-full text-black-900 text-sm"
//                             size="txtRobotoSerifRegular14"
//                           >
//                             Oracle SQL Certification 19-08-2023.pdf
//                           </Text>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-blue-50 border-b border-black-900 border-solid flex flex-col md:h-auto h-full items-start justify-start sm:px-5 px-6 py-7 w-[262px]">
//                     <div className="flex flex-col gap-1 items-start justify-start w-full">
//                       <Text
//                         className="text-black-900 text-sm w-full"
//                         size="txtRobotoSerifSemiBold14"
//                       >
//                         Date joined
//                       </Text>
//                       <Text
//                         className="text-base text-black-900 w-full"
//                         size="txtRobotoSerifRegular16"
//                       >
//                         1/11/2050
//                       </Text>
//                     </div>
//                   </div>
//                 </div>
//                 <List
//                   className="flex flex-col gap-px items-center w-full"
//                   orientation="vertical"
//                 >
//                   <div className="flex-1 md:flex-col flex-row md:gap-5 hidden items-center justify-evenly w-full">
//                     <div className="border-b border-black-900 border-solid flex flex-row gap-3 items-center justify-start px-5 py-7 w-[262px]">
//                       <Img
//                         className="h-6 w-6"
//                         src="images/img_arrowdown_black_900.svg"
//                         alt="arrowdown"
//                       />
//                       <Text
//                         className="flex-1 text-base text-black-900 w-auto"
//                         size="txtRobotoSerifNormalRomanMedium16"
//                       >
//                         Jane Doe
//                       </Text>
//                     </div>
//                     <Text
//                       className="border-b border-black-900 border-solid h-20 pl-6 pr-[35px] sm:px-5 py-[30px] text-base text-black-900 w-auto"
//                       size="txtRobotoSerifRegular16"
//                     >
//                       Female
//                     </Text>
//                     <Button
//                       className="cursor-pointer flex text-base text-center w-[262px]"
//                       shape="square"
//                       color="black_900"
//                       size="md"
//                       variant="outline"
//                     >
//                       I am an experienced FrontEnd Engineer with over 6 years
//                       experience.
//                     </Button>
//                     <Text
//                       className="border-b border-black-900 border-solid h-20 pl-6 pr-[35px] sm:px-5 py-[30px] text-base text-black-900 w-auto"
//                       size="txtRobotoSerifRegular16"
//                     >
//                       2
//                     </Text>
//                     <Text
//                       className="border-b border-black-900 border-solid h-20 pl-6 pr-[35px] sm:px-5 py-[30px] text-base text-black-900 w-auto"
//                       size="txtRobotoSerifRegular16"
//                     >
//                       Jan 11, 2050
//                     </Text>
//                   </div>
//                   <div className="flex-1 md:flex-col flex-row md:gap-5 hidden items-center justify-evenly w-full">
//                     <div className="border-b border-black-900 border-solid flex flex-row gap-3 items-center justify-start px-5 py-7 w-[262px]">
//                       <Img
//                         className="h-6 w-6"
//                         src="images/img_arrowdown_black_900.svg"
//                         alt="arrowdown"
//                       />
//                       <Text
//                         className="flex-1 text-base text-black-900 w-auto"
//                         size="txtRobotoSerifNormalRomanMedium16"
//                       >
//                         Jane Doe
//                       </Text>
//                     </div>
//                     <Text
//                       className="border-b border-black-900 border-solid h-20 pl-6 pr-[35px] sm:px-5 py-[30px] text-base text-black-900 w-auto"
//                       size="txtRobotoSerifRegular16"
//                     >
//                       Female
//                     </Text>
//                     <Button
//                       className="cursor-pointer text-base text-center w-[262px]"
//                       shape="square"
//                       color="black_900"
//                       size="md"
//                       variant="outline"
//                     >
//                       I am an experienced FrontEnd Engineer with over 6 years
//                       experience.
//                     </Button>
//                     <Text
//                       className="border-b border-black-900 border-solid h-20 pl-6 pr-[35px] sm:px-5 py-[30px] text-base text-black-900 w-auto"
//                       size="txtRobotoSerifRegular16"
//                     >
//                       2
//                     </Text>
//                     <Text
//                       className="border-b border-black-900 border-solid h-20 pl-6 pr-[35px] sm:px-5 py-[30px] text-base text-black-900 w-auto"
//                       size="txtRobotoSerifRegular16"
//                     >
//                       Jan 11, 2050
//                     </Text>
//                   </div>
//                 </List>
//               </div>
//             </div>
//             <div className="bg-white-A700 flex flex-col items-start justify-end w-full">
//               <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-between w-full">
//                 <Button
//                   className="cursor-pointer flex items-center justify-center min-w-[113px]"
//                   leftIcon={
//                     <Img
//                       className="h-6 mr-3"
//                       src="images/img_icon_chevron_left.svg"
//                       alt="Icon / Chevron Left"
//                     />
//                   }
//                   shape="square"
//                   variant="outline"
//                 >
//                   <div className="text-base text-left">Prev</div>
//                 </Button>
//                 <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
//                   <Button
//                     className="cursor-pointer h-10 text-base text-center w-10"
//                     shape="square"
//                     color="black_900"
//                     variant="outline"
//                   >
//                     1
//                   </Button>
//                   <List
//                     className="sm:flex-col flex-row gap-0.5 grid grid-cols-3 w-3/4"
//                     orientation="horizontal"
//                   >
//                     <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
//                       <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
//                         <Text
//                           className="text-base text-black-900 text-center w-auto"
//                           size="txtRobotoSerifRegular16"
//                         >
//                           2
//                         </Text>
//                       </div>
//                     </div>
//                     <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
//                       <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
//                         <Text
//                           className="text-base text-black-900 text-center w-auto"
//                           size="txtRobotoSerifRegular16"
//                         >
//                           3
//                         </Text>
//                       </div>
//                     </div>
//                     <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
//                       <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
//                         <Text
//                           className="text-base text-black-900 text-center w-auto"
//                           size="txtRobotoSerifRegular16"
//                         >
//                           4
//                         </Text>
//                       </div>
//                     </div>
//                   </List>
//                 </div>
//                 <Button
//                   className="cursor-pointer flex items-center justify-center min-w-[115px]"
//                   rightIcon={
//                     <Img
//                       className="h-6 ml-3"
//                       src="images/img_icon_chevron_right.svg"
//                       alt="Icon / Chevron Right"
//                     />
//                   }
//                   shape="square"
//                   variant="outline"
//                 >
//                   <div className="text-base text-left">Next</div>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ResponsesPage;

import React, { useState } from 'react'
import { Text, Button } from 'components'

function ResponsesPage ({ responses }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className='overflow-x-auto'>
      <div className='flex p-4'>
        <Text
          className='sm:text-4xl md:text-[38px] text-[40px] text-black-900  w-full'
          size='txtRobotoCondensedBold40'
        >
          Sky World Survey Form
        </Text>

        <Button
          className='common-pointer cursor-pointer font-robotoserif min-w-[150px] outline outline-[1px] outline-light_blue-A700 text-base text-center'
          onClick={() => navigate('/')}
          shape='square'
        >
          Back to home
        </Button>
      </div>
      <table className='w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Description</th>
            <th>Certificates</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {responses.map((response, index) => (
            <>
              <tr
                key={index}
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              >
                <td>{response.name}</td>
                <td>{response.gender}</td>
                <td>{response.description}</td>
                <td>{response.certificates}</td>
                <td>{response.date}</td>
              </tr>
              {index === openIndex && (
                <tr>
                  <td colSpan={5}>
                    <div className='p-4'>
                      <p>
                        <strong>Date joined:</strong> {response.dateJoined}
                      </p>
                      <p>
                        <strong>Email:</strong> {response.email}
                      </p>
                      <p>
                        <strong>Programming Stack:</strong>{' '}
                        {response.programmingStack}
                      </p>
                      <p>
                        <strong>Description:</strong> {response.description}
                      </p>
                      <p>
                        <strong>Certificates:</strong>{' '}
                        {response.certificates &&
                          response.certificates.map(certificate => (
                            <div key={certificate}>{certificate}</div>
                          ))}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ResponsesPage
