
const Header = () => {
    return (
      <>
        <div className="flex justify-between items-center bg-gray-100 px-4 py-2 flex-wrap sm:flex-nowrap ">
    
          <div className="flex items-center sm:w-full  max-w-md relative ml-3 mb-2 sm:mb-0">
            <i className="fas fa-search absolute left-3 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search your course"
              className="pl-10 px-3 py-1.5 border rounded-lg w-full outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  

          <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">

            <button className="relative">
              <i className="far fa-circle-question text-gray-600"></i>
            </button>
            <button className="relative">
              <i className="far fa-comment text-gray-600 text-lg ml-4"></i>
              <span className="absolute -top-0 -right-0 w-2 h-2   sm:bg-red-500 rounded-full"></span>
            </button>
            <button className="relative">
              <i className="fas fa-sliders-simple text-gray-600"></i>
            </button>
            <button>
              <i className="fas fa-sliders text-gray-600 text-lg"></i>
            </button>
            <button>
              <i className="far fa-bell text-gray-600 ml-4 w-3"></i>
              <span className="absolute -top-0.5 -right-0 mt-5 mr-60 w-2 h-2 sm:bg-red-500 rounded-full"></span>
            </button>
            <img
              src="https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?t=st=1734704516~exp=1734708116~hmac=4ca75bfbba7aa6ebc2f29ccc812e5f7720680a33645e7d77653632751b037c68&w=740"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover sm:ml-9"
            />
            <span className="text-sm font-medium mr-5">Adeline H. Dancy</span>
          </div>
        </div>
      </>
    );
  };
  
  export default Header;
  