//import zod
import { z } from "zod";


export const UserContextSchema = z.object({
    id: z.string(),
    name: z.string(),
    department: z.enum(['IT', 'HR', 'Marketing', 'Sales', 'Finance', 'Legal', 'Customer Support']),
    office: z.string(),
})


export const DepartmentContextSchema = z.object({
    nexMeeting: z.object({
        title: z.string(),
        time: z.string(),
    }),
    incidents: z.array(z.object({
        id: z.string(),
        severity: z.enum(['low', 'medium', 'high']),
        message: z.string()
    }))
});

export type Usercontext = z.infer<typeof UserContextSchema>;
export type DepartmentContext = z.infer<typeof DepartmentContextSchema>;