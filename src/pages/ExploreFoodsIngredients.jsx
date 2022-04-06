import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExploreFoodsIngredients() {
  const { searchValue, setSearchValue } = useContext(context);

  useEffect(() => {
    const requestAPI = async () => {
      const data = await fetchAPI('', 'default', 'Foods');
      setSearchValue({ ...searchValue, data });
    };
    requestAPI();
  }, []);

  return (
    <div>
      <Header title="Explore Ingredients" search={ false } profile />
      <Footer />
    </div>
  );
}
