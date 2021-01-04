import React from 'react'

const Posts = ({posts, loading}) => {

    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul className="list-group list-group-flush mb-4">
            { posts.map( post => (
                <li 
                    key={post.id}
                    className="list-group-item list-group-item-dark mb-2 shadow-sm"
                    style={{ background: "#fff", border: '0px', borderRadius: '6px' }}
                >
                    {post.title}
                </li>
            )) }
        </ul>
    )

    return (
        <div >
            
        </div>
    )
}

export default Posts;