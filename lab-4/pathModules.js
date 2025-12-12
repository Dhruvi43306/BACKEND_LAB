//write a Node.js program that print the directory name,filename,basename,extensionname
const path =  require("path");
console.log("Directory Name:",__dirname);
console.log("FileName:",__filename);
console.log("BaseName:",path.basename(__filename));
console.log("Extension Name:",path.extname(__filename));

//join
const joinPath = path.join('users','arjun','documents','project')
console.log("Join Path : ",joinPath)

//Normalize
const wrongPath = "///folder//subfolder///file.txt"
const cleanPath = path.normalize(wrongPath);
console.log("CleanPath :",cleanPath);

//Resolved
const resolvedPath = path.resolve("folder","subfolder","App.js");
console.log("Resolved Path :",resolvedPath);

//Absolute and relative path
const checkPath = "c:\\users\arjun"//this is absolute path
if(path.isAbsolute(checkPath)){
    console.log("Absolute Path");
}
else{
    console.log("Relative Path")
}
console.log(checkPath);

//Relative
const ans = path.relative("./arjun/abc.txt", "./arjun/bala/college/xyz.txt")
console.log(ans);




