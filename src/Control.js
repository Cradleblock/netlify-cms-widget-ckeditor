import PropTypes from "prop-types";
import React from "react";
import CKEditor from "ckeditor4-react";

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  };

  static defaultProps = {
    value: "",
  };

  render() {
    const { forID, value, onChange, classNameWrapper } = this.props;

    return (
      <CKEditor
        config={{
          toolbar: [
            ["Styles", "Format"],
            ["Bold", "Italic", "Mark"],
            ["Image", "Link"],
            ["Source"],
          ],

          // removePlugins: "image",
          // allowedContent: "*[id], *[class]",
          extraAllowedContent: "mark;*[id];*(*)",
        }}
        id={forID}
        className={classNameWrapper}
        value={value || ""}
        onChange={(event) => onChange(event.editor.getData())}
      />
    );
  }
}
