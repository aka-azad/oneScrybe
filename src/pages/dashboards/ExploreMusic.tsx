import { useEffect, useState } from 'react';
import { Box, Pagination, Paper, Stack } from '@mui/material';
import PageHeaderAction from '@/components/myComponents/PageHeaderAction';
import Thumbnails from '@/components/myComponents/Thumbnails';
import { homeThumbnails } from '@/components/myComponents/tableContainers/tablesDummyData/data';
import PageHeader from '@/components/sections/ecommerce/admin/common/PageHeader';

interface Filter {
  field?: string;
  value?: string;
}

export default function ExploreMusic() {
  const [filter, setFilter] = useState<Filter>({ field: 'type', value: 'All' });
  const [searchQuery, setSearchQuery] = useState('');
  const [thumbnailsTitle, setThumbnailsTitle] = useState('');

  useEffect(() => {
    if (searchQuery) {
      setThumbnailsTitle(`Search Result for ${searchQuery}`);
    } else {
      setThumbnailsTitle(filter?.value || 'All');
    }
  }, [filter, searchQuery]);

  const handleChange = (value: string) => {
    setFilter({ field: 'type', value });
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <Stack direction={'column'}>
      <PageHeader
        title="Explore Music"
        actionComponent={
          <PageHeaderAction
            filter={filter}
            handleChange={handleChange}
            handleSearchChange={handleSearchChange}
            searchQuery={searchQuery}
            selectOptions={[
              { value: 'All', label: 'All' },
              { value: 'Karaoke', label: 'Karaoke' },
              { value: 'Music Videos', label: 'Music Videos' },
            ]}
          />
        }
      />
      <Paper sx={{ flex: 1, px: { xs: 2, md: 3.5 } }}>
        <Thumbnails
          title={thumbnailsTitle}
          items={[...homeThumbnails[0].videos, ...homeThumbnails[1].videos]}
        />
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            onChange={(e, value) => console.log(value)}
          />
        </Box>
      </Paper>
    </Stack>
  );
}
