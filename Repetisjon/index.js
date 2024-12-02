let counter = 0;

function createWishList () {
    const myWishListsDiv = document.getElementById('myWishLists');
    const newWishListName = document.getElementById('newWishListNameInput').value;
    myWishListsDiv.innerHTML += `
    <div style="background-color: aqua; display: flex; align-items: center; flex-direction: column; padding: 5px; margin: 5px; border-radius: 5px;">
        <h3>Wish List - ${newWishListName}</h3>
        <ul id="wishList-${newWishListName}-${counter}"></ul>
        <button style="width: 100%" onclick="{addToWishList('wishList-${newWishListName}-${counter}')}">+</button>
    </div>`;

    counter = counter + 1;
}

function addToWishList (listID) {
    const newWishItem = prompt("Hva ønsker du deg?");
    const wishList = document.getElementById(listID);
    wishList.innerHTML += `<li>${newWishItem}</li>`;
}