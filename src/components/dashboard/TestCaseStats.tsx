import React from 'react';
import { StatCard } from './StatCard';
import { ClipboardList, PlayCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

export function TestCaseStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Test Cases"
        value="156"
        icon={ClipboardList}
        trend={{ value: 12, isPositive: true }}
      />
      <StatCard
        title="Active Test Runs"
        value="8"
        icon={PlayCircle}
        trend={{ value: 2, isPositive: true }}
      />
      <StatCard
        title="Pass Rate"
        value="92%"
        icon={CheckCircle2}
        trend={{ value: 3, isPositive: true }}
      />
      <StatCard
        title="Failed Tests"
        value="12"
        icon={AlertTriangle}
        trend={{ value: 5, isPositive: false }}
      />
    </div>
  );
}