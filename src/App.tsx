import React from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { TestCaseStats } from './components/dashboard/TestCaseStats';
import { RecentTestRuns } from './components/dashboard/RecentTestRuns';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <Header />
      <main className="ml-64 pt-16 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
            <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg">
              New Test Run
            </button>
          </div>
          
          <TestCaseStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentTestRuns />
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Test Coverage</h2>
              {/* Test coverage chart will be added here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;