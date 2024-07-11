//react
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
  } from 'https://esm.sh/react@18.2.0';
  //react dom
  import { createRoot } from 'https://esm.sh/react-dom@18.2.0/client';
  
  //helpers
  const getRequiredStyles = (node, requiredStyles) => {
    const styleArr = {};
    requiredStyles.map((a) => (styleArr[a] = getComputedStyle(node).getPropertyValue(a)));
    return styleArr;
  };
  
  const Side = ({ children, onRef, isFront }) => (
    <div className={`card__face card__face--${isFront ? 'front' : 'back'}`} ref={onRef}>
      {children}
    </div>
  );
  
  // flip component
  const Flip = ({
    interactionMode = 'hover',
    animationDuration = '600ms',
    frontContent,
    backContent,
  }) => {
    const [frontHeight, setFrontHeight] = useState(0),
      [backHeight, setBackHeight] = useState(0),
      [isFlipped, setIsFlipped] = useState(false),
      image = new Image(),
      height = useMemo(() => {
        return frontHeight >= backHeight ? frontHeight : backHeight;
      }, [frontHeight, backHeight]);
    let loadTimer = useRef(0);
  
    const frontRef = useCallback((node) => {
      if (node !== null) {
        setFrontHeight(parseInt(getRequiredStyles(node, ['height']).height, 10));
      }
    }, []);
  
    const backRef = useCallback((node) => {
      if (node !== null) {
        setBackHeight(parseInt(getRequiredStyles(node, ['height']).height, 10));
      }
    }, []);
  
    useEffect(() => {
      return () => {
        clearTimeout(loadTimer.current);
      };
    }, []);
  
    useEffect(() => {
      const images = document.querySelectorAll('.flip-wrapper img');
  
      if (!_.isEmpty(images)) {
        // the following is used to solve the race condition issue if we have images in any side "front, back"
        Array.from(images).forEach((el) => {
          if (el.src) {
            image.src = el.src;
            image.addEventListener('load', onImgLoaded);
          }
        });
      }
      //eslint-disable-next-line
    }, []);
  
    const onImgLoaded = () => {
      if (loadTimer.current) {
        clearTimeout(loadTimer.current);
      }
  
      if (!image.complete) {
        loadTimer.current = setTimeout(() => {
          onImgLoaded();
        }, 3);
      } else {
        const front = document.querySelector('.flip-wrapper .card__face--front');
        const back = document.querySelector('.flip-wrapper .card__face--back');
  
        setFrontHeight(parseInt(getRequiredStyles(front, ['height']).height, 10));
        setBackHeight(parseInt(getRequiredStyles(back, ['height']).height, 10));
      }
    };
  
    const flipCardHandler = () => {
      setIsFlipped((prev) => !prev);
    };
  
    const mouseEnterHandler = () => {
      setIsFlipped(true);
    };
  
    const mouseLeaveHandler = () => {
      setIsFlipped(false);
    };
  
    return (
      <div
        style={{ height }}
        className="flip-wrapper"
        onMouseEnter={interactionMode === 'hover' ? mouseEnterHandler : undefined}
        onMouseLeave={interactionMode === 'hover' ? mouseLeaveHandler : undefined}
      >
        <div
          className={`card ${isFlipped ? 'is-flipped' : ''}`}
          style={{ transition: `transform ${animationDuration}` }}
          onClick={interactionMode === 'click' ? flipCardHandler : undefined}
        >
          <Side onRef={frontRef} isFront>
            {frontContent}
          </Side>
          <Side onRef={backRef}>{backContent}</Side>
        </div>
      </div>
    );
  };
  
  const App = () => (
    <div className="container">
      {/*Flip component properties:
      - interactionMode: takes a string for the interaction mode "hover || click" (Note: default value is "hover")
      - animationDuration: animation duration in milliseconds (default is "600ms")
      - frontContent: ReactNode representing the front card content (Note: you may need to set the height of it)
      - backContent: ReactNode representing the back card content (Note: you may need to set the height of it) */}
      <h3>Example using hover (hover over to flip)</h3>
      <Flip
        interactionMode="hover"
        frontContent={
          <>
            <h1>Front side</h1>
            <p>Flip component using React.</p>
            <p>
              <i>It has 2 interaction modes:</i>
            </p>
            <p>
              - <strong>hover</strong>
            </p>
            <p>
              - <strong>click</strong>
            </p>
            <p>
              <i>You can modify the animation duration as well.</i>
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
          </>
        }
        backContent={
          <>
            <h1>Back side</h1>
            <img src="https://picsum.photos/id/572/300/300" alt="image" />
          </>
        }
      />
      <hr />
      <h3>Example using click (click to flip)</h3>
      <Flip
        interactionMode="click"
        frontContent={
          <>
            <h1>Front side</h1>
            <p>Flip component using React.</p>
            <p>
              <i>It has 2 interaction modes:</i>
            </p>
            <p>
              - <strong>hover</strong>
            </p>
            <p>
              - <strong>click</strong>
            </p>
            <p>
              <i>You can modify the animation duration as well.</i>
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
          </>
        }
        backContent={
          <>
            <h1>Back side</h1>
            <img src="https://picsum.photos/id/572/300/300" alt="image" />
          </>
        }
      />
    </div>
  );
  
  const container = document.getElementById('app'),
    root = createRoot(container);
  
  root.render(<App />);
  