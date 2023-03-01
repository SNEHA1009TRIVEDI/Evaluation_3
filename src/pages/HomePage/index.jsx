import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Body from "../../components/Body";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { library,IconLookup,IconDefinition,findIconDefinition } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';



// library.add(fas);
const Home = () => {
  // const coffeeLookup: IconLookup = { prefix: 'fas', iconName: 'filter' }
  // const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup)
  // const magnifyingGlassLookup: IconLookup = { prefix: 'fas', iconName: 'magnifying-glass' }
  // const magnifyingGlassIconDefinition: IconDefinition = findIconDefinition(magnifyingGlassLookup)


  return (
    <div className="App">
       <Header/>
      <Body/>
{/* 
    <FontAwesomeIcon icon={coffeeIconDefinition} />
    <FontAwesomeIcon icon={magnifyingGlassIconDefinition} /> */}
<Footer/>
  </div>
  );
};

export default Home;