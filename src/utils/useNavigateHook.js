export const useNavigation = () => {
  const navigate = (destination, history) => {
    history.push(`/${destination}`);
  };
  return { navigate };
};
