import React from 'react';
import { Home, ClipboardList, Play, BarChart2, Settings, Moon, Sun } from 'lucide-react';
import { useThemeContext } from '../../providers/ThemeProvider';

export function Sidebar() {
  const { theme, toggleTheme } = useThemeContext();

  const navigation = [
    { name: 'Dashboard', icon: Home, href: '/' },
    { name: 'Test Cases', icon: ClipboardList, href: '/test-cases' },
    { name: 'Test Runs', icon: Play, href: '/test-runs' },
    { name: 'Reports', icon: BarChart2, href: '/reports' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200 dark:border-gray-800">
          <span className="text-xl font-bold text-gray-900 dark:text-white">TestFlow</span>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}