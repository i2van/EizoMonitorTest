window.addEventListener("DOMContentLoaded", (event) => {
  // Set title.
  document.title = "EIZO Monitor Test";

  // Hide scroll.
  document.getElementsByTagName('body')[0].style.overflow = "hidden";

  // Open EIZO site in external browser.
  const tabMore = document.getElementById("tab_more");
  const clonedTabMore = tabMore.cloneNode(true);
  clonedTabMore.addEventListener("click", () => { nw.Shell.openExternal("https://eizo.eu"); });
  tabMore.replaceWith(clonedTabMore);
});

nw.App.registerGlobalHotKey(new nw.Shortcut({
  key: "Escape",
  active: () => {
    nw.Window.get().leaveFullscreen();
  }
}));

nw.App.registerGlobalHotKey(new nw.Shortcut({
  key: "F11",
  active: () => {
  }
}));
