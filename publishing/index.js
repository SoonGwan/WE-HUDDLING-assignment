let lastScrollTop = 0;

const scrollHandler = () => {
  const TopNav = document.getElementById('TopNav');
  const Social = document.getElementById('Social');

  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    TopNav.className = 'TopNavWrapper DownNav';
    Social.className = 'SocialSection DownSocial';
  } else {
    TopNav.className = 'TopNavWrapper UpNav';
    Social.className = 'SocialSection UpSocial';
  }
  lastScrollTop = st <= 0 ? 0 : st;
};

const selectNavItem = (id) => {
  const url = `?page=${id}`;
  history.pushState(null, null, url);
  const a = document.getElementsByClassName('BelowItems');

  let params = new URLSearchParams(document.location.search).get('page');
  for (let i = 0; i < a.length; i += 1) {
    if (a[i].id === params) {
      document.getElementById(a[i].id).style.color = 'rgb(29, 161, 242)';
      document.getElementById(a[i].id).style.borderBottom =
        '1px solid rgb(29, 161, 242)';
    } else {
      document.getElementById(a[i].id).style.color = 'grey';
      document.getElementById(a[i].id).style.borderBottom = 'none';
    }
  }
};

window.addEventListener('scroll', scrollHandler, false);
window.onload = () => {
  selectNavItem('Popular');
};
