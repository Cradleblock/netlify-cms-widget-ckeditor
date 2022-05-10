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
      <div>
        <section className="container">
          <CKEditor
            config={{
              toolbar: [
                ["Styles", "Format"],
                ["Bold", "Italic", "Mark"],
                ["Image", "Link"],
                ["Source"],
              ],
              format_tags: "p;h3;h4;h5;h6",
              extraAllowedContent: "mark;*[id];*(*)",
            }}
            type="classic"
            onBeforeLoad={(CKEDITOR) => (CKEDITOR.disableAutoInline = true)}
            id={forID}
            className={classNameWrapper}
            data={value}
            onChange={(event) => onChange(event.editor.getData())}
          />
        </section>
      </div>
    );
  }
}
