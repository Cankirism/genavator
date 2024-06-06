import FileSaver from "file-saver";
import {v4 as uuidv4} from "uuid";

export const downloadAvatar=(photoUrl)=>{
    const id = uuidv4();
    FileSaver.saveAs(photoUrl,`${id}.svg`);

}