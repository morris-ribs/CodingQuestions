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


var s = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";
// console.log("\n\tsubdir1".substring(2));
console.log(buildFs(s));