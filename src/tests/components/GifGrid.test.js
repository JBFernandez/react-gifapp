import React from 'react';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifGrid from '../../components/GifGrid';
import '@testing-library/jest-dom';
jest.mock('../../hooks/useFetchGifs');
 
describe('Tests for GifGrid component', () => {
    const category = 'LOTR';
    // const wrapper = shallow(<GifGrid category={category}/>);
 
    test('should show the correct component and match with the snapshot', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot(); 
    });
 
    test('should change the snapshot when useFetchGifs is executed', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://google.com',
            title: 'ABC Title'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
 
    });
})