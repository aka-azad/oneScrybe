import { Box, Chip, Paper, Stack, Typography } from '@mui/material';
import { SessionByOSData } from 'types/analytics';
import IconifyIcon from 'components/base/IconifyIcon';
import DashboardSelectMenu from 'components/common/DashboardSelectMenu';
import SessionByOSChart from './SessionByOSChart';

interface SessionByOSProps {
  data: SessionByOSData;
}

const SessionByOS = ({ data }: SessionByOSProps) => {
  return (
    <Paper component={Stack} sx={{ height: 1, flexDirection: 'column' }}>
      <Box sx={{ p: { xs: 3, md: 5 } }}>
        <Stack sx={{ mb: 1, justifyContent: 'space-between' }}>
          <Typography variant="h6">Session by OS</Typography>

          <DashboardSelectMenu
            defaultValue="windows"
            options={[
              {
                value: 'windows',
                label: 'Windows',
              },
              {
                value: 'linux',
                label: 'Linux',
              },
              {
                value: 'mac',
                label: 'MacOS',
              },
            ]}
          />
        </Stack>

        <Stack gap={1} alignItems="center">
          <Chip
            label="1.52%"
            color="success"
            variant="soft"
            size="small"
            icon={<IconifyIcon icon="material-symbols:trending-up-rounded" />}
            sx={{
              flexDirection: 'row-reverse',
            }}
          />

          <Typography variant="caption" color="text.secondary">
            more than last week (on average)
          </Typography>
        </Stack>
      </Box>

      <SessionByOSChart
        data={data}
        sx={{
          flex: 1,
          minHeight: 130,
          width: '100%',
          '&:not(&.echart-map)': {
            '> div': {
              '&:first-of-type': {
                height: 'unset !important',
              },
            },
          },
        }}
      />
    </Paper>
  );
};

export default SessionByOS;
