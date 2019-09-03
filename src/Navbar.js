import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import colors from "./colors";

const Spin = keyframes`
  from {
    transform: rotate(0deg)
  }

  to{
    transform: rotate(360deg)
  }
`;

const SpyGlass = styled("span")`
  display: inline-block;
  animation: ${props => props.frequency}s ${Spin} linear infinite;
`;

const Container = styled("header")`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Navlink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

class Navbar extends React.Component {
  state = {
    frequency: 10
  };

  halfFrequency = () => this.setState({ frequency: this.state.frequency / 2 });
  render() {
    return (
      <Container>
        <Navlink to="/">Adopt Me!</Navlink>
        <Navlink to="/search-params">
          <SpyGlass
            aria-label="search"
            role="img"
            onClick={this.halfFrequency}
            frequency={this.state.frequency}
          >
            🔍
          </SpyGlass>
        </Navlink>
      </Container>
    );
  }
}

export default Navbar;
