import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Meta from './pages/Meta'
import ErrorBoundary from './providers/ErrorBoundary'

function App() {

  return (
    <>
      <ErrorBoundary>
      <BrowserRouter>
            <Routes>
              <Route index={true} element={<Navigate to="/exchange"/>}/>
              <Route path="/exchange" element={<Home/>}/>
              <Route path="/exchange/:id/meta" element={<Meta/>}/>
            </Routes>
      </BrowserRouter>
      </ErrorBoundary>
    </>
  )
}

export default App
