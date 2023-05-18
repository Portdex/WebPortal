import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useNavigate  } from 'react-router-dom';
import fetch from "./fetch";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate ();

  useEffect(() => {
    fetch()
        .then(data => {
          data=data.data.results.users;
          setProducts(data);
          setFilteredProducts(data); 
          console.log(filteredProducts)
   
       })
      .catch((error) => console.error(error));
  }, []);

  const handleProductSelect = (option) => {
    if (option.value === 'all') {
        setFilteredProducts(products);
    } else {
        const filtered = products.filter((product) => product.services === option.value);
      setFilteredProducts(filtered);
    }
    setSelectedProduct(null);
  };

  const handleProductClick = (username) => {
    navigate(`/productsdetails/${username}`);
  };


  const productOptions = [
    { value: 'all', label: 'All products' },
    { value: 'Accountant', label: 'Accountant' },
    { value: 'Teacher', label: 'Teacher' },
    { value: 'Software Developer', label: 'Software Developer' },
  ];

  return (
    <div style={{marginTop:'200px'}}>
      <Select
        value={productOptions.find((option) => option.value === selectedProduct)}
        onChange={handleProductSelect}
        options={productOptions}
        placeholder="Filter by category"
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.username} onClick={() => handleProductClick(product.username)}>
            {product.username}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList