export function getMenuData(token) {
  const MenuData = [
    {
      title: 'Home',
      url: '/',
      nName: 'nav-links',
      icon: 'fa-solid fa-anchor fa-bounce'
    }
  ];

  if (token) {
    MenuData.push(
      {
        title: 'Account',
        url: '/users/me',
        nName: 'nav-links',
        icon: 'fa-solid fa-house-flood-water fa-bounce'
      },
      {
        title: 'Create',
        url: '/charities/create',
        nName: 'nav-links',
        icon: 'fa-solid fa-laptop-file fa-bounce'
      },
      {
        title: 'Logout',
        url: '/',
        nName: 'nav-links',
        icon: 'fa-solid fa-person-walking-arrow-loop-left fa-bounce',
        id: 'logout-nav'
      }
    );
  } else {
    MenuData.push(
      {
        title: 'Login',
        url: '/login',
        nName: 'nav-links',
        icon: 'fa-solid fa-person-walking-dashed-line-arrow-right fa-bounce'
      },

      {
        title: 'Signup!',
        url: '/register',
        nName: 'nav-links-mobile',
        icon: 'fa-solid fa-anchor-circle-exclamation fa-bounce'
      }
    );
  }
  return MenuData;
}
