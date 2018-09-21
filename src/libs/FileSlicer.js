export default class FileSlicer {

  constructor(file, readBlockSize) {
    this.file = file;
    this.filedata = [];
    this.readFilebyoffset(file, 0, 0, readBlockSize, this.filedata);
  }



  readFilebyoffset(file, _start, segindex, READBLOCKSIZE, filedata) {
    var reader = new FileReader();
    var blobdata = file.slice(_start, (READBLOCKSIZE + _start));
    reader.readFilebyoffset = this.readFilebyoffset;

    reader.onload = function (result) {
      var data = reader.result;
      if ((READBLOCKSIZE + _start) < file.size) {
        _start = READBLOCKSIZE + _start;
        filedata[segindex] = data;
        segindex = segindex + 1;
        this.readFilebyoffset(file, _start, segindex, READBLOCKSIZE, filedata);
      } else {
        filedata[segindex] = data;
      }
    }
    reader.readAsBinaryString(blobdata);
  }

}