import { AppLayout } from '@hilla/react-components/AppLayout.js';
import { DrawerToggle } from '@hilla/react-components/DrawerToggle.js';
import Placeholder from 'Frontend/components/placeholder/Placeholder.js';
import { useRouteMetadata } from 'Frontend/util/routing.js';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CustomRenderer from "Frontend/views/person/custom-renderer";

const navLinkClasses = ({ isActive }: any) => {
  return `block rounded-m p-s ${isActive ? 'bg-primary-10 text-primary' : 'text-body'}`;
};

export default function MainLayout() {
  const currentTitle = useRouteMetadata()?.title ?? 'My App';
  return (
    <AppLayout primarySection="drawer">
      <div slot="drawer" className="flex flex-col justify-between h-full p-m">
        <header className="flex flex-col gap-m">
          <h1 className="text-l m-0">Auto Form Demo</h1>
          <nav>
            <NavLink className={navLinkClasses} to="/basic">
              Basic
            </NavLink>
            <NavLink className={navLinkClasses} to="/string-template">
              Layout by Template
            </NavLink>
            <NavLink className={navLinkClasses} to="/string-template-visible-fields">
              Manipulate visible Fields
            </NavLink>
            <NavLink className={navLinkClasses} to="/template-field-colspan">
              Template Field Colspan
            </NavLink>
            <NavLink className={navLinkClasses} to="/template-field-colspan-responsive">
              Template & Responsive Steps
            </NavLink>
            <NavLink className={navLinkClasses} to="/custom-renderer">
              Custom Layout Renderer
            </NavLink>
            <NavLink className={navLinkClasses} to="/custom-field">
              Overriding Fields
            </NavLink>

          </nav>
        </header>
      </div>

      <DrawerToggle slot="navbar" aria-label="Menu toggle"></DrawerToggle>
      <h2 slot="navbar" className="text-l m-0">
        {currentTitle}
      </h2>

      <Suspense fallback={<Placeholder />}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
}
