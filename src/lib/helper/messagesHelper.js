export default class MessagesHelper {

    static getMessageById(conversation,messageId){
        for (const message in conversation){
            if(message.id === messageId){
                return message;
            }
        }
    }

}