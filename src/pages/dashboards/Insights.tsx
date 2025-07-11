import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { generatedRevenueData, monthlyProfitChartData } from 'data/e-commerce/dashboard';
import InsightsCards from '@/components/myComponents/Widgets/InsightsCards';
import TableForInsights from '@/components/myComponents/tableContainers/TableForInsights';
// import UserByOS from '@/components/sections/dashboards/analytics/user-by-os/UserByOS';
import PageHeader from '@/components/sections/ecommerce/admin/common/PageHeader';
// import { userByOSData } from '@/data/analytics/dashboard';
import GeneratedRevenueChart from 'components/sections/dashboards/e-commerce/generated-revenue/GeneratedRevenueChart';

export interface InsightsMetrics {
  title: string;
  count: number;
  unit: string;
  change?: {
    amount: number;
    direction: '% less' | '% more' | 'K Views';
    timeFrame: string;
  };
  deadlineRange?: string;
  icon: {
    name: string;
    color: 'primary' | 'success' | 'warning' | 'neutral';
  };
}

// Mock data for task summary cards
const taskMetrics: InsightsMetrics[] = [
  {
    title: 'Total Viewers',
    count: 24780,
    unit: 'Viewers',
    change: {
      amount: 5,
      direction: '% more',
      timeFrame: 'this month',
    },
    icon: {
      name: 'ph:users',
      color: 'primary',
    },
  },
  {
    title: 'Subscribed Users',
    count: 1245,
    unit: 'Users',
    change: {
      amount: 2,
      direction: '% more',
      timeFrame: 'this month',
    },
    icon: {
      name: 'ph:activity',
      color: 'success',
    },
  },
  {
    title: 'Avg. Views',
    count: 62000,
    unit: 'Views',
    change: {
      amount: 62,
      direction: '% more',
      timeFrame: 'this month',
    },
    icon: {
      name: 'ph:eye',
      color: 'warning',
    },
  },
  {
    title: 'Avg. Duration',
    count: 18,
    unit: 'Minutes',
    change: {
      amount: 5.7,
      direction: '% less',
      timeFrame: 'this month',
    },
    icon: {
      name: 'ph:clock',
      color: 'success',
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
            <InsightsCards task={metric} />
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
                View Rate
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
                Posted Videos
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
            Table For Insights
          </Typography>
          <TableForInsights />
        </Box>
      </Box>
    </>
  );
};

export default Insights;
