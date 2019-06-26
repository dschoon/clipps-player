
const layoutStyle = {
    margin: 20,
    padding: 20,
};

const PlayerLayout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Page />
        </div>
    );
};

export default PlayerLayout;