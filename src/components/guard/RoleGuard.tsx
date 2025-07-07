// src/components/RoleGuard.tsx
// import { Navigate } from 'react-router-dom';
// import { useRole } from 'contexts/RoleContext';

// import LoadingSkeleton from '../sections/social/tab-panels/common/LoadingSkeleton';

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRole?: ('subscriber' | 'creator')[];
}

export const RoleGuard = ({
  children,
  // allowedRole = []
}: RoleGuardProps) => {
  // const { role } = useRole();
  // if (!role) {
  //   return <LoadingSkeleton />;
  // }
  // if (!allowedRole.includes(role)) {
  //   return <Navigate to="/" replace />;
  // }
  // if (!allowedRole.includes(role)) {
  //   return <Navigate to="/creator/insights" replace />;
  // }

  return <>{children}</>;
};
