const MODULE_NAME = "hostel-verse";

function generateKeyName(value) {
  return [MODULE_NAME, value];
}

const QUERY_KEYS = {
  GET_EMPLOYEE: generateKeyName("get-employee"),
};

export default QUERY_KEYS;
