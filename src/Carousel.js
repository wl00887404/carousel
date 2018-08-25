import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Background from './Background';
import Message from './Message';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Zoom = styled.div`
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1280px;
  height: 740px;
  transform: translate(-50%, -50%);
`;

const HorseSteps = {
  beforePrev: css`
  top: 50%;
  left: -850px;
  transform: translate(-100%, -50%);
  transition: left 1s;
`,
  prev: css`
  top: 50%;
  left: 50px;
  transform: translate(-100%, -50%);
  transition: top 1s, left 1s, transform 1s;
`,
  active: css`
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  transition: top 1s, left 1s, right 1s, transform 1s;
`,
  next: css`
  top: 50%;
  right: 50px;
  transform: translate(100%, -50%);
  transition: right 1s;
`,
  afterNext: css`
  top: 50%;
  right: -850px;
  transform: translate(100%, -50%);
`,
};

const Horse = styled.img`
  display: block;
  position: absolute;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.5);
  max-width: 800px;
  max-height: 700px;
  ${({ step }) => step && HorseSteps[step]};
`;

class Carousel extends React.PureComponent {
  static propTypes = {
    cover: PropTypes.string,
    horses: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      message: PropTypes.string,
    })),
  };

  static defaultProps = {
    cover: '',
    horses: [],
  };

  constructor(props) {
    super(props);
    const { horses } = props;
    this.horses = horses;
    this.state = {
      queue: [
        undefined,
        undefined,
        horses[0] && this.wrapKey(horses[0]),
        horses[1] && this.wrapKey(horses[1]),
        horses[2] && this.wrapKey(horses[2]),
      ],
    };
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
    this.interval = setInterval(this.onNext, 5000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    clearInterval(this.interval);
  }

  onResize = () => {
    const { innerWidth, innerHeight } = window;

    if (innerWidth / innerHeight < 1280 / 740) {
      this.zoom.style.transform = `scale(${window.innerWidth / 1280})`;
    } else {
      this.zoom.style.transform = `scale(${window.innerHeight / 740})`;
    }
  };

  onNext = () => {
    const { horses } = this;
    const { queue } = this.state;

    this.index = (this.index + 1) % horses.length;
    const nextQueue = [...queue.slice(1), this.wrapKey(horses[this.index])];
    this.setState({ queue: nextQueue });
  };

  setZoomRef = (r) => { this.zoom = r; };

  steps = ['beforePrev', 'prev', 'active', 'next', 'afterNext'];
  index = 2;

  wrapKey = horse => ({
    ...horse,
    key: horse.id + Date.now(),
  });

  renderHorse = (horse, index) => {
    const step = this.steps[index];
    if (!horse || !step) { return null; }
    const { src, key } = horse;

    return <Horse step={step} src={src} key={key} />;
  };

  render() {
    const { setZoomRef, renderHorse } = this;
    const { cover } = this.props;
    const { queue } = this.state;
    const { message, author, src } = queue[2];

    return (
      <Container>
        <Background src={src || cover} />
        <Zoom innerRef={setZoomRef}>
          <Main>
            {queue.map(renderHorse)}
            <Message message={message} author={author} textOnly={!src} />
          </Main>
        </Zoom>
      </Container>
    );
  }
}

export default Carousel;
