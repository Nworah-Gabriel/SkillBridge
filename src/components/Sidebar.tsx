import React from 'react';
import {
    BookOpen,
    UserCheckIcon,
    LucideMegaphone,
    BarChart3,
    Settings,
    ChevronRight,
    Layers,
    LayoutGrid,
    NotebookPen,
    GraduationCap,
    X,
} from 'lucide-react';

interface SidebarProps {
    activeItem?: string;
    isMobileMenuOpen?: boolean;
    setIsMobileMenuOpen?: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    activeItem = 'Courses',
    isMobileMenuOpen = false,
    setIsMobileMenuOpen
}) => {
    const menuItems = [
        { icon: LayoutGrid, label: 'Dashboard' },
        { icon: BookOpen, label: 'Courses' },
        { icon: Layers, label: 'Modules' },
        { icon: NotebookPen, label: 'Topics' },
        { icon: UserCheckIcon, label: 'Faculties' },
        { icon: GraduationCap, label: 'Students' },
        { icon: LucideMegaphone, label: 'Announcements' },
        { icon: BarChart3, label: 'Reports & Analytics' },
        { icon: Settings, label: 'Settings' },
    ];

    const closeMenu = () => {
        if (setIsMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            {/* Desktop Sidebar - hidden on mobile */}
            <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto flex-col">
                {/* Logo Section */}
                <div className="p-6 flex-shrink-0">
                    <div className="flex flex-col justify-center items-center">
                        <img
                            src="/assets/logo.png"
                            alt="EduManage Logo"
                            className="w-full max-w-[180px] h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Navigation Section */}
                <div className="flex-1 p-4 pt-6 bg-blue-1000 overflow-y-auto">
                    <nav className="space-y-1">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = item.label === activeItem;
                            return (
                                <button
                                    key={item.label}
                                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base transition-colors ${isActive
                                            ? 'bg-sky-300 text-white'
                                            : 'text-white hover:bg-sky-300'
                                        }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <Icon size={20} />
                                        <span>{item.label}</span>
                                    </div>
                                    {isActive && <ChevronRight size={18} />}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </aside>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Sidebar - slides in from left */}
            <aside
                className={`fixed top-0 left-0 h-full w-[75%] max-w-[300px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full overflow-y-auto">
                    {/* Logo Section with Close Button */}
                    <div className="p-6 flex-shrink-0 border-b border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <img
                                src="/assets/logo.png"
                                alt="EduManage Logo"
                                className="w-full max-w-[140px] h-auto object-contain"
                            />
                            <button
                                onClick={closeMenu}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X size={24} className="text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex-1 p-4 bg-blue-900 overflow-y-auto">
                        <nav className="space-y-1">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = item.label === activeItem;
                                return (
                                    <button
                                        key={item.label}
                                        className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-base transition-colors ${isActive
                                                ? 'bg-sky-300 text-white'
                                                : 'text-white hover:bg-sky-300'
                                            }`}
                                        onClick={closeMenu}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <Icon size={20} />
                                            <span>{item.label}</span>
                                        </div>
                                        {isActive && <ChevronRight size={18} />}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;