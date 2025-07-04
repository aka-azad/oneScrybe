import React from 'react';
import { Stack } from '@mui/material';
import OrderListContainer from 'components/sections/ecommerce/admin/order-list';

const Insights = () => {
  return (
    <Stack direction="column" height={1} spacing={3}>
      <OrderListContainer />
    </Stack>
  );
};

export default Insights;
