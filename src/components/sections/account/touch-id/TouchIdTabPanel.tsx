import { Divider, Stack } from '@mui/material';
import AccountTabPanelSection from '../common/AccountTabPanelSection';
import Biometrics from './Biometrics';
import TouchIdFeatures from './TouchIdFeatures';

const TouchIDTabPanel = () => {
  return (
    <Stack direction="column" divider={<Divider />} spacing={5}>
      <AccountTabPanelSection
        title="Touch ID"
        subtitle="Touch ID enables quick login, secure payments, autofill, and seamless user switching for a convenient experience."
        icon="material-symbols:lock-person-outline"
      >
        <Biometrics />
      </AccountTabPanelSection>
      <AccountTabPanelSection
        title="Touch ID Features & Settings"
        subtitle="Enable Touch ID for secure login, payments, autofill, and switching users."
        icon="material-symbols:lock-clock-outline"
      >
        <TouchIdFeatures />
      </AccountTabPanelSection>
    </Stack>
  );
};

export default TouchIDTabPanel;
