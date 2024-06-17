const btn = document.getElementById("newToast");

/**
 *
 * @param {object} options - The options for the toast
 * @param {string} options.message - The message to display
 * @param {"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"} options.position - The position of the toast
 * @param {number} options.duration - The duration of the toast
 * @param {"dark" | "light" |"info" | "success" | "error" | "warning"} options.type - The type of the toast
 * @param {boolean} options.closeOnClick - Close the toast on click
 * @returns {void}
 */
function toast(options) {
  if (!options.message || !options.type) throw new Error("message and type are required");

  const toast = document.createElement("div");
  toast.classList.add("toast", `toast-${options.type}`);
  toast.classList.add(`toast-${options.position || "top-right"}`);
  toast.innerText = options.message;

  document.body.appendChild(toast);

  // remove toast after duration
  const duration = options.duration || 3000;

  setTimeout(() => {
    toast.remove();
  }, duration);

  // remove toast on click
  toast.onclick = () => {
    if (options.closeOnClick) toast.remove();
    console.log("clicked");
  };
}

btn.onclick = () => {
  toast({
    message: "This is an info toast",
    type: "success",
    position: "bottom-right",
    closeOnClick: true,
  });
};
