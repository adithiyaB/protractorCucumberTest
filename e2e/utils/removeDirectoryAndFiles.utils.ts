import fs from "fs";

function removeDir(dirPath: any) {
    let files;
    try {
        files = fs.readdirSync(dirPath);
    } catch (e) {
        return;
    }
    if (files.length > 0) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < files.length; i++) {
            const filePath = dirPath + '/' + files[i];
            if (fs.statSync(filePath).isFile()) {
                fs.unlinkSync(filePath);
            } else {
                removeDir(filePath);
            }
        }
    }
    fs.rmdirSync(dirPath);
}