import { Moon02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react';

export default function HeaderButton({
  Icon = Moon02Icon,
}: {
  Icon: IconSvgElement;
}) {
  return (
    <div>
      <button className="group flex size-11 cursor-pointer items-center justify-center rounded-full border hover:bg-gray-100">
        <HugeiconsIcon
          className="text-gray-600 group-hover:text-gray-700"
          icon={Icon}
        />
      </button>
    </div>
  );
}
