export default function Statistics({ reviews }) {
  const numOfReviews = reviews.good + reviews.neutral + reviews.bad;
  const percentage = (reviews.good / numOfReviews).toFixed(2);
  if(numOfReviews) {
    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good: {reviews.good}</p>
          </li>
          <li>
            <p>Neutral: {reviews.neutral}</p>
          </li>
          <li>
            <p>Bad: {reviews.bad}</p>
          </li>
          <li>
            <p>Total: {reviews.good + reviews.neutral + reviews.bad}</p>
          </li>
          <li>
            <p>Positive feedback: {percentage * 100}%</p>
          </li>
        </ul>
      </div>
    );}
    return (
        <div>
            <p>
                No feedback given
            </p>
        </div>
    )
}
