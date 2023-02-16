import React, { useState, useEffect } from 'react';
import Card from "../../Components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import './Home.css'

import { Link } from "react-router-dom";

import { getArticles } from '../../redux/articles/articleReducer'
import { v4 as uuidv4 } from "uuid";



const Home = () => {
    const { articles } = useSelector(state => (
        {
            ...state.articleReducer,
        }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (articles.length === 0) {
            dispatch(getArticles());
        }

    }, []);

    // console.log(articles);
    // console.log(articles.map(item => item.title
    // ));

    return (
        <>
            <h1 className="home-title">Tous les articles</h1>
            <div className="container-cards">
                {articles.map(item => {
                    return (
                        <Card key={uuidv4()}>
                            <h3>{item.title}</h3>
                            <Link to={{
                                pathname: `articles/${item.title.replace(/\s+/g, '-').trim()}`,
                                title: item.title,
                                body: item.body
                            }}>
                                Lire l'article
                            </Link>
                        </Card>
                    )
                })}
            </div>
        </>
    );
}

export default Home;
