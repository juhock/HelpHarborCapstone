export function getMenuData(token) {
  const MenuData = [
    {
      title: "Home",
      url: "/",
      nName: "nav-links",
      icon: "fa-solid fa-anchor",
    },

    {
      title: "About us",
      url: "/about",
      nName: "nav-links",
      icon: "fa-solid fa-life-ring",
    },
  ];

  if (token) {
    MenuData.push(
      {
        title: "Account",
        url: "/users/me",
        nName: "nav-links",
        icon: "fa-solid fa-house-flood-water ",
      },
      {
        title: "Create",
        url: "/charities/create",
        nName: "nav-links",
        icon: "fa-solid fa-laptop-file ",
      },
      {
        title: "Logout",
        url: "/",
        nName: "nav-links",
        icon: "fa-solid fa-person-walking-arrow-loop-left",
        id: "logout-nav",
      }
    );
  } else {
    MenuData.push(
      {
        title: "Login",
        url: "/login",
        nName: "nav-links",
        icon: "fa-solid fa-person-walking-dashed-line-arrow-right ",
      },

      {
        title: " Signup!",
        url: "/register",
        nName: "nav-links-mobile",
        icon: "fa-solid fa-anchor-circle-exclamation fa-bounce",
      }
    );
  }
  return MenuData;
}
