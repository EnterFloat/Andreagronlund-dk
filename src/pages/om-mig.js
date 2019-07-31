// import React from 'react';
// import { graphql } from "gatsby"

// import Layout from '@common/Layout';
// import Navbar from '@common/Navbar';

// import Header from '@sections/Header';
// import About from '@sections/About';
// import Brands from '@sections/Brands';
// import Team from '@sections/Team';
// import Faq from '@sections/Faq';
// import Footer from '@sections/Footer';

// import Img from 'gatsby-image'



// export default ({data}) => (
//   <Layout>
//     {/* <Navbar /> */}
//     {/* <Header />
//     <About />
//     <Brands />
//     <Team />
//     <Faq />*/}
//     <br></br>
//     <h2>{data.site.siteMetadata.title}</h2>

//     {data.allSanityGeneral.edges.map(({ node }) => (
//       <div key={node.id}>
//         <h3>{node.name}</h3>
//         <StyledContainer><Img fluid={node.aboutmeimage.asset.fluid} /></StyledContainer>
        
//       </div>
//     ))}
//     {/* <Img fluid={data.sanityGeneral.aboutmeimage.asset.fluid} /> */}
//     {/* <Footer />  */}
//   </Layout>
// );

// // export default aboutPage;


// export const query = graphql`
// query MyQuery {
//   site {
//     id
//     siteMetadata {
//       title
//     }
//   }
//   allSanityGeneral (limit: 1) {
//     edges {
//       node {
//         name
//         aboutmeimage {
//           asset {
//             fluid(maxWidth: 700) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//       }
//     }  
//   }
// }
// `