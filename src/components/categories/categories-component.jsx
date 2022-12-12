import "./categories.styles.scss";
import CategoryItem from "../category-item/category-itme.component";
const categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default categories;
