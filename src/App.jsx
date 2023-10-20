import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import Header from './Header'
import Footer from './Footer'
import Counter from './Counter'

function App() {

  return (
    <>
      <Header title="Activity 13 - React Components, Props, and useState" />
      <Counter/>
      <Footer footer="Copyright, 2023" />
    </>
  )
}

export default App
