import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import GameDetail from '../components/GameDetail';

describe('Test the components', () => {
  it('Check if the GameDetail.js file\'s section are available', () => {
    const website = renderer.create(
      <Provider store={store}>
        <GameDetail />
      </Provider>,
    );
    expect(website).toMatchSnapshot();
  });
});
