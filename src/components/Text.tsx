import { useState, useRef, useLayoutEffect } from 'react';

export const useText = () => {
  const [count, setCount] = useState(0);
  const el = useRef(null);
  useLayoutEffect(() => {
    console.log(el);
  });
  return (
    <div>
      <div>
        <input
          value={count}
          ref={el}
          onChange={(e) => {
            setCount(parseFloat(e.target.value));
          }}
        />
      </div>
      <div>{count}</div>
    </div>
  );
};
