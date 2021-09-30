import AppProvider from "../AppContext/APIContextData";

const WithUser = (WrappedComponent: any) => {
  return () => {
    return (
      <AppProvider>
        <WrappedComponent />;
      </AppProvider>
    );
  };
};
export default WithUser;
