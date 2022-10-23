import React from "react";
import wishlistIcon from "../../assets/icons/wishlist.png";
import profileIcon from "../../assets/icons/ProfileIcon.svg";
import { NavLink } from "react-router-dom";

// This function handles the side nav/hamburger menu on mobile and tablet screen
function SideNav() {
  return (
    <header className="bg-white w-[300px] h-full pb-[300px]">
        <div className="flex pb-0 p-6 ml-10 gap-20 items-center">
            <svg width="134" height="40" viewBox="0 0 134 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.52 29.352C9.792 29.352 11.328 28.296 12 27.304L10.88 24.104C10.432 25 9.536 25.992 8.32 25.992C7.264 25.992 6.464 25.576 6.464 23.88V16.2H11.232V13.416H6.464V9.256L2.88 11.528V13.416H0.448V16.2H2.88V24.744C2.88 27.496 4.576 29.352 7.52 29.352ZM20.3 29.32C23.756 29.32 25.868 27.752 27.052 25.96L24.844 23.656C24.268 24.968 23.052 26.376 20.332 26.376C17.868 26.376 16.236 24.872 16.044 22.088H27.18C27.244 21.768 27.308 21.096 27.308 20.52C27.308 16.2 24.716 13.096 20.044 13.096C15.66 13.096 12.62 16.328 12.62 21.224C12.62 26.088 15.66 29.32 20.3 29.32ZM20.044 15.976C22.412 15.976 23.82 17.32 24.076 19.784H16.076C16.364 17.256 17.836 15.976 20.044 15.976ZM37.515 29.32C41.419 29.32 43.883 27.112 44.715 24.168L41.483 22.568C41.131 24.808 40.011 26.312 37.579 26.312C35.115 26.312 33.611 24.488 33.611 21.224C33.611 17.928 35.115 16.104 37.579 16.104C39.979 16.104 41.131 17.608 41.483 19.848L44.715 18.248C43.883 15.304 41.419 13.096 37.515 13.096C32.875 13.096 29.963 16.36 29.963 21.224C29.963 26.056 32.875 29.32 37.515 29.32ZM51.0658 29V20.264C51.0658 17.704 51.9618 16.008 54.5858 16.008C56.9858 16.008 57.6258 17.32 57.6258 19.24V29H61.2418V18.152C61.2418 14.92 59.3858 13.096 56.3458 13.096C53.2418 13.096 51.6418 15.208 51.0658 17.672V7.56H47.4818V29H51.0658Z" fill="#0F27BD"/>
                <path d="M69.472 29V20.264C69.472 17.704 70.368 16.008 72.48 16.008C74.592 16.008 75.488 17.096 75.488 19.24V29H79.072V20.264C79.072 17.704 79.968 16.008 82.08 16.008C84.192 16.008 85.088 17.096 85.088 19.24V29H88.672V18.152C88.672 14.92 87.104 13.096 84.128 13.096C81.152 13.096 79.616 15.24 79.072 17.704C78.912 14.76 77.376 13.096 74.528 13.096C71.584 13.096 70.048 15.208 69.472 17.672V13.416H65.888V29H69.472ZM95.684 29.32C98.948 29.32 100.452 26.888 100.932 24.84V25.992C100.932 28.232 102.244 29 103.908 29H106.116V25.928H105.124C104.548 25.928 104.292 25.704 104.292 25V19.144C104.292 15.304 102.116 13.096 98.244 13.096C94.788 13.096 92.356 14.888 91.14 16.552L93.284 19.112C94.18 17.48 95.812 16.264 97.892 16.264C100.036 16.264 100.74 17.32 100.868 18.888L95.652 21.096C93.124 22.088 91.588 23.432 91.588 25.64C91.588 27.88 93.124 29.32 95.684 29.32ZM95.044 25.096C95.044 24.296 95.588 23.752 96.932 23.144L100.932 21.352V23.016C100.932 25.128 99.332 26.536 96.964 26.536C95.652 26.536 95.044 25.992 95.044 25.096ZM112.441 29V20.424C112.441 17.832 114.105 15.784 115.897 15.784C116.953 15.784 117.369 16.488 117.369 17.352C117.369 18.248 116.889 19.272 116.377 19.784H120.057C120.345 19.304 120.761 18.184 120.761 16.68C120.761 14.376 119.321 13.096 117.369 13.096C114.585 13.096 113.017 15.336 112.441 17.832V13.416H108.857V29H112.441ZM128.77 29.352C131.042 29.352 132.578 28.296 133.25 27.304L132.13 24.104C131.682 25 130.786 25.992 129.57 25.992C128.514 25.992 127.714 25.576 127.714 23.88V16.2H132.482V13.416H127.714V9.256L124.13 11.528V13.416H121.698V16.2H124.13V24.744C124.13 27.496 125.826 29.352 128.77 29.352Z" fill="#F17105"/>
            </svg>
        </div>
        <div className="p-6 px-12 items-center">
            <ul>
                <li className="text-lg p-5 font-semibold text-blue-800">Menu</li>
                <NavLink to='/dashboard' className="flex font-medium text-[17px] text-gray-400 gap-7 items-center p-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2H15.23C13.64 2 13 2.6 13 4.1V10.9C13 12.4 13.64 13 15.23 13H19.27C20.86 13 21.5 12.4 21.5 10.9Z" fill="#A1A4B6"/>
                        <path d="M11 13.1V19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9V13.1C2.5 11.6 3.14 11 4.73 11H8.77C10.36 11 11 11.6 11 13.1Z" fill="#A1A4B6"/>
                        <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15H15.23C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="#A1A4B6"/>
                        <path d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z" fill="#A1A4B6"/>
                    </svg>
                    Dashboard
                </NavLink>
                <NavLink to='/messages' className="flex font-medium text-[17px] text-gray-400 gap-7 items-center p-5">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 10.015C0.5 4.74712 4.71 0 10.52 0C16.2 0 20.5 4.65699 20.5 9.98498C20.5 16.1642 15.46 20 10.5 20C8.86 20 7.04 19.5593 5.58 18.698C5.07 18.3876 4.64 18.1572 4.09 18.3375L2.07 18.9384C1.56 19.0986 1.1 18.698 1.25 18.1572L1.92 15.9139C2.03 15.6034 2.01 15.2729 1.85 15.0125C0.99 13.4301 0.5 11.6975 0.5 10.015ZM9.2 10.015C9.2 10.7261 9.77 11.2969 10.48 11.307C11.19 11.307 11.76 10.7261 11.76 10.025C11.76 9.31397 11.19 8.74311 10.48 8.74311C9.78 8.7331 9.2 9.31397 9.2 10.015ZM13.81 10.025C13.81 10.7261 14.38 11.307 15.09 11.307C15.8 11.307 16.37 10.7261 16.37 10.025C16.37 9.31397 15.8 8.74311 15.09 8.74311C14.38 8.74311 13.81 9.31397 13.81 10.025ZM5.87 11.307C5.17 11.307 4.59 10.7261 4.59 10.025C4.59 9.31397 5.16 8.74311 5.87 8.74311C6.58 8.74311 7.15 9.31397 7.15 10.025C7.15 10.7261 6.58 11.2969 5.87 11.307Z" fill="#A1A4B6"/>
                    </svg>
                    Messages
                </NavLink>
                <NavLink to='/products' className="flex font-medium text-[17px] text-gray-400 gap-7 items-center p-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.1 6.94C20.1 7.48 19.81 7.97 19.35 8.22L17.61 9.16L16.13 9.95L13.06 11.61C12.73 11.79 12.37 11.88 12 11.88C11.63 11.88 11.27 11.79 10.94 11.61L4.65002 8.22C4.19002 7.97 3.90002 7.48 3.90002 6.94C3.90002 6.4 4.19002 5.91 4.65002 5.66L6.62002 4.6L8.19002 3.75L10.94 2.27C11.6 1.91 12.4 1.91 13.06 2.27L19.35 5.66C19.81 5.91 20.1 6.4 20.1 6.94Z" fill="#A1A4B6"/>
                    <path d="M9.89997 12.7899L4.04997 9.8699C3.59997 9.6399 3.07997 9.6699 2.64997 9.9299C2.21997 10.1899 1.96997 10.6499 1.96997 11.1499V16.6799C1.96997 17.6399 2.49997 18.4999 3.35997 18.9299L9.20997 21.8499C9.40997 21.9499 9.62997 21.9999 9.84997 21.9999C10.11 21.9999 10.37 21.9299 10.6 21.7799C11.03 21.5199 11.28 21.0599 11.28 20.5599V15.0299C11.29 14.0799 10.76 13.2199 9.89997 12.7899Z" fill="#A1A4B6"/>
                    <path d="M22.03 11.1499V16.6799C22.03 17.6299 21.5 18.4899 20.64 18.9199L14.79 21.8499C14.59 21.9499 14.37 21.9999 14.15 21.9999C13.89 21.9999 13.63 21.9299 13.39 21.7799C12.97 21.5199 12.71 21.0599 12.71 20.5599V15.0399C12.71 14.0799 13.24 13.2199 14.1 12.7899L16.25 11.7199L17.75 10.9699L19.95 9.86988C20.4 9.63988 20.92 9.65988 21.35 9.92988C21.77 10.1899 22.03 10.6499 22.03 11.1499Z" fill="#A1A4B6"/>
                    <path d="M17.61 9.16L16.13 9.95L6.62 4.6L8.18999 3.75L17.37 8.93C17.47 8.99 17.55 9.07 17.61 9.16Z" fill="#A1A4B6"/>
                    <path d="M17.75 10.97V13.24C17.75 13.65 17.41 13.99 17 13.99C16.59 13.99 16.25 13.65 16.25 13.24V11.72L17.75 10.97Z" fill="#A1A4B6"/>
                    </svg>
                    Products
                </NavLink>
                <NavLink to='/wishlist' className="flex font-medium text-[17px] text-gray-400 gap-7 items-center p-5">
                    <img src={wishlistIcon} alt="" />
                    Wishlist
                </NavLink>
                <NavLink to='/profile' className="flex font-medium text-[17px] text-gray-400 gap-7 items-center p-5">
                    <img src={profileIcon} alt="" />
                    My Profile
                </NavLink>
                <NavLink to='/notifications' className="flex font-medium text-[17px] text-gray-400 gap-7 items-center p-5">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.9516 15.6975L19.8683 13.8991C19.6408 13.4983 19.435 12.74 19.435 12.2958V9.55496C19.435 7.00912 17.94 4.80996 15.7841 3.78079C15.2208 2.78413 14.1808 2.16663 12.9891 2.16663C11.8083 2.16663 10.7466 2.80579 10.1833 3.81329C8.07081 4.86413 6.60831 7.04163 6.60831 9.55496V12.2958C6.60831 12.74 6.40248 13.4983 6.17498 13.8883L5.08081 15.6975C4.64748 16.4233 4.54998 17.225 4.82081 17.9616C5.08081 18.6875 5.69831 19.2508 6.49998 19.5216C8.60165 20.2366 10.8116 20.5833 13.0216 20.5833C15.2316 20.5833 17.4416 20.2366 19.5433 19.5325C20.3016 19.2833 20.8866 18.7091 21.1683 17.9616C21.45 17.2141 21.3741 16.3908 20.9516 15.6975Z" fill="#717591"/>
                        <path d="M16.0658 21.6775C15.6108 22.9341 14.4083 23.8333 13 23.8333C12.1442 23.8333 11.2992 23.4866 10.7033 22.8691C10.3567 22.5441 10.0967 22.1108 9.94501 21.6666C10.0858 21.6883 10.2267 21.6991 10.3783 21.7208C10.6275 21.7533 10.8875 21.7858 11.1475 21.8075C11.765 21.8616 12.3933 21.8941 13.0217 21.8941C13.6392 21.8941 14.2567 21.8616 14.8633 21.8075C15.0908 21.7858 15.3183 21.775 15.535 21.7425C15.7083 21.7208 15.8817 21.6991 16.0658 21.6775Z" fill="#717591"/>
                    </svg>
                    Notifications
                </NavLink>
                <NavLink to='/support' className="flex font-medium sm:text-[17px] text-gray-400 gap-7 items-center p-5">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13" cy="13" r="12" fill="#A1A4B6" stroke="#A1A4B6" strokeWidth="2"/>
                    <path d="M13.567 15.048V14.668C13.567 12.312 17.139 12.198 17.139 9.291C17.139 7.125 15.6 6.08 13.168 6.08C10.318 6.08 8.361 7.828 8.608 10.241L10.413 11.533C10.128 9.215 11.325 8.113 13.016 8.113C14.27 8.113 14.84 8.664 14.84 9.5C14.84 11.419 11.553 11.609 11.553 14.497V15.048H13.567ZM13.757 19V16.302H11.325V19H13.757Z" fill="#FAFAFB"/>
                    </svg>
                    Help & Support
                </NavLink>
                <NavLink to='/' className="flex font-medium text-[17px] text-gray-400 gap-7 items-center p-5 mt-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z" fill="#D41111"/>
                        <path d="M4.55994 11.2501L6.62994 9.18009C6.77994 9.03009 6.84994 8.84009 6.84994 8.65009C6.84994 8.46009 6.77994 8.26009 6.62994 8.12009C6.33994 7.83009 5.85994 7.83009 5.56994 8.12009L2.21994 11.4701C1.92994 11.7601 1.92994 12.2401 2.21994 12.5301L5.56994 15.8801C5.85994 16.1701 6.33994 16.1701 6.62994 15.8801C6.91994 15.5901 6.91994 15.1101 6.62994 14.8201L4.55994 12.7501H8.99994V11.2501H4.55994V11.2501Z" fill="#D41111"/>
                    </svg>
                    <h1 className="text-red-600 font-medium text-[17px]">Logout</h1>
                </NavLink>
            </ul>
        </div>
    </header>
  )
}

export default SideNav;