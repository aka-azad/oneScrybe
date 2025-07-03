// src/components/RoleGuard.tsx
import { Navigate } from 'react-router-dom';
import { useRole } from 'contexts/RoleContext';
import LoadingSkeleton from '../sections/social/tab-panels/common/LoadingSkeleton';

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRole: 'subscriber' | 'creator';
}

export const RoleGuard = ({ children, allowedRole }: RoleGuardProps) => {
  const { role } = useRole();
  if (!role) {
    return <LoadingSkeleton />;
  }
  if (role !== allowedRole && role !== 'creator') {
    return <Navigate to="/dashboard/crm" replace />;
  }
  if (role !== allowedRole && role !== 'subscriber') {
    return <Navigate to="/dashboard/insights" replace />;
  }

  return <>{children}</>;
};
