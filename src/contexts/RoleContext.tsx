import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { UserRole } from 'config';
import { useSettingsContext } from 'providers/SettingsProvider';

interface RoleContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  isCreator: boolean;
  isSubscriber: boolean;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

interface RoleProviderProps {
  children: ReactNode;
}

export const RoleProvider = ({ children }: RoleProviderProps) => {
  const { config, configDispatch } = useSettingsContext();
  const [role, setRoleState] = useState<UserRole>((config.role as UserRole) || 'subscriber');

  // Sync with settings when they change from other parts of the app
  useEffect(() => {
    if (config.role && config.role !== role) {
      setRoleState(config.role as UserRole);
    }
  }, [config.role]);

  // Update both local state and settings
  const setRole = useCallback(
    (newRole: UserRole) => {
      setRoleState(newRole);
      configDispatch({
        type: 'SET_CONFIG',
        payload: { role: newRole },
      });
    },
    [configDispatch],
  );

  const value = useMemo(
    () => ({
      role,
      setRole,
      isCreator: role === 'creator',
      isSubscriber: role === 'subscriber',
    }),
    [role, setRole],
  );

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
};

export const useRole = (): RoleContextType => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};

export default RoleContext;
