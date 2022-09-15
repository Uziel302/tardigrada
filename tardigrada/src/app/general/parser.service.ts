import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ParsingService {
  isImage(filename: string) {
    return filename.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  public parse(files: string) {
    if (!files) {
      return [];
    }
    return JSON.parse(files);
  }

  public pushToString(origin: string, addition: string) {
    let files = JSON.parse(origin);
    if (!files.length) {
      files = [];
    }
    files.push(addition);
    return JSON.stringify(files);
  }
}
