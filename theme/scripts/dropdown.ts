import { JSHOOK_DROPDOWN_BUTTON, JSHOOK_DROPDOWN_CONTENT } from '../../src/constants'

function closeAllDropdown() {
  document.querySelectorAll(`.is-open[data-jshook='${JSHOOK_DROPDOWN_CONTENT}']`).forEach((elm) => {
    elm.classList.remove('is-open')
  })
}

export function setEventDropdown() {
  /**
   * Closing dropdown by clicking outside of dropdown menu
   */
  document.documentElement.addEventListener('click', (e) => {
    const currentTarget = e.currentTarget
    if (!(currentTarget instanceof HTMLElement)) {
      return
    }
    if (!currentTarget.matches(`[data-jshook='${JSHOOK_DROPDOWN_CONTENT}']`)) {
      closeAllDropdown()
    }
  })

  /**
   * Open dropdown menu
   */
  document.querySelectorAll(`button[data-jshook='${JSHOOK_DROPDOWN_BUTTON}']`).forEach((elm) => {
    elm.addEventListener(
      'click',
      (e) => {
        const currentTarget = e.currentTarget
        if (!(currentTarget instanceof HTMLElement)) {
          return
        }

        e.stopPropagation()

        const contentElm = currentTarget.parentElement?.querySelector(`[data-jshook='${JSHOOK_DROPDOWN_CONTENT}']`)
        if (!contentElm) {
          return
        }
        const isOpen = contentElm.classList.contains('is-open')
        if (isOpen) {
          contentElm.classList.remove('is-open')
        } else {
          closeAllDropdown()
          contentElm.classList.add('is-open')
        }
      },
      {}
    )
  })

  /**
   * Ensure that the menu does not close when an item in a drop-down menu is clicked
   */
  document.querySelectorAll(`[data-jshook='${JSHOOK_DROPDOWN_CONTENT}']`).forEach((elm) => {
    elm.addEventListener('click', (e) => {
      e.stopPropagation()
    })
  })
}
