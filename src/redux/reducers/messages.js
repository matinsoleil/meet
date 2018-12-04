import { handleActions } from 'redux-actions';
import { ActionTypes } from '../actionstypes';


const defaultState = [
    {
        "id": "1",
        "message": "Hi Jack. What are you doing?",
        "hour": "10:01",
        "status": "1",
        "sender": "U1"
    },
    {
        "id": "2",
        "message": "Hi Mary. I'm filling out a job application.",
        "hour": "10:02",
        "status": "1",
        "sender": "2"
    },
    {
        "id": "3",
        "message": "Are you finished with school already?",
        "hour": "10:03",
        "status": "1",
        "sender": "U1"
    },
    {
        "id": "4",
        "message": "No. I have one more semester, but it would be great to have a job lined up.",
        "hour": "10:04",
        "status": "1",
        "sender": "2"
    },
    {
        "id": "5",
        "message": "How is your day going?",
        "hour": "10:05",
        "status": "1",
        "sender": "U1"
    },
    {
        "id": "6",
        "message": "Quite busy. I'm preparing for my presentation tomorrow on our marketing strategy. I'm not even half done yet.",
        "hour": "10:06",
        "status": "1",
        "sender": "U1"
    },
    {
        "id": "7",
        "message": "You must feel stressed out now.",
        "hour": "10:07",
        "status": "1",
        "sender": "2"
    },
    {
        "id": "8",
        "message": "That's an understatement.",
        "hour": "10:08",
        "status": "1",
        "sender": "U1"
    },
    {
        "id": "9",
        "message": "What are you doing now?",
        "hour": "10:09",
        "status": "1",
        "sender": "U1"
    },
    {
        "id": "10",
        "message": "I'm playing pool with my friends at a pool hall.",
        "hour": "10:10",
        "status": "1",
        "sender": "2"
    },
    {
        "id": "11",
        "message": "I didn't know you play pool. Are you having fun?",
        "hour": "10:11",
        "status": "1",
        "sender": "U1"
    },
    {
        "id": "12",
        "message": "I'm having a great time. How about you? What are you doing?",
        "hour": "10:12",
        "status": "1",
        "sender": "2"
    },
    {
        "id": "13",
        "message": {
            "type": "0",
            "lat": 19.4492167,
            "lon": -99.2148245,
            "zoom": 16
        },
        "hour": "10:13",
        "status": "1",
        "sender": "U1"
    },
    {
        "id": "14",
        "message": {
            "type": "1",
            "src": "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
        },
        "hour": "10:14",
        "status": "1",
        "sender": "2"
    },
    {
        "id": "15",
        "message": {
            "type": "4",
            "toWhoReply": "2",
            "toReply": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta justo ut scelerisque cursus. Etiam ultricies, urna sit amet rhoncus condimentum, tellus neque finibus ex, in vestibulum neque mauris quis justo",
            "message": "hi Friend, What is that means"
        },
        "hour": "11:45",
        "status": "1",
        "sender": "U1"
    }
];
// const defaultState = null;
const actionHandlersMap = new Map([
    [ActionTypes.FETCH_MESSAGES, (state, action) => ({
        ...state, ...action.payload
    })
    ],
    [
        ActionTypes.ADD_MESSAGES, (state, action) => { return action.payload.messages }
    ],
    [
        ActionTypes.ADD_MESSAGE,
        (state, action) => {
            state.push(action.payload.message)
            return [...state];
        },
    ],
    [
        ActionTypes.DELETE_CONVERSATION,
        (state, action) => [...action.payload]
    ],
    [
        ActionTypes.DELETE_MESSAGE,
        (state, action) => {
            return state.filter(messages => ((messages.id !== action.payload.messageId)))
        }
    ],

]);

export const messagesReducer = handleActions(actionHandlersMap, defaultState);
