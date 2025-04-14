// create your App component here
import { useEffect, useState } from "react";

function App(){

    const [isloading, setisloading] = useState(false)
    const [imgData, setimgData] = useState("")
    
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((r) => r.json())
        .then((data) => {
            setimgData(data.message)
            setisloading(true)
        })

    }, [])
    if(!isloading){
        return <p>Loading...</p>
    }
    
    return(
       <>
        <img src={imgData}  alt="A Random Dog"/>
       </>
    )

}
export default App;