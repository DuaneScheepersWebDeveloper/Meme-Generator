import React, { useState } from 'react';

const ChildComponent = ({ count, onIncrement }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent count={count} onIncrement={incrementCount} />
    </div>
  );
};

export default ParentComponent;
