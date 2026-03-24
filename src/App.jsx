import React, { useState, useEffect } from 'react';
// Uka Local VS Code ukampi apnaqañataki, akham line ukat // apsuñamawa.
// import './index.css'; 
import { Video, Palette, Camera, Layers, PlayCircle, MonitorPlay, Mail, Phone, MapPin, Menu, X, ChevronRight, Image as ImageIcon, Globe2, Award, Users, CheckCircle, Quote, User, Download, Check, Leaf, Store, Clock, ExternalLink, Sun, Moon, Music, Globe } from 'lucide-react';

// --- Uñt'ayawi (Contact Details) ---
const CONTACT_INFO = {
  phone: "+94 77 229 1528",
  email: "nadeesha.creative@gmail.com",
  address: "Deraniyagala, Sri Lanka",
  whatsapp: "94772291528",
  facebook: "https://facebook.com/share/1GgLDj8CJg/?mibextid=wwXIfr",
  youtube: "https://youtube.com/@cinema24-h7v",
  linkedin: "https://www.linkedin.com/in/nadeesha-malith-3796933b9/",
  tiktok: "https://www.tiktok.com/@trueimpact6"
};

// --- Aru (Translations Dictionary) ---
const translations = {
  si: {
    navHome: "මුල් පිටුව", navAbout: "මා ගැන", navServices: "වෙබ්සයිට්", navPortfolio: "නිර්මාණ", navContact: "සම්බන්ධ වන්න",
    heroAvailable: "පූර්ණ කාලීන රැකියා අවස්ථාවන් සඳහා සූදානම්",
    heroGreeting: "ආයුබෝවන්, මම K.D නදිශ මලිත් මිහිරංග",
    heroDesc: "සීමාවන් නොමැති පරිකල්පනයට නවීන තාක්ෂණයේ ජීවය මුසු කරමින්, ආයතනික අරමුණු සාක්ෂාත් කරන විශිෂ්ටතම දෘශ්‍ය නිර්මාණකරණය.",
    btnViewWork: "නිර්මාණ බලන්න", btnContact: "සම්බන්ධ වන්න", btnDownloadCV: "CV එක බාගත කරන්න",
    aboutTitle1: "මා ", aboutTitle2: "ගැන",
    aboutP1: "මම K.D නදිශ මලිත් මිහිරංග. මම වෘත්තීය මට්ටමේ වීඩියෝ සංස්කරණ ශිල්පියෙකු, ග්‍රැෆික් නිර්මාණකරුවෙකු සහ ඡායාරූප/වීඩියෝ ශිල්පියෙකු වෙමි. මාගේ වෘත්තීය බහුමාධ්‍ය අධ්‍යාපනය (Multimedia Education) මා සාර්ථකව සම්පූර්ණ කළේ ශ්‍රී ලංකාවේ ප්‍රමුඛතම ආයතනයක් වන Wijeya Graphics හිදීය.",
    aboutP2: "එහිදී 3D සජීවීකරණය ඇතුළු විෂය පථයන් රැසක් මා හැදෑරුවද, මගේ දැඩි ආශාව සහ ඉහළම දක්ෂතාවය ඇත්තේ වීඩියෝ එඩිටින්, ග්‍රැෆික් ඩිසයින් සහ වීඩියෝග්‍රැෆි යන අංශයන්හි වේ. ඕනෑම වෘත්තීය වටපිටාවක කණ්ඩායමක් සමඟ එක්ව ඉහළම ප්‍රතිඵල ලබාදීමට මා සූදානම්.",
    skillsTitle: "මගේ කුසලතා (Skills)",
    servicesTitle1: "මගේ ", servicesTitle2: "වෙනත් වෙබ්සයිට්",
    servicesSub: "මා විසින් නිර්මාණය කරන ලද සහ දැනට පවත්වාගෙන යනු ලබන වෙබ් අඩවි එකතුව.",
    fbTitle1: "AI Music ", fbTitle2: "වීඩියෝ",
    fbSub: "මා විසින් නිර්මාණය කළ AI Music වීඩියෝ.",
    casualTitle1: "විනෝදාත්මක ", casualTitle2: "වීඩියෝ සහ Reels",
    casualSub: "මා විසින් නිදහස් වේලාවන්හි කළ විනෝදාත්මක වීඩියෝ නිර්මාණ.",
    portfolioTitle1: "වෘත්තීය වීඩියෝ ", portfolioTitle2: "නිර්මාණ",
    portfolioSub: "මා විසින් සංස්කරණය කරන ලද කෙටි චිත්‍රපට සහ නිර්මාණාත්මක වීඩියෝ.",
    driveTitle1: "වාණිජ සහ ශ්‍රව්‍ය ", driveTitle2: "නිර්මාණ (Drive)",
    driveSub: "වෙළඳ දැන්වීම්, රූපවාහිනී වැඩසටහන් සහ AI සංගීත නිර්මාණ.",
    tiktokTitle1: "පොඩ්කාස්ට් සහ ", tiktokTitle2: "කෙටි වීඩියෝ",
    tiktokSub: "මා විසින් නිර්මාණය කළ Podcast Edits සහ TikTok කෙටි වීඩියෝ.",
    graphicsTitle1: "ග්‍රැෆික් ", graphicsTitle2: "නිර්මාණ",
    graphicsSub: "මා විසින් නිර්මාණය කරන ලද ලාංඡන, පෝස්ටර් සහ අනෙකුත් ග්‍රැෆික් නිර්මාණ එකතුව.",
    photoTitle1: "මගේ ", photoTitle2: "ඡායාරූප",
    photoSub: "මා විසින් රූපගත කරන ලද විශේෂ අවස්ථා සහ සුන්දර දසුන්.",
    statsProjects: "නිම කළ ව්‍යාපෘති", statsExperience: "වසරක අත්දැකීම්", statsClients: "සාර්ථක නිර්මාණ",
    contactTitle1: "මා හා ", contactTitle2: "සම්බන්ධ වන්න",
    contactSub: "රැකියා අවස්ථාවන් සහ සම්මුඛ පරීක්ෂණ (Interviews) සඳහා මා සම්බන්ධ කරගන්න.",
    phoneLbl: "දුරකථන (WhatsApp)", emailLbl: "විද්‍යුත් තැපෑල", locLbl: "ස්ථානය",
    formName: "ඔබගේ නම / ආයතනය", formEmail: "විද්‍යුත් තැපෑල", formMsg: "පණිවිඩය", formSend: "පණිවිඩය යවන්න",
    driveBtn: "Google Drive හරහා සම්පූර්ණ නිර්මාණ බලන්න", ytBtn: "මගේ YouTube නාලිකාව"
  },
  en: {
    navHome: "Home", navAbout: "About", navServices: "Websites", navPortfolio: "Portfolio", navContact: "Contact",
    heroAvailable: "Open to Full-Time Career Opportunities",
    heroGreeting: "Hello, I am K.D Nadisha Malith Mihiranga",
    heroDesc: "A dedicated creative professional blending modern technology with limitless imagination to achieve corporate visual goals.",
    btnViewWork: "View Portfolio", btnContact: "Contact Me", btnDownloadCV: "Download CV",
    aboutTitle1: "About ", aboutTitle2: "Me",
    aboutP1: "I am K.D Nadisha Malith Mihiranga, a professional Video Editor, Graphic Designer, and Videographer. I successfully completed my professional multimedia education at Wijeya Graphics, a leading institute in Sri Lanka.",
    aboutP2: "Although I studied various subjects including 3D Animation, my core passion and highest skills lie in Video Editing, Graphic Design, and Videography. I am ready to collaborate with professional teams to deliver outstanding results.",
    skillsTitle: "Software Proficiency",
    servicesTitle1: "My ", servicesTitle2: "Other Websites",
    servicesSub: "A collection of websites designed and maintained by me.",
    fbTitle1: "AI Music ", fbTitle2: "Videos",
    fbSub: "My creative AI Music videos.",
    casualTitle1: "Casual ", casualTitle2: "Videos & Reels",
    casualSub: "Fun and casual video edits created in my free time.",
    portfolioTitle1: "Professional Video ", portfolioTitle2: "Creations",
    portfolioSub: "Watch some of the short films and creative videos I have edited.",
    driveTitle1: "Commercials & ", driveTitle2: "Audio (Drive)",
    driveSub: "TV Commercials, Broadcast Programs, and AI Audio Generation.",
    tiktokTitle1: "Podcast & ", tiktokTitle2: "Short Videos",
    tiktokSub: "Explore my Podcast Edits and TikTok short video creations.",
    graphicsTitle1: "Graphic ", graphicsTitle2: "Designs",
    graphicsSub: "Explore my collection of logos, flyers, and other creative graphic designs.",
    photoTitle1: "My ", photoTitle2: "Photography",
    photoSub: "A collection of special moments and beautiful sceneries captured by me.",
    statsProjects: "Projects Completed", statsExperience: "Years Experience", statsClients: "Successful Designs",
    contactTitle1: "Get in ", contactTitle2: "Touch",
    contactSub: "Contact me for career opportunities and interviews.",
    phoneLbl: "Phone (WhatsApp)", emailLbl: "Email", locLbl: "Location",
    formName: "Your Name / Company", formEmail: "Email", formMsg: "Message", formSend: "Send Message",
    driveBtn: "View Full Portfolio on Drive", ytBtn: "My YouTube Channel"
  },
  ta: {
    navHome: "முகப்பு", navAbout: "பற்றி", navServices: "இணையதளங்கள்", navPortfolio: "படைப்புகள்", navContact: "தொடர்பு",
    heroAvailable: "முழுநேர வேலை வாய்ப்புகளுக்கு தயாராக உள்ளது",
    heroGreeting: "வணக்கம், நான் K.D நதிஷ மலித் மிஹிரங்க",
    heroDesc: "நவீன தொழில்நுட்பத்தை எல்லையற்ற கற்பனையுடன் கலந்து நிறுவனத்தின் காட்சி இலக்குகளை அடையும் ஒரு படைப்பு நிபுணர்.",
    btnViewWork: "படைப்புகளைக் காண்", btnContact: "தொடர்பு கொள்க", btnDownloadCV: "CV ஐப் பதிவிறக்குக",
    aboutTitle1: "என்னை ", aboutTitle2: "பற்றி",
    aboutP1: "நான் K.D நதிஷ மலித் மிஹිරங்க, ஒரு தொழில்முறை வீடியோ எடிட்டர், கிராஃபிக் டிசைனர் மற்றும் வீடியோகிராஃபர். இலங்கையின் முன்னணி நிறுவனமான Wijeya Graphics இல் எனது மல்டிமீடியா கல்வியை முடித்தேன்.",
    aboutP2: "நான் 3D அனிமேஷன் உட்பட பல பாடங்களைப் படித்தாலும், எனது முக்கிய ஆர்வம் வீடியோ எடிட்டிங் மற்றும் கிராஃபிக் டிசைன் ஆகும்.",
    skillsTitle: "மென்பொருள் திறன்கள்",
    servicesTitle1: "எனது ", servicesTitle2: "பிற இணையதளங்கள்",
    servicesSub: "நான் உருவாக்கிய மற்றும் பராமரிக்கும் இணையதளங்களின் தொகுப்பு.",
    fbTitle1: "AI Music ", fbTitle2: "வீடியோக்கள்",
    fbSub: "நான் உருவாக்கிய AI Music வீடியோக்கள்.",
    casualTitle1: "சாதாரண ", casualTitle2: "வீடியோக்கள் & ரீல்ஸ்",
    casualSub: "எனது ஓய்வு நேரத்தில் உருவாக்கப்பட்ட வேடிக்கையான வீடியோக்கள்.",
    portfolioTitle1: "தொழில்முறை வீடியோ ", portfolioTitle2: "படைப்புகள்",
    portfolioSub: "நான் எடிட் செய்த சில குறும்படங்கள் மற்றும் ஆக்கபூர்வமான வீடியோக்களை இங்கே பார்க்கலாம்.",
    driveTitle1: "விளம்பரங்கள் & ", driveTitle2: "ஆடியோ",
    driveSub: "தொலைக்காட்சி விளம்பரங்கள், ஒளிபரப்பு நிகழ்ச்சிகள் மற்றும் AI ஆடியோ.",
    tiktokTitle1: "பாட்காஸ்ட் & ", tiktokTitle2: "குறுகிய வீடியோக்கள்",
    tiktokSub: "எனது Podcast திருத்தங்கள் மற்றும் TikTok குறுகிய வீடியோக்கள்.",
    graphicsTitle1: "கிராஃபிக் ", graphicsTitle2: "வடிவமைப்புகள்",
    graphicsSub: "நான் உருவாக்கிய லோகோக்கள், சுவரொட்டிகள் மற்றும் பிற கிராஃபிக் வடிவமைப்புகளை இங்கே காணலாம்.",
    photoTitle1: "எனது ", photoTitle2: "புகைப்படங்கள்",
    photoSub: "நான் எடுத்த சிறப்பு தருணங்கள் மற்றும் அழகான காட்சிகள்.",
    statsProjects: "முடிக்கப்பட்ட திட்டங்கள்", statsExperience: "வருட அனுபவம்", statsClients: "வெற்றிகரமான வடிவமைப்புகள்",
    contactTitle1: "தொடர்பு ", contactTitle2: "கொள்ளுங்கள்",
    contactSub: "வேலை வாய்ப்புகள் மற்றும் நேர்காணல்களுக்கு என்னை தொடர்பு கொள்ளவும்.",
    phoneLbl: "தொலைபேசி (WhatsApp)", emailLbl: "மின்னஞ்சல்", locLbl: "இடம்",
    formName: "உங்கள் பெயர் / நிறுவனம்", formEmail: "மின்னஞ்சல்", formMsg: "செய்தி", formSend: "செய்தியை அனுப்பு",
    driveBtn: "Google Drive இல் முழு படைப்புகளையும் காண்", ytBtn: "எனது YouTube சேனல்"
  }
};

// --- Yatiñanaka (Skills) ---
const softwareSkills = [
  { name: "Adobe Premiere Pro", level: 90, color: "bg-purple-500" },
  { name: "Adobe After Effects", level: 85, color: "bg-indigo-500" },
  { name: "Adobe Photoshop", level: 85, color: "bg-blue-500" },
  { name: "Adobe Illustrator", level: 80, color: "bg-orange-500" },
  { name: "Figma & CorelDRAW", level: 75, color: "bg-pink-500" },
  { name: "3Ds Max / Maya (Basic)", level: 60, color: "bg-emerald-500" }
];

const venturesList = [
  {
    title: { si: "මිරිස් පැල තවාන", en: "Chili Plant Nursery", ta: "மிளகாய் செடிகள்" },
    status: { si: "වෙබ් අඩවියට පිවිසෙන්න", en: "Visit Website", ta: "இணையதளத்திற்குச் செல்லவும்" },
    icon: Leaf, link: "#", isReady: true,
    features: {
      si: ["උසස් තත්ත්වයේ පැල", "ගෙදර හැදූ නිෂ්පාදන", "සාධාරණ මිල ගණන්"],
      en: ["High-Quality Plants", "Homegrown Products", "Reasonable Prices"],
      ta: ["உயர்தர செடிகள்", "வீட்டில் வளர்க்கப்பட்டவை", "நியாயமான விலை"]
    }
  },
  {
    title: { si: "මගේ නව වෙබ්සයිට් එක", en: "My New Portfolio", ta: "எனது புதிய போர்ட்ஃபோலியோ" },
    status: { si: "වෙබ් අඩවියට පිවිසෙන්න", en: "Visit Website", ta: "இணையதளத்திற்குச் செல்லவும்" },
    icon: Globe, link: "https://nadee-portfolio-2rh2.vercel.app", isReady: true,
    features: {
      si: ["නිර්මාණාත්මක පෝට්ෆෝලියෝව", "නවීනතම අත්දැකීමක්", "සියලු නිර්මාණ එක තැනක"],
      en: ["Creative Portfolio", "Modern Experience", "All works in one place"],
      ta: ["ஆக்கபூர்வமான போர்ட்ஃபோலியோ", "நவீன அனுபவம்", "அனைத்து படைப்புகளும் ஒரே இடத்தில்"]
    }
  },
  {
    title: { si: "නව ව්‍යාපාරය", en: "New Venture", ta: "புதிய வணிகம்" },
    status: { si: "ළඟදීම...", en: "Coming Soon...", ta: "விரைவில்..." },
    icon: Clock, link: "#", isReady: false,
    features: {
      si: ["තවත් අලුත් වැඩක්", "නව අත්දැකීමක්", "ළඟදීම විවෘත වේ"],
      en: ["Another New Project", "New Experience", "Opening Soon"],
      ta: ["மற்றொரு புதிய திட்டம்", "புதிய அனுபவம்", "விரைவில் திறக்கப்படும்"]
    }
  }
];

// --- Jayma Widyunaka (AI Music Videos) ---
const fbVideos1 = [
  { link: "https://web.facebook.com/share/v/1CKksZpNdN/", image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=400&q=80", title: "AI Music Video 01" },
  { link: "https://web.facebook.com/share/r/1DtqdWU172/", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=400&q=80", title: "AI Music Video 02" },
  { link: "https://web.facebook.com/share/r/18EH8DRTEo/", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80", title: "AI Music Video 03" },
  { link: "https://web.facebook.com/share/r/1AyVcCzrLK/", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80", title: "AI Music Video 04" }
];

// --- Widyunaka (Casual Videos) ---
const fbVideos2 = [
  { link: "https://web.facebook.com/share/r/1E4N7sELFD/", image: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f468?auto=format&fit=crop&w=400&q=80", title: "Casual Reel 01" },
  { link: "https://web.facebook.com/share/r/1J7bKd11rq/", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80", title: "Casual Reel 02" },
  { link: "https://web.facebook.com/share/r/17PwF4uVt8/", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=400&q=80", title: "Casual Reel 03" },
  { link: "https://web.facebook.com/share/r/1GwTMLQ8x4/", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=400&q=80", title: "Casual Reel 04" }
];

const youtubeItems = [
  { id: 1, title: "Short Film - Edit 01", category: "Short Film Editing", videoId: "O1JYvHm43-M", image: "/short1.jpg" },
  { id: 2, title: "Short Film - Edit 02", category: "Short Film Editing", videoId: "Ea1uu_C15sI", image: "/short2.jpg" },
  { id: 3, title: "Short Film - Edit 03", category: "Short Film Editing", videoId: "godpPomcMag", image: "/short3.jpg" }
];

const driveItems = [
  { id: 1, title: "Broadcast Program", category: "Video Editing", image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=800", link: "https://drive.google.com/drive/folders/1nLSW_lUYv-fv5Dcq-8ygfNGlCXsMql38?usp=drive_link" },
  { id: 2, title: "TV Commercial", category: "Commercial", image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800", link: "https://drive.google.com/drive/folders/1nLSW_lUYv-fv5Dcq-8ygfNGlCXsMql38?usp=sharing" },
  { id: 4, title: "Cinema 24 - Channel", category: "Short Films", image: "https://images.unsplash.com/photo-1574267432553-4b4628081524?auto=format&fit=crop&q=80&w=800", link: "https://youtube.com/@cinema24-h7v?si=bKOJtE1x8B9aQCEp" }
];

const aiMusicItems = [
  { id: 1, title: "AI Music Track 01", category: "AI Audio Generation", image: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=800", link: "https://drive.google.com/drive/folders/10EKfkQLY_34ota8NMKdk0uKPduD88BKj?usp=sharing" },
  { id: 2, title: "AI Music Track 02", category: "AI Audio Generation", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800", link: "https://drive.google.com/drive/folders/10EKfkQLY_34ota8NMKdk0uKPduD88BKj?usp=sharing" },
  { id: 3, title: "AI Music Track 03", category: "AI Audio Generation", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800", link: "https://drive.google.com/drive/folders/10EKfkQLY_34ota8NMKdk0uKPduD88BKj?usp=sharing" }
];

const tiktokItems = [
  { id: 1, title: "Podcast Edit 01", category: "TikTok / Reels", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400", link: "https://vt.tiktok.com/ZSuWmK518/" }, 
  { id: 2, title: "Podcast Edit 02", category: "TikTok / Reels", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400", link: "https://vt.tiktok.com/ZSuWm7G1D/" }, 
  { id: 3, title: "Podcast Edit 03", category: "TikTok / Reels", image: "https://images.unsplash.com/photo-1588680157922-38666ebf7b11?auto=format&fit=crop&q=80&w=400", link: "https://vt.tiktok.com/ZSuWmKjVC/" },
  { id: 4, title: "Podcast Edit 04", category: "TikTok / Reels", image: "https://images.unsplash.com/photo-1516280440502-38f322301140?auto=format&fit=crop&q=80&w=400", link: "https://vt.tiktok.com/ZSuWmnCeB/" }
];

// --- Samikunaka (Graphic Designs) ---
const graphicItems = [
  { id: 1, title: "Social Media Design 01", category: "Social Media Design", image: "/design1.jpg" },
  { id: 2, title: "Social Media Design 02", category: "Social Media Design", image: "/design2.jpg" },
  { id: 3, title: "Social Media Design 03", category: "Social Media Design", image: "/design3.jpg" },
  { id: 4, title: "Social Media Design 04", category: "Social Media Design", image: "/design4.jpg" }
];

// --- Uñakipaña (Photography) ---
const photographyItems = [
  { id: 1, title: "Portrait Photography 01", category: "Portrait Photography", image: "/photo1.jpg" },
  { id: 2, title: "Portrait Photography 02", category: "Portrait Photography", image: "/photo2.jpg" },
  { id: 3, title: "Portrait Photography 03", category: "Portrait Photography", image: "/photo3.jpg" },
  { id: 4, title: "Portrait Photography 04", category: "Portrait Photography", image: "/photo4.jpg" }
];

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const thm = {
    bg: isDarkMode ? "bg-slate-950" : "bg-slate-50",
    bgSec: isDarkMode ? "bg-slate-900" : "bg-white",
    bgNav: isDarkMode ? "bg-slate-950/90" : "bg-white/90",
    textMain: isDarkMode ? "text-slate-50" : "text-slate-900",
    textMuted: isDarkMode ? "text-slate-400" : "text-slate-600",
    textHead: isDarkMode ? "text-white" : "text-slate-900",
    border: isDarkMode ? "border-slate-800" : "border-slate-200",
    iconBtn: isDarkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-200 hover:bg-slate-300",
    inputBg: isDarkMode ? "bg-slate-950 border-slate-700" : "bg-white border-slate-300",
  };

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
    const whatsappMessage = `*Job Inquiry from Website*%0A%0A*Name/Company:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`, '_blank');
  };

  if (!selectedLanguage) {
    return (
      <div className="min-h-screen relative flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-slate-950" style={{ fontFamily: "'Noto Sans Sinhala', sans-serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@300;400;500;600;700&display=swap');`}</style>
        
        {/* --- Uñt'ayawi Background --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-[2.5rem] p-12 max-w-md w-full shadow-[0_0_50px_rgba(168,85,247,0.15)]">
          <Globe2 className="text-purple-400 w-20 h-20 mx-auto mb-6 animate-pulse" />
          <h1 className="text-3xl font-extrabold text-white mb-2">භාෂාව තෝරන්න</h1>
          <p className="text-slate-400 font-medium mb-10 tracking-widest text-sm">Select Language / மொழி</p>
          
          <div className="flex flex-col gap-4">
            <button onClick={() => setSelectedLanguage('si')} className="px-6 py-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-500 hover:bg-slate-800 text-xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">සිංහල</button>
            <button onClick={() => setSelectedLanguage('en')} className="px-6 py-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 text-xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">English</button>
            <button onClick={() => setSelectedLanguage('ta')} className="px-6 py-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-pink-500 hover:bg-slate-800 text-xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1">தமிழ்</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${thm.bg} ${thm.textMain} selection:bg-purple-500 overflow-x-hidden transition-colors duration-500`} style={{ fontFamily: "'Noto Sans Sinhala', sans-serif" }}>
      
      {/* --- Navbar --- */}
      <nav className={`fixed w-full z-50 transition-all ${isScrolled ? `${thm.bgNav} backdrop-blur-md py-3 shadow-xl` : `${thm.bg} py-5`}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-500 tracking-tighter">Nadee_Editor</div>
          <div className="hidden lg:flex gap-8 items-center">
            {['home', 'about', 'services', 'portfolio', 'contact'].map(sec => (
              <button key={sec} onClick={() => scrollToSection(sec)} className={`text-sm font-medium ${thm.textMuted} hover:text-purple-500 transition-colors capitalize cursor-pointer`}>{t('nav' + sec.charAt(0).toUpperCase() + sec.slice(1))}</button>
            ))}
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 ${thm.iconBtn} rounded-full transition-all cursor-pointer`}>
              {isDarkMode ? <Sun size={18} className="text-yellow-400"/> : <Moon size={18} className="text-slate-600"/>}
            </button>
            <button onClick={() => setSelectedLanguage(null)} className={`p-2 ${thm.iconBtn} rounded-full transition-all cursor-pointer`}><Globe2 size={18}/></button>
          </div>
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className={`lg:hidden ${thm.bgSec} border-t ${thm.border} p-6 space-y-4 absolute top-full left-0 w-full shadow-2xl animate-in slide-in-from-top duration-300`}>
            {['home', 'about', 'services', 'portfolio', 'contact'].map(sec => (
              <button key={sec} onClick={() => scrollToSection(sec)} className={`block w-full text-left text-lg font-medium py-3 border-b ${thm.border} cursor-pointer`}>{t('nav' + sec.charAt(0).toUpperCase() + sec.slice(1))}</button>
            ))}
            <button onClick={() => { setMobileMenuOpen(false); setSelectedLanguage(null); }} className="flex items-center gap-3 text-purple-500 font-bold cursor-pointer py-3"><Globe2 size={20}/> Change Language</button>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${thm.bgSec} border ${thm.border} ${thm.textMuted} text-sm font-bold`}>
              <User size={16} className="text-purple-500"/> {t('heroAvailable')}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className={`text-2xl block ${thm.textMuted} font-medium mb-2`}>{t('heroGreeting')}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">Creative Editor & Visual Designer</span>
            </h1>
            <p className={`${thm.textMuted} text-lg leading-relaxed max-w-xl`}>{t('heroDesc')}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <button onClick={() => scrollToSection('portfolio')} className={`w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 ${isDarkMode ? 'bg-white text-slate-950' : 'bg-slate-900 text-white'} rounded-2xl font-bold hover:scale-105 transition-all shadow-xl cursor-pointer text-center`}>{t('btnViewWork')}</button>
              <button onClick={() => scrollToSection('contact')} className={`w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border ${thm.border} ${thm.bgSec} rounded-2xl font-bold hover:border-purple-500 transition-all cursor-pointer text-center`}>{t('btnContact')}</button>
              <a href="/Nadeesha_Video_Editor_aCV.pdf" download="Nadeesha_Video_Editor_CV.pdf" className={`w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-purple-600/50 text-purple-600 ${isDarkMode ? 'bg-purple-600/10' : 'bg-purple-50'} rounded-2xl font-bold hover:bg-purple-600 hover:text-white transition-all cursor-pointer text-center flex items-center justify-center gap-2`}>
                <Download size={20}/> {t('btnDownloadCV')}
              </a>
            </div>
          </div>
          
          {/* Profile Image & 4 Boxes Combined */}
          <div className="relative mt-12 lg:mt-0 w-full max-w-md mx-auto lg:ml-auto">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[3rem] blur-xl opacity-20 transition duration-1000"></div>
            
            {/* Profile Image */}
            <div className={`relative ${thm.bgSec} border ${thm.border} p-4 sm:p-6 rounded-[40px] rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl z-10`}>
               <img alt="" src="/profile.jpg" className="w-full aspect-[4/5] object-cover rounded-[30px]" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"; }} />
            </div>

            {/* 4 Boxes Grid Overlapping */}
            <div className={`relative sm:absolute sm:-bottom-10 sm:-left-10 lg:-left-16 mt-6 sm:mt-0 ${thm.bgSec} border ${thm.border} p-4 sm:p-5 rounded-3xl rotate-[-4deg] hover:rotate-0 transition-transform duration-500 shadow-2xl z-20`}>
               <div className="grid grid-cols-2 gap-3 sm:gap-4">
                 <div className={`w-16 h-16 sm:w-20 sm:h-20 ${thm.bg} rounded-2xl flex items-center justify-center border ${thm.border} hover:scale-105 transition-transform cursor-pointer`}>
                   <Video className="text-purple-500 w-8 h-8 sm:w-10 sm:h-10"/>
                 </div>
                 <div className={`w-16 h-16 sm:w-20 sm:h-20 ${thm.bg} rounded-2xl flex items-center justify-center border ${thm.border} hover:scale-105 transition-transform cursor-pointer`}>
                   <Palette className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10"/>
                 </div>
                 <div className={`w-16 h-16 sm:w-20 sm:h-20 ${thm.bg} rounded-2xl flex items-center justify-center border ${thm.border} hover:scale-105 transition-transform cursor-pointer`}>
                   <Camera className="text-pink-500 w-8 h-8 sm:w-10 sm:h-10"/>
                 </div>
                 <div className={`w-16 h-16 sm:w-20 sm:h-20 ${thm.bg} rounded-2xl flex items-center justify-center border ${thm.border} hover:scale-105 transition-transform cursor-pointer`}>
                   <Layers className="text-emerald-500 w-8 h-8 sm:w-10 sm:h-10"/>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className={`py-24 ${isDarkMode ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            <h2 className={`text-4xl font-bold ${thm.textHead}`}>{t('aboutTitle1')}<span className="text-purple-500">{t('aboutTitle2')}</span></h2>
            <div className={`space-y-6 ${thm.textMuted} text-lg leading-relaxed`}>
              <p>{t('aboutP1')}</p>
              <p>{t('aboutP2')}</p>
            </div>
            <div className="pt-8 border-t border-slate-800">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Layers className="text-purple-500"/> {t('skillsTitle')}</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {softwareSkills.map((skill, i) => (
                  <div key={i} className={`${thm.bgSec} p-4 rounded-xl border ${thm.border}`}>
                    <div className="text-sm font-bold mb-2">{skill.name}</div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${skill.color}`} style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Ventures Section --- */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${thm.textHead}`}>{t('servicesTitle1')} <span className="text-emerald-500">{t('servicesTitle2')}</span></h2>
            <p className={`${thm.textMuted} max-w-2xl mx-auto`}>{t('servicesSub')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {venturesList.map((v, i) => (
              <div key={i} className={`${thm.bgSec} border ${thm.border} p-8 rounded-[32px] hover:border-emerald-500/50 transition-all group`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${v.isReady ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-800 text-slate-500'}`}>
                  <v.icon size={28}/>
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title[selectedLanguage]}</h3>
                <ul className="space-y-3 mb-8">
                  {v.features[selectedLanguage].map((f, fi) => (
                    <li key={fi} className={`flex items-center gap-2 text-sm ${thm.textMuted}`}><CheckCircle size={16} className="text-emerald-500"/> {f}</li>
                  ))}
                </ul>
                {v.link !== "#" ? (
                  <a href={v.link} target="_blank" rel="noreferrer" className="block w-full py-4 rounded-xl font-bold text-sm text-center transition-all bg-emerald-600 text-white hover:bg-emerald-700">
                    {v.status[selectedLanguage]}
                  </a>
                ) : (
                  <button disabled={!v.isReady} className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${v.isReady ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}>
                    {v.status[selectedLanguage]}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Portfolio Section --- */}
      <section id="portfolio" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">{t('portfolioTitle1')} <span className="text-pink-500">{t('portfolioTitle2')}</span></h2>
            <p className="text-slate-400 max-w-xl">{t('portfolioSub')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {youtubeItems.map(item => (
              <a key={item.id} href={`https://www.youtube.com/watch?v=${item.videoId}`} target="_blank" rel="noreferrer" className="group block">
                <div className="aspect-video rounded-[24px] overflow-hidden relative mb-4 border border-slate-800">
                  <img alt="" src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.src = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`; }}/>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"><PlayCircle size={48} className="text-white"/></div>
                </div>
                <h3 className="font-bold text-white group-hover:text-pink-500 transition-colors">{item.title}</h3>
              </a>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-20 mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">{t('fbTitle1')} <span className="text-blue-500">{t('fbTitle2')}</span></h2>
            <p className="text-slate-400 mb-10">{t('fbSub')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {fbVideos1.map((item, idx) => (
                <a key={`fb1-${idx}`} href={item.link} target="_blank" rel="noreferrer" className={`group relative w-full max-w-[267px] aspect-[9/16] ${thm.bgSec} border ${thm.border} rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300 flex items-center justify-center bg-black cursor-pointer`}>
                  <img alt="" src={item.image} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-700" />
                  <PlayCircle size={64} className="text-white relative z-10 opacity-90 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]" />
                  <div className="absolute bottom-4 left-4 right-4 text-center z-10">
                    <h4 className="text-white font-bold text-sm drop-shadow-md">{item.title}</h4>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-20 mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">{t('casualTitle1')} <span className="text-purple-500">{t('casualTitle2')}</span></h2>
            <p className="text-slate-400 mb-10">{t('casualSub')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {fbVideos2.map((item, idx) => (
                <a key={`fb2-${idx}`} href={item.link} target="_blank" rel="noreferrer" className={`group relative w-full max-w-[267px] aspect-[9/16] ${thm.bgSec} border ${thm.border} rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300 flex items-center justify-center bg-black cursor-pointer`}>
                  <img alt="" src={item.image} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-700" />
                  <PlayCircle size={64} className="text-white relative z-10 opacity-90 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]" />
                  <div className="absolute bottom-4 left-4 right-4 text-center z-10">
                    <h4 className="text-white font-bold text-sm drop-shadow-md">{item.title}</h4>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-20 mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">{t('driveTitle1')} <span className="text-orange-500">{t('driveTitle2')}</span></h2>
            <p className="text-slate-400 mb-10">{t('driveSub')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {driveItems.map(item => (
                <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="group relative aspect-video rounded-2xl overflow-hidden border border-slate-800">
                  <img alt="" src={item.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-all absolute inset-0"/>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                    <div className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">{item.category}</div>
                    <div className="text-white font-bold text-lg drop-shadow-md">{item.title}</div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all"><ExternalLink size={20} className="text-white"/></div>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-20 mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white flex items-center gap-3"><Music className="text-yellow-400"/> AI Sangeetha <span className="text-yellow-500">(AI Music)</span></h2>
            <p className="text-slate-400 mb-10">AI Audio Srujanatmaka (Creative AI Audio Generation).</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {aiMusicItems.map(item => (
                <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="group relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center cursor-pointer">
                  <img alt="" src={item.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-all absolute inset-0" />
                  <PlayCircle size={60} className="text-yellow-400 opacity-80 group-hover:opacity-100 transition-all z-10 relative group-hover:scale-110 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                    <div className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest drop-shadow-md">{item.category}</div>
                    <div className="text-white font-bold text-lg drop-shadow-md">{item.title}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-20 mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">{t('tiktokTitle1')} <span className="text-purple-500">{t('tiktokTitle2')}</span></h2>
            <p className="text-slate-400 mb-10">{t('tiktokSub')}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {tiktokItems.map(item => (
                <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all">
                  <div className="aspect-[9/16] relative overflow-hidden bg-black flex items-center justify-center">
                    <img alt="" src={item.image} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"/>
                    <svg viewBox="0 0 448 512" className="w-12 h-12 text-white relative z-10 opacity-80 group-hover:text-purple-500 group-hover:opacity-100 transition-all" fill="currentColor"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-purple-500 text-[10px] font-bold uppercase mb-1">{item.category}</div>
                    <div className="text-white text-sm font-bold">{item.title}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-20 mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">{t('graphicsTitle1')} <span className="text-blue-500">{t('graphicsTitle2')}</span></h2>
            <p className="text-slate-400 mb-10">{t('graphicsSub')}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {graphicItems.map(item => (
                <div key={item.id} className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-800">
                  <img alt="" src={item.image} className="w-full h-full object-cover opacity-90 group-hover:opacity-40 transition-all"/>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">{item.category}</div>
                    <div className="text-white font-bold">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-20">
            <h2 className="text-3xl font-bold mb-4 text-white">{t('photoTitle1')} <span className="text-emerald-500">{t('photoTitle2')}</span></h2>
            <p className="text-slate-400 mb-10">{t('photoSub')}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {photographyItems.map(item => (
                <div key={item.id} className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-800">
                  <img alt="" src={item.image} className="w-full h-full object-cover opacity-90 group-hover:opacity-40 transition-all"/>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">{item.category}</div>
                    <div className="text-white font-bold">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Samparka Vibhaga (Contact Section) --- */}
      <section id="contact" className={`py-16 sm:py-24 ${isDarkMode ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className={`${thm.bgSec} border ${thm.border} rounded-3xl sm:rounded-[40px] overflow-hidden shadow-2xl grid lg:grid-cols-2`}>
            <div className="p-6 sm:p-8 lg:p-12 space-y-8 lg:space-y-10">
              <h2 className="text-3xl sm:text-4xl font-bold">{t('contactTitle1')} <span className="text-purple-500">{t('contactTitle2')}</span></h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 min-w-[3rem] bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all"><Phone size={20}/></div>
                  <div className="overflow-hidden">
                    <div className={`text-[10px] ${thm.textMuted} font-bold uppercase tracking-widest`}>{t('phoneLbl')}</div>
                    <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="font-bold text-base sm:text-lg hover:text-purple-500 block break-words">{CONTACT_INFO.phone}</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 min-w-[3rem] bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all"><Mail size={20}/></div>
                  <div className="overflow-hidden">
                    <div className={`text-[10px] ${thm.textMuted} font-bold uppercase tracking-widest`}>{t('emailLbl')}</div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="font-bold text-base sm:text-lg hover:text-blue-500 block break-words">{CONTACT_INFO.email}</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 min-w-[3rem] bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all"><MapPin size={20}/></div>
                  <div className="overflow-hidden">
                    <div className={`text-[10px] ${thm.textMuted} font-bold uppercase tracking-widest`}>{t('locLbl')}</div>
                    <div className="font-bold text-base sm:text-lg break-words">{CONTACT_INFO.address}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className={`w-10 h-10 sm:w-12 sm:h-12 ${thm.iconBtn} rounded-xl flex items-center justify-center transition-all hover:bg-blue-600 hover:text-white`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href={CONTACT_INFO.youtube} target="_blank" rel="noreferrer" className={`w-10 h-10 sm:w-12 sm:h-12 ${thm.iconBtn} rounded-xl flex items-center justify-center transition-all hover:bg-red-600 hover:text-white`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                </a>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className={`w-10 h-10 sm:w-12 sm:h-12 ${thm.iconBtn} rounded-xl flex items-center justify-center transition-all hover:bg-blue-500 hover:text-white`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href={CONTACT_INFO.tiktok} target="_blank" rel="noreferrer" className={`w-10 h-10 sm:w-12 sm:h-12 ${thm.iconBtn} rounded-xl flex items-center justify-center transition-all hover:bg-pink-600 hover:text-white`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </a>
              </div>
            </div>
            <form className="p-6 sm:p-8 lg:p-12 bg-slate-800/20 space-y-5 sm:space-y-6" onSubmit={handleFormSubmit}>
               <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder={t('formName')} className={`w-full ${thm.inputBg} p-3 sm:p-4 rounded-xl outline-none focus:border-purple-500 border transition-all`} required />
               <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={t('formEmail')} className={`w-full ${thm.inputBg} p-3 sm:p-4 rounded-xl outline-none focus:border-purple-500 border transition-all`} required />
               <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder={t('formMsg')} className={`w-full ${thm.inputBg} p-3 sm:p-4 rounded-xl h-24 sm:h-32 outline-none focus:border-purple-500 border transition-all`} required></textarea>
               <button type="submit" className="w-full py-3 sm:py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 shadow-xl shadow-purple-900/20">{t('formSend')}</button>
            </form>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className={`py-12 border-t ${thm.border} text-center px-6`}>
        <div className="text-xl font-bold mb-4 tracking-tighter">Nadee_Editor</div>
        <p className={`text-sm ${thm.textMuted}`}>© 2026 K.D Nadisha Malith Mihiranga. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;