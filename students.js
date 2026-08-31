const discussionBoard = document.getElementById('discussion-board');

// START OF VERSION ONE
let article = document.createElement('article');
article.classList.add('discussion-post','version-one');
discussionBoard.appendChild(article);

let header = document.createElement('header');
header.classList.add('post-author');
article.appendChild(header);

let profileImg = document.createElement('img');
profileImg.classList.add('profile-image');
header.appendChild(profileImg);

let authInfo = document.createElement('div');
authInfo.classList.add('author-info');
header.appendChild(authInfo);

let authName = document.createElement('h2');
authName.classList.add('author-name');
authInfo.appendChild(authName);

let authUser = document.createElement('h2');
authUser.classList.add('author-username');
authInfo.appendChild(authUser);

let datePosted = document.createElement('p');
datePosted.classList.add('post-date');
authInfo.appendChild(datePosted);

let postTitle = document.createElement('h3');
postTitle.classList.add('post-title');
article.appendChild(postTitle);

let articleImg = document.createElement('img');
articleImg.classList.add('article-image');
article.appendChild(articleImg);

let postMsg = document.createElement('p');
postMsg.classList.add('post-message');
article.appendChild(postMsg);

let postCategories = document.createElement('div');
postCategories.classList.add('post-categories');
article.appendChild(postCategories);

let category = document.createElement('span');
category.classList.add('category');
postCategories.appendChild(category);

let footer = document.createElement('footer');
footer.classList.add('post-engagement');
article.appendChild(footer);

let metrics = document.createElement('div');
footer.appendChild(metrics);
// END OF VERSION ONE

// START OF VERSION TWO
let article = document.createElement('article');
article.classList.add('discussion-post','version-two');
discussionBoard.appendChild(article);

let backgroundImg = document.createElement('img');
article.classList.add('article-image');
article.appendChild(backgroundImg);

let verTwoOverlay = document.createElement('div');
