import "./ProductDescription.css";


const ProductDescription = () => {
  return (
    <div className="product-description">
      <div className="product-description__text">
        <h2>Descripción del producto</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis quam in lacus suscipit, sed aliquam justo bibendum. Morbi quis metus tincidunt, laoreet elit sed, blandit enim. Proin et neque tincidunt, faucibus lorem non, consequat lacus. Donec vel ultrices odio. Sed et nisl a massa tincidunt bibendum. Vivamus maximus velit nec vestibulum varius. Aenean pulvinar diam quis diam egestas, ac euismod urna suscipit.</p>
      </div>
      <div className="product-description__image">
        <img src="https://via.placeholder.com/400x400" alt="Product" />
      </div>
    </div>
  );
};

export default ProductDescription;
