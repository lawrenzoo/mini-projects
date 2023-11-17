import { useEffect, useState } from "react"


export default function useFetch(url) {
//useEffect(()=>{},[]) the format to use useffect
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)

useEffect(()=>{
    const fetchData = async ()=>{
        setLoading(true)
        const response = await fetch(url);
        const result = await response.json();
        setLoading(false)
        setData(result)
    }
    fetchData()
},[url])
  return {data,loading}
}
//exporting the data after extracting from the database using usefetch
//we will have to export the data to the shopmart.jsx since it is returned as data
//importing of the usefetch will occurr in the shopmart