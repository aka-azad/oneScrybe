import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { Button, Stack } from '@mui/material';
import clsx from 'clsx';
import sitemap, { MenuItem } from 'routes/sitemap';
import { useRole } from '@/contexts/RoleContext';
import IconifyIcon from 'components/base/IconifyIcon';
import { useNavContext } from '../NavProvider';
import NavitemPopover from './NavItemPopover';

interface TopnavItemsProps {
  type?: 'default' | 'slim';
}

const TopnavItems = ({ type = 'default' }: TopnavItemsProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<null | MenuItem>(null);
  const { pathname } = useLocation();
  const { isNestedItemOpen } = useNavContext();
  const { role } = useRole();
  useEffect(() => {
    setAnchorEl(null);
    setSelectedMenu(null);
  }, [pathname]);
  const filteredSitemap = useMemo(() => {
    const filterByRole = (sections: typeof sitemap): typeof sitemap => {
      return sections
        .map((section) => {
          // Filter section items by role
          const filteredItems =
            section.items?.filter((item) => {
              return !item.roles || item.roles.includes(role || 'subscriber');
            }) || [];

          // Return a new section with filtered items
          return {
            ...section,
            items: filteredItems,
          };
        })
        .filter((section) => section.items && section.items.length > 0); // Remove empty sections
    };

    return filterByRole(sitemap);
  }, [role, sitemap]);

  return (
    <Stack
      sx={{
        alignItems: 'center',
        gap: '2px',
      }}
      className="nav-items"
    >
      {filteredSitemap.map((menu) => (
        <Button
          key={menu.id}
          variant="text"
          className={clsx({
            active: isNestedItemOpen(menu.items),
          })}
          color={isNestedItemOpen(menu.items) ? 'primary' : 'neutral'}
          size={type === 'slim' ? 'small' : 'large'}
          endIcon={<IconifyIcon icon="material-symbols:expand-more-rounded" />}
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
            setSelectedMenu(menu);
          }}
          sx={{ px: 2, fontSize: 14 }}
        >
          {menu.subheader}
        </Button>
      ))}
      {selectedMenu && (
        <NavitemPopover
          handleClose={() => {
            setAnchorEl(null);
            setSelectedMenu(null);
          }}
          anchorEl={anchorEl}
          open={!!anchorEl && !!selectedMenu}
          items={selectedMenu.items}
          level={0}
        />
      )}
    </Stack>
  );
};

export default TopnavItems;
