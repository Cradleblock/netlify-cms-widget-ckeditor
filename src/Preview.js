import PropTypes from "prop-types";
import React from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { light as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { html as beautify } from "js-beautify";

// const beautifyOptions = {
//   brace_style: "collapse",
//   break_chained_methods: true,
//   comma_first: false,
//   e4x: false,
//   editorconfig: false,
//   end_with_newline: false,
//   eol: "\n",
//   eval_code: false,
//   indent_char: " ",
//   indent_empty_lines: false,
//   indent_children_of_element: true,
//   indent_text_of_elements: true,
//   indent_inner_html: true,
//   indent_level: 0,
//   indent_size: 2,
//   indent_with_tabs: false,
//   jslint_happy: false,
//   keep_array_indentation: false,
//   max_preserve_newlines: 10,
//   operator_position: "before-newline",
//   preserve_newlines: true,
//   space_after_anon_function: false,
//   space_after_named_function: false,
//   space_before_conditional: true,
//   space_in_empty_paren: false,
//   space_in_paren: false,
//   templating: ["auto"],
//   unescape_strings: false,
//   unindent_chained_methods: false,
//   wrap_line_length: 0,
//   wrap_attributes: "force-aligned",
//   wrap_attributes_indent_size: 2,
//   inline: [],
//   unformatted: [],
//   // extra_liners: ["a", "img"],
// };

export default function Preview({ value }) {
  return (
    <div>
      {/* <SyntaxHighlighter language="markup" style={theme} showLineNumbers>
        {beautify(value, beautifyOptions)}
      </SyntaxHighlighter> */}

      <div dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}

Preview.propTypes = {
  value: PropTypes.node,
};
