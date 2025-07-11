import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import IconifyIcon from '../base/IconifyIcon';
import { VideoItem } from './tableContainers/tablesDummyData/data';

dayjs.extend(relativeTime);

interface BoardItemProps {
  board: VideoItem;
}

const Thumbnail = ({ board }: BoardItemProps) => {
  const { title, url, thumbnail, duration, uploaded, views } = board;

  return (
    <Card
      sx={{
        outline: '1px solid #ccc',
        borderRadius: 4,
        position: 'relative',
        '&:hover': {
          bgcolor: 'background.elevation1',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          top: 100,
          right: 16,
          bgcolor: 'rgba(22, 28, 36, 0.5)',
          borderRadius: 1,
          px: 0.5,
          py: 0.25,
          width: 'fit-content',
          height: 'fit-content',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'white',
            lineHeight: '1em',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            m: 0,
            py: 0.25,
          }}
        >
          {duration}
        </Typography>
      </Box>

      <CardActionArea href={url} target="_blank">
        <CardMedia
          image={thumbnail}
          sx={{
            position: 'relative',
            display: 'inline-block',
            aspectRatio: '16/9',
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
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              mb: 0.5,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minHeight: '2.8em', // Approximate height for two lines
              lineHeight: '1.4em',
              height: '2.8em', // Explicit height for two lines
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}
          >
            <Typography
              component="p"
              variant="caption"
              sx={{ color: 'text.disabled', fontWeight: 500 }}
            >
              {dayjs(uploaded).fromNow()}
            </Typography>
            <Typography
              component="p"
              variant="caption"
              sx={{
                color: 'text.disabled',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconifyIcon icon="eva:eye-fill" width={20} height={20} /> {views}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Thumbnail;
