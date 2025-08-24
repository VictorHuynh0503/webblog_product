import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tailwind.css';
import { createEngineeringArticles } from './utils/engineeringArticles';
import { createScienceArticles } from './utils/scienceArticles';

// Uncomment these lines to add articles (run only once)
// async function seedAllArticles() {
//   await createEngineeringArticles();
//   await createScienceArticles();
//   console.log('All articles created successfully!');
// }
// seedAllArticles();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
