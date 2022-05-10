import Control from "./Control";
import Preview from "./Preview";

if (typeof window !== "undefined") {
  window.CkEditorControl = Control;
  window.CkEditorPreview = Preview;
}

export { Control as CkEditorControl, Preview as CkEditorPreview };
