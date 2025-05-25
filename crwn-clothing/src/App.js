import "./categories.styles.scss";
import categories from "./categories.json";
import CategoryItem from "./components/category-item/category-item.component";

const App = () => {
    return (
        <div className="categories-container">
            {categories.map(({ title, id, imageUrl }) => (
                <CategoryItem
                    key={`${id}-${title}`}
                    title={title}
                    imageUrl={imageUrl}
                />
            ))}
        </div>
    );
};

export default App;
