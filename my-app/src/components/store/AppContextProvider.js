

function AppContextProvider(props) {
    return (
        <AddressContextProvider value={currentValue}>
            {props.children}
        </AddressContextProvider>
    );
}

export default AppContextProvider;