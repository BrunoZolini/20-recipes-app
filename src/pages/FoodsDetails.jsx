import React from 'react';
import RecipesDetails from '../components/RecipesDetails';
// import fetchAPI from '../service/API';

export default function FoodsDetails() {
  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetchAPI(id, 'ingredient', 'Foods');
  //     const data = await res.json();
  //   }
  //   getData();
  // }, []);

  return (
    <div>
      <RecipesDetails withVideo />
    </div>
  );
}
