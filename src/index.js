import React from 'react'
import ReactDOM from 'react-dom'
import Index from './pages/Index/Index'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Index />, document.querySelector('#root'))
registerServiceWorker()
