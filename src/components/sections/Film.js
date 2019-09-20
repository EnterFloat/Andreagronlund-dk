import { graphql, StaticQuery } from 'gatsby';
import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import Video from '@common/Video';

// const Film = () => (
//   <StaticQuery
//     query={graphql`
//       query FilmQuery {
//         allSanityGeneral(limit: 1) {
//           edges {
//             node {
//               name
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <Container>
//         {data.allSanityGeneral.edges.map(({ node }) => (
//           <>
//             <h3>Film</h3>
//             <Button variant="primary">{node.name}</Button>
//             <Video
//               videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
//               videoTitle="Official Music Video on YouTube"
//             />
//           </>
//         ))}
//       </Container>
//     )}
//   />
// );

// export default Film;

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: 'option1' };
  }
  render() {
    // console.log(this.props.projects)
    // const general = this.props.allSanityGeneral.edges
    // console.log(projects)
    // const { data } = this.props; // add more props here as needed
    console.log(this.props.data.site.buildTime);

    // console.log(articles)
    return (
      <Container>
        {this.props.data.allSanityGeneral.edges.map(({ node }) => (
          <>
            <h3>Film</h3>
            <Button variant="primary">{node.name}</Button>
            <Video
              videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
              videoTitle="Official Music Video on YouTube"
            />
          </>
        ))}
      </Container>
    );
  }
}
export default props => (
  <StaticQuery
    query={graphql`
      query FilmQuery {
        site {
          buildTime
        }
        allSanityGeneral(limit: 1) {
          edges {
            node {
              name
            }
          }
        }
      }
    `}
    render={data => <Film data={data} {...props} />}
  />
);
