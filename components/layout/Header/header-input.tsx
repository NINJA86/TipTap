import { SearchIcon } from 'lucide-react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';

export function SearchBar() {
  return (
    <InputGroup className="w-100 max-w-md ">
      <InputGroupInput placeholder="Search or type command..." className="" />

      <InputGroupAddon className="">
        <SearchIcon className="mr-1.5" />
      </InputGroupAddon>
    </InputGroup>
  );
}
