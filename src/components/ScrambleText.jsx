/* eslint-disable react/prop-types */
import { useScramble } from 'use-scramble';

const ScrambleText = ({ text }) => {
  const { ref, replay } = useScramble({
    text,
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 0,
    range: [97, 122],
    ignore: ['95', '!', '?',' ', '^'],
  });

  return (
    <span
      ref={ref}
      onMouseOver={replay}
      onMouseOut={replay}
      className=""
    >
      {text}
    </span>
  );
};

export default ScrambleText;