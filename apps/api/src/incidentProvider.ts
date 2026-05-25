import type { DepartmentContext, Usercontext } from '@repo/schemas';

export const getIncidentsProvider = async (
    dept: Usercontext['department'],
): Promise<DepartmentContext['incidents']> => {
    const allIncidents = [
        {id: 'INC-001', severity: 'low' as const, message: 'Printer is out of paper', department: 'IT'},
        {id: 'INC-002', severity: 'medium' as const, message: 'Network is slow', department: 'HR'},
        {id: 'INC-003', severity: 'high' as const, message: 'Database latency', department: 'Finance'},
        {id: 'INC-004', severity: 'low' as const, message: 'Printer is out of paper', department: 'Marketing'},
        {id: 'INC-005', severity: 'medium' as const, message: 'Network is slow', department: 'Sales'},
        {id: 'INC-006', severity: 'high' as const, message: 'Database latency', department: 'IT'},
        {id: 'INC-007', severity: 'low' as const, message: 'Printer is out of paper', department: 'HR'},
        {id: 'INC-008', severity: 'medium' as const, message: 'Network is slow', department: 'Finance'},
        {id: 'INC-009', severity: 'high' as const, message: 'Database latency', department: 'Marketing'},
        {id: 'INC-010', severity: 'low' as const, message: 'Printer is out of paper', department: 'Sales'},
    ];

    return allIncidents
        .filter((incident) => incident.department === dept)
        .map(({ id, severity, message }) => ({ id, severity, message }));
};