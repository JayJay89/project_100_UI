function findIndex(node) {
  var parent = node.parentNode;
  var index = Array.prototype.indexOf.call(parent.children, node);
  return (index + 1);
}