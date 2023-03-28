import { getGifs } from "../../helpers/getGifs"

describe('Tests with getGifs Fetch', () => { 
    
    test('should bring back 10 elements', async() => {
        
        const gifs = await getGifs('AOT');
        expect( gifs.length ).toBe( 10 );

     })//test 10 elements
     
     test('should bring back 10 elements', async() => {
         
         const gifs = await getGifs('');
         expect( gifs.length ).toBe( 0 );
 
      })//test 0 elements

    

 })//describe