import React, { useState } from 'react';
import { Box, FormControl, IconButton, InputAdornment, MenuItem } from '@mui/material';
import IconifyIcon from '@/components/base/IconifyIcon';
import StyledFormControl from '@/components/styled/StyledFormControl';
import StyledTextField from '@/components/styled/StyledTextField';

interface Filter {
  field?: string;
  value?: string | number;
}

export default function PageHeaderAction({
  filter,
  handleChange,
  handleSearchChange,
  searchQuery,
  selectOptions,
  showSelect = true,
  showSearch = true,
}: {
  filter?: Filter;
  handleChange?: (value: string) => void;
  handleSearchChange?: (value: string) => void;
  searchQuery?: string;
  selectOptions?: { value: string; label: string }[];
  showSelect?: boolean;
  showSearch?: boolean;
}) {
  const [search, setSearch] = useState(searchQuery || '');
  const handleSearchSubmit = (data: any) => {
    data.preventDefault();
    console.log(data);
    handleSearchChange?.(search);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'end' }}>
      <FormControl onSubmit={handleSearchSubmit} component="form">
        {showSearch && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <StyledTextField
              id="search-music"
              type="search"
              fullWidth
              value={search}
              placeholder="Search Music..."
              onChange={(e) => {
                console.log(e);
                setSearch(e.target.value);
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconifyIcon
                        icon="material-symbols:search-rounded"
                        sx={{
                          fontSize: 20,
                          color: 'text.secondary',
                        }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                maxWidth: {
                  sm: 360,
                  xl: 220,
                },
                mr: { sm: 4, md: 11, lg: 0 },
                order: { xs: 1, sm: 0 },
              }}
            />
            <IconButton aria-label="search" size="medium" type="submit">
              <IconifyIcon icon="material-symbols:search-rounded" />
            </IconButton>
          </Box>
        )}
      </FormControl>
      {showSelect && selectOptions && (
        <StyledFormControl sx={{ width: 150, minWidth: 120 }} size="medium" variant="filled">
          <StyledTextField
            select
            defaultValue={filter?.value || 'All'}
            value={filter?.value || 'All'}
            size="medium"
            onChange={({ target: { value } }) => handleChange?.(value)}
          >
            {selectOptions.map((option) => (
              <MenuItem value={option.value} key={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
        </StyledFormControl>
      )}
    </Box>
  );
}
