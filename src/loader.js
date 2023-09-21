const url = "https://bookmarkd-app.onrender.com"

export const bookmarkLoader = async () => {
    const res = await fetch(url + "/bookmarks")
    const bookmark = await res.json()
    console.log(bookmark);
    return bookmark
};

export const showLoader = async ({params}) => {
    const res = await fetch(url + "/bookmarks/" + params.id)
    const bookmark = await res.json()
    return bookmark
}