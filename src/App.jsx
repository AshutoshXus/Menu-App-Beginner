import { useState } from 'react'
import Menu from './components/Menu'
import data from './data'
import Filters from './components/Filters'

const App = () => {
  const [menuItems, setMenuItem] = useState(data)

  const filterData = (selectedFilter) => {
    if (selectedFilter === 'All') {
      setMenuItem(data)
    } else {
      const value = data.filter(
        (menu) => menu.category === selectedFilter.toLowerCase()
      )
      setMenuItem(value)
    }
  }

  return (
    <main className="menu">
      <section>
        <div>
          <h1 className="title"> Our Menu </h1>
          <div className="title-underline"></div>
        </div>
        <Filters filterData={filterData} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}
export default App
