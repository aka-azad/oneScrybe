import { RefObject, useMemo } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GridApiCommunity } from '@mui/x-data-grid/internals';
// import useNumberFormat from 'hooks/useNumberFormat';
// import DashboardMenu from 'components/common/DashboardMenu';
import DataGridPagination from 'components/pagination/DataGridPagination';
import { AnalyticsData, analyticsData } from '../tablesDummyData/data';

const defaultPageSize = 8;

interface AnalyticsTableProps {
  apiRef: RefObject<GridApiCommunity | null>;
  filterButtonEl?: HTMLButtonElement | null;
}

const AnalyticsTableData = ({ apiRef, filterButtonEl }: AnalyticsTableProps) => {
  // const { currencyFormat } = useNumberFormat();

  const columns: GridColDef<AnalyticsData>[] = useMemo(
    () => [
      {
        field: 'id',
        headerName: 'Video ID',
        width: 180,
        sortable: true,
      },
      {
        field: 'title',
        headerName: 'Title',
        flex: 1,
        minWidth: 200,
        sortable: true,
      },
      {
        field: 'publishedAt',
        headerName: 'Published Date',
        width: 180,
        valueFormatter: (params) => {
          return params ? new Date(params).toLocaleDateString() : '';
        },
        sortable: true,
      },
      {
        field: 'views',
        headerName: 'Views',
        width: 150,
        valueFormatter: (params) => {
          return params || '0';
        },
        sortable: true,
      },
    ],
    [],
  );
  return (
    <Box sx={{ width: 1 }}>
      <DataGrid
        rowHeight={50}
        rows={analyticsData}
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

export default AnalyticsTableData;
