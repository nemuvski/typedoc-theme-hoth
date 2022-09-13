import { APPEARANCE_VALUE_DARK, APPEARANCE_VALUE_LIGHT, APPEARANCE_VALUE_OS, JSHOOK_APPEARANCE_INPUT } from '../../src/constants'

const appearanceKey = 'appearance'

function getAppearanceId(value: string | null | undefined) {
  if (value && [APPEARANCE_VALUE_OS, APPEARANCE_VALUE_LIGHT, APPEARANCE_VALUE_DARK].includes(value)) {
    return value
  }
  // fallback
  return APPEARANCE_VALUE_OS
}

function setAppearanceAttr(value: string) {
  const id = getAppearanceId(value)
  document.documentElement.dataset[appearanceKey] = id
  window.localStorage.setItem(appearanceKey, id)
}

function setEventAppearance() {
  document.querySelectorAll(`input[data-jshook='${JSHOOK_APPEARANCE_INPUT}']`).forEach((elm) => {
    elm.addEventListener('change', (e) => {
      const currentTarget = e.currentTarget
      if (!(currentTarget instanceof HTMLInputElement)) {
        return
      }

      if (currentTarget.checked) {
        setAppearanceAttr(currentTarget.value)
      }
    })
  })
}

export function initAppearance() {
  setEventAppearance()
  const id = getAppearanceId(window.localStorage.getItem(appearanceKey))
  document.querySelectorAll(`input[data-jshook='${JSHOOK_APPEARANCE_INPUT}'][value='${id}']`).forEach((elm) => {
    elm.setAttribute('checked', '')
  })
  setAppearanceAttr(id)
}
