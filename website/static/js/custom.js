window.addEventListener('load', function() {
  var clipboard = new ClipboardJS('.btnClipboard', {
    target: function(trigger) {
      return trigger.parentNode;
    },
  });

  clipboard.on('success', function(event) {
    event.clearSelection();
  })
})

function setpp(event) {
  document.getElementById('pp').textContent = event.target[0].value;
  event.preventDefault();
}
