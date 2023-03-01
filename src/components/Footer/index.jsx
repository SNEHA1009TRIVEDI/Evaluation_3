// //create a header component
// import React from "react";
// import "./Footer.css";
// const Footer = () => {
//   return (
//     <div className="Footer">
//       <footer>Themes</footer>
//     </div>
//   );
// };
// export default Footer;

//create a header component
import React from "react";
import Filter from "../Filter/index.jsx";
import Card from "../Card/index.jsx";
import makeRequest from "../../utils/makeRequest/index.js";
import "./Footer.css";

const Footer = () => {
  const [theme, setTheme] = React.useState(null);

  React.useEffect(() => {
    makeRequest("GET", "http://localhost:8000/api/themes")
      .then((res) => {
        // console.log(res);
        setTheme(res.data.themes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 console.log(theme);

  return (
    <>
    <footer>Themes</footer>
     
    </>
  );
};
export default Footer;
