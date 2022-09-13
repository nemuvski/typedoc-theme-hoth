import { JSHOOK_CLOSE_SIDEBAR, JSHOOK_OPEN_SIDEBAR } from '../../src/constants'

function openSidebar() {
  document.documentElement.classList.add('is-open-sidebar')
}

function closeSidebar() {
  document.documentElement.classList.remove('is-open-sidebar')
}

export function setEventSidebar() {
  document.querySelectorAll(`[data-jshook='${JSHOOK_OPEN_SIDEBAR}']`).forEach((elm) => {
    elm.addEventListener('click', () => {
      openSidebar()
    })
  })

  document.querySelectorAll(`[data-jshook='${JSHOOK_CLOSE_SIDEBAR}']`).forEach((elm) => {
    elm.addEventListener('click', () => {
      closeSidebar()
    })
  })
}
