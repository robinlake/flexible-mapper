console.log("content loaded");

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
import("./components/Demo");
import("./youtubeController.js");
import("./videoController.js");
// import("../../js/youtubeController.js");
// import("../../js/videoController.js");
