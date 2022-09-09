import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Home from '../components/Games/Home';

describe('Test for Missions components', () => {
  it('Check if the Missions section are available', () => {
    const website = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(website).toMatchSnapshot();
  });
});
