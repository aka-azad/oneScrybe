import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { generatedRevenueData, monthlyProfitChartData } from 'data/e-commerce/dashboard';
import { TaskMetrics } from 'types/project';
// import UserByOS from '@/components/sections/dashboards/analytics/user-by-os/UserByOS';
import TaskSummaryCard from '@/components/sections/dashboards/project/task-summary/TaskSummaryCard';
import PageHeader from '@/components/sections/ecommerce/admin/common/PageHeader';
// import { userByOSData } from '@/data/analytics/dashboard';
import GeneratedRevenueChart from 'components/sections/dashboards/e-commerce/generated-revenue/GeneratedRevenueChart';
import OrderListContainer from 'components/sections/ecommerce/admin/order-list';

// Mock data for task summary cards
const taskMetrics: TaskMetrics[] = [
  {
    title: 'Total Users',
    count: 24780,
    change: {
      amount: 12.5,
      direction: 'more',
      timeFrame: 'this month',
    },
    icon: {
      name: 'ph:users',
      color: 'primary',
    },
  },
  {
    title: 'Active Sessions',
    count: 1245,
    change: {
      amount: 8.2,
      direction: 'more',
      timeFrame: 'today',
    },
    icon: {
      name: 'ph:activity',
      color: 'success',
    },
  },
  {
    title: 'Avg. Session',
    count: 272,
    change: {
      amount: 2.3,
      direction: 'less',
      timeFrame: 'this week',
    },
    icon: {
      name: 'ph:timer',
      color: 'warning',
    },
  },
  {
    title: 'Bounce Rate',
    count: 42.5,
    change: {
      amount: 5.7,
      direction: 'less',
      timeFrame: 'this month',
    },
    icon: {
      name: 'ph:add-outline',
      color: 'neutral',
    },
  },
];

const Insights = () => {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <PageHeader title="Insights" />
      </Box>
      {/* Top Row - Widgets */}
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
        }}
      >
        {taskMetrics.map((metric, index) => (
          <Box key={index}>
            <TaskSummaryCard task={metric} />
          </Box>
        ))}
      </Box>
      {/* Middle Row - Charts */}
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
            Recent Orders
          </Typography>
          <OrderListContainer />
        </Box>
      </Box>
    </>
  );
};

export default Insights;
