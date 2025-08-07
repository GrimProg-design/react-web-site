import {Link} from "react-router-dom";
import "../styles/header.css"

export default function Header() {
  return (
    <div>
      <h1>My Project</h1>
      <div className="navigator">
        <Link to="/" className="nav-link">
          <button>Home</button>
        </Link>
        <Link to="page-2" className="nav-link">
          <button>Page-2</button>
        </Link>
        <Link to="page-3" className="nav-link">
          <button>Page-3</button>
        </Link>
        <Link to="page-4" className="nav-link">
          <button>Page-4</button>
        </Link>
      </div>
    </div>
  );
}
