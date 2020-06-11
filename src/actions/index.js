
import endpoints from '../endpoints'; 

export const REQUEST_MESSAGES = 'REQUEST_MESSAGES'
export const RECEIVED_MESSAGES = 'RECEIVED_MESSAGES'

export const requestPosts = () => ({
  type: REQUEST_MESSAGES
})

export const receivedMessages = (res = []) => ({
  type: RECEIVED_MESSAGES,
  messages: res[0],
  members: res[1],
  receivedAt: Date.now()
});

const fetchMessagesFromServer = (fetchMembersInfo) => dispatch => {
  dispatch(requestPosts());
  const requests = [
    fetch(endpoints.getMessages)
      .then(response => response.json())
  ];

  if (fetchMembersInfo) {
    requests.push(
      fetch(endpoints.getMembers)
        .then(response => response.json())
    );
  }

  return Promise.all(requests)
    .then(res => dispatch(receivedMessages(res)))
}

export const fetchMessages = (fetchMembersInfo) => (dispatch) => {
  return dispatch(fetchMessagesFromServer(fetchMembersInfo))
}
