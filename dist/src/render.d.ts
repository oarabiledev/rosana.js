import type { Layout } from "./types";
/**
 * The `renderApplication` function initializes an application with a root component.
 * This is typically used to set up your homepage or main view.
 * @description
 * To mount the view or layout, use the `mountView` function.
 * Pass the id or class selector where the view will attach, e.g., `#app` or `.container`.
 */
declare const renderApplication: (mainComponent: Layout) => object;
export default renderApplication;
