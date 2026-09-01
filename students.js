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
backgroundImg.classList.add('article-image');
article.appendChild(backgroundImg);

let verTwoOverlay = document.createElement('div');
verTwoOverlay.classList.add('version-two-overlay');
article.appendChild(verTwoOverlay);

let topRow = document.createElement('div');
topRow.classList.add('post-top-row');
verTwoOverlay.appendChild(topRow);

let postCategories = document.createElement('div');
postCategories.classList.add('post-categories');
topRow.appendChild(postCategories);

let category = document.createElement('span');
category.classList.add('category');
postCategories.appendChild(category);

let postAuthor = document.createElement('div');
postAuthor.classList.add('post-author');
topRow.appendChild(postAuthor);

let profileImg = document.createElement('img');
profileImg.classList.add('profile-image');
postAuthor.appendChild(profileImg);

let authInfo = document.createElement('div');
authInfo.classList.add('author-info');
postAuthor.appendChild(authInfo);

let authName = document.createElement('h2');
authName.classList.add('author-name');
authInfo.appendChild(authName);

let authUsername = document.createElement('p');
authUsername.classList.add('author-username');
authInfo.appendChild(authUsername);

let glassContent = document.createElement('div');
glassContent.classList.add('post-glass-content');
verTwoOverlay.appendChild(glassContent);

let postTitle = document.createElement('h3');
postTitle.classList.add('post-title');
glassContent.appendChild(postTitle);

let postMsg = document.createElement('p');
postMsg.classList.add('post-message');
glassContent.appendChild(postMsg);

let bottomRow = document.createElement('div');
bottomRow.classList.add('post-bottom-row');
glassContent.appendChild(bottomRow);

let postedDate = document.createElement('p');
postedDate.classList.add('post-date');
bottomRow.appendChild(postedDate);

let postEngagement = document.createElement('div');
postEngagement.classList.add('post-engagement');
bottomRow.appendChild(postEngagement);

let likes = document.createElement('p');
likes.classList.add('likes');
postEngagement.appendChild(likes);

let views = document.createElement('p');
views.classList.add('views');
postEngagement.appendChild(views);

let replies = document.createElement('p');
replies.classList.add('replies');
postEngagement.appendChild(replies);