export const useNavigation = () => {
  const navigate = (destination, history) => {
    console.log('navigated to ', destination);
    history.push(`/${destination}`);
  };
  return { navigate };
};
