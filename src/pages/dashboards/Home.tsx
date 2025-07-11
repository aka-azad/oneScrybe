import { Box, Pagination, Paper } from '@mui/material';
import SectionHeader from '@/components/common/SectionHeader';
import Thumbnails from '@/components/myComponents/Thumbnails';
import TopChannelsTable from '@/components/myComponents/tableContainers/TopChannelsTable';
import { homeThumbnails } from '@/components/myComponents/tableContainers/tablesDummyData/data';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* <PageHeader title="Home" /> */}

      <Paper sx={{ flex: 1, p: { xs: 2, md: 3.5 } }}>
        <SectionHeader title="Top Channels" subTitle="" />
        <TopChannelsTable />
        <Box sx={{ mt: 4 }}>
          <SectionHeader title="Top Channels Videos" subTitle="" />
          {homeThumbnails.map((item) => (
            <Thumbnails key={item.section} title={item.section} items={item.videos} />
          ))}
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
