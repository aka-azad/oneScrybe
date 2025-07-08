import { Box, Grid, Typography } from '@mui/material';
import { Board } from 'data/kanban/boards';
import Thumbnail from './Thumbnail';

interface ThumbnailSliderProps {
  title: string;
  items: Board[];
}

const Thumbnails = ({ title, items }: ThumbnailSliderProps) => {
  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
          {title}
        </Typography>
      </Box>
      <Grid spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} container>
        {items.map((item) => (
          <Grid size={1} key={item.id}>
            <Thumbnail board={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Thumbnails;
