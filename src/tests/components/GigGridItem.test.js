import React from 'react';
import GifGridItem from '../../components/GifGridItem';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

describe('Tests on <GifGridItem/>', () => { 

    const title = 'A title';
    const url = 'https:localhost/example.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url} /> );

    test('should display GifGridItem correctly', () => { 


        expect(wrapper).toMatchSnapshot();
        
     })//test

     test('should have a paragraph with the title', () => { 
         const p = wrapper.find('p');
         expect( p.text().trim() ).toBe(title);
      })//test paragraph

      test('img should be equal to url and alt of props', () => { 
          const img = wrapper.find('img');
          //console.log( img.prop('src') );
          expect(img.prop('src')).toBe(url);
          expect(img.prop('alt')).toBe(title);
       })//test img props

       test('should have animate_fadeIn', () => { 
           const div = wrapper.find('div');
           const className = div.prop('className');
           expect(className.includes('animate__fadeIn')).toBe(true);
           expect(className.includes('animate__fadeIn')).not.toBe(false);
        })

 })//describe
