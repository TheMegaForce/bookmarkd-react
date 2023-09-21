import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Index from './pages/Index'
import { bookmarkLoader } from './loader'



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Index/>} loader={bookmarkLoader}/>
            <Route path= ":id" element={<Show/>} loader ={showLoader}/>
            <Route path= ":id/edit" element={<Update/>} loader ={showLoader}/>
            <Route path="create" action={createAction} />
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    )
)


  
export default router