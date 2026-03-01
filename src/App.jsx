import React, { useState } from 'react';

// --- SHARED COMPONENTS ---
import Navbar from './components/Navbar';
import AnnouncementModal from './components/AnnouncementModal'; // The "Big Toast"

// --- PUBLIC HOME SECTIONS ---
import Hero from './sections/Hero'; // Updated with Slideshow
import Legacy from './sections/Legacy';
import Team from './sections/Team';
import Products from './sections/Products';
import Reviews from './sections/Reviews'; // New Section
import Industries from './sections/Industries';
import Services from './sections/Services';
import PortalEntry from './sections/PortalEntry';
import Contact from './sections/Contact';

// --- DYNAMIC VIEWS ---
import ProductDetail from './sections/ProductDetail'; // New deep-dive page

// --- PORTAL & ADMIN ---
import PortalLayout from './portal/PortalLayout';
import Dashboard from './portal/Dashboard';
import Tickets from './portal/Tickets';
// ... other portal imports (Quotes, Assets, etc.)

import AdminLayout from './admin/AdminLayout';
import AdminOverview from './admin/AdminOverview';
import TicketAssignment from './admin/TicketAssignment';
import ClientManager from './admin/ClientManager';
import RFQManager from './admin/RFQManager';
import SLARules from './admin/SLARules';
import SystemSettings from './admin/SystemSettings';

function App() {
  // 1. Primary View State: 'public' | 'portal' | 'admin'
  const [currentView, setCurrentView] = useState('public');
  
  // 2. Sub-View State: For showing specific Product pages
  const [activeProduct, setActiveProduct] = useState(null);

  // 3. Tab States
  const [portalTab, setPortalTab] = useState('dashboard');
  const [adminTab, setAdminTab] = useState('overview');

  // PRODUCT DATABASE (Source of truth for the deep-dive pages)
  const productData = {
    'erp': {
      id: 'erp',
      name: 'Opal ERP',
      category: 'Enterprise Core',
      longDesc: 'The definitive ERP solution for large-scale manufacturing. Opal ERP synchronizes finance, production, and supply chain into a single source of truth.',
      features: ['Real-time Costing', 'Automated Ledgering', 'Production Planning', 'Compliance Reporting']
    },
    'hrpro': {
      id: 'hrpro',
      name: 'Opal HRPro',
      category: 'Human Capital',
      longDesc: 'Advanced Human Resource Management. From automated payroll to performance analytics, empower your workforce with precision.',
      features: ['Automated Payroll', 'Performance KPIs', 'Recruitment Pipeline', 'Employee Self-Service']
    },
    'wms': { id: 'wms', name: 'Opal WMS', category: 'Logistics Control', longDesc: 'High-velocity warehouse management for 99.9% inventory accuracy.', features: ['Barcode Integration', 'Route Optimization', 'Inventory Analytics'] },
    'herdpro': { id: 'herdpro', name: 'Opal HerdPro', category: 'Agri-Tech', longDesc: 'Specialized ERP for livestock and dairy management.', features: ['Animal Health', 'Yield Forecasting', 'Feed Optimization'] }
  };

  const handleProductSelect = (id) => {
    setActiveProduct(productData[id]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetToHome = () => {
    setActiveProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- VIEW 1: PUBLIC MARKETING SITE ---
  if (currentView === 'public') {
    return (
      <div className="bg-white min-h-screen selection:bg-[#FFD700] selection:text-[#2D4356]">
        <AnnouncementModal />
        
        <Navbar 
          onPortalClick={() => setCurrentView('portal')} 
          onAdminClick={() => setCurrentView('admin')}
          onProductSelect={handleProductSelect}
          onHomeClick={resetToHome}
        />
        
        <main>
          {activeProduct ? (
            <ProductDetail 
              product={activeProduct} 
              onBack={resetToHome} 
            />
          ) : (
            <>
              <Hero onExplore={() => document.getElementById('products').scrollIntoView({behavior:'smooth'})} />
              <Legacy />
              <Team />
              <Products onProductSelect={handleProductSelect} />
              <Reviews /> 
              <Industries />
              <Services />
              <div onClick={() => setCurrentView('portal')} className="cursor-pointer">
                <PortalEntry />
              </div>
              <Contact />
            </>
          )}
        </main>

        <footer className="bg-[#2D4356] py-16 text-center border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              © 2026 OPAL Technologies | IzharSoft Group
            </p>
            <button 
              onClick={() => { setCurrentView('admin'); window.scrollTo(0,0); }}
              className="text-gray-600 text-[9px] font-bold uppercase tracking-widest hover:text-[#FFD700] transition-colors"
            >
              Internal Staff Control Panel
            </button>
          </div>
        </footer>
      </div>
    );
  }

  // --- VIEW 2: SECURE CLIENT PORTAL ---
  if (currentView === 'portal') {
    return (
      <PortalLayout 
        activeTab={portalTab} 
        setActiveTab={setPortalTab} 
        onLogout={() => { setCurrentView('public'); setPortalTab('dashboard'); }}
      >
        {portalTab === 'dashboard' && <Dashboard />}
        {portalTab === 'tickets' && <Tickets />}
        {/* ... add other portal tab components here */}
      </PortalLayout>
    );
  }

  // --- VIEW 3: INTERNAL ADMIN PANEL ---
  if (currentView === 'admin') {
    return (
      <AdminLayout 
        activeMenu={adminTab} 
        setActiveMenu={setAdminTab} 
        onLogout={() => { setCurrentView('public'); setAdminTab('overview'); }}
      >
        {adminTab === 'overview' && <AdminOverview />}
        {adminTab === 'tickets' && <TicketAssignment />}
        {adminTab === 'rfqs' && <RFQManager />}
        {adminTab === 'clients' && <ClientManager />}
        {adminTab === 'sla' && <SLARules />}
        {adminTab === 'settings' && <SystemSettings />}
      </AdminLayout>
    );
  }

  return null;
}

export default App;