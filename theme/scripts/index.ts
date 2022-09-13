import { initAppearance } from './appearance'
import { setEventDropdown } from './dropdown'
import { setEventSidebar } from './sidebar'

window.addEventListener('load', () => {
  initAppearance()
  setEventSidebar()
  setEventDropdown()
})
