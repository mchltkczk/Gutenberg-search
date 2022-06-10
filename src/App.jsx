import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BookList } from './components/Books/BookList/BookList'
import { Filters } from './components/Books/Filters/Filters'
import { Header } from './components/Header/Header'
import { Search } from './components/Search/Search'
import { useState } from 'react'

function App() {
  const [searchFilters, setSearchFilters] = useState('');
  const [favourites, setFavourites] = useState(null)

  return (
   <BrowserRouter>
   <Header>
    <Search setSearchFilters={setSearchFilters}/>
    <Filters setSearchFilters={setSearchFilters} setFavourites={setFavourites} />
    </Header>
    <Routes>
      <Route path='/' element={<BookList searchFilters={searchFilters} favourites={favourites} />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
