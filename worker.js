export default {
  async fetch(request) {
    const url = new URL(request.url);
    return fetch("https://proxyium.com" + url.pathname, {
      headers: { host: "proxyium.com" }
    });
  }
}
