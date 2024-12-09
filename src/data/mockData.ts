import { TestCase, TestRun } from '../types';

export const mockTestCases: TestCase[] = [
  {
    id: 'TC-001',
    title: 'User Login Validation',
    description: 'Verify user login functionality with valid and invalid credentials',
    steps: [
      {
        id: 'step-1',
        order: 1,
        action: 'Enter valid email address',
        expectedResult: 'Email field accepts valid format'
      },
      {
        id: 'step-2',
        order: 2,
        action: 'Enter valid password',
        expectedResult: 'Password field accepts input'
      }
    ],
    priority: 'high',
    status: 'active',
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-15'),
    createdBy: 'John Doe',
    tags: ['login', 'security', 'authentication']
  },
  {
    id: 'TC-002',
    title: 'Product Checkout Process',
    description: 'Validate complete checkout flow for product purchase',
    steps: [
      {
        id: 'step-1',
        order: 1,
        action: 'Add product to cart',
        expectedResult: 'Product successfully added to cart'
      }
    ],
    priority: 'critical',
    status: 'active',
    createdAt: new Date('2024-03-12'),
    updatedAt: new Date('2024-03-14'),
    createdBy: 'Jane Smith',
    tags: ['checkout', 'payment', 'e-commerce']
  }
];

export const mockTestRuns: TestRun[] = [
  {
    id: 'TR-001',
    title: 'Sprint 23 Regression',
    description: 'Full regression test suite for Sprint 23 release',
    status: 'in_progress',
    testCases: [
      {
        ...mockTestCases[0],
        result: 'passed',
        executedBy: 'Jane Smith',
        executedAt: new Date('2024-03-15')
      },
      {
        ...mockTestCases[1],
        result: 'failed',
        notes: 'Payment gateway timeout',
        executedBy: 'John Doe',
        executedAt: new Date('2024-03-15')
      }
    ],
    createdAt: new Date('2024-03-14'),
    startedAt: new Date('2024-03-15')
  }
];