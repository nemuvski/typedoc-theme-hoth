import { setEventDropdown } from './dropdown'
import { setEventSidebar } from './sidebar'

window.addEventListener('load', () => {
  setEventSidebar()
  setEventDropdown()
})
