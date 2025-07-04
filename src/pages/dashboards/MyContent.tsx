import { useState } from 'react';
import { Box, Paper, Stack } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import RecentProject01 from 'assets/images/kanban/board_images/1.webp';
import RecentProject02 from 'assets/images/kanban/board_images/2.webp';
import RecentProject03 from 'assets/images/kanban/board_images/3.webp';
import RecentProject04 from 'assets/images/kanban/board_images/4.webp';
import RecentProject05 from 'assets/images/kanban/board_images/5.webp';
import RecentProject06 from 'assets/images/kanban/board_images/6.webp';
import ThumbnailSlider from '@/components/myComponents/ThumbnailSlider';
import PageHeader from '@/components/sections/ecommerce/admin/common/PageHeader';
import ProductListContainer from '@/components/sections/ecommerce/admin/product-list';
import { users } from '@/data/users';

const boards = [
  {
    id: 1,
    image: RecentProject01,
    name: 'Abstract Art',
    lastViewAt: '1 hrs ago',
    assignee: [users[15], users[5], users[13]],
  },
  {
    id: 2,
    image: RecentProject02,
    name: 'plasma',
    lastViewAt: '2.5 hrs ago',
    assignee: [users[9], users[1], users[5]],
  },
  {
    id: 3,
    image: RecentProject03,
    name: 'Nature Dance',
    lastViewAt: '3 hrs ago',
    assignee: [users[14], users[11], users[5]],
  },
  {
    id: 4,
    image: RecentProject04,
    name: 'Northern Light',
    lastViewAt: '2 hrs ago',
    assignee: [users[15], users[9], users[3]],
  },
  {
    id: 5,
    image: RecentProject05,
    name: 'Version',
    lastViewAt: '4 hrs ago',
    assignee: [
      users[5],
      users[8],
      users[1],
      users[2],
      users[3],
      users[4],
      users[6],
      users[7],
      users[10],
    ],
  },
  {
    id: 6,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 7,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 8,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 9,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 10,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 11,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 12,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 13,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 14,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 15,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 16,
    image: RecentProject05,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 17,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 18,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 19,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
  {
    id: 20,
    image: RecentProject06,
    name: 'Magnetosphere',
    lastViewAt: '54 min ago',
    assignee: [users[7], users[9], users[2]],
  },
];
interface Filter {
  field?: string;
  value?: string | number;
}
export default function MyContent() {
  const [filter, setFilter] = useState<Filter | null>(null);
  const handleChange = (event: SelectChangeEvent) => {
    setFilter({ field: 'time_duration', value: event.target.value as string });
  };

  return (
    <Stack direction="column" height={1}>
      <Box>
        <PageHeader
          title="My Content"
          actionComponent={
            <Box sx={{ minWidth: 200 }}>
              <FormControl fullWidth>
                <InputLabel id="select-time-duration">Time Duration</InputLabel>
                <Select
                  labelId="select-time-duration"
                  id="select-time-duration"
                  value={filter?.value}
                  label="Time Duration"
                  onChange={handleChange}
                >
                  <MenuItem value={'current'}>Current</MenuItem>
                  <MenuItem value={'past_week'}>Past Week</MenuItem>
                  <MenuItem value={'past_month'}>Past Month</MenuItem>
                </Select>
              </FormControl>
            </Box>
          }
        />
      </Box>
      <Paper sx={{ flex: 1, p: { xs: 2, md: 3.5 } }}>
        <Box>
          <ThumbnailSlider title="Recent Projects" items={boards} />
        </Box>
        <ProductListContainer />
      </Paper>
    </Stack>
  );
}
