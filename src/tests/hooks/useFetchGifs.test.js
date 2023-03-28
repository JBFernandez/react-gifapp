import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('Tests on useFetchGifs hook', () => { 
    
    test('should return the initial state', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'LOTR' ) );
        const { data, loading } = result.current;
        await waitForNextUpdate();
        //console.log(data, loading);
        //const { data: images, loading } = useFetchGifs( category );

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
        
     })

        test('should return an array of images and loading in false', async() => { 

            const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'LOTR' ) );
            await waitForNextUpdate();

            const { data, loading } = result.current;  
            expect( data.length ).toBe( 10 );
            expect( loading ).toBe(false);

         })

 })// describe