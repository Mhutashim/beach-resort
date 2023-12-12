//used styled component package added via npm command - npm install styled-component
import styled from "styled-components";
import DefaultImg from "../images/defaultBcg.jpeg";

/* const myColor = "#d2d241";
const SimpleButton = styled.button`
  display: inline-block;
  color: ${myColor};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  display: block;
`; */

const StyledHero = styled.header`
  min-height: calc(100vh - 66px);
  background: url(${(props) => (props.img ? props.img : DefaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export default SimpleButton;
export default StyledHero;
