var HOST_URI = 'https://www.v2ex.com/api/';

//获取最新主题
var LATEST_TOPIC = 'topics/latest.json';
//获取最热主题
var HOTTEST_TOPIC = 'topics/hot.json';
//帖子详情页 ?id=1
var POST_DETAIL = 'topics/show.json';
//帖子回复数目 ?topic_id=1 and page
var POST_REPLY = 'replies/show.json';

//获取网站信息
var WEB_INFO = 'site/info.json';
//取网站状态
var WEB_STATE = 'site/stats.json';

//获取所有节点
var WEB_NODE = 'nodes/all.json';
//获取节点详情页 name=babel&id=1
var WEB_NODE_DETAIL = 'nodes/show.json';
//获取当前节点下的主题 node_name = v2ex
var WEB_NODE_TOPIC = 'topics/show.json';

function _obj2uri(obj) {
  return Object.keys(obj).map(function (k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
  }).join('&');
}
function _getLatestTopic(o) {
  return HOST_URI + LATEST_TOPIC + '?' + _obj2uri(o);
}
function _getHottestTOPIC(o) {
  return HOST_URI + HOTTEST_TOPIC + '?' + _obj2uri(o);
}
function _getPostDetail(o) {
  return HOST_URI + POST_DETAIL + '?' + _obj2uri(o);
}
function _getPostReply(o) {
  return HOST_URI + POST_REPLY + '?' + _obj2uri(o);
}
function _getWebInfo() {
  return HOST_URI + WEB_INFO;
}
function _getWebState() {
  return HOST_URI + WEB_STATE;
}
function _getWebNode(o) {
  return HOST_URI + WEB_NODE + '?' + _obj2uri(o);
}
function _getWebNodeDetail(o) {
  return HOST_URI + WEB_NODE_DETAIL + '?' + _obj2uri(o);
}

function _getWebNodeTopic(o) {
  return HOST_URI + WEB_NODE_TOPIC + '?' + _obj2uri(o);
}

module.exports = {
  getLatestTopic: _getLatestTopic,
  getHottestTopic: _getHottestTOPIC,

  getPostDetail: _getPostDetail,
  getPostReply: _getPostReply,

  getWebInfo: _getWebInfo,
  getWebState: _getWebState,

  getWebNode: _getWebNode,
  getWebNodeDetail: _getWebNodeDetail,
  getWebNodeTopic: _getWebNodeTopic

};