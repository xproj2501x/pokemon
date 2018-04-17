////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
/**
 * The number of milliseconds in one second.
 * @constant
 * @type {number}
 */
const MILLISECONDS = 1000;

/**
 * The default number of frames per second.
 * @constant
 * @type {number}
 */
const FPS = 30;

/**
 * The default length of a single frame.
 * @constant
 * @type {number}
 */
const FRAME_DURATION = MILLISECONDS / FPS;

/**
 * The maximum number of frames that can be skipped.
 * @constant
 * @type {number}
 */
const MAX_FRAME_SKIP = FRAME_DURATION * 5;

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export {MILLISECONDS, FPS, FRAME_DURATION, MAX_FRAME_SKIP};
