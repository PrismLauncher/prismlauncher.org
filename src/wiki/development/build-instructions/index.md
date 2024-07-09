---
eleventyNavigation:
  key: Build Instructions
  parent: Development
  order: 4
---

<script>
  function appendToURL(url, path) {
    if (!url.pathname.endsWith("/")) {
      url.pathname += "/"; // if there isn't a slash, add it
    }
    url.pathname += path;
  }

  let url = new URL(window.location.href);
  // redirect the user to the correct place
  if (navigator.platform.indexOf("Mac") !== -1) {
      appendToURL(url, "macos");
      window.location.href = url.href;
  } else if (navigator.platform.indexOf("nix") !== -1 || navigator.platform.indexOf("nux") !== -1 || navigator.userAgent.indexOf("X11") !== -1) {
      appendToURL(url, "linux");
      window.location.href = url.href;
  }else{
      appendToURL(url, "windows");
      window.location.href = url.href;
  }
</script>
