chrome.devtools.panels.create('Flexmap', '/images/lips.webp', '/html/panel.html', null);

chrome.devtools.panels.elements.createSidebarPane("Flexmap",
  function(sidebar) {
    sidebar.setPage("/html/sidebar.html");
    sidebar.setHeight("8ex");
  }
);
