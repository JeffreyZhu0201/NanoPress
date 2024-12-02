
interface Post{
    postId:string,
    title:string,
    author:{name:string,id:string},
    read:string,
    date:string,
    content:string,
    category:{name:string,color:string}[]
}

export default Post