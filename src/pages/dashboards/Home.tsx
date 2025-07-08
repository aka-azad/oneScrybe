import { Box, Pagination, Paper } from '@mui/material';
import SectionHeader from '@/components/common/SectionHeader';
import Thumbnails from '@/components/myComponents/Thumbnails';
import TableForHome from '@/components/myComponents/tableContainers/TableForHome';
import { boards } from './MyContent';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* <PageHeader title="Home" /> */}

      <Paper sx={{ flex: 1, p: { xs: 2, md: 3.5 } }}>
        <SectionHeader title="Home table" subTitle="" />
        <TableForHome />
        <Box>
          <Thumbnails title="Thumbnails for home" items={boards} />
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              onChange={(e, value) => console.log(value)}
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
