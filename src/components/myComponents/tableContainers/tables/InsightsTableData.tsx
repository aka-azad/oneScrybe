import { RefObject, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GridApiCommunity } from '@mui/x-data-grid/internals';
// import { orderListAdmin } from 'data/e-commerce/orders';
import useNumberFormat from 'hooks/useNumberFormat';
// import { OrderListAdmin } from 'types/ecommerce';
// import OrderDetailsPopper from '@/components/sections/ecommerce/admin/order-list/OrderDetailsPopper';
// import DashboardMenu from 'components/common/DashboardMenu';
import DataGridPagination from 'components/pagination/DataGridPagination';
import { Channel, topChannels } from '../tablesDummyData/data';

// const getPaymentStatusBadgeColor = (val: string): ChipOwnProps['color'] => {
//   switch (val) {
//     case 'paid':
//       return 'success';
//     case 'due':
//       return 'warning';
//     default:
//       return 'neutral';
//       break;
//   }
// };
// const getFulfillmentStatusBadgeColor = (val: string): ChipOwnProps['color'] => {
//   switch (val) {
//     case 'fulfilled':
//       return 'success';
//     case 'partially fulfilled':
//       return 'warning';
//     default:
//       return 'neutral';
//       break;
//   }
// };
// const getShippingMethodBadgeColor = (val: string): ChipOwnProps['color'] => {
//   switch (val) {
//     case 'standard':
//       return 'primary';
//     case 'express':
//       return 'warning';
//     default:
//       return 'neutral';
//       break;
//   }
// };

const defaultPageSize = 8;

interface InsightsTableProps {
  apiRef: RefObject<GridApiCommunity | null>;
  filterButtonEl?: HTMLButtonElement | null;
}

const InsightsTableData = ({ apiRef, filterButtonEl }: InsightsTableProps) => {
  const { currencyFormat } = useNumberFormat();

  const columns: GridColDef<Channel>[] = useMemo(
    () => [
      {
        field: 'category',
        headerName: 'Category',
        minWidth: 200,
        flex: 1,
        renderCell: (params) => {
          return <Typography sx={{ fontWeight: 400 }}>{params.row.category}</Typography>;
        },
      },
      {
        field: 'channelname',
        headerName: 'Channel',
        minWidth: 200,
        flex: 1,
        renderCell: (params) => {
          return <Typography sx={{ fontWeight: 400 }}>{params.row?.channelname}</Typography>;
        },
      },
      {
        field: 'numvideos',
        headerName: 'Videos',
        minWidth: 200,
        flex: 1,
        renderCell: (params) => {
          return <Typography sx={{ fontWeight: 400 }}>{params.row?.numvideos}</Typography>;
        },
      },
      {
        field: 'subscribers',
        headerName: 'Subscribers',
        minWidth: 200,
        flex: 1,
        renderCell: (params) => {
          return <Typography sx={{ fontWeight: 400 }}>{params.row?.subscribers}</Typography>;
        },
      },
      {
        field: 'viewers',
        headerName: 'Viewers',
        minWidth: 200,
        flex: 1,
        renderCell: (params) => {
          return <Typography sx={{ fontWeight: 400 }}>{params.row?.viewers}</Typography>;
        },
      },
    ],
    [currencyFormat],
  );
  return (
    <Box sx={{ width: 1 }}>
      <DataGrid
        rowHeight={50}
        rows={topChannels}
        apiRef={apiRef}
        columns={columns}
        pageSizeOptions={[defaultPageSize]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: defaultPageSize,
            },
          },
        }}
        // checkboxSelection
        slots={{
          basePagination: (props) => <DataGridPagination showFullPagination {...props} />,
        }}
        slotProps={{
          panel: {
            target: filterButtonEl,
          },
        }}
      />
    </Box>
  );
};

export default InsightsTableData;
