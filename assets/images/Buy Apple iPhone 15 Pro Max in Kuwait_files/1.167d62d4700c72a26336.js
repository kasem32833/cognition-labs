/*!
 * @version 9861375b
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"uw/9":function(e,t,r){!function webpackUniversalModuleDefinition(t,n){e.exports=n(r("q1tI"))}(0,function(e){return function(e){var t={}
function __webpack_require__(r){if(t[r])return t[r].exports
var n=t[r]={i:r,l:!1,exports:{}}
return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e}
return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=8)}([function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=void 0
"undefined"!=typeof window&&(n=window.document.createElement("a"))
t.omit=function omit(e,t){return Object.keys(e).reduce(function(r,n){return-1===t.indexOf(n)&&(r[n]=e[n]),r},{})},t.parseAsURL=function parseAsURL(e){return n||(n=window.document.createElement("a")),n.href=e,{protocol:n.protocol,hostname:n.hostname,port:n.port,pathname:n.pathname,search:n.search,hash:n.hash,host:n.host,toString:function toString(){return this.protocol+"//"+this.host+("/"===this.pathname?"":this.pathname)+this.search+this.hash}}},t.getQueryStringValue=function getQueryStringValue(e){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[.+*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))},t.getHashValue=function getHashValue(e){var t=window.location.hash.match(new RegExp(e+"=([^&]*)"))
return t?t[1]:null},t.cleanLocation=function cleanLocation(){if(window.history&&window.history.pushState){var e=window.location,t=e.protocol,r=e.host,n=e.pathname,o=e.search,i=e.hash,a=/access_token/.test(i)?"":i||"",s=o.split("&").reduce(function(e,t,r){var n=/rslCallback=/.test(t)||/code=/.test(t)||/state=/.test(t)||/error=/.test(t)||/error_reason=/.test(t)
return 0===r&&n?"?":0===r?t:n?e:e+"&"+t},"")
return s="?"===s?"":s,window.history.pushState({html:document.body.innerHTML,pageTitle:document.title},"",t+"//"+r+n+s+a),!0}},t.rslError=function rslError(e){var t=[]
return t.push("["+e.provider+"]["+e.type+"] "+e.description),e.error&&t.push(JSON.stringify(e.error,null,2)),Error(t.join("\n\nORIGINAL ERROR: "))},t.timestampFromNow=function timestampFromNow(e){var t=new Date
return t.setSeconds(t.getSeconds()+e)}},function(e,t){!function(e){"use strict"
if(!e.fetch){var t={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e}
if(t.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(e){return e&&DataView.prototype.isPrototypeOf(e)},o=ArrayBuffer.isView||function(e){return e&&r.indexOf(Object.prototype.toString.call(e))>-1}
Headers.prototype.append=function(e,t){e=normalizeName(e),t=normalizeValue(t)
var r=this.map[e]
this.map[e]=r?r+","+t:t},Headers.prototype.delete=function(e){delete this.map[normalizeName(e)]},Headers.prototype.get=function(e){return e=normalizeName(e),this.has(e)?this.map[e]:null},Headers.prototype.has=function(e){return this.map.hasOwnProperty(normalizeName(e))},Headers.prototype.set=function(e,t){this.map[normalizeName(e)]=normalizeValue(t)},Headers.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},Headers.prototype.keys=function(){var e=[]
return this.forEach(function(t,r){e.push(r)}),iteratorFor(e)},Headers.prototype.values=function(){var e=[]
return this.forEach(function(t){e.push(t)}),iteratorFor(e)},Headers.prototype.entries=function(){var e=[]
return this.forEach(function(t,r){e.push([r,t])}),iteratorFor(e)},t.iterable&&(Headers.prototype[Symbol.iterator]=Headers.prototype.entries)
var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"]
Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit})},Body.call(Request.prototype),Body.call(Response.prototype),Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url})},Response.error=function(){var e=new Response(null,{status:0,statusText:""})
return e.type="error",e}
var a=[301,302,303,307,308]
Response.redirect=function(e,t){if(-1===a.indexOf(t))throw new RangeError("Invalid status code")
return new Response(null,{status:t,headers:{location:e}})},e.Headers=Headers,e.Request=Request,e.Response=Response,e.fetch=function(e,r){return new Promise(function(n,o){var i=new Request(e,r),a=new XMLHttpRequest
a.onload=function(){var e,t,r={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new Headers,e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim()
if(n){var o=r.join(":").trim()
t.append(n,o)}}),t)}
r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL")
var o="response"in a?a.response:a.responseText
n(new Response(o,r))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials&&(a.withCredentials=!0),"responseType"in a&&t.blob&&(a.responseType="blob"),i.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}function normalizeName(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name")
return e.toLowerCase()}function normalizeValue(e){return"string"!=typeof e&&(e=String(e)),e}function iteratorFor(e){var r={next:function(){var t=e.shift()
return{done:void 0===t,value:t}}}
return t.iterable&&(r[Symbol.iterator]=function(){return r}),r}function Headers(e){this.map={},e instanceof Headers?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function consumed(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"))
e.bodyUsed=!0}function fileReaderReady(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function readBlobAsArrayBuffer(e){var t=new FileReader,r=fileReaderReady(t)
return t.readAsArrayBuffer(e),r}function bufferClone(e){if(e.slice)return e.slice(0)
var t=new Uint8Array(e.byteLength)
return t.set(new Uint8Array(e)),t.buffer}function Body(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e
else if(t.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e
else if(t.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e
else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString()
else if(t.arrayBuffer&&t.blob&&n(e))this._bodyArrayBuffer=bufferClone(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])
else{if(!t.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!o(e))throw new Error("unsupported BodyInit type")
this._bodyArrayBuffer=bufferClone(e)}else this._bodyText=""
this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var e=consumed(this)
if(e)return e
if(this._bodyBlob)return Promise.resolve(this._bodyBlob)
if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]))
if(this._bodyFormData)throw new Error("could not read FormData body as blob")
return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?consumed(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(readBlobAsArrayBuffer)}),this.text=function(){var e=consumed(this)
if(e)return e
if(this._bodyBlob)return function readBlobAsText(e){var t=new FileReader,r=fileReaderReady(t)
return t.readAsText(e),r}(this._bodyBlob)
if(this._bodyArrayBuffer)return Promise.resolve(function readArrayBufferAsText(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n])
return r.join("")}(this._bodyArrayBuffer))
if(this._bodyFormData)throw new Error("could not read FormData body as text")
return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(decode)}),this.json=function(){return this.text().then(JSON.parse)},this}function Request(e,t){var r=(t=t||{}).body
if(e instanceof Request){if(e.bodyUsed)throw new TypeError("Already read")
this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new Headers(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e)
if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new Headers(t.headers)),this.method=function normalizeMethod(e){var t=e.toUpperCase()
return i.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests")
this._initBody(r)}function decode(e){var t=new FormData
return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ")
t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function Response(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new Headers(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)},function(e,t,r){var n=r(3)
e.exports=r(12)(n.isElement,!0)},function(e,t,r){"use strict"
e.exports=r(11)},function(e,t,r){"use strict"
e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,r){t.exports=e},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=_interopRequireDefault(r(15)),o=_interopRequireDefault(r(16)),i=_interopRequireDefault(r(17)),a=_interopRequireDefault(r(21)),s=_interopRequireDefault(r(22)),u=_interopRequireDefault(r(24))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default={amazon:n.default,github:i.default,google:a.default,facebook:o.default,instagram:s.default,linkedin:u.default}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}()
var o=function(){function SocialUser(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SocialUser),this._provider=e,this._profile={id:void 0,name:void 0,firstName:void 0,lastName:void 0,email:void 0,profilePicUrl:void 0,gender:void 0},this._token={accessToken:void 0,expiresAt:void 0}}return n(SocialUser,[{key:"provider",set:function set(e){this._provider=e},get:function get(){return this._provider}},{key:"profile",set:function set(e){this._profile=e},get:function get(){return this._profile}},{key:"token",set:function set(e){this._token=e},get:function get(){return this._token}}]),SocialUser}()
t.default=o},function(e,t,r){r(1),e.exports=r(9)},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.OldSocialLogin=void 0
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=r(10)
Object.defineProperty(t,"OldSocialLogin",{enumerable:!0,get:function get(){return _interopRequireDefault(i).default}})
var a=_interopRequireDefault(r(2)),s=r(5),u=_interopRequireDefault(s),c=_interopRequireDefault(r(25)),l=_interopRequireDefault(r(6)),f=_interopRequireDefault(r(7)),p=r(0),d=_interopRequireDefault(r(26))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default=function SocialLogin(e){var t,r
return r=t=function(t){function SocialLogin(t){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SocialLogin)
var r=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(SocialLogin.__proto__||Object.getPrototypeOf(SocialLogin)).call(this,t))
return r.isStateless=!e.prototype.render,r.state={isLoaded:!1,isConnected:!1,isFetching:!1},r.sdk=l.default[t.provider],r.accessToken=null,r.fetchProvider="instagram"===t.provider||"github"===t.provider,r.loadPromise=Promise.resolve(),r.node=null,r.onLoginSuccess=r.onLoginSuccess.bind(r),r.onLoginFailure=r.onLoginFailure.bind(r),r.onLogoutFailure=r.onLogoutFailure.bind(r),r.onLogoutSuccess=r.onLogoutSuccess.bind(r),r.login=r.login.bind(r),r.logout=r.logout.bind(r),r.setInstance=r.setInstance.bind(r),r}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(SocialLogin,s.Component),o(SocialLogin,[{key:"componentDidMount",value:function componentDidMount(){var e=this,t=this.props,r=t.appId,o=t.autoCleanUri,i=t.autoLogin,a=t.gatekeeper,s=t.redirect,u=t.scope,c=t.version
this.loadPromise=(0,d.default)(this.sdk.load({appId:r,redirect:s,gatekeeper:a,scope:u,version:c}).then(function(t){return o&&(0,p.cleanLocation)(),t&&(e.accessToken=t),e.setState(function(e){return n({},e,{isLoaded:!0})},function(){"function"==typeof e.props.onLoaded&&e.props.onLoaded(),(i||e.accessToken)&&(e.fetchProvider&&!e.accessToken?e.sdk.login(r,s).catch(e.onLoginFailure):e.sdk.checkLogin(!0).then(e.onLoginSuccess,e.onLoginFailure))}),null},this.onLoginFailure))}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(e){var t=this,r=this.props,o=r.appId,i=r.gatekeeper
"github"!==r.provider||i||o===e.appId||this.setState(function(){return{isLoaded:!1,isFetching:!1,isConnected:!1}},function(){t.sdk.load(e.appId).then(function(){t.setState(function(e){return n({},e,{isLoaded:!0})})},t.onLoginFailure)})}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.loadPromise.cancel(),this.node=null}},{key:"setInstance",value:function setInstance(e){this.node=e,"function"==typeof this.props.getInstance&&this.props.getInstance(e)}},{key:"login",value:function login(){var e=this
!navigator.onLine&&this.props.onInternetFailure&&!1===this.props.onInternetFailure()||(!this.state.isLoaded||this.state.isConnected||this.state.isFetching?this.state.isLoaded&&this.state.isConnected?this.props.onLoginFailure("User already connected"):this.state.isLoaded&&this.state.isFetching?this.props.onLoginFailure("Fetching user"):this.state.isLoaded?this.props.onLoginFailure("Unknown error"):this.props.onLoginFailure("SDK not loaded"):this.setState(function(e){return n({},e,{isFetching:!0})},function(){e.sdk.login().then(e.onLoginSuccess,e.onLoginFailure).catch(e.onLoginFailure)}))}},{key:"onLoginSuccess",value:function onLoginSuccess(e){var t=this.props,onLoginSuccess=t.onLoginSuccess,r=t.provider,o=new f.default(r),i=this.sdk.generateUser(e)
o.profile=i.profile,o.token=i.token,this.node?this.setState(function(e){return n({},e,{isFetching:!1,isConnected:!0})},function(){"function"==typeof onLoginSuccess&&onLoginSuccess(o)}):"function"==typeof onLoginSuccess&&onLoginSuccess(o)}},{key:"onLoginFailure",value:function onLoginFailure(e){var onLoginFailure=this.props.onLoginFailure
this.setState(function(e){return n({},e,{isFetching:!1,isConnected:!1})},function(){"function"==typeof onLoginFailure&&onLoginFailure(e)})}},{key:"logout",value:function logout(){this.state.isLoaded&&this.state.isConnected?this.sdk.logout().then(this.onLogoutSuccess,this.onLogoutFailure):this.state.isLoaded&&!this.state.isConnected?this.props.onLoginFailure("User not connected"):this.props.onLoginFailure("SDK not loaded")}},{key:"onLogoutSuccess",value:function onLogoutSuccess(){var onLogoutSuccess=this.props.onLogoutSuccess
this.node?this.setState(function(e){return n({},e,{isConnected:!1})},function(){"function"==typeof onLogoutSuccess&&onLogoutSuccess()}):"function"==typeof onLogoutSuccess&&onLogoutSuccess()}},{key:"onLogoutFailure",value:function onLogoutFailure(e){"function"==typeof this.props.onLoginFailure&&this.props.onLoginFailure(e)}},{key:"render",value:function render(){var t=(0,p.omit)(this.props,["appId","scope","autoCleanUri","autoLogin","gatekeeper","getInstance","onLoginFailure","onLoginSuccess","onLogoutFailure","onLogoutSuccess","provider","redirect","onInternetFailure","ref"]),r={}
return(this.props.onLogoutFailure||this.props.onLogoutSuccess)&&(r={triggerLogout:this.logout}),this.isStateless||(r=n({},r,{ref:this.setInstance})),this.state.isLoaded?u.default.createElement(e,n({triggerLogin:this.login},r,t)):null}}]),SocialLogin}(),t.propTypes={appId:a.default.string.isRequired,autoCleanUri:a.default.bool,autoLogin:a.default.bool,gatekeeper:a.default.string,getInstance:a.default.func,onLoginFailure:a.default.func,onLoginSuccess:a.default.func,onLogoutFailure:a.default.func,onLogoutSuccess:a.default.func,onInternetFailure:a.default.func,provider:a.default.oneOf(c.default.providers).isRequired,redirect:function redirect(e,t,r){if("instagram"===e.provider&&(!e[t]||"string"!=typeof e[t]))return new Error("Missing required `"+t+"` prop of type `string` on "+r+".")},scope:a.default.oneOfType([a.default.array,a.default.string])},r}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=_interopRequireDefault(r(2)),i=r(5),a=_interopRequireDefault(i),s=_interopRequireDefault(r(6)),u=_interopRequireDefault(r(7))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function SocialLogin(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SocialLogin)
var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(SocialLogin.__proto__||Object.getPrototypeOf(SocialLogin)).call(this,e))
return t.id="sl"+Math.floor(65535*Math.random()),t.handleSocialLoginInvokeSuccess=t.handleSocialLoginInvokeSuccess.bind(t),t.handleSocialLoginInvokeFailure=t.handleSocialLoginInvokeFailure.bind(t),t.handleLogin=t.handleLogin.bind(t),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(SocialLogin,i.Component),n(SocialLogin,[{key:"handleSocialLoginInvokeSuccess",value:function handleSocialLoginInvokeSuccess(e){var t=this.props,r=t.callback,n=t.provider,o=new u.default,i=void 0,a=void 0
switch(n){case"google":var s=window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile(),c=window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse(!0)
i={id:s.getId(),name:s.getName(),firstName:s.getGivenName(),lastName:s.getFamilyName(),email:s.getEmail(),profilePicURL:s.getImageUrl()},a={accessToken:c.access_token,idToken:c.id_token,scope:c.scope,expiresIn:c.expires_in,firstIssued_at:c.first_issued_at,expiresAt:c.expires_at}
break
case"facebook":i={id:e.id,name:e.name,firstName:e.first_name,lastName:e.last_name,email:e.email,profilePicURL:e.picture.data.url},a={accessToken:e.authResponse.accessToken,expiresAt:e.authResponse.expiresIn}
break
case"linkedin":i={id:window.IN.ENV.auth.member_id,name:e.values[0].firstName+" "+e.values[0].lastName,firstName:e.values[0].firstName,lastName:e.values[0].lastName,email:e.values[0].emailAddress,profilePicURL:e.values[0].pictureUrl},a={accessToken:void 0}
var l=new Date
l.setSeconds(l.getSeconds()+window.IN.ENV.auth.oauth_expires_in),o.token.expiresAt=l
break
default:throw new Error("Provider ’"+n+"’ isn’t supported.")}o.provider=n,o.profile=i,o.token=a,r(o,null)}},{key:"handleSocialLoginInvokeFailure",value:function handleSocialLoginInvokeFailure(e){this.props.callback(null,e)}},{key:"handleLogin",value:function handleLogin(e,t){var r=this,n=this.props,o=n.appId,i=n.provider,a=n.version,s=this.handleSocialLoginInvokeSuccess
"facebook"===i?(window.FB.init({appId:o,xfbml:!0,version:"v"+a}),window.FB.login(function(e){var t=e
window.FB.api("/me",{fields:"email,name,id,first_name,last_name,picture"},function(e){Object.assign(e,t),s(e)})},{scope:"email"})):"linkedin"===i&&window.IN.User.authorize(function(e){window.IN.API.Profile("me").fields(["id","firstName","lastName","pictureUrl","publicProfileUrl","emailAddress"]).result(function(e){s(e)}).error(function(e){r.handleSocialLoginInvokeFailure(e)})})}},{key:"componentDidMount",value:function componentDidMount(){var e=this.props.appId
"google"===this.props.provider?s.default.google.oldLoad(e,this.id,this.handleSocialLoginInvokeSuccess,this.handleSocialLoginInvokeFailure):"facebook"===this.props.provider?s.default.facebook.oldLoad(e):"linkedin"===this.props.provider&&s.default.linkedin.oldLoad(e)}},{key:"getProfile",value:function getProfile(){window.IN.API.Profile("me").fields(["id","firstName","lastName","pictureUrl","publicProfileUrl","emailAddress"]).result(function(e){alert(e)})}},{key:"render",value:function render(){return a.default.createElement("div",{id:this.id,onClick:this.handleLogin},this.props.children)}}]),SocialLogin}()
c.propTypes={appId:o.default.string.isRequired,callback:o.default.func,children:o.default.oneOfType([o.default.string,o.default.number,o.default.element,o.default.node]).isRequired,provider:o.default.oneOf(["facebook","google","linkedin"]).isRequired,version:o.default.string},c.defaultProps={version:"2.8"},t.default=c},function(e,t,r){"use strict";(function(){Object.defineProperty(t,"__esModule",{value:!0})
var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.fundamental"):60117,m=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119
var b=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning message argument")
if(!e){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];(function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
var o=0,i="Warning: "+e.replace(/%s/g,function(){return r[o++]})
try{throw new Error(i)}catch(e){}}).apply(void 0,[t].concat(n))}}
function typeOf(e){if("object"==typeof e&&null!==e){var t=e.$$typeof
switch(t){case r:var d=e.type
switch(d){case c:case l:case o:case a:case i:case p:return d
default:var g=d&&d.$$typeof
switch(g){case u:case f:case s:return g
default:return t}}case y:case h:case n:return t}}}var w=c,_=l,k=u,P=s,T=r,L=f,S=o,E=y,O=h,I=n,C=a,R=i,A=p,N=!1
function isConcurrentMode(e){return typeOf(e)===l}t.typeOf=typeOf,t.AsyncMode=w,t.ConcurrentMode=_,t.ContextConsumer=k,t.ContextProvider=P,t.Element=T,t.ForwardRef=L,t.Fragment=S,t.Lazy=E,t.Memo=O,t.Portal=I,t.Profiler=C,t.StrictMode=R,t.Suspense=A,t.isValidElementType=function isValidElementType(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===a||e===i||e===p||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f||e.$$typeof===g||e.$$typeof===m||e.$$typeof===v)},t.isAsyncMode=function isAsyncMode(e){return N||(N=!0,b(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),isConcurrentMode(e)||typeOf(e)===c},t.isConcurrentMode=isConcurrentMode,t.isContextConsumer=function isContextConsumer(e){return typeOf(e)===u},t.isContextProvider=function isContextProvider(e){return typeOf(e)===s},t.isElement=function isElement(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function isForwardRef(e){return typeOf(e)===f},t.isFragment=function isFragment(e){return typeOf(e)===o},t.isLazy=function isLazy(e){return typeOf(e)===y},t.isMemo=function isMemo(e){return typeOf(e)===h},t.isPortal=function isPortal(e){return typeOf(e)===n},t.isProfiler=function isProfiler(e){return typeOf(e)===a},t.isStrictMode=function isStrictMode(e){return typeOf(e)===i},t.isSuspense=function isSuspense(e){return typeOf(e)===p}})()},function(e,t,r){"use strict"
var n=r(3),o=r(13),i=r(4),a=r(14),s=Function.call.bind(Object.prototype.hasOwnProperty),u=function(){}
function emptyFunctionThatReturnsNull(){return null}u=function(e){var t="Warning: "+e
try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,c="@@iterator"
var l="<<anonymous>>",f={array:createPrimitiveTypeChecker("array"),bool:createPrimitiveTypeChecker("boolean"),func:createPrimitiveTypeChecker("function"),number:createPrimitiveTypeChecker("number"),object:createPrimitiveTypeChecker("object"),string:createPrimitiveTypeChecker("string"),symbol:createPrimitiveTypeChecker("symbol"),any:function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunctionThatReturnsNull)}(),arrayOf:function createArrayOfTypeChecker(e){return createChainableTypeChecker(function validate(t,r,n,o,a){if("function"!=typeof e)return new PropTypeError("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.")
var s=t[r]
if(!Array.isArray(s)){var u=getPropType(s)
return new PropTypeError("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected an array.")}for(var c=0;c<s.length;c++){var l=e(s,c,n,o,a+"["+c+"]",i)
if(l instanceof Error)return l}return null})},element:function createElementTypeChecker(){return createChainableTypeChecker(function validate(t,r,n,o,i){var a=t[r]
if(!e(a)){var s=getPropType(a)
return new PropTypeError("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+n+"`, expected a single ReactElement.")}return null})}(),elementType:function createElementTypeTypeChecker(){return createChainableTypeChecker(function validate(e,t,r,o,i){var a=e[t]
if(!n.isValidElementType(a)){var s=getPropType(a)
return new PropTypeError("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected a single ReactElement type.")}return null})}(),instanceOf:function createInstanceTypeChecker(e){return createChainableTypeChecker(function validate(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||l,s=function getClassName(e){if(!e.constructor||!e.constructor.name)return l
return e.constructor.name}(t[r])
return new PropTypeError("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}return null})},node:function createNodeChecker(){return createChainableTypeChecker(function validate(e,t,r,n,o){if(!isNode(e[t]))return new PropTypeError("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")
return null})}(),objectOf:function createObjectOfTypeChecker(e){return createChainableTypeChecker(function validate(t,r,n,o,a){if("function"!=typeof e)return new PropTypeError("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.")
var u=t[r],c=getPropType(u)
if("object"!==c)return new PropTypeError("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected an object.")
for(var l in u)if(s(u,l)){var f=e(u,l,n,o,a+"."+l,i)
if(f instanceof Error)return f}return null})},oneOf:function createEnumTypeChecker(e){if(!Array.isArray(e))return arguments.length>1?u("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):u("Invalid argument supplied to oneOf, expected an array."),emptyFunctionThatReturnsNull
return createChainableTypeChecker(function validate(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(is(a,e[s]))return null
var u=JSON.stringify(e,function replacer(e,t){var r=getPreciseType(t)
return"symbol"===r?String(t):t})
return new PropTypeError("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+u+".")})},oneOfType:function createUnionTypeChecker(e){if(!Array.isArray(e))return u("Invalid argument supplied to oneOfType, expected an instance of array."),emptyFunctionThatReturnsNull
for(var t=0;t<e.length;t++){var r=e[t]
if("function"!=typeof r)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+getPostfixForTypeWarning(r)+" at index "+t+"."),emptyFunctionThatReturnsNull}return createChainableTypeChecker(function validate(t,r,n,o,a){for(var s=0;s<e.length;s++){var u=e[s]
if(null==u(t,r,n,o,a,i))return null}return new PropTypeError("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")})},shape:function createShapeTypeChecker(e){return createChainableTypeChecker(function validate(t,r,n,o,a){var s=t[r],u=getPropType(s)
if("object"!==u)return new PropTypeError("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.")
for(var c in e){var l=e[c]
if(l){var f=l(s,c,n,o,a+"."+c,i)
if(f)return f}}return null})},exact:function createStrictShapeTypeChecker(e){return createChainableTypeChecker(function validate(t,r,n,a,s){var u=t[r],c=getPropType(u)
if("object"!==c)return new PropTypeError("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.")
var l=o({},t[r],e)
for(var f in l){var p=e[f]
if(!p)return new PropTypeError("Invalid "+a+" `"+s+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "))
var d=p(u,f,n,a,s+"."+f,i)
if(d)return d}return null})}}
function is(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function PropTypeError(e){this.message=e,this.stack=""}function createChainableTypeChecker(e){var r={},n=0
function checkType(o,a,s,c,f,p,d){if(c=c||l,p=p||s,d!==i){if(t){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types")
throw h.name="Invariant Violation",h}if("undefined"!=typeof console){var y=c+":"+s
!r[y]&&n<3&&(u("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[y]=!0,n++)}}return null==a[s]?o?null===a[s]?new PropTypeError("The "+f+" `"+p+"` is marked as required in `"+c+"`, but its value is `null`."):new PropTypeError("The "+f+" `"+p+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,f,p)}var o=checkType.bind(null,!1)
return o.isRequired=checkType.bind(null,!0),o}function createPrimitiveTypeChecker(e){return createChainableTypeChecker(function validate(t,r,n,o,i,a){var s=t[r]
return getPropType(s)!==e?new PropTypeError("Invalid "+o+" `"+i+"` of type `"+getPreciseType(s)+"` supplied to `"+n+"`, expected `"+e+"`."):null})}function isNode(t){switch(typeof t){case"number":case"string":case"undefined":return!0
case"boolean":return!t
case"object":if(Array.isArray(t))return t.every(isNode)
if(null===t||e(t))return!0
var n=function getIteratorFn(e){var t=e&&(r&&e[r]||e[c])
if("function"==typeof t)return t}(t)
if(!n)return!1
var o,i=n.call(t)
if(n!==t.entries){for(;!(o=i.next()).done;)if(!isNode(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value
if(a&&!isNode(a[1]))return!1}return!0
default:return!1}}function getPropType(e){var t=typeof e
return Array.isArray(e)?"array":e instanceof RegExp?"object":function isSymbol(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function getPreciseType(e){if(null==e)return""+e
var t=getPropType(e)
if("object"===t){if(e instanceof Date)return"date"
if(e instanceof RegExp)return"regexp"}return t}function getPostfixForTypeWarning(e){var t=getPreciseType(e)
switch(t){case"array":case"object":return"an "+t
case"boolean":case"date":case"regexp":return"a "+t
default:return t}}return PropTypeError.prototype=Error.prototype,f.checkPropTypes=a,f.resetWarningCache=a.resetWarningCache,f.PropTypes=f,f}},function(e,t,r){"use strict"
var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable
e.exports=function shouldUseNative(){try{if(!Object.assign)return!1
var e=new String("abc")
if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1
for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r
if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1
var n={}
return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,a,s=function toObject(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined")
return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in r=Object(arguments[u]))o.call(r,c)&&(s[c]=r[c])
if(n){a=n(r)
for(var l=0;l<a.length;l++)i.call(r,a[l])&&(s[a[l]]=r[a[l]])}}return s}},function(e,t,r){"use strict"
var n=function(){},o=r(4),i={},a=Function.call.bind(Object.prototype.hasOwnProperty)
function checkPropTypes(e,t,r,s,u){for(var c in e)if(a(e,c)){var l
try{if("function"!=typeof e[c]){var f=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.")
throw f.name="Invariant Violation",f}l=e[c](t,c,s,r,null,o)}catch(e){l=e}if(!l||l instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0
var p=u?u():""
n("Failed "+r+" type: "+l.message+(null!=p?p:""))}}}n=function(e){var t="Warning: "+e
try{throw new Error(t)}catch(e){}},checkPropTypes.resetWarningCache=function(){i={}},e.exports=checkPropTypes},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(0),i=["profile"],a=function checkLogin(){return new Promise(function(e,t){window.amazon.Login.authorize({scope:i},function(r){return r.error?t((0,o.rslError)({provider:"amazon",type:"auth",description:"Authentication failed",error:r})):s(r).then(e,t)})})},s=function getProfile(e){return new Promise(function(t,r){window.amazon.Login.retrieveProfile(e.access_token,function(i){return i.error?r((0,o.rslError)({provider:"amazon",type:"get_profile",description:"Failed to get user profile",error:i})):t(n({},e,i))})})}
t.default={checkLogin:a,generateUser:function generateUser(e){return{profile:{id:e.profile.CustomerId,name:e.profile.Name,firstName:e.profile.Name,lastName:e.profile.Name,email:e.profile.PrimaryEmail,profilePicURL:void 0},token:{accessToken:e.access_token,expiresAt:(0,o.timestampFromNow)(e.expires_in)}}},load:function load(e){var t=e.appId,r=e.scope
return new Promise(function(e){if(document.getElementById("amazon-sdk"))return e()
Array.isArray(r)?i=i.concat(r):"string"==typeof r&&r&&(i=i.concat(r.split(","))),i=i.reduce(function(e,t){return"string"==typeof t&&-1===e.indexOf(t)&&e.push(t.trim()),e},[])
var n=document.getElementsByTagName("script")[0],o=document.createElement("script")
o.src="https://api-cdn.amazon.com/sdk/login1.js",o.id="amazon-sdk",o.async=!0,window.onAmazonLoginReady=function(){return window.amazon.Login.setClientId(t),e()},n?n.parentNode.appendChild(o):document.appendChild(o)})},login:function login(){return new Promise(function(e,t){return a().then(e,t)})},logout:function logout(){return new Promise(function(e){return window.amazon.Login.logout(),e()})}}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(0),i=["public_profile","email"],a=function handleLoginStatus(e){return new Promise(function(t,r){if(!e.authResponse)return r((0,o.rslError)({provider:"facebook",type:"auth",description:"Authentication failed",error:e}))
switch(e.status){case"connected":s().then(function(r){return t(n({},r,e.authResponse))})
break
case"not_authorized":case"unknown":return r((0,o.rslError)({provider:"facebook",type:"auth",description:"Authentication has been cancelled or an unknown error occurred",error:e}))}})},s=function getProfile(){return new Promise(function(e){window.FB.api("/me","GET",{fields:"email,name,id,first_name,last_name,picture"},e)})}
t.default={checkLogin:function checkLogin(){return new Promise(function(e,t){window.FB.getLoginStatus(function(r){return a(r).then(e,t)})})},generateUser:function generateUser(e){return{profile:{id:e.id,name:e.name,firstName:e.first_name,lastName:e.last_name,email:e.email,profilePicURL:e.picture.data.url},token:{accessToken:e.accessToken,expiresAt:(0,o.timestampFromNow)(e.expiresIn)}}},load:function load(e){var t=e.appId,r=e.scope,n=e.version
return new Promise(function(e){if(document.getElementById("facebook-jssdk"))return e()
Array.isArray(r)?i=i.concat(r):"string"==typeof r&&r&&(i=i.concat(r.split(","))),i=i.reduce(function(e,t){return"string"==typeof t&&-1===e.indexOf(t)&&e.push(t.trim()),e},[]).join(",")
var o=document.getElementsByTagName("script")[0],a=document.createElement("script")
a.src="https://connect.facebook.net/en_US/sdk.js",a.id="facebook-jssdk",window.fbAsyncInit=function(){return window.FB.init({appId:t,xfbml:!0,version:n||"v5.0"}),e()},o?o.parentNode.appendChild(a):document.appendChild(a)})},login:function login(){return new Promise(function(e,t){window.FB.login(function(r){return a(r).then(e,t)},{scope:i})})},logout:function logout(){return new Promise(function(e){window.FB.logout(e)})},oldLoad:function oldLoad(e){var t="fb-client",r=document.getElementsByTagName("script")[0],n=void 0
document.getElementById(t)||((n=document.createElement("script")).id=t,n.src="//connect.facebook.net/en_US/all.js",n.onLoad=function(){window.fbAsyncInit=function(){window.FB.init({appId:e,xfbml:!0,version:"v3.3"})}},r.parentNode.insertBefore(n,r))}}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(18)),o=r(0)
var i=!1,a=void 0,s=void 0,u=void 0,c=void 0
"undefined"==typeof window||window.fetch||r(1)
var l=function checkLogin(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?f():!s&&i?Promise.reject((0,o.rslError)({provider:"github",type:"access_token",description:"No access token available",error:null})):new Promise(function(e,t){window.fetch("https://api.github.com/graphql",{method:"POST",headers:new Headers({Authorization:"Bearer "+(s||u)}),body:JSON.stringify({query:"query { viewer { login, name, email, avatarUrl, id } }"})}).then(function(e){return e.json()}).then(function(r){return r.message||r.errors?t((0,o.rslError)({provider:"github",type:"check_login",description:"Failed to fetch user data",error:r})):e(r)}).catch(function(){return t((0,o.rslError)({provider:"github",type:"check_login",description:"Failed to fetch user data due to window.fetch() error",error:null}))})})},f=function login(){return new Promise(function(e,t){l().then(function(t){return e(t)}).catch(function(e){if(!i)return t(e)
window.open(c,"_self")})})},p=function getAccessToken(){return new Promise(function(e,t){var r=(0,o.getQueryStringValue)("code")
if(!r)return t(new Error("Authorization code not found"))
window.fetch(a+"/authenticate/"+r).then(function(e){return e.json()}).then(function(r){return r.error||!r.token?t((0,o.rslError)({provider:"github",type:"access_token",description:"Got error from fetch access token",error:r})):e(r.token)}).catch(function(e){return t((0,o.rslError)({provider:"github",type:"access_token",description:"Failed to fetch user data due to window.fetch() error",error:e}))})})}
t.default={checkLogin:l,generateUser:function generateUser(e){var t=e.data.viewer
return{profile:{id:t.id,name:t.login,firstName:t.name,lastName:t.name,email:t.email,profilePicURL:t.avatarUrl},token:{accessToken:s||u,expiresAt:1/0}}},load:function load(e){var t=e.appId,r=e.gatekeeper,l=e.redirect,f=e.scope
return new Promise(function(e,d){if(!t)return d((0,o.rslError)({provider:"github",type:"load",description:"Cannot load SDK without appId",error:null}))
if(u=t,!r)return e()
a=r,i=!0
var h=(0,o.parseAsURL)(l),y=["user"]
if(Array.isArray(f)?y=f:"string"==typeof f&&f&&(y=f.split(",")),y=y.reduce(function(e,t){return"string"==typeof t&&-1===e.indexOf(t)&&e.push(t.trim()),e},[]).join("%20"),h.search=h.search?h.search+"&rslCallback=github":"?rslCallback=github",c="https://github.com/login/oauth/authorize?client_id="+u+"&redirect_uri="+encodeURIComponent(h.toString())+"&scope="+y+"&state="+(0,n.default)(l,n.default.URL),"github"!==(0,o.getQueryStringValue)("rslCallback"))return e()
p().then(function(t){return e(s=t)}).catch(d)})},login:f,logout:function logout(){return new Promise(function(e,t){return t((0,o.rslError)({provider:"github",type:"logout",description:"Cannot logout from github provider",error:null}))})}}},function(e,t,r){var n=r(19),o=r(20)
function v5(e,t,r,i){if("string"==typeof e&&(e=function stringToBytes(e){e=unescape(encodeURIComponent(e))
for(var t=new Array(e.length),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)
return t}(e)),"string"==typeof t&&(t=function uuidToBytes(e){var t=[]
return e.replace(/[a-fA-F0-9]{2}/g,function(e){t.push(parseInt(e,16))}),t}(t)),!Array.isArray(e))throw TypeError("name must be an array of bytes")
if(!Array.isArray(t)||16!=t.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values")
var a=n(t.concat(e))
return a[6]=15&a[6]|80,a[8]=63&a[8]|128,r||o(a)}v5.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",v5.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",e.exports=v5},function(e,t,r){"use strict"
function f(e,t,r,n){switch(e){case 0:return t&r^~t&n
case 1:return t^r^n
case 2:return t&r^t&n^r&n
case 3:return t^r^n}}function ROTL(e,t){return e<<t|e>>>32-t}e.exports=function sha1(e){var t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520]
if("string"==typeof e){var n=unescape(encodeURIComponent(e))
e=new Array(n.length)
for(var o=0;o<n.length;o++)e[o]=n.charCodeAt(o)}e.push(128)
var i=e.length/4+2,a=Math.ceil(i/16),s=new Array(a)
for(o=0;o<a;o++){s[o]=new Array(16)
for(var u=0;u<16;u++)s[o][u]=e[64*o+4*u]<<24|e[64*o+4*u+1]<<16|e[64*o+4*u+2]<<8|e[64*o+4*u+3]}for(s[a-1][14]=8*(e.length-1)/Math.pow(2,32),s[a-1][14]=Math.floor(s[a-1][14]),s[a-1][15]=8*(e.length-1)&4294967295,o=0;o<a;o++){for(var c=new Array(80),l=0;l<16;l++)c[l]=s[o][l]
for(l=16;l<80;l++)c[l]=ROTL(c[l-3]^c[l-8]^c[l-14]^c[l-16],1)
var p=r[0],d=r[1],h=r[2],y=r[3],g=r[4]
for(l=0;l<80;l++){var m=Math.floor(l/20),v=ROTL(p,5)+f(m,d,h,y)+g+t[m]+c[l]>>>0
g=y,y=h,h=ROTL(d,30)>>>0,d=p,p=v}r[0]=r[0]+p>>>0,r[1]=r[1]+d>>>0,r[2]=r[2]+h>>>0,r[3]=r[3]+y>>>0,r[4]=r[4]+g>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}},function(e,t){for(var r=[],n=0;n<256;++n)r[n]=(n+256).toString(16).substr(1)
e.exports=function bytesToUuid(e,t){var n=t||0,o=r
return o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=r(0),o=function checkLogin(){return new Promise(function(e,t){var r=window.gapi.auth2.getAuthInstance()
return r.isSignedIn.get()?e(r.currentUser.get()):t((0,n.rslError)({provider:"google",type:"check_login",description:"Not authenticated",error:null}))})}
t.default={checkLogin:o,generateUser:function generateUser(e){var t="",r=e.getBasicProfile(),n=e.getAuthResponse(!0),o=new XMLHttpRequest
if(o.open("GET","https://www.googleapis.com/oauth2/v1/userinfo?access_token="+n.access_token,!1),o.send(null),200===o.status){var i=o.responseText
t=JSON.parse(i).gender}return{profile:{id:r.getId(),name:r.getName(),firstName:r.getGivenName(),lastName:r.getFamilyName(),email:r.getEmail(),profilePicURL:r.getImageUrl(),gender:t},token:{accessToken:n.access_token,idToken:n.id_token,scope:n.scope,expiresIn:n.expires_in,firstIssued_at:n.first_issued_at,expiresAt:n.expires_at}}},load:function load(e){var t=e.appId,r=e.scope
return new Promise(function(e,o){var i=document.getElementsByTagName("script")[0],a=document.createElement("script")
a.src="https://apis.google.com/js/api.js",a.id="gapi-client",a.onload=function(){window.gapi.load("auth2",function(){window.gapi.auth2.getAuthInstance()?e():window.gapi.auth2.init({client_id:t,fetchBasicProfile:!0,scope:r?Array.isArray(r)&&r.join(" ")||r:null}).then(function(){return e()},function(e){return o((0,n.rslError)({provider:"google",type:"load",description:"Failed to load SDK",error:e}))})})},i?i.parentNode.appendChild(a):document.appendChild(a)})},login:function login(){return new Promise(function(e,t){window.gapi.auth2.getAuthInstance().signIn().then(function(){return o().then(e,t)},function(e){return t((0,n.rslError)({provider:"google",type:"auth",description:"Authentication failed",error:e}))})})},logout:function logout(){return new Promise(function(e,t){window.gapi.auth2.getAuthInstance().signOut().then(e,t)})},oldLoad:function oldLoad(e,t,r,n){var o=document.createElement("script")
o.src="https://apis.google.com/js/api.js",o.id="gapi-client",o.onload=function(){window.gapi.load("auth2",function(){window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init({client_id:e}),window.gapi.auth2.getAuthInstance().attachClickHandler(t,{},r,n)})},0===document.getElementsByTagName("script").length?document.appendChild(o):document.getElementsByTagName("script")[0].parentNode.appendChild(o)}}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(23)),o=r(0)
var i=void 0,a=void 0,s=function checkLogin(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?u():a?new Promise(function(e,t){(0,n.default)("https://api.instagram.com/v1/users/self/?access_token="+a).then(function(e){return e.json()}).then(function(r){return 200!==r.meta.code?t((0,o.rslError)({provider:"instagram",type:"check_login",description:"Failed to fetch user data",error:r.meta})):e({data:r.data,accessToken:a})}).catch(function(e){return t({fetchErr:!0,err:(0,o.rslError)({provider:"instagram",type:"check_login",description:"Failed to fetch user data due to fetch error",error:e})})})}):Promise.reject((0,o.rslError)({provider:"instagram",type:"access_token",description:"No access token available",error:null}))},u=function login(){return new Promise(function(e,t){s().then(function(t){return e(t)}).catch(function(e){if(e.fetchErr)return t(e.err)
window.open(i,"_self")})})}
t.default={checkLogin:s,generateUser:function generateUser(e){return{profile:{id:e.data.id,name:e.data.full_name,firstName:e.data.full_name,lastName:e.data.full_name,email:void 0,profilePicURL:e.data.profile_picture},token:{accessToken:e.accessToken,expiresAt:1/0}}},load:function load(e){var t=e.appId,r=e.redirect,n=e.scope
return new Promise(function(e,s){var u=(0,o.parseAsURL)(r),c=["user_profile"]
if(Array.isArray(n)?c=c.concat(n):"string"==typeof n&&n&&(c=c.concat(n.split(","))),c=c.reduce(function(e,t){return"string"==typeof t&&-1===e.indexOf(t)&&e.push(t.trim()),e},[]).join("+"),u.search=u.search?u.search+"&rslCallback=instagram":"?rslCallback=instagram",i="https://api.instagram.com/oauth/authorize/?client_id="+t+"&scope="+c+"&redirect_uri="+encodeURIComponent(u.toString())+"&response_type=code","instagram"===(0,o.getQueryStringValue)("rslCallback")){if((0,o.getQueryStringValue)("error"))return s((0,o.rslError)({provider:"instagram",type:"auth",description:"Authentication failed",error:{error_reason:(0,o.getQueryStringValue)("error_reason"),error_description:(0,o.getQueryStringValue)("error_description")}}))
a=(0,o.getHashValue)("access_token")}return e(a)})},login:u,logout:function logout(){return new Promise(function(e){return a=void 0,e()})}}},function(e,t,r){var n,o,i
o=[t,e],void 0===(i="function"==typeof(n=function(e,t){"use strict"
var r={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null}
function clearFunction(e){try{delete window[e]}catch(t){window[e]=void 0}}function removeScript(e){var t=document.getElementById(e)
t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function fetchJsonp(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=e,o=t.timeout||r.timeout,i=t.jsonpCallback||r.jsonpCallback,a=void 0
return new Promise(function(r,s){var u=t.jsonpCallbackFunction||function generateCallbackFunction(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}(),c=i+"_"+u
window[u]=function(e){r({ok:!0,json:function json(){return Promise.resolve(e)}}),a&&clearTimeout(a),removeScript(c),clearFunction(u)},n+=-1===n.indexOf("?")?"?":"&"
var l=document.createElement("script")
l.setAttribute("src",""+n+i+"="+u),t.charset&&l.setAttribute("charset",t.charset),l.id=c,document.getElementsByTagName("head")[0].appendChild(l),a=setTimeout(function(){s(new Error("JSONP request to "+e+" timed out")),clearFunction(u),removeScript(c),window[u]=function(){clearFunction(u)}},o),l.onerror=function(){s(new Error("JSONP request to "+e+" failed")),clearFunction(u),removeScript(c),a&&clearTimeout(a)}})}})?n.apply(t,o):n)||(e.exports=i)},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=r(0),o=function checkLogin(){return new Promise(function(e,t){return window.IN.User.isAuthorized()?i().then(e,t):t((0,n.rslError)({provider:"linkedin",type:"check_login",description:"Not authenticated",error:null}))})},i=function getProfile(){return new Promise(function(e,t){window.IN.API.Profile("me").fields(["id","firstName","lastName","pictureUrl","publicProfileUrl","emailAddress"]).result(e).error(function(e){return t((0,n.rslError)({provider:"linkedin",type:"get_profile",description:"Failed to get user profile",error:e}))})})}
t.default={checkLogin:o,generateUser:function generateUser(e){return{profile:{id:window.IN.ENV.auth.member_id,name:e.values[0].firstName+" "+e.values[0].lastName,firstName:e.values[0].firstName,lastName:e.values[0].lastName,email:e.values[0].emailAddress,publicProfileURL:e.values[0].publicProfileUrl,profilePicURL:e.values[0].pictureUrl},token:{accessToken:window.IN.ENV.auth.oauth_token,expiresAt:(0,n.timestampFromNow)(window.IN.ENV.auth.oauth_expires_in)}}},load:function load(e){var t=e.appId
return new Promise(function(e){if(document.getElementById("linkedin-client"))return e()
var r=document.getElementsByTagName("script")[0],n=document.createElement("script")
n.src="//platform.linkedin.com/in.js?async=true",n.id="linkedin-client",n.onload=function(){return window.IN.init({api_key:t}),e()},r?r.parentNode.appendChild(n):document.appendChild(n)})},login:function login(){return new Promise(function(e,t){window.IN.User.authorize(function(){return o().then(i).then(e).catch(t)})})},logout:function logout(){return new Promise(function(e){window.IN.User.logout(e)})},oldLoad:function oldLoad(e){var t="li-client",r=document.getElementsByTagName("script")[0],n=void 0
document.getElementById(t)||((n=document.createElement("script")).id=t,n.src="//platform.linkedin.com/in.js?async=true",n.onload=function(){window.IN.init({api_key:e,authorize:!0})},r.parentNode.insertBefore(n,r))}}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default={providers:["amazon","facebook","github","google","instagram","linkedin"]}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=!1
return{promise:new Promise(function(r,n){e.then(function(e){return t?n(new Error({isCanceled:!0})):r(e)}),e.catch(function(e){return n(t?new Error({isCanceled:!0}):e)})}),cancel:function cancel(){t=!0}}}}])})}}])
