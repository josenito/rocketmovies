import { Routes, Route } from 'react-router-dom'

import { Profile } from '../pages/Profile'
import { Preview } from '../pages/Preview'
import { Home } from '../pages/Home'
import { New } from '../pages/New'

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="/new" element={<New />} />
    </Routes>
  )
}