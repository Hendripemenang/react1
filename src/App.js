function App(){
    const title='Blog Post'
    const body='this is my blog post'
    const comment =[
        {id:1, text:'Coment one'},
        {id:2, text:'Coment two'},
        {id:3, text:'Coment three'},
    ]
    const loading=false
    const showCommment =true
    if(loading) return <h1>loading...</h1>

    const commentBlock =(
        <div className="comment">
            <h3>Coments({comment.length}) </h3>
            <ul>
                {comment.map((comment,index)=>
                    (<li key={index}>{comment.text}</li>))}
            </ul>
        </div>
    )

    return (
        <div className='container'>
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            {showCommment && (commentBlock) }



        </div>



    )
}

export default App