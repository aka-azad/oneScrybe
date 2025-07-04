import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { generatedRevenueData, monthlyProfitChartData } from 'data/e-commerce/dashboard';
import PageHeader from '@/components/sections/ecommerce/admin/common/PageHeader';
import GeneratedRevenueChart from 'components/sections/dashboards/e-commerce/generated-revenue/GeneratedRevenueChart';
import OrderListContainer from 'components/sections/ecommerce/admin/order-list';

export default function Analytics() {
  return (
    <Grid container>
      <Box sx={{ width: '100%' }}>
        <PageHeader title="Analytics" />
      </Box>
      {/* Top Row - charts */}

      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
        }}
      >
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
          <GeneratedRevenueChart sx={{ height: '100%' }} data={generatedRevenueData} />
        </Box>
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
          <GeneratedRevenueChart sx={{ height: '100%' }} data={monthlyProfitChartData} />
        </Box>
      </Box>
      {/* Bottom Row - Table */}
      <Box sx={{ p: 2, width: '100%' }}>
        <Box sx={{ border: 1, borderColor: 'divider', borderRadius: 2, p: 2, width: '100%' }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Recent Orders
          </Typography>
          <OrderListContainer />
        </Box>
      </Box>
    </Grid>
  );
}
