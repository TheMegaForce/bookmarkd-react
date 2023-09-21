import { redirect } from "react-router-dom";
const url = "https://bookmarkd-app.onrender.com/bookmarks";


export const createAction = async ({ request }) => {
    const formData = await request.formData();

  const bookmark = {
    title: formData.get("title"),
    url: formData.get("url"),
    };

await fetch(url + "/bookmarks", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(bookmark),
    });

    return redirect("/");

};

export const deleteAction = async ({ params }) => {
    await fetch(url + "/bookmarks/" + params.id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        // body: JSON.stringify(bookmark), 
    });

    return redirect("/");
}

export const updateAction = async ({ request, params }) => {
    const formData = await request.formData();

    const bookmark = {
        website: formData.get("website"),
        url: formData.get("url"),
    };

    await fetch(url + "/bookmarks/" + params.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bookmark),
    });

    return redirect("/");
}





    
