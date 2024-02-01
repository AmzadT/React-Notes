// Task 2 ( 5 Mins )
// Now make an API request, get the data and display data during mount phase
// Boilerplate Code :

function App() {
  let [loading, setLoading] = useState(false);
  let [err, setErr] = useState(false);
  let [products, setProducts] = useState([]);

  async function fetchAndUpdateData() {
  
  }
  return (
    <>
      <div className="products-container">{JSON.stringify(products)}</div>
    </>
  );
}