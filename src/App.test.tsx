import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App'

// Create a new Redux store instance every time it's called, with an optional preloadedState value that can be used for an initial value
// Alternately pass in an already-created Redux store instance
// Pass through additional options to RTL's original render function
// Automatically wrap the component being tested with a <Provider store={store}>
// Return the store instance in case the test needs to dispatch more actions or check state
import { renderWithProviders } from "./test-utils";

describe('Integrational test with code plit', () => {
    it('code spliting', async () => {
        renderWithProviders(<App />)

        const element = screen.getByText(/Insert Provider/i);
        expect(element).toBeInTheDocument();
        fireEvent.click(element)

        setTimeout(function() {
            const providerField: any = screen.getByTestId("providerTest").querySelector("input");
            expect(providerField).toBeInTheDocument()
            expect(providerField).toHaveValue('');
            fireEvent.change(providerField, { target: { value: '1111' } })
            expect(providerField).toHaveValue("1111");

            const dayField: any = screen.getByTestId("dayTest").querySelector("input");
            expect(dayField).toHaveValue(null);
            fireEvent.change(dayField, { target: { value: 111 } });
            expect(dayField).toHaveValue(111);

            const yearField: any = screen.getByTestId("yearTest").querySelector("input");
            expect(yearField).toHaveValue(0);
            fireEvent.change(yearField, { target: { value: 111 } });
            expect(yearField).toHaveValue(111);

            const pageField: any = screen.getByTestId("pageTest").querySelector("input");
            expect(pageField).toHaveValue('');
            fireEvent.change(pageField, { target: { value: "111" } });
            expect(pageField).toHaveValue("111");

            const viewsField: any = screen.getByTestId("viewsTest").querySelector("input");
            expect(viewsField).toHaveValue(0);
            fireEvent.change(viewsField, { target: { value: 111 } });
            expect(viewsField).toHaveValue(111);

            const buttonElement = screen.getByRole('button', { name: /Send/i })
            expect(buttonElement).toBeInTheDocument()

            fireEvent.click(buttonElement)
        }, 5000);

        await waitFor(() => {
            expect(screen.getByText(/Provider: 1111/i)).toBeInTheDocument();
            expect(screen.getByText(/Views: 111/i)).toBeInTheDocument();
            expect(screen.getByText(/Page: 111/i)).toBeInTheDocument();
            expect(screen.getByText('Date: 1111 / 111')).toBeInTheDocument();
        })
    })
})

// integrational test with code spliting with async / await didn't work, but it is working fine with setTimeout()



// describe('Home', () => {
//     it('Integrational test standard', async() => {
        //renderWithProviders(<App />)

        // const element = screen.getByText(/Insert Provider/i);
        // expect(element).toBeInTheDocument()
        // fireEvent.click(await element)

        // const providerField: any = screen.getByTestId("providerTest").querySelector("input");
        // expect(providerField).toBeInTheDocument()
        // expect(providerField).toHaveValue('');
        // fireEvent.change(providerField, { target: { value: '1111' } })
        // expect(providerField).toHaveValue("1111");

        // const dayField: any = screen.getByTestId("dayTest").querySelector("input");
        // expect(dayField).toHaveValue(null);
        // fireEvent.change(dayField, { target: { value: 111 } });
        // expect(dayField).toHaveValue(111);

        // const yearField: any = screen.getByTestId("yearTest").querySelector("input");
        // expect(yearField).toHaveValue(0);
        // fireEvent.change(yearField, { target: { value: 111 } });
        // expect(yearField).toHaveValue(111);

        // const pageField: any = screen.getByTestId("pageTest").querySelector("input");
        // expect(pageField).toHaveValue('');
        // fireEvent.change(pageField, { target: { value: "111" } });
        // expect(pageField).toHaveValue("111");

        // const viewsField: any = screen.getByTestId("viewsTest").querySelector("input");
        // expect(viewsField).toHaveValue(0);
        // fireEvent.change(viewsField, { target: { value: 111 } });
        // expect(viewsField).toHaveValue(111);

        // const buttonElement = screen.getByRole('button', { name: /Send/i })
        // expect(buttonElement).toBeInTheDocument()

        // fireEvent.click(buttonElement)

//         await waitFor(() => {
//             expect(screen.getByText(/Provider: 1111/i)).toBeInTheDocument();
//             expect(screen.getByText(/Views: 111/i)).toBeInTheDocument();
//             expect(screen.getByText(/Page: 111/i)).toBeInTheDocument();
//             expect(screen.getByText('Date: 1111 / 111')).toBeInTheDocument();
//         })
        
//     })
    
// })