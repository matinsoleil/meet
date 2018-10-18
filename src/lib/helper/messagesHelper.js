export default class MessagesHelper {

    static getMessageById(conversation,messageId){
        let actualMessage = undefined;
        for (const index in conversation){
            let message = conversation[index];
            //console.log(message.id === messageId);
            if(message.id === messageId){
                actualMessage = message;
                break;
            }
        }
        return actualMessage
    }

    static getOwner(contacts,ownerId){
        let owner=undefined;
        for (const index in contacts){
            let contact = contacts[index];
            if(contact.id === ownerId){
                owner = contact.name;
                break;
            }
        }
        return owner;
    }

}