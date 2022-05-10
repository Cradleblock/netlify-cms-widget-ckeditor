# netlify-cms-widget-ckeditor-cradleblock

[Check out a demo!](https://netlify-cms-widget-ckeditor-cradleblock.netlify.com/demo)

Overview of what your widget does.

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-ckeditor-cradleblock
```

```js
import CkEditor from 'netlify-cms-widget-ckeditor-cradleblock'

CMS.registerWidget('ckeditor', CkEditorControl, CkEditorPreview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-ckeditor-cradleblock@^1.0.0"></script>

<script>
CMS.registerWidget('ckeditor', CkEditorControl, CkEditorPreview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: ckeditor }
```

## Configuration

Explain any custom configuration steps here, or omit the section if there are none.

## Support

For help with this widget, open an [issue](https://github.com/cradleblock/netlify-cms-widget-ckeditor) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).
