# netlify-cms-widget-ckeditor

[Check out a demo!](https://replace-with-widget-name.netlify.com/demo)

Adds a CKEditor WYSIWIG as Opposed to the MarkDown Editor.

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-ckeditor
```

```js
import ckeditor from 'netlify-cms-widget-ckeditor'

CMS.registerWidget('ckeditor', ckeditorControl, ckeditorPreview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-ckeditor@^1.0.0"></script>

<script>
  CMS.registerWidget('ckeditor', ckeditorControl)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: ckeditor }
```

## Support

For help with this widget, open an [issue](https://github.com/wiesjahnn/netlify-cms-widget-ckeditor) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).
