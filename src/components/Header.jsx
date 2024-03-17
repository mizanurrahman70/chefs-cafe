

const Header = () => {
    return (
      <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl font-extrabold ">Cafe House</a>
      </div>
      <div className="space-x-20 mr-32">
          <p>Home</p>
          <p>Recipes</p>
          <p>About</p>
          <p>Search</p>
        </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
      
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/C5SZV4Y/mizan.jpg" />
            </div>
          </div>
        
        </div>
      </div>
    </div>
    );
};

export default Header;