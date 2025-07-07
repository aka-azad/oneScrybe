import { Box, Typography } from '@mui/material';
import { Board } from 'data/kanban/boards';
import Thumbnail from './Thumbnail';

interface ThumbnailSliderProps {
  title: string;
  items: Board[];
  size?: 'small' | 'medium';
}

const Thumbnails = ({ title, items, size = 'small' }: ThumbnailSliderProps) => {
  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
          {title}
        </Typography>
      </Box>
      <Box
        display="grid"
        sx={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 2 }}
      >
        {items.map((item) => (
          <Box key={item.id} sx={{ width: 240 }}>
            <Thumbnail board={item} size={size} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Thumbnails;
