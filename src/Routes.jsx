import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import responses from 'pages/Responses/dummyData'
const Responses = React.lazy(() => import('pages/Responses'))
const Confirmation = React.lazy(() => import('pages/Confirmation'))
const Review = React.lazy(() => import('pages/Review'))
const CertificateUpload = React.lazy(() => import('pages/CertificateUpload'))
const ProgrammingStack = React.lazy(() => import('pages/ProgrammingStack'))
const Profile = React.lazy(() => import('pages/Profile'))
const Home1 = React.lazy(() => import('pages/Home1'))
const SurveyForm = React.lazy(() => import('pages/SurveyForm'))
const SurveyResponses = React.lazy(() => import('pages/SurveyResponses'))
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path='/' element={<Home1 />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/surveyform' element={<SurveyForm />} />
          <Route path='/surveyResponses' element={<SurveyResponses />} />
          <Route path='/programmingstack' element={<ProgrammingStack />} />
          <Route path='/certificateupload' element={<CertificateUpload />} />
          <Route path='/review' element={<Review />} />
          <Route path='/confirmation' element={<Confirmation />} />
          <Route
            path='/responses'
            element={<Responses responses={responses} />}
          />
          <Route path='/dhiwise-dashboard' element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  )
}
export default ProjectRoutes
