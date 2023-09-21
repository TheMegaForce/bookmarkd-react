const url = "https://bookmarkd-app.onrender.com/bookmarks";

// export const peopleLoader = async () => {
//     const res = await fetch(url + "/people")
//     const people = await res.json();
//     console.log(people);
//     return people;
//     };

// export const userLoader = async () => {
//     const res = await fetch(url + "/users")
//     const users = await res.json();
//     return users;
//     };

export const bookmarkLoader = async () => {
    const res = await fetch(url + "/bookmarks")
    const bookmarks = await res.json();
    return bookmarks;
    };

// export const bookmarksLoader = async () => {
//     const res = await fetch(url + "/bookmarks")
//     const bookmarks = await res.json();
//     return bookmarks;
//     };