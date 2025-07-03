import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup, SxProps, Tooltip } from '@mui/material';
import { useRole } from 'contexts/RoleContext';

interface RoleTogglerProps {
  type?: 'default' | 'slim';
  sx?: SxProps;
}

const RoleToggler = ({ type = 'default', sx }: RoleTogglerProps) => {
  const { t } = useTranslation();
  const { setRole, isCreator } = useRole();

  const handleRoleChange = () => {
    setRole(isCreator ? 'subscriber' : 'creator');
  };

  if (type === 'slim') {
    return (
      <Tooltip title={t(isCreator ? 'Switch to Subscriber' : 'Switch to Creator')}>
        <Button
          color="neutral"
          variant="text"
          onClick={handleRoleChange}
          sx={{
            minWidth: 'auto',
            p: 1,
            ...sx,
          }}
        >
          {t(isCreator ? 'Subscriber' : 'Creator')}
        </Button>
      </Tooltip>
    );
  }

  return (
    <ButtonGroup
      variant="contained"
      size="small"
      sx={{
        boxShadow: 'none',
        '& .MuiButtonGroup-grouped': {
          minWidth: 100,
          textTransform: 'none',
          fontWeight: 500,
          '&:not(:last-of-type)': {
            borderRight: 'none',
          },
          '&.Mui-selected': {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          },
        },
        ...sx,
      }}
    >
      <Tooltip title={t('Switch to Subscriber')}>
        <Button
          onClick={() => setRole('subscriber')}
          variant={!isCreator ? 'contained' : 'outlined'}
          color={!isCreator ? 'primary' : 'inherit'}
          sx={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            '&:hover': {
              borderColor: 'primary.main',
            },
          }}
        >
          {t('Subscriber')}
        </Button>
      </Tooltip>
      <Tooltip title={t('Switch to Creator')}>
        <Button
          onClick={() => setRole('creator')}
          variant={isCreator ? 'contained' : 'outlined'}
          color={isCreator ? 'primary' : 'inherit'}
          sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            '&:hover': {
              borderColor: 'primary.main',
            },
          }}
        >
          {t('Creator')}
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
};

export default RoleToggler;
