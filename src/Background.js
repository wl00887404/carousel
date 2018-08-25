import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 0.7; }
`;

const fadeOut = keyframes`
  from { opacity: 0.7; }
  to { opacity: 0; }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  transform: scale(1.2);
  opacity: 0.7;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${({ src }) => src});

  animation: 1s linear forwards;
  ${({ enter }) => enter && `animation-name:${fadeIn};`};
  ${({ leave }) => leave && `animation-name:${fadeOut};`};
`;

class Background extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string, // eslint-disable-line
  };

  static defaultProps = {
    src: '',
  };


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.src === prevState.src) { return null; }

    return {
      prev: prevState.src,
      src: nextProps.src,
    };
  }

  state = {
    prev: '',
    src: '',
  };

  render() {
    const { prev, src } = this.state;

    return (
      <React.Fragment>
        {prev && <Slide leave src={prev} key={prev} />}
        <Slide enter={prev} src={src} key={src} />
      </React.Fragment>
    );
  }
}

export default Background;
