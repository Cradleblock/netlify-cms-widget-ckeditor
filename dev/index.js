import "./bootstrap.js";
import CMS, { init } from "netlify-cms";
import "netlify-cms/dist/cms.css";
import { CkEditorControl, CkEditorPreview } from "../src";

const config = {
  backend: {
    name: "test-repo",
    login: false,
  },
  media_folder: "assets",
  collections: [
    {
      name: "test",
      label: "Test",
      files: [
        {
          file: "test.yml",
          name: "test",
          label: "Test",
          fields: [
            {
              name: "test_widget",
              label: "Test CkEditor Widget",
              widget: "ckeditor",
            },
          ],
        },
      ],
    },
  ],
};

CMS.registerWidget("ckeditor", CkEditorControl, CkEditorPreview);

init({ config });
