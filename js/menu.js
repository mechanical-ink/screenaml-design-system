(function () {
  "use strict";

  const mainNavContainer = document.getElementById("main-nav-container");

  if (!mainNavContainer) {
    return;
  }

  /**
   * Set the aria-label to either show or close based on current state
   * @param {Object} toggle - Button on which to set the appropriate accessible name
   */
  function setAccessibleName(toggle) {
    let accessibleName = toggle.getAttribute("aria-label");

    accessibleName =
      accessibleName === "Show Menu" ? "Close Menu" : "Show Menu";

    toggle.setAttribute("aria-label", accessibleName);
  }

  /**
   * Toggles the state of the attribute between true and false
   * @param {String} attribute - name of the attribute which state to toggle
   */
  function toggleAttributeState(attribute) {
    const nextState = this.getAttribute(attribute) === "true" ? false : true;
    this.setAttribute(attribute, nextState);
  }

  const mainMenu = document.getElementById("main-menu");
  const mainMenuToggle = document.getElementById("main-menu-toggle");

  mainMenuToggle.addEventListener("click", () => {
    setAccessibleName(mainMenuToggle);
    toggleAttributeState.call(mainMenuToggle, "aria-expanded");

    mainMenu.classList.toggle("show");
    mainMenuToggle.classList.toggle("expanded");
  });
})();
