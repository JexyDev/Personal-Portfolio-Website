import { Outlet } from 'react-router';
import ModernSidebar from '../components/ModernSidebar';

export default function Root() {
  return (
    <div className="flex min-h-screen bg-white dark:bg-black">
      <ModernSidebar />
      <main className="flex-1 lg:ml-80 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}