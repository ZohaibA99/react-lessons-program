import {Routes, Route, NavLink, Link} from "react-router-dom";

import styled from 'styled-components'

const StyledLink = styled(NavLink)`
  color: blue;

  &.active{
    color: red;
  }
`;

// export const App = () => {
//   return (
// <div>
//     <Routes>
//       <Route path='/' element={<SharedLayout />}></Route>
//       <Route index path='/about' element={<About />}>
//         <Route path='mission' element={<Mission />}></Route>
//         <Route path='team' element={<Team />}></Route>
//         <Route path='reviews' element={<Reviews />}></Route>
//       </Route>
//       <Route path='/products' element={<Products />}></Route>
//       <Route path='/products/:productId' element={<ProductCard />}></Route>
//     </Routes>
//     </div>
//   )
// }

// export const App = () => {
//   return (
//     <div>
//       <nav>
//         <StyledLink to="/">Home</StyledLink>
//         <br />
//         <StyledLink to="/about">About</StyledLink>
//         <br />
//         <StyledLink to="about/mission">mission</StyledLink>
//         <br />
//         <StyledLink to="about/team">team</StyledLink>
//         <br />
//         <StyledLink to="about/reviews">reviews</StyledLink>
//         <br />
//         <StyledLink to="/contact">Contact</StyledLink>
//         <br />
//         <StyledLink to='/fjlak;jfdl;ajl'>jkflaj;lfjkla;jfl</StyledLink>
//       </nav>


//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       <Route path='/about' element={<About />}>
//         <Route path='mission' element={<Mission />}></Route>
//         <Route path='team' element={<Team />}></Route>
//         <Route path='reviews' element={<Reviews />}></Route>
//       </Route>
//       <Route path='/contact' element={<Contact />}></Route>
//       <Route path="*" element={<NavError />}></Route>
//     </Routes>
//     </div>
//   );
// };
