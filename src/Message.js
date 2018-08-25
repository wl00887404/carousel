import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const fadeIn = keyframes`
  from {
    color: rgba(0,0,0,0);
  }
  to{
    color: #281c1c;
  }
`;

const DialogTextOnly = css`
  bottom: 50%;
  transform: translate(-50%, 50%);
`;

const Dialog = styled.div`
  position: absolute;
  left: 50%;
  bottom: 30px;
  width: 850px;
  transform: translateX(-50%);
  padding: 15px 50px 30px;
  font-size: 30px;
  font-family: PingFangTC;
  line-height: normal;
  text-align: justify;
  color: #281c1c;
  background-color: rgba(255, 255, 255, 0.8);

  transition: bottom 1s, transform 1s;
  ${({ textOnly }) => textOnly && DialogTextOnly};

  &.fade-in {
    animation: ${fadeIn} 1.2s;
  }
`;


const Body = styled.div`
  letter-spacing: normal;
`;

const Author = styled.div`
  letter-spacing: normal;
  text-align: right;
`;

export default class Message extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    author: PropTypes.string,
    textOnly: PropTypes.bool,
  };

  static defaultProps = {
    message: '',
    author: '',
    textOnly: false,
  };

  componentDidUpdate() {
    this.dom.classList.add('fade-in');
  }

  onAnimationEnd = () => {
    this.dom.classList.remove('fade-in');
  };

  setRef = (dom) => { this.dom = dom; };

  render() {
    const { setRef, onAnimationEnd } = this;
    const { message, author, textOnly } = this.props;

    return (
      <Dialog textOnly={textOnly} innerRef={setRef} onAnimationEnd={onAnimationEnd}>
        <Body>{message}</Body>
        <Author>{author}</Author>
      </Dialog>
    );
  }
}
