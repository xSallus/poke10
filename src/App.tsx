import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import {
  Route,
	Routes,
  BrowserRouter
} from 'react-router-dom'

import { Home } from './pages/home'
import { Pokemon } from './pages/pokemon'

export function App() {
  const client = new QueryClient()

  return (
    <BrowserRouter>
    	<Routes>
  		  <Route
				  path="/"
					element={(
					  <QueryClientProvider client={client}>
							<ReactQueryDevtools initialIsOpen={false} />
						  <Home />
						</QueryClientProvider>
					)}
  			/>

  			<Route
				  path="/pokemon/:id"
					element={<Pokemon />}
				/>
			</Routes>
  	</BrowserRouter>
	)
}
