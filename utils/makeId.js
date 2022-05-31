export const makeId = (Length) => {
  let result = '';
  const characters = 'qwertyuiopasdfghjklzxcvbnm1234567890';
  const charactersLength = characters.length;

  for (let index = 0; index < Length; index += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};
