export const sortChatsByDate = chats => {
  return chats.toSorted((a, b) => {
    const dateA = new Date(a.updatedAt);
    const dateB = new Date(b.updatedAt);
    return dateB - dateA;
  });
};
