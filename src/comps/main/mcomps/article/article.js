import './article.css';
import News from './artcomps/news/news';
import About from './artcomps/about/about';
import Contacts from './artcomps/contacts/contacts';

function Article() {
  return (
    <div className="article">
      <News />
      <About />
      <Contacts />
    </div>
  );
}

export default Article;
