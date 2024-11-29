import React from "react"
import { useParams } from "react-router-dom"

function BlogDetail(){

    var {blogId} = useParams();
    
    return (<>
        Im blog Detail,blogId: { blogId }
    </>)
}

export default BlogDetail

