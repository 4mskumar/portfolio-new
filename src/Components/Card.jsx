import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Posts } from '../Pages/Posts'
import { About } from '../Pages/About'
import { Slambook } from '../Pages/Slambook'
import { Contact } from '../Pages/Contact'
import { Content } from '../Pages/Content'

const Card = () => {
  return (
    <div className='px-[40rem] w-full min-h-screen bg-zinc-100'>
          <Routes>
            <Route path='/' element={<Posts />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/about' element={<About />} />
            <Route path='/slambook' element={<Slambook />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/content' element={<Content />} />
          </Routes>
    </div>
  )
}

export default Card