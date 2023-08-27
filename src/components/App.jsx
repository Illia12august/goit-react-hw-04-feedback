import { Component } from 'react';
import ButtonComponent from './ButtonComponent';
import Statistics from './DataComponent';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onReviewChange = review => {
    this.setState(prevState => {
      return {
        [review]: prevState[review] + 1,
      };
    });
  };
  render() {
    return (
      <>
        <ButtonComponent onChange={this.onReviewChange}></ButtonComponent>
        <Statistics reviews={this.state}></Statistics>
      </>
    );
  }
}
