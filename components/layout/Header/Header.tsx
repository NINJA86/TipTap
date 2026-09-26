import { TextAlignStart } from '@/components/Icon/line-menu';
import HeaderButton from './header-button';
import { SearchBar } from './header-input';
import { Moon02Icon, Notification } from '@hugeicons/core-free-icons';
function Header() {
  return (
    <header className="w-full z-9999 sticky top-0 flex items-center border px-6 py-4 justify-between bg-white">
      <div className="flex items-center gap-4">
        <div className="border p-2.5 rounded-lg cursor-pointer">
          <TextAlignStart className="block" />
        </div>
        <SearchBar />
      </div>
      <div className="flex gap-2">
        <HeaderButton Icon={Moon02Icon} />
        <HeaderButton Icon={Notification} />
      </div>
    </header>
  );
}

export default Header;
