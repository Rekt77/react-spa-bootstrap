import React from 'react';

const Post = ({location,match}) => {
    console.log('posts:',match)
    return(
        <p>
            포스트 #{match.params.id}
        </p>
    )
}

export default Post;