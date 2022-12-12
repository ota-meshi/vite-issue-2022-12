import { parse as parseWithPostcss } from 'postcss'

export function setup(button, output) {
  button.addEventListener('click', () => {
    const result = parseWithPostcss('a { color: red }')
    output.textContent = JSON.stringify(result, null, 2)
  })
}
