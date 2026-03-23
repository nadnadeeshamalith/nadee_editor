import React, { useState, useEffect } from 'react';
import { Video, Palette, Camera, Layers, PlayCircle, MonitorPlay, Mail, Phone, MapPin, Menu, X, ChevronRight, Facebook, Instagram, Youtube, Linkedin, Wand2, Loader2, Sparkles, Image as ImageIcon, Globe2, Award, Users, CheckCircle, Quote, User, Download, Check, Leaf, Store, Clock, ExternalLink } from 'lucide-react';

// --- Translations Dictionary ---
const translations = {
  si: {
    navHome: "මුල් පිටුව", navAbout: "මා ගැන", navServices: "සේවාවන්", navPortfolio: "නිර්මාණ", navContact: "සම්බන්ධ වන්න",
    heroAvailable: "වෘත්තීය අවස්ථාවන් සඳහා සූදානම්",
    heroGreeting: "ආයුබෝවන්, මම K.D නදිශ මලිත් මිහිරංග",
    heroDesc: "සීමාවන් නොමැති පරිකල්පනයට නවීන තාක්ෂණයේ ජීවය මුසු කරමින්, ඔබගේ අදහස් සැබෑවක් කරන විශිෂ්ටතම දෘශ්‍ය නිර්මාණකරණය",
    btnViewWork: "නිර්මාණ බලන්න", btnContact: "සම්බන්ධ වන්න", btnDownloadCV: "CV එක බාගත කරන්න",
    aboutTitle1: "මා ", aboutTitle2: "ගැන",
    aboutP1: "මම K.D නදිශ මලිත් මිහිරංග. මම වෘත්තීය මට්ටමේ වීඩියෝ සංස්කරණ ශිල්පියෙකු, ග්‍රැෆික් නිර්මාණකරුවෙකු සහ ඡායාරූප/වීඩියෝ ශිල්පියෙකු වෙමි. මම මගේ වෘත්තීය බහුමාධ්‍ය අධ්‍යාපනය සම්පූර්ණ කළේ Wijeya Graphics ආයතනයෙනි.",
    aboutP2: "එහිදී 3D සජීවීකරණය ඇතුළු විෂය පථයන් රැසක් මා හැදෑරුවද, මගේ දැඩි ආශාව සහ ඉහළම දක්ෂතාවය ඇත්තේ වීඩියෝ එඩිටින්, ග්‍රැෆික් ඩිසයින් සහ වීඩියෝග්‍රැෆි යන අංශයන්හි වේ.",
    skillsTitle: "මගේ කුසලතා",
    servicesTitle1: "මගේ ", servicesTitle2: "ව්‍යාපාර",
    servicesSub: "මගේ නවතම ව්‍යාපාරික ආරම්භයන් සහ ඉදිරි සැලසුම්.",
    aiIdeatorTitle1: "ඔබේ ව්‍යාපාරයට ", aiIdeatorTitle2: "AI Script එකක්",
    aiIdeatorSub: "වීඩියෝවක් කරන්න අදහසක් නැද්ද? ඔබේ ව්‍යාපාරය හෝ නිෂ්පාදනය පහතින් ඇතුලත් කරන්න. මගේ AI සහයකයා ඒ සඳහා තත්පර 30ක ආකර්ෂණීය වීඩියෝ පිටපතක් සහ වර්ණ රටාවක් ක්ෂණිකව යෝජනා කරාවි!",
    portfolioTitle1: "වෘත්තීය වීඩියෝ ", portfolioTitle2: "නිර්මාණ",
    portfolioSub: "මා විසින් සංස්කරණය කරන ලද කෙටි චිත්‍රපට, වෙළඳ දැන්වීම් සහ නිර්මාණාත්මක වීඩියෝ මෙතැනින් නැරඹිය හැක.",
    graphicsTitle1: "ග්‍රැෆික් ", graphicsTitle2: "නිර්මාණ",
    graphicsSub: "මා විසින් නිර්මාණය කරන ලද ලාංඡන, පෝස්ටර් සහ අනෙකුත් ග්‍රැෆික් නිර්මාණ එකතුව.",
    photoTitle1: "මගේ ", photoTitle2: "ඡායාරූප",
    photoSub: "මා විසින් රූපගත කරන ලද විශේෂ අවස්ථා සහ සුන්දර දසුන්.",
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
    heroAvailable: "Open to Career Opportunities",
    heroGreeting: "Hello, I am K.D Nadisha Malith Mihiranga",
    heroDesc: "Blending modern technology with limitless imagination to bring your ideas to life through outstanding visual design.",
    btnViewWork: "View Work", btnContact: "Contact Me", btnDownloadCV: "Download CV",
    aboutTitle1: "About ", aboutTitle2: "Me",
    aboutP1: "I am K.D Nadisha Malith Mihiranga, a professional Video Editor, Graphic Designer, and Videographer. I completed my multimedia education at Wijeya Graphics, a leading institute in Sri Lanka.",
    aboutP2: "Although I studied various subjects including 3D Animation, my core passion and highest skills lie in Video Editing, Graphic Design, and Videography.",
    skillsTitle: "Software Proficiency",
    servicesTitle1: "My ", servicesTitle2: "Ventures",
    servicesSub: "My latest business startups and upcoming plans.",
    aiIdeatorTitle1: "An AI Script for ", aiIdeatorTitle2: "Your Business",
    aiIdeatorSub: "No ideas for a video? Enter your business or product below, and my AI assistant will instantly generate a 30-second video script and color palette!",
    portfolioTitle1: "Professional Video ", portfolioTitle2: "Creations",
    portfolioSub: "Watch some of the short films, commercials, and creative videos I have edited.",
    graphicsTitle1: "Graphic ", graphicsTitle2: "Designs",
    graphicsSub: "Explore my collection of logos, flyers, and other creative graphic designs.",
    photoTitle1: "My ", photoTitle2: "Photography",
    photoSub: "A collection of special moments and beautiful sceneries captured by me.",
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
    heroAvailable: "தொழில் வாய்ப்புகளுக்கு தயாராக உள்ளது",
    heroGreeting: "வணக்கம், நான் K.D நதிஷ மலித் மிஹிரங்க",
    heroDesc: "நவீன தொழில்நுட்பத்தை எல்லையற்ற கற்பனையுடன் கலந்து சிறந்த காட்சி வடிவமைப்பு மூலம் உங்கள் யோசனைகளை உயிர்ப்பிக்கிறேன்.",
    btnViewWork: "படைப்புகளைக் காண்", btnContact: "தொடர்பு கொள்க", btnDownloadCV: "CV ஐப் பதிவிறக்குக",
    aboutTitle1: "என்னை ", aboutTitle2: "பற்றி",
    aboutP1: "நான் K.D நதிஷ மலித் மிஹிரங்க, ஒரு தொழில்முறை வீடியோ எடிட்டர், கிராஃபிக் டிசைனர் மற்றும் வீடியோகிராஃபர். இலங்கையின் முன்னணி நிறுவனமான விஜய கிராபிக்ஸ் இல் எனது மல்டிமீடியா கல்வியை முடித்தேன்.",
    aboutP2: "3D அனிமேஷன் உட்பட பல்வேறு பாடங்களை நான் படித்திருந்தாலும், எனது முக்கிய ஆர்வமும் திறமையும் வீடியோ எடிட்டிங், கிராஃபிக் டிசைன் மற்றும் வீடியோகிராஃபி ஆகியவற்றில் உள்ளன.",
    skillsTitle: "மென்பொருள் திறன்கள்",
    servicesTitle1: "எனது ", servicesTitle2: "வணிகங்கள்",
    servicesSub: "எனது சமீபத்திய வணிக தொடக்கங்கள் மற்றும் வரவிருக்கும் திட்டங்கள்.",
    aiIdeatorTitle1: "உங்கள் வணிகத்திற்கான ", aiIdeatorTitle2: "AI ஸ்கிரிப்ட்",
    aiIdeatorSub: "வீடியோ செய்ய யோசனை இல்லையா? உங்கள் வணிகம் அல்லது தயாரிப்பை கீழே உள்ளிடவும், எனது AI உதவியாளர் உடனடியாக 30 வினாடி வீடியோ ஸ்கிரிப்ட் மற்றும் வண்ணத் தட்டுகளை உருவாக்கும்!",
    portfolioTitle1: "தொழில்முறை வீடியோ ", portfolioTitle2: "படைப்புகள்",
    portfolioSub: "நான் எடிட் செய்த சில குறும்படங்கள், விளம்பரங்கள் மற்றும் ஆக்கபூர்வமான வீடியோக்களை இங்கே பார்க்கலாம்.",
    graphicsTitle1: "கிராஃபிக் ", graphicsTitle2: "வடிவமைப்புகள்",
    graphicsSub: "நான் உருவாக்கிய லோகோக்கள், சுவரொட்டிகள் மற்றும் பிற கிராஃபிக் வடிவமைப்புகளை இங்கே காணலாம்.",
    photoTitle1: "எனது ", photoTitle2: "புகைப்படங்கள்",
    photoSub: "நான் எடுத்த சிறப்பு தருணங்கள் மற்றும் அழகான காட்சிகள்.",
    statsProjects: "முடிக்கப்பட்ட திட்டங்கள்", statsExperience: "வருட அனுபவம்", statsClients: "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
    contactTitle1: "தொடர்பு ", contactTitle2: "கொள்ளுங்கள்",
    contactSub: "உங்கள் அடுத்த திட்டம், வீடியோ எடிட்டிங் அல்லது கிராஃபிக் வடிவமைப்பு தேவைகளுக்கு என்னை தொடர்பு கொள்ளவும்.",
    phoneLbl: "தொலைபேசி (WhatsApp)", emailLbl: "மின்னஞ்சல்", locLbl: "இடம்",
    formName: "உங்கள் பெயர்", formEmail: "மின்னஞ்சல்", formMsg: "செய்தி", formSend: "செய்தியை அனுப்பு",
    driveBtn: "Google Drive இல் படைப்புகளைக் காண்", ytBtn: "எனது YouTube சேனலைப் பார்வையிடவும்",
    btnGenerate: "ஸ்கிரிப்ட் உருவாக்கு", btnGenerating: "உருவாக்குகிறது...", inputIdea: "உதா: புதிய காலணி பிராண்ட் / சலூன்..."
  }
};

// Skills Data
const softwareSkills = [
  { name: "Adobe Premiere Pro", level: 90, color: "bg-purple-500" },
  { name: "Adobe Photoshop", level: 80, color: "bg-blue-500" },
  { name: "Artificial Intelligence (AI)", level: 80, color: "bg-pink-500" },
  { name: "Adobe Illustrator", level: 75, color: "bg-orange-500" },
  { name: "After Effects", level: 60, color: "bg-indigo-500" },
  { name: "DaVinci Resolve", level: 40, color: "bg-emerald-500" }
];

// Ventures Data (Replacing Services)
const venturesList = [
  {
    title: { si: "මිරිස් පැල තවාන", en: "Chili Plant Nursery", ta: "மிளகாய் செடிகள்" },
    status: { si: "වෙබ් අඩවියට පිවිසෙන්න", en: "Visit Website", ta: "இணையதளத்திற்குச் செல்லவும்" },
    icon: Leaf,
    link: "#", // මෙතනට ඔයාගේ මිරිස් පැල වෙබ් අඩවියේ ලින්ක් එක දාන්න
    isReady: true,
    features: {
      si: ["උසස් තත්ත්වයේ පැල", "ගෙදර හැදූ නිෂ්පාදන", "සාධාරණ මිල ගණන්"],
      en: ["High-Quality Plants", "Homegrown Products", "Reasonable Prices"],
      ta: ["உயர்தர செடிகள்", "வீட்டில் வளர்க்கப்பட்டவை", "நியாயமான விலை"]
    }
  },
  {
    title: { si: "නව ව්‍යාපාරය", en: "New Venture", ta: "புதிய வணிகம்" },
    status: { si: "ළඟදීම...", en: "Coming Soon...", ta: "விரைவில்..." },
    icon: Store,
    link: "#",
    isReady: false,
    features: {
      si: ["නව නිෂ්පාදන", "සුවිශේෂී සේවාවන්", "ළඟදීම විවෘත වේ"],
      en: ["New Products", "Exclusive Services", "Opening Soon"],
      ta: ["புதிய தயாரிப்புகள்", "பிரத்யேக சேவைகள்", "விரைவில் திறக்கப்படும்"]
    }
  },
  {
    title: { si: "නව ව්‍යාපාරය", en: "New Venture", ta: "புதிய வணிகம்" },
    status: { si: "ළඟදීම...", en: "Coming Soon...", ta: "விரைவில்..." },
    icon: Clock,
    link: "#",
    isReady: false,
    features: {
      si: ["තවත් අලුත් වැඩක්", "නව අත්දැකීමක්", "ළඟදීම විවෘත වේ"],
      en: ["Another New Project", "New Experience", "Opening Soon"],
      ta: ["மற்றொரு புதிய திட்டம்", "புதிய அனுபவம்", "விரைவில் திறக்கப்படும்"]
    }
  }
];

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clientBusiness, setClientBusiness] = useState('');
  const [aiConcept, setAiConcept] = useState(null);
  const [isGeneratingConcept, setIsGeneratingConcept] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = (key) => selectedLanguage ? (translations[selectedLanguage][key] || translations['si'][key]) : '';

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/94772291528?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const generateConcept = async () => {
    if (!clientBusiness.trim()) return;
    setIsGeneratingConcept(true);
    setAiConcept(null);
    const apiKey = ""; 
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
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl">
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
    { id: 1, title: "Broadcast Program", category: "Video Editing", image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=800", link: "https://drive.google.com/drive/folders/1nLSW_lUYv-fv5Dcq-8ygfNGlCXsMql38?usp=drive_link" },
    { id: 2, title: "Cinema 24 - Short Film", category: "Short Film", image: "https://images.unsplash.com/photo-1574267432553-4b4628081524?auto=format&fit=crop&q=80&w=800", link: "https://youtube.com/@cinema24-h7v?si=bKOJtE1x8B9aQCEp" },
    { id: 3, title: "TV Commercial", category: "Commercial", image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800", link: "https://drive.google.com/drive/folders/1nLSW_lUYv-fv5Dcq-8ygfNGlCXsMql38?usp=sharing" },
    { id: 4, title: "AI Music", category: "Audio Generation", image: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=800", link: "https://drive.google.com/drive/folders/10EKfkQLY_34ota8NMKdk0uKPduD88BKj?usp=sharing" }
  ];

  const graphicItems = [
    { id: 1, title: "Social Media Design", category: "Graphics", image: "/design1.jpg" },
    { id: 2, title: "Logo Design", category: "Branding", image: "/design2.jpg" },
    { id: 3, title: "Flyer Design", category: "Print", image: "/design3.jpg" },
    { id: 4, title: "Banner Design", category: "Advertising", image: "/design4.jpg" }
  ];

  const photographyItems = [
    { id: 1, title: "Nature Photography", category: "Nature", image: "/photo1.jpg" },
    { id: 2, title: "Portrait Photography", category: "Portrait", image: "/photo2.jpg" },
    { id: 3, title: "Event Photography", category: "Event", image: "/photo3.jpg" },
    { id: 4, title: "Commercial Shoot", category: "Commercial", image: "/photo4.jpg" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-purple-500 overflow-x-hidden" style={{ fontFamily: "'Noto Sans Sinhala', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@300;400;500;600;700&display=swap');`}</style>
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-3 shadow-xl' : 'bg-slate-950 lg:bg-transparent py-4 lg:py-5 border-b lg:border-none border-slate-800'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-400 tracking-tighter">Nadee_Editor</div>
          
          <div className="hidden lg:flex gap-8 items-center">
            {['home', 'about', 'services', 'portfolio', 'contact'].map(sec => (
              <button key={sec} onClick={() => scrollToSection(sec)} className="text-sm font-medium hover:text-purple-400 transition-colors capitalize cursor-pointer">{t('nav' + sec.charAt(0).toUpperCase() + sec.slice(1))}</button>
            ))}
            <div className="w-px h-6 bg-slate-800 mx-2"></div>
            <button onClick={() => setSelectedLanguage(null)} className="p-2 bg-slate-800/50 hover:bg-slate-800 rounded-full transition-all cursor-pointer"><Globe2 size={18} /></button>
          </div>

          <button className="lg:hidden p-2 cursor-pointer text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 p-6 space-y-4 absolute top-full left-0 w-full shadow-2xl animate-in slide-in-from-top duration-300">
            {['home', 'about', 'services', 'portfolio', 'contact'].map(sec => (
              <button key={sec} onClick={() => scrollToSection(sec)} className="block w-full text-left text-lg font-medium py-3 border-b border-slate-800/50 cursor-pointer">{t('nav' + sec.charAt(0).toUpperCase() + sec.slice(1))}</button>
            ))}
            <button onClick={() => { setMobileMenuOpen(false); setSelectedLanguage(null); }} className="flex items-center gap-3 text-purple-400 font-bold cursor-pointer py-3"><Globe2 size={20}/> Change Language</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-24 lg:pt-20 overflow-hidden relative">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 py-12 lg:py-0">
          <div className="space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-bold">
              <User size={16} className="text-purple-400"/> {t('heroAvailable')}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-xl sm:text-2xl block text-slate-400 font-medium mb-2">{t('heroGreeting')}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-slate-400">Creative Editor & Visual Designer</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">{t('heroDesc')}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <button onClick={() => scrollToSection('portfolio')} className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-slate-950 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-white/5 cursor-pointer text-center">{t('btnViewWork')}</button>
              <button onClick={() => scrollToSection('contact')} className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border border-slate-700 rounded-2xl font-bold hover:bg-slate-900 transition-all cursor-pointer text-center">{t('btnContact')}</button>
              {/* Download CV Button */}
              <a href="/cv.pdf" download className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-purple-600/50 text-purple-400 bg-purple-600/5 rounded-2xl font-bold hover:bg-purple-600 hover:text-white transition-all cursor-pointer text-center flex items-center justify-center gap-2">
                <Download size={20}/> {t('btnDownloadCV')}
              </a>
            </div>
          </div>
          
          <div className="relative group mt-8 lg:mt-0 max-w-sm mx-auto w-full lg:max-w-none">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                   <Video size={40} className="text-purple-500 sm:w-12 sm:h-12"/>
                 </div>
                 <div className="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                   <Palette size={40} className="text-blue-500 sm:w-12 sm:h-12"/>
                 </div>
                 <div className="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                   <Camera size={40} className="text-pink-500 sm:w-12 sm:h-12"/>
                 </div>
                 <div className="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                   <Layers size={40} className="text-emerald-500 sm:w-12 sm:h-12"/>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="services" className="py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">{t('servicesTitle1')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">{t('servicesTitle2')}</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">{t('servicesSub')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {venturesList.map((venture, idx) => {
              const lang = selectedLanguage || 'si';
              return (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-[32px] p-8 hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-300 group shadow-xl relative overflow-hidden">
                  {!venture.isReady && (
                    <div className="absolute top-6 right-6 px-3 py-1 bg-slate-800/80 text-slate-400 text-xs font-bold rounded-full border border-slate-700 backdrop-blur-md">
                      {venture.status[lang]}
                    </div>
                  )}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${venture.isReady ? 'bg-emerald-500/10 group-hover:bg-emerald-500/20' : 'bg-slate-800'}`}>
                    <venture.icon size={32} className={`${venture.isReady ? 'text-emerald-400 group-hover:text-emerald-300' : 'text-slate-500'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">{venture.title[lang]}</h3>
                  <div className="space-y-3 mb-8">
                    {venture.features[lang].map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-slate-400">
                        <Check size={18} className={`${venture.isReady ? 'text-emerald-500' : 'text-slate-600'} shrink-0 mt-0.5`} />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {venture.isReady ? (
                    <a href={venture.link} target="_blank" rel="noreferrer" className="w-full py-4 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white border border-emerald-600/30 rounded-xl font-bold transition-all text-sm cursor-pointer flex items-center justify-center gap-2">
                      <ExternalLink size={18}/> {venture.status[lang]}
                    </a>
                  ) : (
                    <button disabled className="w-full py-4 bg-slate-800 text-slate-500 rounded-xl font-bold text-sm cursor-not-allowed flex items-center justify-center gap-2 border border-slate-700/50">
                      <Clock size={18}/> {venture.status[lang]}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Tool Section */}
      <section id="ai-ideator" className="py-16 lg:py-24 bg-slate-900/30 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">{t('aiIdeatorTitle1')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">{t('aiIdeatorTitle2')}</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg mb-8 sm:mb-12">{t('aiIdeatorSub')}</p>
          
          <div className="max-w-3xl mx-auto bg-slate-900 p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-slate-800 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                value={clientBusiness} 
                onChange={(e) => setClientBusiness(e.target.value)} 
                placeholder={t('inputIdea')} 
                className="flex-1 bg-slate-950 border border-slate-800 p-4 sm:p-5 rounded-xl sm:rounded-2xl text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm sm:text-base"
              />
              <button 
                onClick={generateConcept} 
                disabled={isGeneratingConcept} 
                className="px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-purple-900/20 disabled:opacity-50 cursor-pointer text-sm sm:text-base"
              >
                {isGeneratingConcept ? <Loader2 className="animate-spin"/> : <Sparkles/>} {isGeneratingConcept ? t('btnGenerating') : t('btnGenerate')}
              </button>
            </div>
            
            {aiConcept && (
              <div className="mt-6 sm:mt-8 p-6 sm:p-8 bg-slate-950 rounded-2xl text-left border border-purple-500/20 animate-in fade-in zoom-in duration-500">
                <div className="flex items-center gap-3 mb-4 text-purple-400 font-bold border-b border-slate-800 pb-4 text-sm sm:text-base">
                  <Wand2 size={20}/> 
                  <span>AI Generated Vision</span>
                </div>
                <div className="text-slate-300 leading-relaxed whitespace-pre-line text-sm sm:text-lg overflow-hidden">
                  {aiConcept}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 mb-10 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t('portfolioTitle1')} <span className="text-pink-500">{t('portfolioTitle2')}</span></h2>
              <p className="text-slate-400 max-w-xl text-sm sm:text-base">{t('portfolioSub')}</p>
            </div>
            <a href="https://youtube.com/@cinema24-h7v?si=bKOJtE1x8B9aQCEp" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-pink-500 font-bold hover:underline cursor-pointer text-sm sm:text-base">
              {t('ytBtn')} <ChevronRight size={20}/>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioItems.map(item => (
              <a 
                key={item.id} 
                href={item.link} 
                target="_blank" 
                rel="noreferrer"
                className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-slate-950 border border-slate-800 block aspect-video cursor-pointer"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                  <div className="p-4 sm:p-5 bg-white rounded-full text-slate-950 shadow-2xl">
                    <PlayCircle size={32} className="sm:w-10 sm:h-10"/>
                  </div>
                </div>
                <div className="absolute bottom-0 p-6 sm:p-8 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent w-full">
                  <div className="text-pink-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2">{item.category}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>

          {/* Graphic Design Section */}
          <div className="mt-20 sm:mt-24 border-t border-slate-800/50 pt-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 mb-10 sm:mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t('graphicsTitle1')} <span className="text-blue-500">{t('graphicsTitle2')}</span></h2>
                <p className="text-slate-400 max-w-xl text-sm sm:text-base">{t('graphicsSub')}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {graphicItems.map(item => (
                <a 
                  key={item.id} 
                  href={item.image} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-slate-950 border border-slate-800 block aspect-square sm:aspect-[4/5] cursor-pointer"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400"
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <div className="p-3 sm:p-4 bg-white rounded-full text-slate-950 shadow-2xl">
                      <ImageIcon size={24} className="sm:w-6 sm:h-6 text-blue-500"/>
                    </div>
                  </div>
                  <div className="absolute bottom-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent w-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="text-blue-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-2">{item.category}</div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Photography Section */}
          <div className="mt-20 sm:mt-24 border-t border-slate-800/50 pt-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 mb-10 sm:mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t('photoTitle1')} <span className="text-emerald-500">{t('photoTitle2')}</span></h2>
                <p className="text-slate-400 max-w-xl text-sm sm:text-base">{t('photoSub')}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {photographyItems.map(item => (
                <a 
                  key={item.id} 
                  href={item.image} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-slate-950 border border-slate-800 block aspect-square sm:aspect-[4/5] cursor-pointer"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400"
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <div className="p-3 sm:p-4 bg-white rounded-full text-slate-950 shadow-2xl">
                      <Camera size={24} className="sm:w-6 sm:h-6 text-emerald-500"/>
                    </div>
                  </div>
                  <div className="absolute bottom-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent w-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-2">{item.category}</div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
             <a href="https://drive.google.com/drive/folders/1Xo7ga5pHZXPnOvHU2NG1ptAjBhrm2DIq?usp=drive_link" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-slate-800 hover:bg-slate-700 rounded-xl sm:rounded-2xl font-bold transition-all inline-flex items-center justify-center gap-3 cursor-pointer text-sm sm:text-base">
               <Layers size={20}/> {t('driveBtn')}
             </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-slate-900 border border-slate-800 rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-12 lg:p-16 space-y-10 sm:space-y-12">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">{t('contactTitle1')} <span className="text-purple-500">{t('contactTitle2')}</span></h2>
                  <p className="text-slate-400 text-sm sm:text-base">{t('contactSub')}</p>
                </div>
                
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-4 sm:gap-6 group">
                    <div className="min-w-[48px] h-12 sm:w-14 sm:h-14 bg-purple-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all"><Phone size={20} className="sm:w-6 sm:h-6"/></div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] sm:text-sm text-slate-500 font-bold uppercase tracking-widest">{t('phoneLbl')}</div>
                      <a href="https://wa.me/94772291528" target="_blank" rel="noreferrer" className="text-base sm:text-lg font-bold hover:text-purple-400 transition-colors cursor-pointer truncate block">
                        +94 77 229 1528
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 sm:gap-6 group">
                    <div className="min-w-[48px] h-12 sm:w-14 sm:h-14 bg-blue-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all"><Mail size={20} className="sm:w-6 sm:h-6"/></div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] sm:text-sm text-slate-500 font-bold uppercase tracking-widest">{t('emailLbl')}</div>
                      <a href="mailto:nadeesha.creative@gmail.com" className="text-sm sm:text-lg font-bold hover:text-blue-400 transition-colors cursor-pointer truncate block">
                        nadeesha.creative@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6 group">
                    <div className="min-w-[48px] h-12 sm:w-14 sm:h-14 bg-pink-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all"><MapPin size={20} className="sm:w-6 sm:h-6"/></div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] sm:text-sm text-slate-500 font-bold uppercase tracking-widest">{t('locLbl')}</div>
                      <a href="https://www.google.com/maps/search/Deraniyagala,+Sri+Lanka" target="_blank" rel="noreferrer" className="text-base sm:text-lg font-bold hover:text-pink-400 transition-colors cursor-pointer truncate block">
                        Deraniyagala, Sri Lanka
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <a href="https://www.facebook.com/share/1GgLDj8CJg/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all cursor-pointer">
                    <Facebook size={18}/>
                  </a>
                  <a href="https://youtube.com/@cinema24-h7v?si=bKOJtE1x8B9aQCEp" target="_blank" rel="noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-red-600 hover:-translate-y-1 transition-all cursor-pointer">
                    <Youtube size={18}/>
                  </a>
                  <a href="https://www.tiktok.com/@trueimpact6?_r=1&_t=ZS-94uF2mnUGJO" target="_blank" rel="noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:-translate-y-1 transition-all cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/nadeesha-malith-3796933b9/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvOQsJJPOT5W5EveE%2BjavWg%3D%3D" target="_blank" rel="noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:-translate-y-1 transition-all cursor-pointer">
                    <Linkedin size={18}/>
                  </a>
                </div>

                <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-slate-800">
                  <p className="text-slate-400 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4">Follow on TikTok</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white p-2 rounded-xl sm:rounded-2xl w-24 h-24 sm:w-32 sm:h-32 hover:scale-105 transition-all shadow-xl overflow-hidden border border-slate-200">
                      <img src="/1.jpeg" alt="Nadee Editor TikTok" className="w-full h-full object-cover rounded-lg sm:rounded-xl" />
                    </div>
                    <div className="bg-white p-2 rounded-xl sm:rounded-2xl w-24 h-24 sm:w-32 sm:h-32 hover:scale-105 transition-all shadow-xl overflow-hidden border border-slate-200">
                      <img src="/2.jpeg" alt="24 Cinema TikTok" className="w-full h-full object-cover rounded-lg sm:rounded-xl" />
                    </div>
                  </div>
                </div>

              </div>

              <div className="bg-slate-800/50 p-6 sm:p-12 lg:p-16 border-t lg:border-t-0 lg:border-l border-slate-800">
                <form className="space-y-4 sm:space-y-6" onSubmit={handleFormSubmit}>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-slate-400">{t('formName')}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 p-3 sm:p-4 rounded-xl focus:border-purple-500 outline-none text-sm sm:text-base" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-slate-400">{t('formEmail')}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 p-3 sm:p-4 rounded-xl focus:border-purple-500 outline-none text-sm sm:text-base" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-slate-400">{t('formMsg')}</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 p-3 sm:p-4 rounded-xl h-24 sm:h-32 focus:border-purple-500 outline-none text-sm sm:text-base" required></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 sm:py-5 bg-purple-600 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-purple-500 transition-all shadow-xl shadow-purple-900/20 cursor-pointer text-sm sm:text-base">
                    <Mail size={20}/> {t('formSend')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 sm:py-12 border-t border-slate-900 text-center px-6">
        <div className="container mx-auto">
          <div className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 tracking-tighter">Nadee_Editor</div>
          <p className="text-slate-500 text-xs sm:text-sm">© 2026 K.D Nadisha Malith Mihiranga. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;