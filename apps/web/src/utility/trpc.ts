import { createTRPCReact } from '@trpc/react-query';
// We import ONLY the type from your API, keeping the bundles separate
import type { AppRouter } from '../../../api/src/router';

// This creates the hooks (like trpc.getDashboardContext.useQuery)
export const trpc = createTRPCReact<AppRouter>();