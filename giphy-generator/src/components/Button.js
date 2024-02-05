import { useState } from "react"
import GiphyDisplay from "./GiphyDisplay"

function Button (){
    const [gif, setGif] = useState({gif:" "})
    // data.images.fixed_height.mp4
    const giphyLoader = async () => {
        const url = "https://api.giphy.com/v1/gifs/random?tag=&rating=g"
        const apiKey = "bl4BxtHJpDymmvXnu2SrKanFO0Ud9vVv"

        const response = await fetch(`${url}&api_key=${apiKey}`)
        const giphy = await response.json();
        console.log(giphy)
        const randoGif = () => {
            setGif(() => {
                return {gif: giphy.data.images.fixed_height.url}
            })
        }
        // console.log(giphy.data.images.fixed_height.url)
        console.log(randoGif)
    }

    return(
        <div>
            <button onClick={giphyLoader}>Make API Call Again</button>
            {/* // on button click run the API function (needs to be written here) then use useState to pass over new data into GiphyDisplay */}
            <GiphyDisplay image={setGif}/>
        </div>
    )
}

export default Button