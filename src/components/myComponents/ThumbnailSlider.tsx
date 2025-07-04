import { Box, Paper, Typography } from '@mui/material';
import { Board } from 'data/kanban/boards';
import Thumbnail from './Thumbnail';

interface ThumbnailSliderProps {
  title: string;
  items: Board[];
  size?: 'small' | 'medium';
}

const ThumbnailSlider = ({ title, items, size = 'small' }: ThumbnailSliderProps) => {
  return (
    <Paper sx={{ px: { xs: 3, md: 4 }, py: 4, mb: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
          {title}
        </Typography>
      </Box>
      <Box display="grid" sx={{ gridTemplateColumns: 'repeat(auto-fill, minmax(286px, 1fr))' }}>
        {items.map((item) => (
          <Box key={item.id} sx={{ width: 286 }}>
            <Thumbnail board={item} size={size} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default ThumbnailSlider;
