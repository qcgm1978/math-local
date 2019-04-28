// 通过require获取两个node内置模块

const http = require("http");
const nUrl = require("url");
it(`Get local IP address in node.js`, () => {
  var os = require("os");
  var ifaces = os.networkInterfaces();

  Object.keys(ifaces).forEach(function(ifname) {
    var alias = 0;
    ifaces[ifname].forEach(function(iface) {
      if ("IPv4" !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        // console.log(ifname + ':' + alias, iface.address);
      } else {
        // this interface has only one ipv4 adress
        expect(ifname).toBe("en0");
        expect(iface.address).toMatch(/192.168.16.94|10.3.0.27/);
        var geoip = require("geoip-lite");

        let ip = iface.address;
        let geo = geoip.lookup(ip);

        expect(geo).toBeNull();
        ip = "207.97.227.239";
        geo = geoip.lookup(ip);

        expect(geo.ll).toEqual([37.751, -97.822]);
      }
      ++alias;
    });
  });
});
it(`实现一个简单的Server`, () => {
  // index.js
  // '127.0.0.1'表明只有本机可访问，'0.0.0.0'表示所有人可访问
  const hostname = "127.0.0.1";
  const port = 3000;
  // 通过http.createServer获取一个server实例
  // 其中(req, res) => {}，在服务器每次接收到请求时都会被执行
  const server = http.createServer((req, res) => {
    let method = req.method; // 客户端请求方法
    let url = nUrl.parse(req.url); // 将请求url字符串转换为node的url对象
    // 如果客户端GET请求'/'，会执行这个分支里面的逻辑
    if (method === "GET" && url.pathname === "/") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello World");
      return;
    }
    // 如果客户端GET请求'/api/user'，会执行这个分支里面的逻辑
    if (method === "GET" && url.pathname === "/api/user") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          code: 0,
          msg: "",
          result: {
            username: "shasharoman"
          }
        })
      );
      return;
    }
    // 没有匹配其他分支的话，执行以下逻辑
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  });
  //在此我向大家推荐一个前端全栈开发交流圈：619586920 突破技术瓶颈，提升思维能力
  // server开始监听，等待请求到来
  //   server.listen(port, hostname, () => {
  //     console.log(`Server running at <a href="http://${hostname}:${port}/`);
  //   });
});
