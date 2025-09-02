/**
 * set error color red around box
 * @param {*} elementId id of box to highlight red
 */
export function setError(elementId) {
  const htmlTag = document.getElementById(`${elementId}`);
  if (htmlTag) htmlTag.style.borderColor = "red";
}

/**
 * set error to normal colors
 * @param {*} elementId id of box to remove error
 */
export function setNormal(elementId) {
  const htmlTag = document.getElementById(`${elementId}`);
  if (htmlTag) htmlTag.style.borderColor = "#ccc";
}

/**
 * set error to transparent
 * @param {*} elementId id of box to set transparent
 */
export function setNormalTransparent(elementId) {
  const htmlTag = document.getElementById(`${elementId}`);
  if (htmlTag) htmlTag.style.borderColor = "transparent";
}

/**
 * set button to clickable state
 * @param {*} elementId button to change
 */
export function setButtonClick(elementId) {
  const buttonTag = document.getElementById(`${elementId}`);
  if (buttonTag) {
    buttonTag.style.backgroundColor = "#33f";
    buttonTag.style.color = "white";
    buttonTag.style.cursor = "pointer";
  }
}

/**
 * set button to grey (unclickable) state
 * @param {*} elementId button to change
 */
export function setButtonGrey(elementId) {
  const buttonTag = document.getElementById(`${elementId}`);
  if (buttonTag) {
    buttonTag.style.backgroundColor = "#eee";
    buttonTag.style.color = "black";
    buttonTag.style.cursor = "default";
  }
}
