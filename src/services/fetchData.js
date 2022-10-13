import axios from 'axios'

// const fetchData = async () => {
//   const req = await window.fetch('https://restcountries.com/v3.1/all')
//   const response = req.json()

//   return response
// }

const axiosData = async () => {
  const { data } = await axios.get('https://restcountries.com/v3.1/all')
  return data
}

export { axiosData }
