const discussionBoard = document.getElementById('discussion-board');

// // START OF VERSION ONE
// let article = document.createElement('article');
// article.classList.add('discussion-post','version-one');
// discussionBoard.appendChild(article);

// let header = document.createElement('header');
// header.classList.add('post-author');
// article.appendChild(header);

// let profileImg = document.createElement('img');
// profileImg.classList.add('profile-image');
// header.appendChild(profileImg);

// let authInfo = document.createElement('div');
// authInfo.classList.add('author-info');
// header.appendChild(authInfo);

// let authName = document.createElement('h2');
// authName.classList.add('author-name');
// authInfo.appendChild(authName);

// let authUser = document.createElement('h2');
// authUser.classList.add('author-username');
// authInfo.appendChild(authUser);

// let datePosted = document.createElement('p');
// datePosted.classList.add('post-date');
// authInfo.appendChild(datePosted);

// let postTitle = document.createElement('h3');
// postTitle.classList.add('post-title');
// article.appendChild(postTitle);

// let articleImg = document.createElement('img');
// articleImg.classList.add('article-image');
// article.appendChild(articleImg);

// let postMsg = document.createElement('p');
// postMsg.classList.add('post-message');
// article.appendChild(postMsg);

// let postCategories = document.createElement('div');
// postCategories.classList.add('post-categories');
// article.appendChild(postCategories);

// let category = document.createElement('span');
// category.classList.add('category');
// postCategories.appendChild(category);

// let footer = document.createElement('footer');
// footer.classList.add('post-engagement');
// article.appendChild(footer);

// let metrics = document.createElement('div');
// footer.appendChild(metrics);
// // END OF VERSION ONE

// // START OF VERSION TWO
// let article = document.createElement('article');
// article.classList.add('discussion-post','version-two');
// discussionBoard.appendChild(article);

// let backgroundImg = document.createElement('img');
// backgroundImg.classList.add('article-image');
// article.appendChild(backgroundImg);

// let verTwoOverlay = document.createElement('div');
// verTwoOverlay.classList.add('version-two-overlay');
// article.appendChild(verTwoOverlay);

// let topRow = document.createElement('div');
// topRow.classList.add('post-top-row');
// verTwoOverlay.appendChild(topRow);

// let postCategories = document.createElement('div');
// postCategories.classList.add('post-categories');
// topRow.appendChild(postCategories);

// let category = document.createElement('span');
// category.classList.add('category');
// postCategories.appendChild(category);

// let postAuthor = document.createElement('div');
// postAuthor.classList.add('post-author');
// topRow.appendChild(postAuthor);

// let profileImg = document.createElement('img');
// profileImg.classList.add('profile-image');
// postAuthor.appendChild(profileImg);

// let authInfo = document.createElement('div');
// authInfo.classList.add('author-info');
// postAuthor.appendChild(authInfo);

// let authName = document.createElement('h2');
// authName.classList.add('author-name');
// authInfo.appendChild(authName);

// let authUsername = document.createElement('p');
// authUsername.classList.add('author-username');
// authInfo.appendChild(authUsername);

// let glassContent = document.createElement('div');
// glassContent.classList.add('post-glass-content');
// verTwoOverlay.appendChild(glassContent);

// let postTitle = document.createElement('h3');
// postTitle.classList.add('post-title');
// glassContent.appendChild(postTitle);

// let postMsg = document.createElement('p');
// postMsg.classList.add('post-message');
// glassContent.appendChild(postMsg);

// let bottomRow = document.createElement('div');
// bottomRow.classList.add('post-bottom-row');
// glassContent.appendChild(bottomRow);

// let postedDate = document.createElement('p');
// postedDate.classList.add('post-date');
// bottomRow.appendChild(postedDate);

// let postEngagement = document.createElement('div');
// postEngagement.classList.add('post-engagement');
// bottomRow.appendChild(postEngagement);

// let likes = document.createElement('p');
// likes.classList.add('likes');
// postEngagement.appendChild(likes);

// let views = document.createElement('p');
// views.classList.add('views');
// postEngagement.appendChild(views);

// let replies = document.createElement('p');
// replies.classList.add('replies');
// postEngagement.appendChild(replies);
// // END OF VERSION TWO

// // START OF VERSION THREE
// let article = document.createElement('article');
// article.classList.add('discussion-post','version-three');
// discussionBoard.appendChild(article);

// let articleImg = document.createElement('img');
// articleImg.classList.add('article-image');
// article.appendChild(articleImg);

// let postContent = document.createElement('div');
// postContent.classList.add('post-content');
// article.appendChild(postContent);

// let postAuthor = document.createElement('div');
// postAuthor.classList.add('post-author');
// postContent.appendChild(postAuthor);

// let profileImg = document.createElement('img');
// profileImg.classList.add('profile-image');
// postAuthor.appendChild(profileImg);

// let authInfo = document.createElement('div');
// authInfo.classList.add('author-info');
// postAuthor.appendChild(authInfo);

// let authName = document.createElement('h2');
// authName.classList.add('author-name');
// authInfo.appendChild(authName);

// let authUsername = document.createElement('p');
// authUsername.classList.add('author-username');
// authInfo.appendChild(authUsername);

// let datePosted = document.createElement('p');
// datePosted.classList.add('post-date');
// postAuthor.appendChild(datePosted);

// let postTitle = document.createElement('h3');
// postTitle.classList.add('post-title');
// postContent.appendChild(postTitle);

// let postMsg = document.createElement('p');
// postMsg.classList.add('post-message');
// postContent.appendChild(postMsg);

// let postCategories = document.createElement('div');
// postCategories.classList.add('post-categories');
// postContent.appendChild(postCategories);

// let category = document.createElement('span');
// category.classList.add('category');
// postCategories.appendChild(category);

// let footer = document.createElement('div');
// footer.classList.add('post-engagement');
// postContent.appendChild(footer);

// let likes = document.createElement('p');
// likes.classList.add('likes');
// footer.appendChild(likes);

// let views = document.createElement('p');
// views.classList.add('views');
// footer.appendChild(views);

// let replies = document.createElement('p');
// replies.classList.add('replies');
// footer.appendChild(replies);
// // END OF VERSION THREE


function createCategories(container, categories) {
  categories.forEach(cat => {
    const badge = document.createElement('span');
    badge.classList.add('category');
    badge.textContent = cat;
    container.appendChild(badge);
  });
}

// VERSION ONE FUNCTION
function renderVersionOne(post) {
  const article = document.createElement('article');
  article.classList.add('discussion-post', 'version-one');
  article.id = `post-${post.id}`;

  const header = document.createElement('div');
  header.classList.add('post-author');

  const img = document.createElement('img');
  img.classList.add('profile-image');
  img.src = post.author.image;
  img.alt = `${post.author.name} profile picture`;
  header.appendChild(img);

  const authorInfo = document.createElement('div');
  authorInfo.classList.add('author-info');

  const name = document.createElement('h2');
  name.classList.add('author-name');
  name.textContent = post.author.name;
  authorInfo.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('author-username');
  username.textContent = `@${post.author.username}`;
  authorInfo.appendChild(username);

  header.appendChild(authorInfo);

  const date = document.createElement('p');
  date.classList.add('post-date');
  date.textContent = post.postedDate;
  header.appendChild(date);

  article.appendChild(header);

  const title = document.createElement('h3');
  title.classList.add('post-title');
  title.textContent = post.title;
  article.appendChild(title);

  const articleImg = document.createElement('img');
  articleImg.classList.add('article-image');
  articleImg.src = post.articleImage;
  articleImg.alt = post.title;
  article.appendChild(articleImg);

  const msg = document.createElement('p');
  msg.classList.add('post-message');
  msg.textContent = post.message;
  article.appendChild(msg);

  const cats = document.createElement('div');
  cats.classList.add('post-categories');
  createCategories(cats, post.categories);
  article.appendChild(cats);

  const engagement = document.createElement('div');
  engagement.classList.add('post-engagement');
  engagement.innerHTML = `♥ <strong>${post.likes}</strong> Likes · 👁 <strong>${post.views}</strong> Views · 💬 <strong>${post.replies}</strong> Replies`;

  article.appendChild(engagement);
  discussionBoard.appendChild(article);
}

// VERSION TWO FUNCTION
function renderVersionTwo(post) {
  const article = document.createElement('article');
  article.classList.add('discussion-post', 'version-two');
  article.id = `post-${post.id}`;
  // background image
  const bgImg = document.createElement('img');
  bgImg.classList.add('article-image');
  bgImg.src = post.articleImage;
  bgImg.alt = post.title;
  article.appendChild(bgImg);

  // overlay
  const verTwoOverlay = document.createElement('div');
  verTwoOverlay.classList.add('version-two-overlay');

  // top row (categories + author)
  const topRow = document.createElement('div');
  topRow.classList.add('post-top-row');

  const cats = document.createElement('div');
  cats.classList.add('post-categories');
  createCategories(cats, post.categories);
  topRow.appendChild(cats);

  const postAuthor = document.createElement('div');
  postAuthor.classList.add('post-author');

  const profile = document.createElement('img');
  profile.classList.add('profile-image');
  profile.src = post.author.image;
  profile.alt = `${post.author.name} profile picture`;
  postAuthor.appendChild(profile);

  const authorInfo = document.createElement('div');
  authorInfo.classList.add('author-info');

  const name = document.createElement('h2');
  name.classList.add('author-name');
  name.textContent = post.author.name;
  authorInfo.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('author-username');
  username.textContent = `@${post.author.username}`;
  authorInfo.appendChild(username);

  postAuthor.appendChild(authorInfo);
  topRow.appendChild(postAuthor);
  verTwoOverlay.appendChild(topRow);

  // glass content (title, message, bottom row)
  const glass = document.createElement('div');
  glass.classList.add('post-glass-content');

  const title = document.createElement('h3');
  title.classList.add('post-title');
  title.textContent = post.title;
  glass.appendChild(title);

  const msg = document.createElement('p');
  msg.classList.add('post-message');
  msg.textContent = post.message;
  glass.appendChild(msg);

  const bottomRow = document.createElement('div');
  bottomRow.classList.add('post-bottom-row');

  const date = document.createElement('p');
  date.classList.add('post-date');
  date.textContent = post.postedDate;
  bottomRow.appendChild(date);

  const engagement = document.createElement('div');
  engagement.classList.add('post-engagement');

  const likes = document.createElement('p');
  likes.classList.add('likes');
  likes.innerHTML = `♥ <strong>${post.likes}</strong> Likes`;
  engagement.appendChild(likes);

  const views = document.createElement('p');
  views.classList.add('views');
  views.innerHTML = `👁 <strong>${post.views}</strong> Views`;
  engagement.appendChild(views);

  const replies = document.createElement('p');
  replies.classList.add('replies');
  replies.innerHTML = `💬 <strong>${post.replies}</strong> Replies`;
  engagement.appendChild(replies);

  bottomRow.appendChild(engagement);
  glass.appendChild(bottomRow);

  verTwoOverlay.appendChild(glass);
  article.appendChild(verTwoOverlay);
  discussionBoard.appendChild(article);
}

// VERSION THREE FUNCTION
function renderVersionThree(post) {
  const article = document.createElement('article');
  article.classList.add('discussion-post', 'version-three');
  article.id = `post-${post.id}`;

  // article image first
  const articleImg = document.createElement('img');
  articleImg.classList.add('article-image');
  articleImg.src = post.articleImage;
  articleImg.alt = post.title;
  article.appendChild(articleImg);

  // content container
  const content = document.createElement('div');
  content.classList.add('post-content');

  // author block
  const postAuthor = document.createElement('div');
  postAuthor.classList.add('post-author');

  const profile = document.createElement('img');
  profile.classList.add('profile-image');
  profile.src = post.author.image;
  profile.alt = `${post.author.name} profile picture`;
  postAuthor.appendChild(profile);

  const authorInfo = document.createElement('div');
  authorInfo.classList.add('author-info');

  const name = document.createElement('h2');
  name.classList.add('author-name');
  name.textContent = post.author.name;
  authorInfo.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('author-username');
  username.textContent = `@${post.author.username}`;
  authorInfo.appendChild(username);

  postAuthor.appendChild(authorInfo);

  const date = document.createElement('p');
  date.classList.add('post-date');
  date.textContent = post.postedDate;
  postAuthor.appendChild(date);

  content.appendChild(postAuthor);

  // title, message, categories, engagement
  const title = document.createElement('h3');
  title.classList.add('post-title');
  title.textContent = post.title;
  content.appendChild(title);

  const msg = document.createElement('p');
  msg.classList.add('post-message');
  msg.textContent = post.message;
  content.appendChild(msg);

  const cats = document.createElement('div');
  cats.classList.add('post-categories');
  createCategories(cats, post.categories);
  content.appendChild(cats);

  const engagement = document.createElement('div');
  engagement.classList.add('post-engagement');
  engagement.innerHTML = `♥ <strong>${post.likes}</strong> Likes · 👁 <strong>${post.views}</strong> Views · 💬 <strong>${post.replies}</strong> Replies`;
  content.appendChild(engagement);

  article.appendChild(content);
  discussionBoard.appendChild(article);
}

for (let i = 0; i < discussionPosts.length; i++) {
  const post = discussionPosts[i];
  const r = i % 3;
  if (r === 0) renderVersionOne(post);
  else if (r === 1) renderVersionTwo(post);
  else renderVersionThree(post);
}