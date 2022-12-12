
import { setup } from './postcss-test.js'

document.querySelector('#app').innerHTML = `
  <div>
    <button id="postcss-test" type="button">Start Parse with Postcss</button>
    <pre><code id="output"></code></pre>
  </div>
`

setup(document.querySelector('#postcss-test'), document.querySelector('#output'))
