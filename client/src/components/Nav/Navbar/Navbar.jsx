import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="container">
            <div className="logo">
							<span className="dot">.</span>
							<span className="text">baeht</span>
							<span className="dot">.</span>
						</div>
            <div className="links">
							<span>Business</span>
							<span>Explore</span>
							<span>Something</span>
							<span>Become Home Service Pro</span>
							<span>Sign In</span>
							<button>Join</button>
						</div>
        </div>
    </div>
  )
}

export default Navbar;