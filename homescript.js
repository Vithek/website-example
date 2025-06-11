// Content below will be possible functions for the website // 

// Thinking maybe a filter for the projects page // 

// learning how to get items from carousel with code below //

// function getCarouselItems() {
//     let items = document.getElementsByClassName("carousel-item");
//     for (let i = 0; i < items.length; i++) {
//         let listItems = items[i];
//         let title = listItems.getAttribute("data-title");
//         let category = listItems.getAttribute("data-category");
//         console.log("Title: " + title + ", Category: " + category);
//     }
// }

// learning how to filter items in carousel with code below // 

// function filterCarouselItems(searchTerm) {
//     let items = document.getElementsByClassName("carousel-item");
//     for (let i = 0; i < items.length; i++) {
//         let listItems = items[i];
//         let title = listItems.getAttribute("data-title").toLowerCase();
//         let category = listItems.getAttribute("data-category").toLowerCase();
//         if (title.indexOf(searchTerm.toLowerCase()) !== -1) {
//             console.log("Match : " + title);
//         } else {
//             console.log("No match: " + title);
//         }
//     }
// }