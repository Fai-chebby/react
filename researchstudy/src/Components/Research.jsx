 export  const Research=()=>{
    return(
        <div>
            <div id="wrapper">
                <header>
                    <div id="page-banner">
                        <h1 className="title">Bookorama</h1>
                        <p>Books for Ninjas</p>
                        <form id="search-books">
                            <input type="text" placeholder="Search books..."/>
                        </form>
                    </div>
                </header>
                <div id="book-list">
                    <h2 className="title">Books to Read</h2>
                    <ul>
                        <li>
                            <span className="name">Name of the Wind</span>
                            <span className="delete">delete</span>
                        </li>
                        <li>
                            <span className="name">The Wise Man's Fear</span>
                            <span className="delete">delete</span>
                        </li>
                        <li>
                            <span className="name">Kafka on the Shore</span>
                            <span className="delete">delete</span>
                        </li>
                        <li>
                            <span className="name">The Master and the Margarita</span>
                            <span className="delete">delete</span>
                        </li>
                    </ul>
                </div>
                <form id="add-book">
                    <input type="text" placeholder="Add a book..."/>
                    <button>Add</button>
                </form>

            </div>
        </div>
    )
 }