import { store } from '../../redux/store/index';
import { updateConversations } from "../../redux/actions/conversations/conversations";

const muttedCheckingTime =  60 * 60 * 1000;

class JobManager {

    checkMuttedConversationsExp () {
        setInterval(() => {
            let expired = store.getState()
                .conversations
                .filter(conversation =>
                    conversation.mutted.status && +new Date() > conversation.mutted.expiration)
                .map(conversation => ({ ...conversation, mutted: { status: false, expiration: 0 }}));
            expired.length && store.dispatch(updateConversations(expired));
        }, muttedCheckingTime);
    }

}

export default JobManager;