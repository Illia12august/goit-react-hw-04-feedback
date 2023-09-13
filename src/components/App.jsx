import { useState } from 'react';
import ButtonComponent from './ButtonComponent';
import Statistics from './DataComponent';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const reviews = {good, bad, neutral}
  const onReviewChange = review => {
    switch (review) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break
      case 'bad':
        setBad(prevState =>  prevState + 1);
        break
      default:
        break
    }
  };
  return (
    <>
      <ButtonComponent onChange={onReviewChange}></ButtonComponent>
      <Statistics reviews={reviews}></Statistics>
    </>
  );
};
