import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import PageMeta from './components/PageMeta';
import CookieConsent from '@/components/aure/CookieConsent';
import Analytics from '@/components/aure/Analytics';
// Add page imports here
import Home from '@/pages/Home';
import AboutMe from '@/pages/AboutMe';
import Contact from '@/pages/Contact';
import ZasadyCookies from '@/pages/ZasadyCookies';

function App() {

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <PageMeta />
        <Routes>
          {/* Add your page Route elements here */}
          <Route path="/" element={<Home />} />
          <Route path="/o-mne" element={<AboutMe />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/zasady-cookies" element={<ZasadyCookies />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <CookieConsent />
      <Analytics />
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
