URI和URL的区别⟳
URI = Universal Resource Identifier
URL = Universal Resource Locator
在学习中，我们难免会遇到 URI 和 URL，有时候都傻傻分不清，为啥这边是 URI 那边又是 URL，这两者到底有什么区别呢？
我们从名字上看

统一资源标识符(Uniform Resource Identifier, URI)：是一个用于标识某一互联网资源名称的字符串。
统一资源定位符(Uniform Resource Locator, URL)：是一个用于标识和定位某一互联网资源名称的字符串。

可能大家就比较困惑了，这俩好像是一样的啊？那我们就类比一下我们现实生活中的情况：
我们要找一个人——张三，我们可以通过他的唯一的标识来找，比如说身份证，那么这个身份证就唯一的标识了一个人，这个身份证就是一个 URI；
而要找到张三，我们不一定要用身份证去找，我们还可以根据地址去找，如 在清华大学18号宿舍楼的404房间第一个床铺的张三，我们也可以唯一确定一个张三，
动物住址协议://地球/中国/北京市/清华大学/18号宿舍楼/404号寝/张三.人。而这个地址就是我们用于标识和定位的 URL。
我们从上面可以很明显的看出，URI 通过任何方法标识一个人即可，而 URL 虽然也可以标识一个人，但是它主要是通过定位地址的方法标识一个人，所以 URL 其实是 URI 的一个子集，即 URL 是靠标识定位地址的一个 URI。
Url 的构成⟳
URL（Uniform Resource Locator,统一资源定位符），用于定位网络上的资源，每一个信息资源都有统一的且在网上唯一的地址。
Url一般有以下部分组成
scheme:[subscheme]://[username:password@]host:port/path?query#fragment

Scheme: 通信协议，一般为http、https等；
Host: 服务器的域名主机名或ip地址；
Port: 端口号，此项为可选项，默认为80；
Path: 目录，由“/”隔开的字符串，表示的是主机上的目录或文件地址；
Query: 查询，此项为可选项，可以给动态网页传递参数，用“&”隔开，每个参数的名和值用“=”隔开；
Fragment: 信息片段，字符串，用于指定网络资源中的某片断；
subscheme：可选，子协议，常用于区分数据库

例子：

jdbc:mysql://localhost:3306/nemo?user=root&password=123456
jdbc:oracle:thin:@localhost:1521:nemo
jdbc:sqlserver://localhost:1433:DatabaseName=nemo


username:password：可选，用户名密码。

例子：正如命令ssh user@127.0.0.1

http://user:123@baidu.com/login
ftp://user:123@127.0.0.1
telnet://user:123@127.0.0.1
ssh://user:123@127.0.0.1




其实，把 URL 说成是网址其实是很不严谨的说法，因为 URL 有很严格的结构，表示也很灵活、有弹性。
在 RFC 3986: Uniform Resource Identifier (URI): Generic Syntax 的 Syntax Components 把 URL 描述为如下图：

如图所示，把 URL 分成几个部分，这样便可以了解URL的构成。 在 URI scheme - Wikipedia 页面中对 URL 的描述更为详细，如下图：


著作权归作者所有。
商业转载请联系作者获得授权，非商业转载请注明出处。
作者：Nemo
链接：https://www.cnblogs.com/blknemo/p/13198506.html
来源：博客园
