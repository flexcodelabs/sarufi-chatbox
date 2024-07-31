/**
 * Retrieves or generates a chat ID for the chat service.
 * If an existing chat ID is found in the local storage and `isNew` is false, it returns the existing chat ID.
 * Otherwise, it generates a new chat ID using the current timestamp and stores it in the local storage.
 * @param isNew - Indicates whether a new chat ID should be generated even if an existing one is found.
 * @returns The chat ID.
 */
export const getChatId = (isNew: boolean = false): string => {
  const chatId = localStorage.getItem("sarufi-chatId");
  if (chatId && !isNew) return chatId;

  const newChatId = new Date().valueOf().toLocaleString();
  localStorage.setItem("sarufi-chatId", newChatId);
  return newChatId;
};
