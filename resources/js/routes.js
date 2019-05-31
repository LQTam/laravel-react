import React from 'react'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import NotFoundPage from './pages/NotFoundPage';
import ProductActionPage from './pages/ProductActionPage';
const routes = [
    {
        path : '/',
        exact : true,
        component : () => <HomePage />
    },
    {
        path : '/products',
        exact : true,
        component : () => <ProductsPage />
    },
    {
        path : '/products/add',
        exact : true,
        component : ({history}) => <ProductActionPage history={history}/>
    },
    {
        path: "/products/:id",
        exact : true,
        component : () => <ProductsPage  />
    },
    {
        path : '/products/:id/edit',
        exact : true,
        component : ({match,history}) => <ProductActionPage history={history} match={match} />
    },
    {
        path : '/',
        component : () => <NotFoundPage />
    }
]

export default routes;
