import { ReactElement } from 'react';
import { Stack, StackOwnProps, Typography } from '@mui/material';

interface SectionHeaderProps extends StackOwnProps {
  title: string;
  subTitle: string;
  actionComponent?: ReactElement;
}

const SectionHeader = ({ title, subTitle, actionComponent, ...rest }: SectionHeaderProps) => {
  return (
    <Stack
      spacing={2}
      {...rest}
      sx={[
        {
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          mb: 4,
        },
        ...(Array.isArray(rest.sx) ? rest.sx : [rest.sx]),
      ]}
    >
      <div>
        <Typography variant="h6" sx={{ mb: 1, whiteSpace: 'nowrap' }}>
          {title}
        </Typography>
        <Typography variant="subtitle2" component="p" fontWeight="regular" color="text.secondary">
          {subTitle}
        </Typography>
      </div>
      {actionComponent}
    </Stack>
  );
};

export default SectionHeader;
