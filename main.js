String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

var submit = document.getElementById('prototype-submit');
var tsubmit = submit.cloneNode(true);
tsubmit.setAttribute('id', 'submit1');
tsubmit.innerHTML = tsubmit.innerHTML.replaceAll('{{title}}', 'Tytuł');
document.getElementById('container').appendChild(tsubmit);
