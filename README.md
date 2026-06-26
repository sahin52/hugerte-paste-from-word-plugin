# HugeRTE Paste from Word Plugin

This plugin adds the open-source Paste from Word functionality from the 5.x branch of TinyMCE as a plugin for HugeRTE 1.x.
The goal of this project is not to replace the premium PowerPaste plugin, but to provide a free, open-source alternative for users who need basic Paste from Word support in HugeRTE.
## Background
The Paste from Word feature was bundled by default in TinyMCE 5.x. When TinyMCE 6.x launched, it was extracted into a separate plugin: @pangaeatech/tinymce-paste-from-word-plugin. After TinyMCE moved to a commercial-only licensing model, HugeRTE emerged as the open-source community fork, but without an equivalent Paste from Word package.
This plugin fills that gap. Forked from @pangaeatech/tinymce-paste-from-word-plugin and adapted for HugeRTE 1.x, it also updates dependencies to address known vulnerabilities.

### Comparison with PowerPaste

| Feature                           | This Plugin | PowerPaste |
| :-------------------------------- | :---------: | :--------: |
| Automatically cleans up content   |     ✔      |     ✔     |
| Supports embedded images          |      -      |     ✔     |
| Paste from Microsoft Word         |     ✔      |     ✔     |
| Paste from Microsoft Word online  |     ✔      |     ✔     |
| Paste from Microsoft Excel        |      -      |     ✔     |
| Paste from Microsoft Excel online |      -      |     -      |
| Paste from Google Docs            |     ✔      |     ✔     |
| Paste from Google Sheets          |      -      |     -      |

## Usage

### Option 1: CDN Hosted

1. Tell your HugeRTE instance where to load the plugin from and how to configure it:

```js
hugerte.PluginManager.load(
  "paste_from_word",
  TODO
);
hugerte.init({
  selector: "textarea", // change this value according to your HTML
  plugins: "paste_from_word",
  paste_webkit_styles: "all",
  paste_remove_styles_if_webkit: false,
});
```

### Option 2: Self-Hosted

1. Create a new folder `paste_from_word` inside of the existing HugeRTE `plugins` folder.
2. Download the file TODO and add it to that new folder, renaming it `plugin.min.js`
3. Configure your HugeRTE instance to use the plugin:

```js
hugerte.init({
  selector: "textarea", // change this value according to your HTML
  plugins: "paste_from_word",
  paste_webkit_styles: "all",
  paste_remove_styles_if_webkit: false,
});
```

### Option 3: React (etc.)

The following instructions are for a project using ReactJS and NPM, but you can
easily modify these for any other NodeJS-based project.

1. Add the HugeRTE and HugeRTE Paste from Word Plugin projects to your package management:

```bash
npx create-react-app hugerte-react-demo
cd hugerte-react-demo
npm install --save @hugerte/hugerte-react @sahin52/hugerte-paste-from-word-lib
```

2. Using a text editor, open ./src/App.js and replace the contents with:

```jsx
import React from "react";
import { Editor } from "@hugerte/hugerte-react";
import PasteFromWord from "@sahin52/hugerte-paste-from-word-lib";

const config = {
  height: 500,
  paste_preprocess: PasteFromWord,
  paste_webkit_styles: "all",
  paste_remove_styles_if_webkit: false,
};

export default function App() {
  return (
    <Editor
      initialValue="<p>This is the initial content of the editor.</p>"
      init={config}
    />
  );
}
```

## Settings

These settings affect the execution of the `paste_from_word` plugin.

### `pastefromword_valid_elements`

This option enables you to configure the elements specific to MS Office. Word produces a lot of junk HTML, so when users paste things from Word we do extra restrictive filtering on it to remove as much of this as possible. This option enables you to specify which elements and attributes you want to include when Word contents are intercepted.

Type: String

Default Value: `"-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody"`

### `pastefromword_convert_fake_lists`

This option lets you disable the logic that converts list like paragraph structures into real semantic HTML lists.

Type: Boolean

Default Value: `true`

### `paste_webkit_styles`

This plugin is a preprocessor which converts paste content from MS Word into WebKit-style paste content which HugeRTE's built-in paste function can handle. Therefore, it is impacted by the webkit-specific settings of the paste module. In order to prevent the paste module from stripping out all style information, you need to set this to `"all"` or to a specific list of styles you wish to retain.

Type: String

Default value: `"none"`

### `paste_remove_styles_if_webkit`

This plugin is a preprocessor which converts paste content from MS Word into WebKit-style paste content which HugeRTE's built-in paste function can handle. Therefore, it is impacted by the webkit-specific settings of the paste module. In order to prevent the paste module from stripping out all style information, you need to set this to `false`.

Type: Boolean

Default Value: `true`
