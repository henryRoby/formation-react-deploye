import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import "./Form.css";

export default function Form() {
    const [article, setArticle] = useState(
      {
        title:"",
        body:""
      }
    );
    
    const dispatch = useDispatch();
   
    /// action pour notre form
    const handleForm =(e)=>{
       e.preventDefault();
       dispatch({
         type:'ADDARTICLE',
         payload:article
       })
      //  console.log(article);
       setArticle({
        title:"",
        body:""
       })
    }
    
    /// action pour notre inputs
    const handleInputs = (e)=>{
      if (e.target.classList.contains('input-title')) {
        const newObjtState = {...article,title:e.target.value}
        setArticle(newObjtState)
      } else if (e.target.classList.contains('input-body')) {
        const newObjtState = {...article,body:e.target.value}
        setArticle(newObjtState)
      }
      // console.log(article);
    }
  return (
    <>
      <h1 className="title-form">Ecrivez un article</h1>
      <form onSubmit={handleForm} action="" className="container-form">
        <label htmlFor="titre">Titre</label>
        <input type="text" id='title' placeholder='Entrez votre titre' onChange={handleInputs} value={article.title} className='input-title'/>
        <label htmlFor="article">Votre article</label>
        <textarea id='article'  placeholder='Entrez votre article'onChange={handleInputs} value={article.body} className='input-body' ></textarea>
        <button type="">Envoyer l'article</button>
      </form>
    </>
  )
}
