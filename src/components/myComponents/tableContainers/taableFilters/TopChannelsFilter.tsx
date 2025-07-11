import { RefObject, useCallback } from 'react';
import { Stack } from '@mui/material';
import { GridApiCommunity } from '@mui/x-data-grid/internals';
import FilterMenu from '@/components/sections/ecommerce/admin/product-list/filters/FilterMenu';
import { topChannels } from '../tablesDummyData/data';

interface FilterSectionProps {
  apiRef: RefObject<GridApiCommunity | null>;
}

// const vendors = Array.from(new Set(productListAdmin.map((item) => item.vendor)));
const categories = Array.from(new Set(topChannels.map((item) => item.category)));
// const statuses = ['active', 'inactive', 'draft', 'archive'];

const FilterSection = ({ apiRef }: FilterSectionProps) => {
  // const { up } = useBreakpoints();
  // const upSm = up('sm');

  const handleFilter = useCallback(
    (field?: string, value?: string | number, defaultOperator: string = 'contains') => {
      if (!field) {
        apiRef.current?.setFilterModel({ items: [] });
      } else {
        const operator = field === 'category' ? 'equals' : defaultOperator;
        apiRef.current?.setFilterModel({
          items: [{ field, operator, value: value?.toString() }],
        });
      }
    },
    [apiRef],
  );

  return (
    <Stack
      justifyContent="space-between"
      sx={{
        gap: 1,
      }}
    >
      <Stack spacing={1} sx={{ overflowX: { xs: 'auto', md: 'initial' }, scrollbarWidth: 'thin' }}>
        <FilterMenu
          label="Category"
          field="category"
          handleFilter={handleFilter}
          menuItems={categories}
        />
      </Stack>
    </Stack>
  );
};

export default FilterSection;
