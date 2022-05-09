import "./bootstrap.js";
import CMS, { init } from "netlify-cms";
import "netlify-cms/dist/cms.css";
import { Control, Preview } from "../src";

const config = {
  backend: {
    name: "test-repo",
    login: false,
  },
  media_folder: "assets",
  collections: [
    {
      name: "test",
      label: "Content",
      files: [
        {
          file: "test.yml",
          name: "test",
          label: "Test",
          fields: [
            { name: "test_widget", label: "Content", widget: "ckeditor" },
          ],
        },
      ],
    },
  ],
};

CMS.registerWidget("ckeditor", Control, Preview);

init({ config });
