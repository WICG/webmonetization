window.addEventListener('load', function () {
  var clipboard = new ClipboardJS('.btnClipboard', {
    target: function (trigger) {
      return trigger.parentNode
    }
  })

  clipboard.on('success', function (event) {
    event.clearSelection()
  })
  navigator.serviceWorker.register('/service-worker.js')
})
