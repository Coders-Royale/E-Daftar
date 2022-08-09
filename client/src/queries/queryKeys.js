const MODULE_NAME = "document-manager";

function generateKeyName(value) {
  return [MODULE_NAME, value];
}

const QUERY_KEYS = {
  GET_EMPLOYEE: generateKeyName("get-employee"),
  TRACK_STATUS: generateKeyName("track-status"),
  LIST_DOCUMENT: generateKeyName("list-document"),
  GET_ROOMS: generateKeyName("get-rooms"),
};

export default QUERY_KEYS;
