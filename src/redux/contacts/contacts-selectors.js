export const selectAllNames = store => store.contacts;

export const selectFilteredContacts = store => {
  const { contacts:{items}, filter } = store;
  if (!filter) {
    return items;
  }
  const filterLowerCase = filter.toLowerCase();

  return items.filter(contact =>
    contact.name.toLowerCase().includes(filterLowerCase)
  );
};

