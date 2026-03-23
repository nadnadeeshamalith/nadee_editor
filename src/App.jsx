import React, { useState, useEffect } from 'react';
import { Video, Palette, Camera, Layers, PlayCircle, MonitorPlay, Mail, Phone, MapPin, Menu, X, ChevronRight, Facebook, Instagram, Youtube, Linkedin, Wand2, Loader2, Sparkles, Image as ImageIcon, Globe2, Award, Users, CheckCircle, Quote, User } from 'lucide-react';

// --- Translations Dictionary ---
const translations = {
  si: {
    navHome: "මුල් පිටුව", navAbout: "මා ගැන", navServices: "සේවාවන්", navPortfolio: "නිර්මාණ", navContact: "සම්බන්ධ වන්න",
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
    phoneLbl: "දුරකථන (WhatsApp)", emailLbl: "විද්‍යුත් තැපෑල", locLbl: "ස්ථානය",
    formName: "ඔබගේ නම", formEmail: "විද්‍යුත් තැපෑල", formMsg: "පණිවිඩය", formSend: "පණිවිඩය යවන්න",
    driveBtn: "Google Drive හරහා නිර්මාණ බලන්න", ytBtn: "මගේ YouTube නාලිකාවට පිවිසෙන්න",
    btnGenerate: "Script එක හදන්න", btnGenerating: "හදමින් පවතී...", inputIdea: "උදා: අලුත් පාවහන් බ්‍රෑන්ඩ් එකක් / සැලූන් එකක්..."
  },
  en: {
    navHome: "Home", navAbout: "About", navServices: "Services", navPortfolio: "Portfolio", navContact: "Contact",
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
    phoneLbl: "Phone (WhatsApp)", emailLbl: "Email", locLbl: "Location",
    formName: "Your Name", formEmail: "Email", formMsg: "Message", formSend: "Send Message",
    driveBtn: "View Work on Google Drive", ytBtn: "Visit My YouTube Channel",
    btnGenerate: "Generate Script", btnGenerating: "Generating...", inputIdea: "Ex: A new shoe brand / a salon..."
  },
  ta: {
    navHome: "முகப்பு", navAbout: "பற்றி", navServices: "சேவைகள்", navPortfolio: "படைப்புகள்", navContact: "தொடர்பு",
    heroAvailable: "Available for Freelance Work",
    heroGreeting: "வணக்கம், நான் K.D நதிஷ மலித் மிஹிரங்க",
    heroDesc: "நவீன தொழில்நுட்பத்தை எல்லையற்ற கற்பனையுடன் கலந்து சிறந்த காட்சி வடிவமைப்பின் மூலம் உங்கள் யோசனைகளை உயிர்ப்பிக்கிறேன்.",
    btnViewWork: "படைப்புகளைக் காண்", btnContact: "தொடர்பு கொள்க",
    aboutTitle1: "என்னை ", aboutTitle2: "பற்றி",
    aboutP1: "நான் K.D நதிஷ மலித் மிஹிரங்க, ஒரு தொழில்முறை வீடியோ எடிட்டர், கிராஃபிக் டிசைனர் மற்றும் வீடியோகிராஃபர். இலங்கையின் முன்னணி நிறுவனமான விஜய கிராபிக்ஸ் இல் எனது மல்டிமீடியா கல்வியை முடித்தேன்.",
    aboutP2: "3D அனிமேஷன் உட்பட பல்வேறு பாடங்களை நான் படித்திருந்தாலும், எனது முக்கிய ஆர்வமும் திறமையும் வீடியோ எடிட்டிங், கிராஃபிக் டிசைன் மற்றும் வீடியோகிராஃபி ஆகியவற்றில் உள்ளன.",
    servicesTitle1: "எனது ", servicesTitle2: "நிபுணத்துவம்",
    servicesSub: "விஜய கிராபிக்ஸ் நிறுவனத்தில் பெற்ற பயிற்சியுடன், நான் மிகவும் சிறந்து விளங்கும் முக்கிய துறைகள் இவை.",
    aiIdeatorTitle1: "உங்கள் வணிகத்திற்கான ", aiIdeatorTitle2: "AI ஸ்கிரிப்ட்",
    aiIdeatorSub: "வீடியோ செய்ய யோசனை இல்லையா? உங்கள் வணிகம் அல்லது தயாரிப்பை கீழே உள்ளிடவும், எனது AI உதவியாளர் உடனடியாக 30 வினாடி வீடியோ ஸ்கிரிப்ட் மற்றும் வண்ணத் தட்டுகளை உருவாக்கும்!",
    aiCreationsTitle1: "எனது ", aiCreationsTitle2: "AI படைப்புகள்",
    aiCreationsSub: "நவீன AI தொழில்நுட்பங்களைப் பயன்படுத்தி உருவாக்கப்பட்ட பட வடிவமைப்புகள், சினிமா வீடியோக்கள், அனிமேஷன்கள் மற்றும் இசை வடிவமைப்புகளின் தொகுப்பு.",
    portfolioTitle1: "தொழில்முறை வீடியோ ", portfolioTitle2: "படைப்புகள்",
    portfolioSub: "நான் எடிட் செய்த சில குறும்படங்கள், விளம்பரங்கள் மற்றும் ஆக்கபூர்வமான வீடியோக்களை இங்கே பார்க்கலாம்.",
    testimonialsTitle1: "வாடிக்கையாளர் ", testimonialsTitle2: "கருத்து",
    statsProjects: "முடிக்கப்பட்ட திட்டங்கள்", statsExperience: "வருட அனுபவம்", statsClients: "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
    contactTitle1: "தொடர்பு ", contactTitle2: "கொள்ளுங்கள்",
    contactSub: "உங்கள் அடுத்த திட்டம், வீடியோ எடிட்டிங் அல்லது கிராஃபிக் வடிவமைப்பு தேவைகளுக்கு என்னை தொடர்பு கொள்ளவும்.",
    phoneLbl: "தொலைபேசி (WhatsApp)", emailLbl: "மின்னஞ்சல்", locLbl: "இடம்",
    formName: "உங்கள் பெயர்", formEmail: "மின்னஞ்சல்", formMsg: "செய்தி", formSend: "செய்தியை அனுப்பு",
    driveBtn: "Google Drive இல் படைப்புகளைக் காண்", ytBtn: "எனது YouTube சேனலைப் பார்வையிடவும்",
    btnGenerate: "ஸ்கிரிப்ட் உருவாக்கு", btnGenerating: "உருவாக்குகிறது...", inputIdea: "உதா: புதிய காலணி பிராண்ட் / சலூன்..."
  }
};

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const generateConcept = async () => {
    if (!clientBusiness.trim()) return;
    setIsGeneratingConcept(true);
    setAiConcept(null);
    
    const apiKey = ""; // API Key provided by execution environment
    let promptLang = 'Sinhala';
    if (selectedLanguage === 'en') promptLang = 'English';
    if (selectedLanguage === 'ta') promptLang = 'Tamil';
    
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
          <h1 className="text-2xl font-bold text-white mb-8">Select Language / மொழி</h1>
          <div className="grid gap-4">
            {['si', 'en', 'ta'].map(lang => (
              <button key={lang} onClick={() => setSelectedLanguage(lang)} className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500 text-xl font-bold text-slate-200 transition-all cursor-pointer">
                {lang === 'si' ? 'සිංහල' : lang === 'en' ? 'English' : 'தமிழ்'}
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
            <button onClick={() => { setMobileMenuOpen(false); setSelectedLanguage(null); }} className="flex items-center gap-3 text-white font-bold cursor-pointer"><Globe2 size={20}/> Change Language</button>
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
                  {/* WhatsApp Link */}
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all"><Phone size={24}/></div>
                    <div>
                      <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">{t('phoneLbl')}</div>
                      <a href="https://wa.me/94772291528" target="_blank" rel="noreferrer" className="text-lg font-bold hover:text-purple-400 transition-colors cursor-pointer">
                        +94 77 229 1528
                      </a>
                    </div>
                  </div>
                  
                  {/* Email Link */}
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all"><Mail size={24}/></div>
                    <div>
                      <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">{t('emailLbl')}</div>
                      <a href="mailto:nadeesha.creative@gmail.com" className="text-lg font-bold hover:text-blue-400 transition-colors cursor-pointer">
                        nadeesha.creative@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location Link */}
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all"><MapPin size={24}/></div>
                    <div>
                      <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">{t('locLbl')}</div>
                      <a href="https://www.google.com/maps/search/Deraniyagala,+Sri+Lanka" target="_blank" rel="noreferrer" className="text-lg font-bold hover:text-pink-400 transition-colors cursor-pointer">
                        Deraniyagala, Sri Lanka
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 pt-4">
                  <a href="https://www.facebook.com/share/1GgLDj8CJg/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all cursor-pointer">
                    <Facebook size={20}/>
                  </a>
                  <a href="https://youtube.com/@cinema24-h7v?si=bKOJtE1x8B9aQCEp" target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-red-600 hover:-translate-y-1 transition-all cursor-pointer">
                    <Youtube size={20}/>
                  </a>
                  <a href="https://www.tiktok.com/@trueimpact6?_r=1&_t=ZS-94uF2mnUGJO" target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:-translate-y-1 transition-all cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                  </a>
                </div>

                {/* TikTok QR Codes */}
                <div className="pt-8 mt-8 border-t border-slate-800">
                  <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-4">Follow on TikTok</p>
                  <div className="flex gap-4">
                    <div className="bg-white p-2 rounded-2xl w-32 h-32 hover:scale-105 transition-all shadow-xl">
                      <img src="/1.jpeg" alt="Nadee Editor TikTok" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="bg-white p-2 rounded-2xl w-32 h-32 hover:scale-105 transition-all shadow-xl">
                      <img src="/2.jpeg" alt="24 Cinema TikTok" className="w-full h-full object-cover rounded-xl" />
                    </div>
                  </div>
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
    </div>
  );
};

export default App;