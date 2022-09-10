import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import HomeHeader from '../components/HomeHeader';

describe('Test the components', () => {
  it('Check if the HomeHeader.js file\'s section are available', () => {
    const website = renderer.create(
      <Provider store={store}>
        <HomeHeader />
      </Provider>,
    );
    expect(website).toMatchSnapshot();
  });
});
