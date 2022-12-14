import CategoryItem from "../category-item/category-item-component";
import "./category-directory.style.scss";

function CategoryDirectory({ categories }) {
  return (
    <>
      <div className="directory-container">
        {categories.map(category => {
          return <CategoryItem key={category.id} category={category} />;
        })}
      </div>
    </>
  );
}

export default CategoryDirectory;
