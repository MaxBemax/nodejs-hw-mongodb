const parseContactParams = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const isValid = (value) => ['work', 'home', 'personal'].includes(value);

  if (isValid(type)) return type;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'string') return;

  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedType = parseContactParams(contactType);
  const parsedisFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedisFavourite,
  };
};
