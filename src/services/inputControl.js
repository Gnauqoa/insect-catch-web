export const onInputChange = (event, setState) => {
  const { name, value } = event.target;
  setState((state) => ({ ...state, [name]: value }));
};
export const onSwitchChange = (event, setState) => {
  const { name, checked } = event.target;
  setState((state) => ({ ...state, [name]: checked }));
};
export const onTimeChange = (event,setState, unit ) => {
  const { name, value } = event.target;
  setState((state) => ({
    ...state,
    [name]: { ...state[name], [unit]: value },
  }));
};
