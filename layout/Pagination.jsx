import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination  color='primary'  className={Pagination} count={7} variant="outlined" shape="rounded" />
    </Stack>
  );
}
    