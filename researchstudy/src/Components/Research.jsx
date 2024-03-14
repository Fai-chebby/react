 import './Research.css'
export  const Research=()=>{
    return(
        <div>
            <div id="container">
                <header>
                    <div id="page-banner">
                        <h1 className="title">ResearchStudy</h1>
                        <p>Books to study</p>
                        <form id="search-books">
                            <input type="text" placeholder="Search books..."/>
                        </form>
                    </div>
                </header>
                <div id="book-list">
                    <h2 className="title">Books to Read</h2>
                    <ul>
                        <li>
                            <span className="name">How to Pray Effectively</span>
                            <span className="delete">delete</span>
                        </li>
                        <li>
                            <span className="name">The power-of-Tongues</span>
                            <span className="delete">delete</span>
                        </li>
                        <li>
                            <span className="name">Your-Rights-in-Christ</span>
                            <span className="delete">delete</span>
                        </li>
                        <li>
                            <span className="name">How to Make Your Faith Work</span>
                            <span className="delete">delete</span>
                        </li>
                        <li>
                            <span className="name">Prayer life</span>
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