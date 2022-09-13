import { JSHOOK_DROPDOWN_BUTTON, JSHOOK_DROPDOWN_CONTENT } from '../../src/constants'

export function setEventDropdown() {
  document.querySelectorAll(`button[data-jshook='${JSHOOK_DROPDOWN_BUTTON}']`).forEach((elm) => {
    elm.addEventListener(
      'click',
      (e: Event) => {
        const currentTarget = e.currentTarget
        if (!(currentTarget instanceof HTMLElement)) {
          return
        }

        const contentElm = currentTarget.parentElement?.querySelector(`[data-jshook='${JSHOOK_DROPDOWN_CONTENT}']`)
        if (!contentElm) {
          return
        }
        const isOpen = contentElm.classList.contains('is-open')
        if (isOpen) {
          contentElm.classList.remove('is-open')
        } else {
          contentElm.classList.add('is-open')
        }
      },
      {}
    )
  })
}
