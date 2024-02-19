const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("h1", { id: "head1", key: "1" }, "Hi! I am h1"),
	React.createElement("h2", { id: "head2", key: "2" }, "Hi! I am h2"),
])
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
