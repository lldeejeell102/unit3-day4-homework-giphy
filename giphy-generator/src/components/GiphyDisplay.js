function GiphyDisplay (props){
    console.log(props.image.gif)
    return(
        <div>
            <h1>Pull random gifs from Giphy</h1>
            <img src={props.image.gif}/>
        </div>
    )
}

export default GiphyDisplay