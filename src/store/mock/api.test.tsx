import { setupServer } from 'msw/node'
import { DefaultBodyType, PathParams, rest } from 'msw'
import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import ListView from '../../components/List/ListView'
import AlertView from '../../components/Alert/AlertView'


// Create a new Redux store instance every time it's called, with an optional preloadedState value that can be used for an initial value
// Alternately pass in an already-created Redux store instance
// Pass through additional options to RTL's original render function
// Automatically wrap the component being tested with a <Provider store={store}>
// Return the store instance in case the test needs to dispatch more actions or check state
import { renderWithProviders } from "../../test-utils";

const server = setupServer(
    rest.post<DefaultBodyType, PathParams<string>>('/providers', (req, res, ctx) => {
        const provider = req.json()
        return res(ctx.json(provider))
    }),
    rest.get<DefaultBodyType, PathParams>('/providers', (req, res, ctx) => {
        return res(
            ctx.json(
                [
                    {
                        provider: 5,
                        day: 229,
                        year: 2022,
                        page: "tv-schedule",
                        views: 42789
                    }
                ]
            )
        )
    })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('after application fully loads', () => {
    beforeEach( async () => {
        renderWithProviders(<ListView />)
        await waitForElementToBeRemoved(() => screen.getByTestId('skeletons'))
    } )

    it('render the component', () => {
        expect(screen.getByText('List of Providers')).toBeInTheDocument()
    })
})

describe('server returns error', () => {
    const msg = 'Network Problem'
    const type = 'error'
    beforeEach(async () => {
      server.use(
        rest.get<DefaultBodyType, { message: string }>('/providers',
          (req, res, ctx) => {
            return res(
              ctx.status(500),
              ctx.json({ message: msg })
            );
          }
        )
      );
    });

    it('renders the error', () => {
        renderWithProviders(<AlertView alert={msg} type={type} />)
        const alert = screen.getByTestId("alert")
        expect(alert).toHaveTextContent(msg);
    });
});