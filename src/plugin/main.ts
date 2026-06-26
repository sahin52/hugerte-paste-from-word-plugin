/**
 * Copyright (c) Tiny Technologies, Inc., Pangaea Information Technologies, Ltd. and skasap
 * All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import hugerte, { Editor } from "hugerte";
import { isWordContent, preProcess, PreProcessEvent } from "./WordFilter";

export default (): void => {
  hugerte.PluginManager.add("paste_from_word", (editor: Editor) => {
    editor.on("PastePreProcess", (args: PreProcessEvent) => {
      if (isWordContent(args.content)) {
        args.content = preProcess(editor, args.content);
      }
    });

    return {
      getMetadata: () => ({
        name: "Paste from Word",
        url: "https://github.com/sahin52/hugerte-paste-from-word-plugin",
      }),
    };
  });
};
