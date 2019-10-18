import proxy from "http-proxy";

var proxyServer = proxy.createProxyServer({
  ignorePath: true
});

export default (req, res) => {
  proxyServer.web(req, res, {
    target: `https://isg-sandbox-passportjs.herokuapp.com/google/callback`
  });
};