import postData from "./data/posts.json";
import NavBar from "./Components/NavBar.jsx";
import AllPosts from "./Components/PostsCard";

function App() {
  console.log(postData);

  // const allPosts = postData.map((eachPost)=>{
  //   return(
  //     <div>
  //       <h3>{eachPost.title}</h3>
  //       <h4>{eachPost.location}</h4>
  //       <p>{eachPost.content}</p>
  //     </div>
    
  // )})



  return (
    <main>
      < NavBar />
      < AllPosts />
    </main>
  );
}

export default App;
