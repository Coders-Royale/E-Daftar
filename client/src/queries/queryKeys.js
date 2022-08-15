const MODULE_NAME = "document-manager";

function generateKeyName(value) {
  return [MODULE_NAME, value];
}

const QUERY_KEYS = {
  GET_EMPLOYEE: generateKeyName("get-employee"),
  GET_ADMIN: generateKeyName("get-admin"),
  TRACK_STATUS: generateKeyName("track-status"),
  LIST_DOCUMENT: generateKeyName("list-document"),
  GET_ROOMS: generateKeyName("get-rooms"),
  LOAD_MESSAGES: generateKeyName("load-messages"),
};

export default QUERY_KEYS;
