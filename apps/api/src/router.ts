import { router, publicProcedure } from './trpc';
import { DepartmentContextSchema,UserContextSchema } from '@repo/schemas';
import { getMeetingsProvider } from './meetingsProvider';
import { getIncidentsProvider } from './incidentProvider';

export const appRouter = router( {
    getDashboardContext: publicProcedure.input(UserContextSchema).output(DepartmentContextSchema).query(
        async({input}) => {
            const startTime = Date.now();

            const [meetings, incidents] = await Promise.all([
                getMeetingsProvider(input.department),
                getIncidentsProvider(input.department),
            ])
            console.log(`Time taken: ${Date.now() - startTime}ms`);

            return {
                nexMeeting: meetings[0] ?? {
                    title: 'No meetings scheduled',
                    time: '—',
                },
                incidents,
            };
        },
    ),
});
export type AppRouter = typeof appRouter;