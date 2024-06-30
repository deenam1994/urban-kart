import './App.css';
import CategoryItem from './components/category-item/category-item.component';
import './categories.styles.scss';
import hats from './assets/images/hats.png';
import jackets from './assets/images/jackets.png';
import sneakers from './assets/images/sneakers.png';
import womens from './assets/images/womens.png';
import mens from './assets/images/men.png';

const App = () => {

  const categories = [
    {
      "id": 1,
      "title": "Hats",
      "imageUrl": hats
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": jackets
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": sneakers
    },
    {
      "id": 4,
      "title": "Womens",
      "imageUrl": womens
    },
    {
      "id": 5,
      "title": "Mens",
      "imageUrl": mens
    }
  ];

  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
        ))}
    </div>
  );
}

export default App;
