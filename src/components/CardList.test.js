import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Jon Snow',
            udername: 'jonjon',
            email: 'jon@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>).length).toMatchSnapshot();
});
