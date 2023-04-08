// ReactDOM.render(
// <ul>
//     <li>Abigail</li>
//     <li>Esther</li>
//     <li>Hannah</li>
//     </ul>, document.querySelector("#root"))

function Navbar() {
    return (
        <nav className ="navbar navbar-expand-lg navbar-light bg-light">
            <a className = "navbar-brand" href ="#">Navbar</a>
            <button className = "navbar-toggler" type = "button" data-toggle ="collapse" data-target ="navbarSupportedContent" aria-controls = "navbarSupportedContent" aria-expanded = "false" aria-label = "Toggle navigation">
                <span className = "navbar-toggler-icon"></span>
            </button>

            <div className ="collapse navbar-collapse" id ="navbarSupportedContent">
                <ul className = "navbar-nav mr-auto">
                    <li className = "nav-item active">
                        <a className = "nav-link" href = "#">Home<span className ="sr-only">(current)</span></a>
                    </li>
                    <li className= "nav-item">
                        <a className = "nav-link" href= "#">link</a>
                    </li>
                    <li className = "nav-item dropdown">
                        <a className = "nav-link dropdown-toggle" href = "#" id = "navbarDropdown" role = "button" data-toggle = "dropdown" aria-haspopup = "true" aria-expanded = "false">
                            dropdown
                        </a>
                        <div className = "dropdown-menu" aria-labelledby = "navbarDropdown">
                            <a className = "dropdown-item" href = "#">Action</a>
                            <a className = "dropdown-item" href = "#"> Another action</a>
                            <div className = "dropdown-divider"></div>
                            <a className= "dropdown-item" href = "#"> Something else here</a>
                        </div>

                    </li>
                    <li className = "nav-item">
                        <a className = "nav-link disabled" href = "#"> Disabled</a>
                    </li>
                </ul>
                <form className = "form-inline ny-2 ny-lg-0">
                    <input className = "form-control my-sm-2" type = "search" placeholder = "Search" aria-label = "Search" />
                    <button className = "btn btn-outline-success ny-2 ny-sm-0" type = "submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MainContent() {
    return (
        <h1>I am learning React</h1>
    )
}
ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>, 
    document.getElementById("root")
)