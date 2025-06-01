import React from 'react'
import KinesiologaPage from './KinesiologaPage'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import NotFound from './components/NotFound';

function App() {
  const { clienteId } = useParams();
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);



  useEffect(() => {
  fetch(`/${clienteId}/textos.json`)
    .then((res) => {
      if(!res.ok) throw new Error("No existe la carpeta");
      return res.json();
    })
    .then((json) => {
      setData(json);
    })
    .catch(() => setNotFound(true));
  }, [clienteId]);

  if (notFound) return <NotFound />;
  if (!data) return <div>Cargando perfil...</div>;
  
  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        {/* <meta name="description" content={seoData.description}/>
        <meta name="keywords" content={seoData.keywords}/>
        <meta name="author" content={seoData.author}/>
        <link rel="icon" href={seoData.favicon} type="image/png"/>

        OpenGraph
        <meta property="og:title" content={seoData.title}/>
        <meta property="og:description" content={seoData.description}/>
        <meta property="og:image" content={seoData.ogImage}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://kine-pagex.netlify.app/${clienteId}`}/>

        Twitter Card
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={seoData.title}/>
        <meta name="twitter:description" content={seoData.description}/>
        <meta name="twitter:image" content={seoData.ogImage} /> */}
      </Helmet>

      <KinesiologaPage data={data}/>
    </>
  )
}

export default App

