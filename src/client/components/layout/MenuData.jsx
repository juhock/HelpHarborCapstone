

export function getMenuData(token){
 const MenuData = [
  {
    title: "Home",
    url:"/",
    nName:"nav-links",
    icon:"fa-solid fa-anchor fa-bounce"
  },

  {
    title: "Create",
    url:"/charities/create",
    nName:"nav-links",
    icon:"fa-solid fa-laptop-file fa-bounce"
  },
]

if(token){ MenuData.push(
  {
    title: "Account",
    url:"/users/me",
    nName:"nav-links",
    icon:"fa-solid fa-house-flood-water fa-bounce"
  },
)} else { MenuData.push(
  {
    title: "login",
    url:"/login",
    nName:"nav-links",
    icon:"fa-solid fa-person-walking-dashed-line-arrow-right fa-bounce"
  },

  {
    title: "Signup!",
    url:"/signup",
    nName:"nav-links-mobile",
    icon:"fa-solid fa-anchor-circle-exclamation fa-bounce"
  },
)
  
}
return MenuData;
}

