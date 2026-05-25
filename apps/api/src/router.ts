import { router, publicProcedure } from './trpc';
import { DepartmentContextSchema,UserContextSchema } from '@repo/schemas';

export const appRouter = router( {
    getDashboardContext: publicProcedure.input(UserContextSchema).query(
        async( { input: Usercontext })=> {
            const { department } = Usercontext;

            const mockData = {
                nexMeeting: {
                  title: department === 'IT' ? 'Architecture Review' : 'Quarterly Planning',
                  time: '10:00 AM',
                },
                incidents: {
                  id: 'INC-001',
                  severity: department === 'IT' ? 'high' : 'low' as 'high' | 'low', // Cast to match enum
                  message: department === 'IT' ? 'Database latency' : 'Standard maintenance',
                }
              };
              return {mockData};
        }
    )
});
export type AppRouter = typeof appRouter;