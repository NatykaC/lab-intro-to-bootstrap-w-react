import postData from "../data/posts.json"
import { useState } from "react"
import images from "../images"


const AllPosts = ()=>{
    // console.log(images)

    
    
    
    const postsInfoForCards = postData.map((eachPostsInfo)=>{
        // const[postImgTag, setPostImg]=useState(images)
         console.log(images)
        return(
            <div key={eachPostsInfo.id}>
                <h3>{eachPostsInfo.title}</h3>
                <h4>{eachPostsInfo.location}</h4>
                <p>{eachPostsInfo.content}</p>
            </div>
        )

    })
    return(
        <div>
            {postsInfoForCards}
        </div>
    )
}

export default AllPosts