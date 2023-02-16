import * as React from 'react';
import { useLocation } from 'react-router-dom';
import './Article.css'
const Article = () => {
    let location = useLocation();

    return (
        <>
            <div className="article-content">
                    {/*<h2>{location.state.title}</h2>
                    <p>{location.state.body}</p> */}
                    <h2>Votre article : </h2>
                    <p>paragraphe</p>
            </div>
        </>
    );
}

export default Article;
