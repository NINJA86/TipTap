'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HugeiconsIcon } from '@hugeicons/react';
import { MoreVerticalIcon } from '@hugeicons/core-free-icons';

interface SimpleDropdownProps {
  onViewMore?: () => void;
  onDelete?: () => void;
}

export default function SimpleDropdown({
  onViewMore,
  onDelete,
}: SimpleDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex size-8 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors outline-none">
        <HugeiconsIcon
          icon={MoreVerticalIcon}
          className="size-5 text-gray-500"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem onClick={onViewMore}>View more</DropdownMenuItem>

        <DropdownMenuItem
          onClick={onDelete}
          className="text-red-500 focus:text-red-500"
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
