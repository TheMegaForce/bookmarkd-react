import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import App from "./App";
  import Index from "./pages/Index";
    import Update from "./pages/Update";
  import { bookmarkLoader } from "./loader";
  import { createAction, deleteAction, updateAction } from "./action";
  
const router = createBrowserRouter(
    createRoutesFromElements(
<Route path="/" element={<App />}>
    <Route path="/" element={<Index />} loader={bookmarkLoader} />
    <Route path="id/edit" element={<Update />} loader={showLoader} />
    <Route path="create" action={createAction} />
    <Route path="update/:id" action={updateAction}/>
    <Route path="delete/:id" action={deleteAction}/>

</Route>
  
  )
)
  
  export default router
  