import { ChangeEvent, useCallback } from 'react';
import { Box, InputAdornment, MenuItem, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useGridApiRef } from '@mui/x-data-grid';
// import { useBreakpoints } from 'providers/BreakpointsProvider';
import IconifyIcon from 'components/base/IconifyIcon';
import StyledTextField from 'components/styled/StyledTextField';
import AnalyticsTableData from './tables/AnalyticsTableData';

const TableForAnalytics = () => {
  // const [filterButtonEl, setFilterButtonEl] = useState<HTMLButtonElement | null>(null);
  const apiRef = useGridApiRef();
  // const { up } = useBreakpoints();

  // const upLg = up('lg');

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      apiRef.current?.setQuickFilterValues([e.target.value]);
    },
    [apiRef],
  );

  // const handleToggleFilterPanel = (e: MouseEvent<HTMLButtonElement>) => {
  //   const isPanelOpen = apiRef.current?.state.preferencePanel.open;

  //   if (isPanelOpen) {
  //     setFilterButtonEl(null);
  //     apiRef.current?.hideFilterPanel();
  //   } else {
  //     setFilterButtonEl(e.currentTarget);
  //     apiRef.current?.showFilterPanel();
  //   }
  // };

  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack
          sx={{
            columnGap: 1,
            rowGap: 2,
            justifyContent: 'space-between',
            alignItems: { xl: 'center' },
            flexWrap: { xs: 'wrap', sm: 'nowrap' },
          }}
        >
          <StyledTextField
            id="search-box"
            type="search"
            size="medium"
            placeholder="Search order"
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <IconifyIcon
                      icon="material-symbols:search-rounded"
                      sx={{
                        fontSize: 20,
                        color: 'text.secondary',
                      }}
                    />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              maxWidth: { sm: 250 },
              order: { xs: 1, sm: 0 },
              flexBasis: { xs: 'calc(100% - 88px)', sm: 'auto' },
              mr: { sm: 2 },
            }}
            onChange={handleSearch}
          />

          <Box sx={{ maxWidth: { xs: 200, sm: 150 }, width: 1, ml: 'auto' }}>
            <StyledTextField variant="filled" fullWidth select defaultValue="all">
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="january">January</MenuItem>
              <MenuItem value="february">February</MenuItem>
              <MenuItem value="march">March</MenuItem>
              <MenuItem value="april">April</MenuItem>
              <MenuItem value="may">May</MenuItem>
              <MenuItem value="june">June</MenuItem>
              <MenuItem value="july">July</MenuItem>
              <MenuItem value="august">August</MenuItem>
              <MenuItem value="september">September</MenuItem>
              <MenuItem value="october">October</MenuItem>
              <MenuItem value="november">November</MenuItem>
              <MenuItem value="december">December</MenuItem>
            </StyledTextField>
          </Box>
        </Stack>
      </Grid>

      <Grid size={12}>
        <AnalyticsTableData apiRef={apiRef} />
      </Grid>
    </Grid>
  );
};

export default TableForAnalytics;
