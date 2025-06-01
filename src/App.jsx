import React, { useEffect, useState } from 'react';
import KinesiologaPage from './KinesiologaPage';
import { useParams } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  const { clienteId } = useParams();
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/${clienteId}/textos.json`)
      .then((res) => {
        if (!res.ok) throw new Error("No existe la carpeta");
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch(() => setNotFound(true));
  }, [clienteId]);

  // Actualizar título y meta tags con efectos secundarios nativos
  useEffect(() => {
  if (!data) return;

  document.title = data.title || 'Título por defecto';

  // Meta description
  if (data.description) {
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.name = 'description';
      document.head.appendChild(descTag);
    }
    descTag.content = data.description;
  }

  // Favicon
  if (data.favicon) {
    let faviconTag = document.querySelector('link[rel="icon"]');
    if (!faviconTag) {
      faviconTag = document.createElement('link');
      faviconTag.rel = 'icon';
      document.head.appendChild(faviconTag);
    }
    faviconTag.href = data.favicon;
  }

  // Open Graph y Twitter meta tags
  const setMetaTag = (propertyOrName, content, isProperty = true) => {
    let selector = isProperty ? `meta[property="${propertyOrName}"]` : `meta[name="${propertyOrName}"]`;
    let tag = document.querySelector(selector);
    if (!tag) {
      tag = document.createElement('meta');
      if (isProperty) tag.setAttribute('property', propertyOrName);
      else tag.setAttribute('name', propertyOrName);
      document.head.appendChild(tag);
    }
    tag.content = content;
  };

  if (data.og) {
    Object.entries(data.og).forEach(([key, value]) => {
      setMetaTag(`og:${key}`, value, true);
    });
  }

  if (data.twitter) {
    Object.entries(data.twitter).forEach(([key, value]) => {
      setMetaTag(`twitter:${key}`, value, true);
    });
    }
  }, [data]);

  if (notFound) return <NotFound />;
  if (!data) return <div>Cargando perfil...</div>;

  return <KinesiologaPage data={data} />;
}

export default App;
