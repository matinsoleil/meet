import JSZip from 'jszip';

export default class MessagesHelper {

    static getMessageById(conversation, messageId) {
        let actualMessage = undefined;
        for (const index in conversation) {
            let message = conversation[index];
            if (message.id === messageId) {
                actualMessage = message;
                break;
            }
        }
        return actualMessage
    }

    static getOwner(contacts, ownerId) {
        let owner = undefined;
        for (const index in contacts) {
            let contact = contacts[index];
            if (contact.id === ownerId) {
                owner = contact.name;
                break;
            }
        }
        return owner;
    }

    /**
     * 
     * @param {String} blobUrl 
     */
    static async getBlobObject(blobUrl) {
        let response = await new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', blobUrl, true);
            xhr.responseType = 'blob';
            xhr.onload = function (e) {
                let blob = (this.status === 200) && this.response;
                resolve(blob);
            }
            xhr.onerror = function (e) {
                reject(e);
                console.log('Error in get BlobObject');
            }
            xhr.send();
        })
        return response
    }

    /**
     * 
     * @param {Object[]} files
     *      @param {String} files[].fileName
     *      @param {String} files[].blobData
     */
    static async getZipUrl(files) {
        let zip = new JSZip();
        let zipURL = '';
        for (let file of files) {
            zip.file(file.fileName, file.blobData);
        }
        await zip.generateAsync({
            type: "blob",
            compression: "DEFLATE",
            compressionOptions: {
                level: 3,
            }
        })
            .then(content => {
                zipURL = URL.createObjectURL(content);
            });
        return Promise.resolve(zipURL);
    }

}