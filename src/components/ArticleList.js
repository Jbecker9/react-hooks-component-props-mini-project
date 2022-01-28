import React from "react";
import Article from "./Article"

function ArticleList(prop){
    const postMap = prop.posts.map(post => {
        return <Article key = {post.id} posts = {post}/>
    })
    console.log(postMap)
    return(
       <main>
           {postMap}
       </main> 
    )
}

export default ArticleList