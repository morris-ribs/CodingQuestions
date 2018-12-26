function buildFs(input) {
  const fs = {};
  
  const files = input.split("\n");

  let currentPath = [];
  for (let f of files) {
    let indentation = 0;
    while (f.substring(0, 1) === "\t") {
      indentation++;
      f = f.substring(1);
    }
    let currentNode = fs;
    const slice = currentPath.slice(0, indentation);
    for (const key of slice) {
      currentNode = currentNode[key];  
    }

    if (f.indexOf(".") >= 0) {
      currentNode[f] = true;
    } else {
      currentNode[f] = {};
    }

    currentPath = slice;
    currentPath.push(f);
  }

  return fs;
}

function getMaxSubdirsLength(node) {
  const subDirLengths = Object.keys(node).map(key => {
    const obj = node[key];
    if (obj === true) {
      return key.length;
    } else if (Object.keys(obj).length > 0) {
      const subsubSirsLength = getMaxSubdirsLength(obj);
      return subsubSirsLength > 0 ? key.length + subsubSirsLength + 1 : 0; // increment it to include '/' character
    }
    return 0;
  });
  
  return Math.max(...subDirLengths);
}

function maxLengthInFileSystem(str) {
  const fs = buildFs(str);
  return getMaxSubdirsLength(fs);
}

var s = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";
console.log(maxLengthInFileSystem(s));
s = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext";
console.log(maxLengthInFileSystem(s));
