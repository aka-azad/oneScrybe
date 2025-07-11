import { RefObject, useMemo } from 'react';
// import { useNavigate } from 'react-router';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GridApiCommunity } from '@mui/x-data-grid/internals';
// import paths from 'routes/paths';
// import Image from 'components/base/Image';
// import DashboardMenu from 'components/common/DashboardMenu';
import DataGridPagination from 'components/pagination/DataGridPagination';
import { Channel, topChannels } from '../tablesDummyData/data';

// const getStatusBadgeColor = (val: string): ChipOwnProps['color'] => {
//   switch (val) {
//     case 'active':
//       return 'success';
//     case 'inactive':
//       return 'neutral';
//     case 'draft':
//       return 'warning';
//     case 'archive':
//       return 'error';
//     default:
//       return 'primary';
//   }
// };

// const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');

const defaultPageSize = 10;

interface HomeTableDataProps {
  apiRef: RefObject<GridApiCommunity | null>;
}

const TopChannelsTableData = ({ apiRef }: HomeTableDataProps) => {
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
    [],
  );
  return (
    <Box sx={{ width: 1 }}>
      <DataGrid
        rowHeight={40}
        rows={topChannels}
        apiRef={apiRef}
        columns={columns}
        pageSizeOptions={[defaultPageSize, 15]}
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
            target: null,
          },
        }}
      />
    </Box>
  );
};

export default TopChannelsTableData;
