import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

// import { useEffect, useState } from "react";
// function useFetch(url){
//     const [data,setData]=useState(null)
//     const [loading,setLoading] = useState(false);

//     useEffect(()=>{
//         setLoading(true);
//         fetch(url)
//         .then(res=>res.json())
//         .then(data=>{
//             setData(data)
//             setLoading(false);
//         })
//     },[url])

//     return {data,loading}

// }

// export default useFetch;

