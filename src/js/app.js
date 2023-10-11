import { Popover } from './components/popover.js'

const container = document.querySelector('.container')
const btn = container.querySelector('.popover_btn')

const popover = new Popover(btn)

popover.init()
