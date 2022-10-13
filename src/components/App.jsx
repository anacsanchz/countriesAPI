import { useEffect, useState } from 'react'
import Layout from '../layout'
import { axiosData } from '../services/fetchData'
import Card from './common/Card'
import '../index.css'
import Loading from './common/Loading'

function App () {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const data = async () => {
      const res = await axiosData()
      setCountries(res)
    }

    data()
  }, [])

  console.log(countries[10])
  return (
    <Layout>
      <section className='container py-4'>
        <section className='row gy-3'>
          {countries.length === 0
            ? <p className='m-0'><Loading /></p>
            : countries.map((country, index) => (
              <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <Card {...country} />
              </div>
            ))}
        </section>
      </section>
    </Layout>
  )
}

export default App
