const drawer = new Drawer({
  drawer: "#drawer",
  overlay: "#overlay",
  btnOpen: "#drawer-btn-open",
  btnClose: "#drawer-btn-close",
});
console.log(drawer);

// Globals
document.addEventListener("click", (event) => {
  const $target = $(event.target);

  console.log($target);
  if (!$target.isEqual(drawer.$drawer) && !$target.isEqual(drawer.$btnOpen) ) {
    drawer.closeDrawerHandler();
  }
});
