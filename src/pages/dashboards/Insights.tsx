import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { generatedRevenueData, monthlyProfitChartData } from 'data/e-commerce/dashboard';
import { TaskMetrics } from 'types/project';
import TaskSummaryCard from '@/components/sections/dashboards/project/task-summary/TaskSummaryCard';
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
    <Grid container spacing={3}>
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
      <Box sx={{ p: 2, pt: 0, width: '100%' }}>
        <Box sx={{ border: 1, borderColor: 'divider', borderRadius: 2, p: 2, width: '100%' }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Recent Orders
          </Typography>
          <OrderListContainer />
        </Box>
      </Box>
    </Grid>
  );
};

export default Insights;
