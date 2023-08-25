const NavBar = () => {
  return (
    <div className="navbar bg-base-100 data border-b">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Frame Journey</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-9 rounded-full">
              <img src="https://github.com/shadcn.png" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
