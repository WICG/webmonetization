window.addEventListener('load', function() {
  var clipboard = new ClipboardJS('.btnClipboard', {
    target: function(trigger) {
      return trigger.parentNode;
    },
  });

  clipboard.on('success', function(event) {
    event.clearSelection();
  })
  navigator.serviceWorker.register('/service-worker.js');
})

function setpp(event) {
  event.preventDefault();
  var pp = event.target[0].value;
  if (pp[0] !== "$" || pp.indexOf("=") !== -1 || pp.indexOf("+") !== -1) return
  var url = new URL(pp.replace(/^\$/, 'https://'));
  document.getElementById('pp').textContent = event.target[0].value;
}
