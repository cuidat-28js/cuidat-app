let key = 'ec21816683df4f9dbdedd1a16e488af1';
let url = 'https://newsapi.org/v2/top-headlines?country=mx&category=health&apiKey=ec21816683df4f9dbdedd1a16e488af1'
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function NewsAside () {


    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch articles from the news API
        const fetchArticles = async () => {
          console.log(articles. urlToImage)
          try {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=mx&category=health&apiKey=ec21816683df4f9dbdedd1a16e488af1');
            if (!response.ok) {
              throw new Error('Failed to fetch articles');
            }
            const data = await response.json();
            setArticles(data.articles);
          } catch (error) {
            console.error('Error fetching articles:', error);
          }
        };
    
        fetchArticles();
        }, []);

    return (
      <div className="flex flex-col items-center">
        <h1 className="justify-center md:mb-3 font-josefin-regular text-lg">Articulos Recomendados</h1>
        <aside className="h-56 md:h-2/3 overflow-x-auto md:overflow-y-auto items-center">
        <div className="flex flex-row md:flex-col">
        {articles.slice(0, 4).map((article, index) => (
            <a href={article.url} key={index} className="min-w-48 max-h-38 md:w-48 rounded-lg shadow-md p-2 md:mb-4 md:last:mb-0">
              <img src="../../ilustrations/grupo-salud.svg" alt="imagen de articulo" width={200} />
              <div className="p-2">
                <p className="text-xs md:text-sm">{article.title}</p>
              </div>
            </a>
        ))}
        </div>
      </aside>
      </div>
    )

}


