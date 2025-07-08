import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { generatedRevenueData, monthlyProfitChartData } from 'data/e-commerce/dashboard';
import TableForAnalytics from '@/components/myComponents/tableContainers/TableForAnalytics';
import PageHeader from '@/components/sections/ecommerce/admin/common/PageHeader';
import GeneratedRevenueChart from 'components/sections/dashboards/e-commerce/generated-revenue/GeneratedRevenueChart';

export default function Analytics() {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <PageHeader title="Analytics" />
      </Box>
      {/* Top Row - charts */}
      <Grid container size={{ xs: 12, xl: 8 }}>
        <Grid container size={12}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                height: '100%',
                bgcolor: 'background.paper',
                p: 2,
                borderLeft: 0,
                borderTop: 1,
                borderRight: 1,
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Generated Revenue
              </Typography>
              <GeneratedRevenueChart
                sx={{ minHeight: '200px', width: '100%' }}
                data={generatedRevenueData}
              />
            </Box>{' '}
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                height: '100%',
                bgcolor: 'background.paper',
                p: 2,
                borderLeft: 0,
                borderTop: 1,
                borderRight: 1,
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Monthly Profit
              </Typography>
              <GeneratedRevenueChart
                sx={{ minHeight: '200px', width: '100%' }}
                data={monthlyProfitChartData}
              />
            </Box>{' '}
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom Row - Table */}
      <Box sx={{ p: 2, width: '100%' }}>
        <Box sx={{ border: 1, borderColor: 'divider', borderRadius: 2, p: 2, width: '100%' }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Table For Analytics
          </Typography>
          <TableForAnalytics />
        </Box>
      </Box>
    </>
  );
}
