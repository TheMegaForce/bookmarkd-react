import { redirect } from "react-router-dom"
const url = "https://bookmarkd-app.onrender.com"

export const createAction = async ({ request }) => {
    const formData = await request.formData()

    const person = {
        title: formData.get('title'),
        url: formData.get('url'),
    }

    await fetch(url + '/bookmarks', {
        method: 'post',
        headers: {
            "content-Type": 'application/json'
        },
        body: JSON.stringify(person)
    })

    return redirect('/')
};

export const updateAction = async ({ params, request }) => {
    const formData = await request.formData()

    const person = {
        title: formData.get('title'),
        url: formData.get('url'),
    }

    await fetch(url + '/bookmarks/' + params.id, {
        method: 'put',
        headers: {
            "content-Type": 'application/json'
        },
        body: JSON.stringify(person)
    })

    return redirect(`/`)
};

export const deleteAction = async ({params}) => {

    await fetch(url + '/bookmarks/' + params.id, {
        method: 'delete',
        headers: {
            "content-Type": 'application/json'
        },
    })

    return redirect("/")
};