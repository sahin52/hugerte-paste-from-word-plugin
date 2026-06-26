/**
 * Copyright (c) Tiny Technologies, Inc., Pangaea Information Technologies, Ltd. and skasap
 * All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import hugerte from "hugerte";

type RegExpFilter =
  | RegExp
  | [RegExp, string]
  | [RegExp, (match: string, ...args: any[]) => string];

const isRegExp = (val: unknown): val is RegExp => val.constructor === RegExp;

export function filter(content: string, items: RegExpFilter[]): string {
  hugerte.util.Tools.each(items, (v) => {
    if (isRegExp(v)) {
      content = content.replace(v, "");
    } else {
      content = content.replace(v[0], v[1] as any);
    }
  });

  return content;
}
