import CategoryItem from "../category-item/category-item.component";
import hats from './../../assets/images/hats.png';
import jackets from './../../assets/images/jackets.png';
import sneakers from './../../assets/images/sneakers.png';
import womens from './../../assets/images/womens.png';
import mens from './../../assets/images/men.png';
import './directory.styles.scss';

const Directory = () => {

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

  return(
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
        ))}
    </div>
  );
}

export default Directory