import React from 'react';
import { mockTestRuns } from '../../data/mockData';
import { CheckCircle, XCircle, AlertCircle, Clock, LucideIcon } from 'lucide-react';
import { TestRunCase } from '../../types';

const statusIcons: Record<NonNullable<TestRunCase['result']>, LucideIcon> = {
  passed: CheckCircle,
  failed: XCircle,
  blocked: AlertCircle,
  skipped: Clock,
};

export function RecentTestRuns() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Test Runs</h2>
        <div className="mt-4">
          {mockTestRuns.map((run) => (
            <div key={run.id} className="border-t border-gray-200 dark:border-gray-700">
              <div className="py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">{run.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{run.description}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    {run.status}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {run.testCases.map((testCase) => (
                    <div key={testCase.id} className="flex items-center space-x-3">
                      {testCase.result && statusIcons[testCase.result] && (
                        React.createElement(statusIcons[testCase.result], {
                          className: `w-5 h-5 ${
                            testCase.result === 'passed' ? 'text-green-500' :
                            testCase.result === 'failed' ? 'text-red-500' :
                            'text-yellow-500'
                          }`
                        })
                      )}
                      <span className="text-sm text-gray-600 dark:text-gray-300">{testCase.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}