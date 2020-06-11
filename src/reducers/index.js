import distanceInWordsToNow from 'date-fns/formatDistanceToNow';

import {
  REQUEST_MESSAGES, RECEIVED_MESSAGES
} from '../actions';

const populateMessageWithMemberInfo = (messageItem, member) => {
  const {
    id: messageId, message, timestamp, userId
  } = messageItem;

  const {
    firstName,
    lastName,
    email,
    avatar
  } = member;

  return {
    fullName: `${firstName} ${lastName}`,
    email,
    avatar,
    messageId,
    message,
    timestamp,
    formattedTimeString: distanceInWordsToNow(new Date(timestamp), { addSuffix: true }),
    userId
  }
}

const populateMessagesWithMembersInfo = (messages, members) => {
  // create map of the members for easy retrieval
  const membersMap = {};
  members.forEach(member => {
    membersMap[member.id] = member;
  });

  let populatedMessages = messages.map(m => populateMessageWithMemberInfo(
    m,
    membersMap[m.userId]
  ));
  
    // sort by time
  populatedMessages.sort((a, b) => {
    const keyA = new Date(a.timestamp);
    const keyB = new Date(b.timestamp);
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;

    return 0;
  });

  return {
    populatedMessages,
    membersMap
  };
}

const initialState = { messages: [], members: [], status: 'start' };

const messageStore = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_MESSAGES:
      const { populatedMessages: messages,
        membersMap } = populateMessagesWithMembersInfo(action.messages, action.members);
      return {
        ...state,
        messages,
        membersMap,
        status: 'finished'
      }
    case REQUEST_MESSAGES:
      return {
        ...state,
        status: 'loading'
      }
    default:
      return state
  }
}

const rootReducer = messageStore;

export default rootReducer
