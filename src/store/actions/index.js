export const SHOW_NAME = "SHOW_NAME";

export function showName(name) {
  console.log("In action!");
  return {
    type: SHOW_NAME,
    payload: name
  };
}
