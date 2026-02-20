import React from 'react';
import { Bell, LogOut, Menu } from 'lucide-react';

interface HeaderProps {
    toggleMobileMenu?: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileMenu }) => {
    return (
        <header className="bg-white border-b border-gray-200 py-4 px-4 lg:px-6 sticky top-0 z-30">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                    {/* Hamburger Menu Button - visible only on mobile */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <Menu size={24} className="text-gray-600" />
                    </button>

                    {/* Welcome Section - hidden on mobile, visible on desktop */}
                    <div className="hidden lg:block">
                        <h1 className="text-2xl font-semibold text-gray-800">Welcome, Mrs. Tola!</h1>
                        <p className="text-gray-500 text-sm">Message your organizational operations, events and learning programs.</p>
                    </div>
                </div>

                {/* Right section - Icons and Profile */}
                <div className="flex items-center space-x-3 lg:space-x-4">
                    <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <div className="hidden sm:flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                        <div className="hidden lg:block text-sm">
                            <p className="font-medium text-gray-700">Mrs. Tola</p>
                            <p className="text-gray-500 text-xs">Organization Admin</p>
                        </div>
                    </div>

                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                        <LogOut size={20} />
                    </button>
                </div>
            </div>

            {/* Mobile Welcome Message - visible only on mobile */}
            <div className="lg:hidden mt-4">
                <h1 className="text-xl font-semibold text-gray-800">Welcome, Mrs. Tola!</h1>
                <p className="text-gray-500 text-sm mt-1">Message your organizational operations, events and learning programs.</p>
            </div>
        </header>
    );
};

export default Header;