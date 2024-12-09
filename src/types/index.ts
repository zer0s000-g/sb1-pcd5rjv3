export interface TestCase {
  id: string;
  title: string;
  description: string;
  steps: TestStep[];
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'draft' | 'active' | 'deprecated';
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  tags: string[];
}

export interface TestStep {
  id: string;
  order: number;
  action: string;
  expectedResult: string;
}

export interface TestRun {
  id: string;
  title: string;
  description: string;
  status: 'not_started' | 'in_progress' | 'completed';
  testCases: TestRunCase[];
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
}

export interface TestRunCase extends TestCase {
  result?: 'passed' | 'failed' | 'blocked' | 'skipped';
  notes?: string;
  executedBy?: string;
  executedAt?: Date;
}