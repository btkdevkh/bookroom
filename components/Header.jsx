"use client";

import destroySession from "@/app/actions/destroySession";
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaBuilding,
  FaRestroom,
  FaPlus,
  FaBook,
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { toast } from "react-toastify";

function Header() {
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated, currentUser, setCurrentUser } =
    useAuth();

  const handleLogout = async () => {
    const { error, success } = await destroySession();

    if (success) {
      setIsAuthenticated(false);
      setCurrentUser(null);
      router.push("/login");
      return;
    }

    toast.error(error);
  };

  return (
    <div className="bg-base-200 sticky top-0">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="flex-1">
          <Link href="/" className="btn bg-black text-xl">
            B
          </Link>

          {currentUser ? <span className="ml-3">{currentUser.email}</span> : ""}
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn h-11 btn-ghost btn-sm"
            >
              <div className="rounded-full">
                <RxHamburgerMenu size={25} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-8 shadow-sm text-center flex gap-8 justify-center"
            >
              <Link href="/" className="flex justify-start items-center gap-3">
                <FaRestroom />
                <span>Rooms</span>
              </Link>

              {isAuthenticated && (
                <>
                  <Link
                    href="/bookings"
                    className="flex justify-start items-center gap-3"
                  >
                    <FaBook />
                    <span>Bookings</span>
                  </Link>
                  <Link
                    href="/rooms/add"
                    className="flex justify-start items-center gap-3"
                  >
                    <FaPlus />
                    <span>Add Room</span>
                  </Link>
                  <Link
                    href="/rooms/my"
                    className="flex justify-start items-center gap-3"
                  >
                    <FaBuilding />
                    <span>Mines</span>
                  </Link>

                  <button
                    className="flex justify-start items-center gap-3"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt />
                    <span>Sign Out</span>
                  </button>
                </>
              )}

              {!isAuthenticated && (
                <>
                  <Link
                    href="/register"
                    className="flex justify-start items-center gap-3"
                  >
                    <FaUser />
                    <span>Register</span>
                  </Link>
                  <Link
                    href="/login"
                    className="flex justify-start items-center gap-3"
                  >
                    <FaSignInAlt />
                    <span>Login</span>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
