import React, { useState, useEffect } from 'react';
import { Video, Palette, Camera, Layers, PlayCircle, MonitorPlay, Mail, Phone, MapPin, Menu, X, ChevronRight, Facebook, Instagram, Youtube, Linkedin, Wand2, Loader2, Sparkles, Image as ImageIcon, User, Lock, LogOut, UserPlus, Globe2, Award, Users, CheckCircle, Quote } from 'lucide-react';

// --- Translations Dictionary ---
const translations = {
  si: {
    navHome: "මුල් පිටුව", navAbout: "මා ගැන", navServices: "සේවාවන්", navPortfolio: "නිර්මාණ", navContact: "සම්බන්ධ වන්න",
    navLogin: "ලොග් වන්න", navLogout: "පිටවන්න", navSignUp: "ලියාපදිංචි වන්න",
    heroAvailable: "Available for Freelance Work",
    heroGreeting: "ආයුබෝවන්, මම K.D නදිශ මලිත් මිහිරංග",
    heroDesc: "සීමාවන් නොමැති පරිකල්පනයට නවීන තාක්ෂණයේ ජීවය මුසු කරමින්, ඔබගේ අදහස් සැබෑවක් කරන විශිෂ්ටතම දෘශ්‍ය නිර්මාණකරණය",
    btnViewWork: "නිර්මාණ බලන්න", btnContact: "සම්බන්ධ වන්න",
    aboutTitle1: "මා ", aboutTitle2: "ගැන",
    aboutP1: "මම K.D නදිශ මලිත් මිහිරංග. මම වෘත්තීය මට්ටමේ වීඩියෝ සංස්කරණ ශිල්පියෙකු, ග්‍රැෆික් නිර්මාණකරුවෙකු සහ ඡායාරූප/වීඩියෝ ශිල්පියෙකු වෙමි. මම මගේ වෘත්තීය බහුමාධ්‍ය අධ්‍යාපනය සම්පූර්ණ කළේ Wijeya Graphics ආයතනයෙනි.",
    aboutP2: "එහිදී 3D සජීවීකරණය ඇතුළු විෂය පථයන් රැසක් මා හැදෑරුවද, මගේ දැඩි ආශාව සහ ඉහළම දක්ෂතාවය ඇත්තේ වීඩියෝ එඩිටින්, ග්‍රැෆික් ඩිසයින් සහ වීඩියෝග්‍රැෆි යන අංශයන්හි වේ.",
    servicesTitle1: "මගේ ", servicesTitle2: "විශේෂඥතාවයන්",
    servicesSub: "Wijeya Graphics ආයතනයෙන් ලද පුහුණුවත් සමග, මා වඩාත්ම කැමති සහ ඉහළම කුසලතාවයක් දක්වන ප්‍රධාන ක්ෂේත්‍රයන් මෙසේය.",
    aiIdeatorTitle1: "ඔබේ ව්‍යාපාරයට ", aiIdeatorTitle2: "AI Script එකක්",
    aiIdeatorSub: "වීඩියෝවක් කරන්න අදහසක් නැද්ද? ඔබේ ව්‍යාපාරය හෝ නිෂ්පාදනය පහතින් ඇතුලත් කරන්න. මගේ AI සහයකයා ඒ සඳහා තත්පර 30ක ආකර්ෂණීය වීඩියෝ පිටපතක් සහ වර්ණ රටාවක් ක්ෂණිකව යෝජනා කරාවි!",
    aiCreationsTitle1: "මගේ ", aiCreationsTitle2: "AI නිර්මාණ",
    aiCreationsSub: "නවීන කෘතිම බුද්ධි තාක්ෂණයන් භාවිතයෙන් මා විසින් සිදුකළ Image Design, සිනමැටික් වීඩියෝ, ඇනිමේෂන් සහ Music Design නිර්මාණ එකතුව.",
    portfolioTitle1: "වෘත්තීය වීඩියෝ ", portfolioTitle2: "නිර්මාණ",
    portfolioSub: "මා විසින් සංස්කරණය කරන ලද කෙටි චිත්‍රපට, වෙළඳ දැන්වීම් සහ නිර්මාණාත්මක වීඩියෝ මෙතැනින් නැරඹිය හැක.",
    testimonialsTitle1: "පාරිභෝගික ", testimonialsTitle2: "අදහස්",
    statsProjects: "නිම කළ ව්‍යාපෘති", statsExperience: "වසරක අත්දැකීම්", statsClients: "තෘප්තිමත් පාරිභෝගිකයින්",
    contactTitle1: "මා හා ", contactTitle2: "සම්බන්ධ වන්න",
    contactSub: "ඔබගේ මීළඟ ව්‍යාපෘතිය සඳහා හෝ වීඩියෝ සංස්කරණ, ග්‍රැෆික් නිර්මාණ කටයුතු සඳහා මා සම්බන්ධ කරගන්න.",
    loginReq: "කරුණාකර නිර්මාණ නැරඹීමට පළමුව ලොග් වන්න හෝ ලියාපදිංචි වන්න.",
    aiReq: "AI විශේෂාංගය භාවිතා කිරීමට පළමුව ගිණුමක් සාදන්න හෝ ලොග් වන්න.",
    phoneLbl: "දුරකථන", emailLbl: "විද්‍යුත් තැපෑල", locLbl: "ස්ථානය",
    formName: "ඔබගේ නම", formEmail: "විද්‍යුත් තැපෑල", formMsg: "පණිවිඩය", formSend: "පණිවිඩය යවන්න",
    driveBtn: "Google Drive හරහා නිර්මාණ බලන්න", ytBtn: "මගේ YouTube නාලිකාවට පිවිසෙන්න",
    loginHead: "ගිණුමට පිවිසෙන්න", regHead: "නව ගිණුමක් සාදන්න",
    loginSub: "ඔබගේ විද්‍යුත් තැපෑල සහ මුරපදය ඇතුලත් කරන්න.", regSub: "ඔබගේ විස්තර ඇතුලත් කර නව ගිණුමක් සාදන්න.",
    emailPlc: "විද්‍යුත් තැපෑල (Email)", passPlc: "මුරපදය (Password)", namePlc: "ඔබගේ නම (Name)",
    noAcc: "ගිණුමක් නැද්ද? ", hasAcc: "දැනටමත් ගිණුමක් තිබේද? ",
    btnGenerate: "Script එක හදන්න", btnGenerating: "හදමින් පවතී...", inputIdea: "උදා: අලුත් පාවහන් බ්‍රෑන්ඩ් එකක් / සැලූන් එකක්...",
    logoutConfirmTitle: "පිටවීම තහවුරු කරන්න", logoutConfirmMsg: "ඔබට විශ්වාසද මෙම ගිණුමෙන් පිටවීමට අවශ්‍ය බව?", btnYes: "ඔව්, පිටවන්න", btnNo: "නැත"
  },
  en: {
    navHome: "Home", navAbout: "About", navServices: "Services", navPortfolio: "Portfolio", navContact: "Contact",
    navLogin: "Login", navLogout: "Logout", navSignUp: "Sign Up",
    heroAvailable: "Available for Freelance Work",
    heroGreeting: "Hello, I am K.D Nadisha Malith Mihiranga",
    heroDesc: "Blending modern technology with limitless imagination to bring your ideas to life through outstanding visual design.",
    btnViewWork: "View Work", btnContact: "Contact Me",
    aboutTitle1: "About ", aboutTitle2: "Me",
    aboutP1: "I am K.D Nadisha Malith Mihiranga, a professional Video Editor, Graphic Designer, and Videographer. I completed my multimedia education at Wijeya Graphics, a leading institute in Sri Lanka.",
    aboutP2: "Although I studied various subjects including 3D Animation, my core passion and highest skills lie in Video Editing, Graphic Design, and Videography.",
    servicesTitle1: "My ", servicesTitle2: "Expertise",
    servicesSub: "With the training received from Wijeya Graphics, these are the main areas I excel in.",
    aiIdeatorTitle1: "An AI Script for ", aiIdeatorTitle2: "Your Business",
    aiIdeatorSub: "No ideas for a video? Enter your business or product below, and my AI assistant will instantly generate a 30-second video script and color palette!",
    aiCreationsTitle1: "My ", aiCreationsTitle2: "AI Creations",
    aiCreationsSub: "A collection of AI Image Designs, Cinematic Videos, Animations, and Music Designs created using modern AI prompts.",
    portfolioTitle1: "Professional Video ", portfolioTitle2: "Creations",
    portfolioSub: "Watch some of the short films, commercials, and creative videos I have edited.",
    testimonialsTitle1: "Client ", testimonialsTitle2: "Feedback",
    statsProjects: "Projects Completed", statsExperience: "Years Experience", statsClients: "Happy Clients",
    contactTitle1: "Get in ", contactTitle2: "Touch",
    contactSub: "Contact me for your next project, video editing, or graphic design needs.",
    loginReq: "Please login or sign up first to view the portfolio.",
    aiReq: "Please create an account or login first to use the AI feature.",
    phoneLbl: "Phone", emailLbl: "Email", locLbl: "Location",
    formName: "Your Name", formEmail: "Email", formMsg: "Message", formSend: "Send Message",
    driveBtn: "View Work on Google Drive", ytBtn: "Visit My YouTube Channel",
    loginHead: "Welcome Back", regHead: "Create an Account",
    loginSub: "Enter your email and password to login.", regSub: "Enter your details to create a new account.",
    emailPlc: "Email Address", passPlc: "Password", namePlc: "Full Name",
    noAcc: "Don't have an account? ", hasAcc: "Already have an account? ",
    btnGenerate: "Generate Script", btnGenerating: "Generating...", inputIdea: "Ex: A new shoe brand / a salon...",
    logoutConfirmTitle: "Confirm Logout", logoutConfirmMsg: "Are you sure you want to log out of this account?", btnYes: "Yes, Logout", btnNo: "Cancel"
  }
};

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loginMessage, setLoginMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [clientBusiness, setClientBusiness] = useState('');
  const [aiConcept, setAiConcept] = useState(null);
  const [isGeneratingConcept, setIsGeneratingConcept] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = (key) => selectedLanguage ? (translations[selectedLanguage][key] || translations['si'][key]) : '';

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const generateConcept = async () => {
    if (!isLoggedIn) {
      setLoginMessage(t('aiReq'));
      setIsLoginMode(false);
      setShowLogin(true);
      return;
    }
    if (!clientBusiness.trim()) return;
    setIsGeneratingConcept(true);
    setAiConcept(null);
    
    const apiKey = ""; // API Key provided by execution environment
    const promptLang = selectedLanguage === 'en' ? 'English' : 'Sinhala';
    const prompt = `Create a creative 30-second video script and color palette for business: "${clientBusiness}" in ${promptLang} language. Be cinematic and creative.`;

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await response.json();
      setAiConcept(data.candidates?.[0]?.content?.parts?.[0]?.text || "API Key නොමැති නිසා මෙම විශේෂාංගය තාවකාලිකව අක්‍රියයි.");
    } catch (error) {
      console.error(error);
      setAiConcept("API Key නොමැති නිසා මෙම විශේෂාංගය තාවකාලිකව අක්‍රියයි.");
    } finally {
      setIsGeneratingConcept(false);
    }
  };

  if (!selectedLanguage) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center" style={{ fontFamily: "'Noto Sans Sinhala', sans-serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@300;400;500;600;700&display=swap');`}</style>
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-10 max-w-lg w-full shadow-2xl">
          <Globe2 className="text-purple-400 w-16 h-16 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-white mb-8">Select Language / භාෂාව තෝරන්න</h1>
          <div className="grid gap-4">
            {['si', 'en'].map(lang => (
              <button key={lang} onClick={() => setSelectedLanguage(lang)} className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500 text-xl font-bold text-slate-200 transition-all cursor-pointer">
                {lang === 'si' ? 'සිංහල' : 'English'}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const portfolioItems = [
    { id: 1, title: "Broadcast Program", category: "Video Editing", image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=800", link: "https://drive.google.com/drive/folders/1nLSW_lUYv-fv5Dcq-8ygfNGlCXsMql38?usp=sharing" },
    { id: 2, title: "Cinema 24 - Short Film", category: "Short Film", image: "https://images.unsplash.com/photo-1574267432553-4b4628081524?auto=format&fit=crop&q=80&w=800", link: "https://youtube.com/@cinema24-h7v?si=bKOJtE1x8B9aQCEp" },
    { id: 3, title: "TV Commercial", category: "Commercial", image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800", link: "https://drive.google.com/drive/folders/1nLSW_lUYv-fv5Dcq-8ygfNGlCXsMql38?usp=sharing" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-purple-500 overflow-x-hidden" style={{ fontFamily: "'Noto Sans Sinhala', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@300;400;500;600;700&display=swap');`}</style>
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-400 tracking-tighter">Nadee_Editor</div>
          
          <div className="hidden lg:flex gap-8 items-center">
            {['home', 'about', 'services', 'portfolio', 'contact'].map(sec => (
              <button key={sec} onClick={() => scrollToSection(sec)} className="text-sm font-medium hover:text-purple-400 transition-colors capitalize cursor-pointer">{t('nav' + sec.charAt(0).toUpperCase() + sec.slice(1))}</button>
            ))}
            <div className="w-px h-6 bg-slate-800 mx-2"></div>
            {isLoggedIn ? (
              <button onClick={() => setShowLogoutConfirm(true)} className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm font-bold cursor-pointer">
                <LogOut size={18}/> {t('navLogout')}
              </button>
            ) : (
              <button onClick={() => setShowLogin(true)} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-bold cursor-pointer">
                <User size={18}/> {t('navLogin')}
              </button>
            )}
            <button onClick={() => setSelectedLanguage(null)} className="p-2 bg-slate-800/50 hover:bg-slate-800 rounded-full transition-all cursor-pointer"><Globe2 size={18} /></button>
          </div>

          <button className="lg:hidden p-2 cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X/> : <Menu/>}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 p-6 space-y-4 absolute top-full left-0 w-full shadow-2xl animate-in slide-in-from-top duration-300">
            {['home', 'about', 'services', 'portfolio', 'contact'].map(sec => (
              <button key={sec} onClick={() => scrollToSection(sec)} className="block w-full text-left text-lg font-medium py-2 cursor-pointer">{t('nav' + sec.charAt(0).toUpperCase() + sec.slice(1))}</button>
            ))}
            <div className="h-px bg-slate-800 my-4"></div>
            {isLoggedIn ? (
              <button onClick={() => { setMobileMenuOpen(false); setShowLogoutConfirm(true); }} className="flex items-center gap-3 text-red-400 font-bold cursor-pointer"><LogOut size={20}/> {t('navLogout')}</button>
            ) : (
              <button onClick={() => { setMobileMenuOpen(false); setShowLogin(true); }} className="flex items-center gap-3 text-white font-bold cursor-pointer"><User size={20}/> {t('navLogin')}</button>
            )}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold">
              <Sparkles size={16}/> {t('heroAvailable')}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-2xl block text-slate-400 font-medium mb-2">{t('heroGreeting')}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-slate-400">Creative Editor & Visual Designer</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">{t('heroDesc')}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => scrollToSection('portfolio')} className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-white/5 cursor-pointer">{t('btnViewWork')}</button>
              <button onClick={() => scrollToSection('contact')} className="px-10 py-5 border border-slate-700 rounded-2xl font-bold hover:bg-slate-900 transition-all cursor-pointer">{t('btnContact')}</button>
            </div>
          </div>
          <div className="relative group lg:block hidden">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-3xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                   <Video size={48} className="text-purple-500"/>
                 </div>
                 <div className="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                   <Palette size={48} className="text-blue-500"/>
                 </div>
                 <div className="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                   <Camera size={48} className="text-pink-500"/>
                 </div>
                 <div className="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                   <Layers size={48} className="text-emerald-500"/>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <h2 className="text-4xl font-bold">{t('aboutTitle1')}<span className="text-purple-500">{t('aboutTitle2')}</span></h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>{t('aboutP1')}</p>
                <p>{t('aboutP2')}</p>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-xs text-slate-500 uppercase mt-2 tracking-widest">{t('statsProjects')}</div>
                </div>
                <div className="text-center p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <div className="text-3xl font-bold text-white">1+</div>
                  <div className="text-xs text-slate-500 uppercase mt-2 tracking-widest">{t('statsExperience')}</div>
                </div>
                <div className="text-center p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-xs text-slate-500 uppercase mt-2 tracking-widest">{t('statsClients')}</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square bg-slate-900 border border-slate-800 rounded-[40px] flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
                <User size={180} className="text-slate-800 relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tool Section */}
      <section id="ai-ideator" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('aiIdeatorTitle1')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">{t('aiIdeatorTitle2')}</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">{t('aiIdeatorSub')}</p>
          
          <div className="max-w-3xl mx-auto bg-slate-900 p-8 rounded-[32px] border border-slate-800 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                value={clientBusiness} 
                onChange={(e) => setClientBusiness(e.target.value)} 
                placeholder={t('inputIdea')} 
                className="flex-1 bg-slate-950 border border-slate-800 p-5 rounded-2xl text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
              <button 
                onClick={generateConcept} 
                disabled={isGeneratingConcept} 
                className="px-8 py-5 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-purple-900/20 disabled:opacity-50 cursor-pointer"
              >
                {isGeneratingConcept ? <Loader2 className="animate-spin"/> : <Sparkles/>} {isGeneratingConcept ? t('btnGenerating') : t('btnGenerate')}
              </button>
            </div>
            
            {aiConcept && (
              <div className="mt-8 p-8 bg-slate-950 rounded-2xl text-left border border-purple-500/20 animate-in fade-in zoom-in duration-500">
                <div className="flex items-center gap-3 mb-4 text-purple-400 font-bold border-b border-slate-800 pb-4">
                  <Wand2 size={20}/> 
                  <span>AI Generated Vision</span>
                </div>
                <div className="text-slate-300 leading-relaxed whitespace-pre-line text-lg">
                  {aiConcept}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">{t('portfolioTitle1')} <span className="text-pink-500">{t('portfolioTitle2')}</span></h2>
              <p className="text-slate-400 max-w-xl">{t('portfolioSub')}</p>
            </div>
            <a href="https://youtube.com/@cinema24-h7v?si=bKOJtE1x8B9aQCEp" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-pink-500 font-bold hover:underline cursor-pointer">
              {t('ytBtn')} <ChevronRight size={20}/>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map(item => (
              <a 
                key={item.id} 
                href={item.link} 
                target="_blank" 
                rel="noreferrer"
                onClick={(e) => { if(!isLoggedIn) { e.preventDefault(); setLoginMessage(t('loginReq')); setShowLogin(true); } }}
                className="group relative overflow-hidden rounded-[32px] bg-slate-950 border border-slate-800 block aspect-video cursor-pointer"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                  <div className="p-5 bg-white rounded-full text-slate-950 shadow-2xl">
                    <PlayCircle size={40}/>
                  </div>
                </div>
                <div className="absolute bottom-0 p-8 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent w-full">
                  <div className="text-pink-500 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
             <a href="https://drive.google.com/drive/folders/1nLSW_lUYv-fv5Dcq-8ygfNGlCXsMql38?usp=sharing" target="_blank" rel="noreferrer" className="px-12 py-5 bg-slate-800 hover:bg-slate-700 rounded-2xl font-bold transition-all inline-flex items-center gap-3 cursor-pointer">
               <Layers size={20}/> {t('driveBtn')}
             </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-slate-900 border border-slate-800 rounded-[40px] overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16 space-y-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">{t('contactTitle1')} <span className="text-purple-500">{t('contactTitle2')}</span></h2>
                  <p className="text-slate-400">{t('contactSub')}</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500"><Phone size={24}/></div>
                    <div>
                      <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">{t('phoneLbl')}</div>
                      <div className="text-lg font-bold">+94 77 229 1528</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500"><Mail size={24}/></div>
                    <div>
                      <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">{t('emailLbl')}</div>
                      <div className="text-lg font-bold">nadisha@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-500"><MapPin size={24}/></div>
                    <div>
                      <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">{t('locLbl')}</div>
                      <div className="text-lg font-bold">Horana, Sri Lanka</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-purple-600 hover:-translate-y-1 transition-all cursor-pointer"><Icon size={20}/></button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 p-12 lg:p-16 border-l border-slate-800">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400">{t('formName')}</label>
                    <input type="text" className="w-full bg-slate-950 border border-slate-700 p-4 rounded-xl focus:border-purple-500 outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400">{t('formEmail')}</label>
                    <input type="email" className="w-full bg-slate-950 border border-slate-700 p-4 rounded-xl focus:border-purple-500 outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400">{t('formMsg')}</label>
                    <textarea className="w-full bg-slate-950 border border-slate-700 p-4 rounded-xl h-32 focus:border-purple-500 outline-none" required></textarea>
                  </div>
                  <button className="w-full py-5 bg-purple-600 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-purple-500 transition-all shadow-xl shadow-purple-900/20 cursor-pointer">
                    <Mail size={20}/> {t('formSend')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 text-center">
        <div className="container mx-auto px-6">
          <div className="text-2xl font-bold text-white mb-4 tracking-tighter">Nadee_Editor</div>
          <p className="text-slate-500 text-sm">© 2026 K.D Nadisha Malith Mihiranga. All rights reserved.</p>
        </div>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
           <div className="bg-slate-900 p-10 rounded-[40px] max-w-md w-full border border-slate-800 relative shadow-2xl">
              <button onClick={() => setShowLogin(false)} className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-all cursor-pointer"><X size={20}/></button>
              
              <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center text-purple-500 mx-auto mb-6">
                {isLoginMode ? <Lock size={32}/> : <UserPlus size={32}/>}
              </div>
              
              <h3 className="text-3xl font-bold text-center mb-2">{isLoginMode ? t('loginHead') : t('regHead')}</h3>
              <p className="text-slate-400 text-center mb-8 text-sm">{loginMessage || (isLoginMode ? t('loginSub') : t('regSub'))}</p>
              
              <form onSubmit={handleLogin} className="space-y-4">
                {!isLoginMode && (
                  <div className="relative">
                    <User className="absolute left-4 top-4 text-slate-500" size={20}/>
                    <input type="text" placeholder={t('namePlc')} className="w-full pl-12 p-4 bg-slate-950 border border-slate-800 rounded-2xl focus:border-purple-500 outline-none transition-all" required />
                  </div>
                )}
                <div className="relative">
                  <Mail className="absolute left-4 top-4 text-slate-500" size={20}/>
                  <input type="email" placeholder={t('emailPlc')} className="w-full pl-12 p-4 bg-slate-950 border border-slate-800 rounded-2xl focus:border-purple-500 outline-none transition-all" required />
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-4 text-slate-500" size={20}/>
                  <input type="password" placeholder={t('passPlc')} className="w-full pl-12 p-4 bg-slate-950 border border-slate-800 rounded-2xl focus:border-purple-500 outline-none transition-all" required />
                </div>
                <button type="submit" className="w-full py-5 bg-purple-600 hover:bg-purple-500 rounded-2xl font-bold mt-4 shadow-xl shadow-purple-900/20 transition-all cursor-pointer">
                  {isLoginMode ? t('navLogin') : t('navSignUp')}
                </button>
              </form>
              
              <button onClick={() => setIsLoginMode(!isLoginMode)} className="w-full mt-6 text-sm font-medium text-slate-400 hover:text-purple-400 transition-colors cursor-pointer">
                {isLoginMode ? t('noAcc') : t('hasAcc')} <span className="text-purple-500 font-bold underline">{isLoginMode ? t('navSignUp') : t('navLogin')}</span>
              </button>
           </div>
        </div>
      )}

      {/* Logout Confirmation */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-slate-900 p-10 rounded-[32px] max-w-sm w-full border border-slate-800 text-center shadow-2xl">
            <div className="w-20 h-20 bg-red-600/10 rounded-full flex items-center justify-center text-red-500 mx-auto mb-6">
              <LogOut size={40}/>
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('logoutConfirmTitle')}</h3>
            <p className="text-slate-400 mb-10 leading-relaxed">{t('logoutConfirmMsg')}</p>
            <div className="flex gap-4">
              <button onClick={() => setShowLogoutConfirm(false)} className="flex-1 p-4 border border-slate-700 rounded-2xl font-bold hover:bg-slate-800 transition-all cursor-pointer">{t('btnNo')}</button>
              <button onClick={() => { setIsLoggedIn(false); setShowLogoutConfirm(false); }} className="flex-1 p-4 bg-red-600 hover:bg-red-500 rounded-2xl font-bold shadow-xl shadow-red-900/20 transition-all cursor-pointer">{t('btnYes')}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;