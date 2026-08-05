import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Home from '@/pages/Home';
import AuftragBewerten from '@/pages/AuftragBewerten';
import Impressum from '@/pages/Impressum';
import Datenschutz from '@/pages/Datenschutz';
import GesichtsbehandlungRegion from '@/pages/GesichtsbehandlungRegion';
import BehandlungDetail from '@/pages/BehandlungDetail';
import Dienstleistungen from '@/pages/Dienstleistungen';
import Regionen from '@/pages/Regionen';
import UeberUns from '@/pages/UeberUns';
import Kontakt from '@/pages/Kontakt';
import Faq from '@/pages/Faq';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      {/* Add your page Route elements here */}
      <Route path="/" element={<Home />} />
      <Route path="/auftrag-bewerten" element={<AuftragBewerten />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/gesichtsbehandlung/:region" element={<GesichtsbehandlungRegion />} />
      <Route path="/behandlung/:slug" element={<BehandlungDetail />} />
      <Route path="/dienstleistungen" element={<Dienstleistungen />} />
      <Route path="/regionen" element={<Regionen />} />
      <Route path="/ueber-uns" element={<UeberUns />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App