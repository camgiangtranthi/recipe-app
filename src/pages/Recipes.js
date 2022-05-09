import { createMemoryHistory } from "history"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Recipes() {
    const searches = [
        "pizza",
        "burger",
        "cookies",
        "juice",
        "biriyani",
        "salad",
        "ice cream",
        "lassagna",
        "pudding",
        "soup"
    ]
    return (
        <>
            <div className="previous-searches section">
                <h2>Previous Searches</h2>
                <div className="previous-searches-container">
                    { searches.map((search, index) => (
                        <div
                            style={{animationDelay: index * 0.1 + "s"}}
                            className="search-item" 
                            key={index}
                        >
                            {search}
                        </div>
                    ))}
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search ..."/>
                    <button className="btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </>
    )
}