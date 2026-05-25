import type { Usercontext } from '@repo/schemas';

export const getMeetingsProvider = async (department: Usercontext['department']) => {
    const allMeetings = [
        {title: 'Weekly Meeting', time: '10:00 AM', department: 'IT'},
        {title: 'Monthly Meeting', time: '10:00 AM', department: 'HR'},
        {title: 'Quarterly Meeting', time: '10:00 AM', department: 'Finance'},
        {title: 'Yearly Meeting', time: '10:00 AM', department: 'Marketing'},
        {title: 'Daily Meeting', time: '10:00 AM', department: 'Sales'},
        {title: 'Weekly Meeting', time: '10:00 AM', department: 'IT'},
        {title: 'Monthly Meeting', time: '10:00 AM', department: 'HR'},
        {title: 'Quarterly Meeting', time: '10:00 AM', department: 'Finance'},
        {title: 'Yearly Meeting', time: '10:00 AM', department: 'Marketing'},
        {title: 'Daily Meeting', time: '10:00 AM', department: 'Sales'},
    ];

    return allMeetings
        .filter((meeting) => meeting.department === department)
        .map(({ title, time }) => ({ title, time }));
};