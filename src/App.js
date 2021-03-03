import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import TopHeading from './components/TopHeading/TopHeading';

function App() {
  const [articles, setArticles] = useState([]);
    useEffect(()=>{
        const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=ac9de57e0b9a4f8ea5c04561c3c5598a';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles));
    },[]);
  return (
    
      <div className='main-container'>

        <Header></Header>
        <TopHeading articles={articles}></TopHeading>
        {
          articles.map(details => <News articles={details}></News>)
        }
        
      </div>
   
  );
}

export default App;
