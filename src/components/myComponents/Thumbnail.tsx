import { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Board } from 'data/kanban/boards';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import BoardItemMenu from '../sections/kanban/boards/boards-slider/BoardItemMenu';

dayjs.extend(relativeTime);

interface BoardItemProps {
  board: Board;
}

const Thumbnail = ({ board }: BoardItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { image, name, lastViewAt } = board;

  return (
    <Card
      sx={{
        outline: 'none',
        borderRadius: 4,
        position: 'relative',
        '&:hover': {
          bgcolor: 'background.elevation1',
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BoardItemMenu isHovered={isHovered} />

      <CardActionArea href="#">
        <CardMedia
          image={image}
          sx={{
            position: 'relative',
            display: 'inline-block',
            aspectRatio: '4/3',
            // height: { xs: 220, sm: 180, md: 200, lg: 220 },
            width: '100%',
            borderRadius: 4,
            overflow: 'hidden',

            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: 0,
              width: 1,
              height: 1,
              display: 'inline-block',
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.07))',
            },
          }}
        />

        <CardContent sx={{ pb: '16px !important' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
            {name}
          </Typography>
          <Typography
            component="p"
            variant="caption"
            sx={{ color: 'text.disabled', fontWeight: 500, mb: 1 }}
          >
            {lastViewAt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Thumbnail;
