// إظهار/إخفاء قائمة الجوال
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
 
  // إضافة/إزالة كلاس عند التمرير لتغيير خلفية النافبار
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // تفعيل الحركة عند ظهور العناصر على الشاشة
  const faders = document.querySelectorAll('.fade-in');
  const options = { threshold: 0.1 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    });
  }, options);
  faders.forEach(fader => appearOnScroll.observe(fader));
  
  // تحريك نص الهيدر عند فتح الصفحة
  window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-content h1');
    const heroText = document.querySelector('.hero-content p');
    const heroBtn = document.querySelector('.btn-hero');
  
    setTimeout(() => { heroTitle.classList.add('animate-up'); }, 300);
    setTimeout(() => { heroText.classList.add('animate-up'); }, 600);
    setTimeout(() => { heroBtn.classList.add('animate-up'); }, 900);
  });
  
  // التمرير إلى قسم التواصل/الحجز عند الضغط على زر الحجز
  function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  // دالة تبديل الوضع (الوضع الليلي/الفاتح)
  function toggleDarkMode() {
    const btn = document.getElementById('dark-mode-toggle');
    if (document.body.classList.contains('light-mode')) {
      // نحن في الوضع الفاتح، نريد الرجوع للوضع الداكن
      document.body.classList.remove('light-mode');
      btn.innerText = "الوضع النهاري";  // يظهر عندما يكون الموقع في الوضع الداكن
    } else {
      // نحن في الوضع الداكن، ننتقل إلى الوضع الفاتح
      document.body.classList.add('light-mode');
      btn.innerText = "الوضع الليلي";  // يظهر عندما يكون الموقع في الوضع الفاتح
    }
  }
  /* ============================
     الترجمة – دعم تعدد اللغات
  =============================== */
  
  // كائن التراجم لجميع اللغات المطلوبة
  const translations = {
    ar: {
      navHome: "الرئيسية",
      navAbout: "عن الشقق",
      navApartments: "أنواع الشقق",
      navServices: "الخدمات",
      navGallery: "المعرض",
      navContact: "تواصل معنا",
      logo: "شقق أبراج الخير",
    
      heroTitle: "مرحبًا بكم في شقق أبراج الخير",
      heroSubtitle: "استمتع بأرقى معايير الفخامة والراحة في قلب عسير",
      heroBtn: "اكتشف شققنا",
      aboutTitle: "نبذه عن شقق أبراج الخير",
      aboutText: "نقدم تجربة سكنية متكاملة، حيث تمتزج الأناقة مع الحداثة. تتميز شقق أبراج الخير بموقع استراتيجي في وسط المدينة، بالإضافة إلى خدمات عالية الجودة تجعل إقامتكم أكثر رفاهية وراحة.",
      apartmentsTitle: "أنواع الشقق المتوفرة",
      apartment1Title: "شقة فاخرة (Luxury Suite)",
      apartment1Text: "تصميم عصري، إطلالة بانورامية على المدينة، ومساحات واسعة تناسب الأفراد أو الأزواج الباحثين عن الرفاهية.",
      apartment2Title: "شقة عائلية (Family Apartment)",
      apartment2Text: "مصممة خصيصًا للعائلات، تضم أكثر من غرفة نوم ومساحات للمعيشة والاسترخاء.",
      bookNow: "احجز الآن",
      servicesTitle: "الخدمات والمرافق",
      service1Title: "تنظيف غرف",
      service1Text: "خدمه مميزه تتيح تنظيف الغرف عندما تشاء.",
      service2Title: "واي فاي مجانًا",
      service2Text: "انترنت مجانًا على مدار الساعه",
      service3Title: "اطلالات ساحرة",
      service3Text: "من قلب ابها حيث الجمال والاصاله",
      service4Title: "مواقف سيارات",
      service4Text: "مواقف آمنة ومجهزة لتسهيل تنقل النزلاء.",
      galleryTitle: "المعرض",
      contactTitle: "تواصل معنا",
      contactText: "للاستفسارات أو الملاحظات، يرجى تعبئة النموذج التالي:",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formPhone: "رقم الجوال",
      formMessage: "رسالتك أو ملاحظاتك",
      formBtn: "إرسال",
      successMsg: "تم ارسال طلبك بنجاح",
      footerLogo: "شقق أبراج الخير",
      footerRights: "© 2025 جميع الحقوق محفوظة"
    },
    en: {
      navHome: "Home",
      navAbout: "About",
      navApartments: "Apartments",
      navServices: "Services",
      navGallery: "Gallery",
      navContact: "Contact",
      logo: "Al-Khair Towers Apartments",
      darkMode: "Dark Mode",
      heroTitle: "Welcome to Al-Khair Towers Apartments",
      heroSubtitle: "Experience luxury and comfort in the heart of Asir",
      heroBtn: "Discover Our Apartments",
      aboutTitle: "About Al-Khair Towers Apartments",
      aboutText: "We offer a complete residential experience where elegance meets modernity. Our apartments are strategically located in the city center, along with high-quality services for a luxurious and comfortable stay.",
      apartmentsTitle: "Available Apartment Types",
      apartment1Title: "Luxury Suite",
      apartment1Text: "Modern design, panoramic city views, and spacious areas perfect for individuals or couples seeking luxury.",
      apartment2Title: "Family Apartment",
      apartment2Text: "Designed specifically for families, featuring multiple bedrooms and spacious living areas.",
      bookNow: "Book Now",
      servicesTitle: "Services & Amenities",
      service1Title: "Swimming Pool",
      service1Text: "A luxurious swimming pool for guests to enjoy and relax.",
      service2Title: "In-house Restaurant",
      service2Text: "A diverse menu featuring local and international dishes.",
      service3Title: "Gym",
      service3Text: "Modern equipment and exercises catering to various fitness needs.",
      service4Title: "Parking",
      service4Text: "Secure and well-equipped parking for guests' convenience.",
      galleryTitle: "Gallery",
      contactTitle: "Contact Us or Book Now",
      contactText: "For inquiries or reservations, please fill out the form below:",
      formName: "Full Name",
      formEmail: "Email",
      formPhone: "Phone Number",
      formMessage: "Your Message or Comments",
      formBtn: "Submit",
      successMsg: "Your request has been sent successfully",
      footerLogo: "Al-Khair Towers Apartments",
      footerRights: "© 2025 All Rights Reserved"
    },
    zh: {
      navHome: "首页",
      navAbout: "关于公寓",
      navApartments: "公寓类型",
      navServices: "服务",
      navGallery: "画廊",
      navContact: "联系我们",
      logo: "阿尔-凯尔塔公寓",
      darkMode: "夜间模式",
      heroTitle: "欢迎来到阿尔-凯尔塔公寓",
      heroSubtitle: "在阿西尔的心脏地带体验奢华与舒适",
      heroBtn: "探索我们的公寓",
      aboutTitle: "关于阿尔-凯尔塔公寓",
      aboutText: "我们提供完整的居住体验，优雅与现代交融。我们的公寓位于市中心，提供高品质的服务，确保您的入住奢华舒适。",
      apartmentsTitle: "可用的公寓类型",
      apartment1Title: "豪华套房",
      apartment1Text: "现代设计，全景城市景观，宽敞空间适合追求奢华的个人或夫妻。",
      apartment2Title: "家庭公寓",
      apartment2Text: "专为家庭设计，多卧室及宽敞生活区供您放松休息。",
      bookNow: "立即预订",
      servicesTitle: "服务与设施",
      service1Title: "游泳池",
      service1Text: "专为客人打造的豪华泳池，供您享受与放松。",
      service2Title: "内部餐厅",
      service2Text: "提供本地及国际美食的多样菜单。",
      service3Title: "健身房",
      service3Text: "现代设备与锻炼满足多种健身需求。",
      service4Title: "停车场",
      service4Text: "安全、设施齐全的停车场为客人提供便利。",
      galleryTitle: "画廊",
      contactTitle: "联系我们或立即预订",
      contactText: "如有咨询或预订，请填写下列表格：",
      formName: "全名",
      formEmail: "电子邮件",
      formPhone: "电话号码",
      formMessage: "您的留言或评论",
      formBtn: "提交",
      successMsg: "您的请求已成功发送",
      footerLogo: "阿尔-凯尔塔公寓",
      footerRights: "© 2025 保留所有权利"
    },
    am: {
      navHome: "መነሻ",
      navAbout: "ስለ አፓርታማዎች",
      navApartments: "የአፓርታማ አይነቶች",
      navServices: "አገልግሎቶች",
      navGallery: "ጋለሪ",
      navContact: "አግኙን",
      logo: "የአል-ክሃይር ታውር አፓርታማዎች",
      darkMode: "የሌሊት ሁኔታ",
      heroTitle: "ወደ አል-ክሃይር ታውር አፓርታማዎች እንኳን ደህና መጡ",
      heroSubtitle: "በአሲር ልብ ውስጥ የሚገኝ ብርቱ እና የእረፍት ሁኔታ ይሞክሩ",
      heroBtn: "አፓርታማችንን ይፈልጉ",
      aboutTitle: "ስለ አል-ክሃይር ታውር አፓርታማዎች",
      aboutText: "ተደራሽ የመኖር ተሞክሮ፣ አርክተን ከዘመናዊ ስርዓት ጋር ይያዙ። አፓርታማቻችን በከተማ ማዕከል ያለ ሲሆን በከፍተኛ ጥራት አገልግሎቶች ይሰጣል።",
      apartmentsTitle: "የሚገኙ የአፓርታማ አይነቶች",
      apartment1Title: "ሎክስ ሱይት",
      apartment1Text: "ዘመናዊ ንድፍ፣ የከተማ ሙሉ እይታ እና በርካታ ስፋት።",
      apartment2Title: "የቤተሰብ አፓርታማ",
      apartment2Text: "በቤተሰብ የሚሰራ፣ ብዙ ክፍሎች፣ ለእረፍት የተዘጋጀ።",
      bookNow: "አሁን ያዘዝ",
      servicesTitle: "አገልግሎቶች እና ስርዓቶች",
      service1Title: "የመዋኛ ግምባር",
      service1Text: "ለእርስዎ የተሰጠ የመዋኛ ግምባር።",
      service2Title: "የውስጥ ምግብ ቤት",
      service2Text: "የአካባቢና የዓለም ምግብ ዝርዝር።",
      service3Title: "የስፖርት ስፖርት ቤት",
      service3Text: "ዘመናዊ መሣሪያዎች እና ለስፖርት የተሰጠ ልምድ።",
      service4Title: "መኪና ማቆሚያ",
      service4Text: "የደህንነት እና የተሟላ መኪና ማቆሚያ።",
      galleryTitle: "ጋለሪ",
      contactTitle: "አግኙን ወይም አሁን ይደውሉ",
      contactText: "ለጥያቄዎች ወይም ለቦክ እባክዎ ቅጽ ይሙሉ:",
      formName: "ሙሉ ስም",
      formEmail: "ኢሜይል",
      formPhone: "ስልክ ቁጥር",
      formMessage: "የመልዕክትዎ ወይም አስተያየት",
      formBtn: "ላክ",
      successMsg: "ጥያቄዎ በተሳካ ሁኔታ ተልኳል",
      footerLogo: "የአል-ክሃይር ታውር አፓርታማዎች",
      footerRights: "© 2025 መብት የተጠበቀ"
    },
    hi: {
      navHome: "होम",
      navAbout: "हमारे बारे में",
      navApartments: "अपार्टमेंट्स",
      navServices: "सेवाएँ",
      navGallery: "गैलरी",
      navContact: "संपर्क करें",
      logo: "अल-खैर टावर्स अपार्टमेंट्स",
      darkMode: "डार्क मोड",
      heroTitle: "अल-खैर टावर्स अपार्टमेंट्स में आपका स्वागत है",
      heroSubtitle: "असीर के दिल में लक्ज़री और आराम का अनुभव करें",
      heroBtn: "हमारे अपार्टमेंट्स देखें",
      aboutTitle: "अल-खैर टावर्स अपार्टमेंट्स के बारे में",
      aboutText: "हम एक पूर्ण आवासीय अनुभव प्रदान करते हैं जहाँ शान और आधुनिकता का संगम होता है। हमारे अपार्टमेंट्स शहर के केंद्र में रणनीतिक रूप से स्थित हैं, और उच्च गुणवत्ता वाली सेवाओं के साथ आपके रहने को शानदार और आरामदायक बनाते हैं।",
      apartmentsTitle: "उपलब्ध अपार्टमेंट प्रकार",
      apartment1Title: "लक्ज़री सुइट",
      apartment1Text: "आधुनिक डिज़ाइन, शहर के पैनोरमिक दृश्य और विस्तृत क्षेत्र जो लक्ज़री की खोज में व्यक्तियों या जोड़ों के लिए उपयुक्त हैं।",
      apartment2Title: "फैमिली अपार्टमेंट",
      apartment2Text: "खास परिवारों के लिए डिज़ाइन किया गया, जिसमें कई बेडरूम और आराम के लिए पर्याप्त क्षेत्र हैं।",
      bookNow: "अभी बुक करें",
      servicesTitle: "सेवाएँ और सुविधाएँ",
      service1Title: "स्विमिंग पूल",
      service1Text: "मेहमानों के लिए शानदार स्विमिंग पूल, जहां आप आनंद और आराम पा सकते हैं।",
      service2Title: "इन-हाउस रेस्टोरेंट",
      service2Text: "स्थानीय और अंतरराष्ट्रीय व्यंजनों की विविध मेनू।",
      service3Title: "जिम",
      service3Text: "आधुनिक उपकरण और विभिन्न फिटनेस आवश्यकताओं को पूरा करने वाले व्यायाम।",
      service4Title: "पार्किंग",
      service4Text: "सुरक्षित और सुविधाजनक पार्किंग, जो मेहमानों की सुविधा के लिए उपयुक्त है।",
      galleryTitle: "गैलरी",
      contactTitle: "संपर्क करें या अभी बुक करें",
      contactText: "सवाल या बुकिंग के लिए, कृपया नीचे दिए गए फॉर्म को भरें:",
      formName: "पूरा नाम",
      formEmail: "ईमेल",
      formPhone: "फ़ोन नंबर",
      formMessage: "आपका संदेश या टिप्पणी",
      formBtn: "सबमिट",
      successMsg: "आपका अनुरोध सफलतापूर्वक भेज दिया गया है",
      footerLogo: "अल-खैर टावर्स अपार्टमेंट्स",
      footerRights: "© 2025 सभी अधिकार सुरक्षित"
    },
    ja: {
      navHome: "ホーム",
      navAbout: "私たちに関しては",
      navApartments: "アパートメント",
      navServices: "サービス",
      navGallery: "ギャラリー",
      navContact: "お問い合わせ",
      logo: "アル・カイルタワーズアパートメント",
      darkMode: "ダークモード",
      heroTitle: "アル・カイルタワーズアパートメントへようこそ",
      heroSubtitle: "アシールの中心でラグジュアリーと快適さを体験してください",
      heroBtn: "アパートメントを探す",
      aboutTitle: "アル・カイルタワーズアパートメントについて",
      aboutText: "私たちはエレガンスとモダンが融合する完全な居住体験を提供します。私たちのアパートメントは市内中心部に戦略的に位置し、高品質のサービスであなたの滞在を贅沢かつ快適にします。",
      apartmentsTitle: "利用可能なアパートメントタイプ",
      apartment1Title: "ラグジュアリースイート",
      apartment1Text: "モダンなデザイン、パノラマな都市の眺め、個人またはカップルに最適な広々とした空間。",
      apartment2Title: "ファミリーアパートメント",
      apartment2Text: "家族向けに設計され、複数の寝室とリビングスペースを備えています。",
      bookNow: "今すぐ予約",
      servicesTitle: "サービスとアメニティ",
      service1Title: "スイミングプール",
      service1Text: "ゲストがリラックスして楽しむための豪華なプール。",
      service2Title: "インハウスレストラン",
      service2Text: "地元と国際料理を取り入れた多様なメニュー。",
      service3Title: "ジム",
      service3Text: "最新の設備と様々なフィットネスニーズに応えるエクササイズ。",
      service4Title: "駐車場",
      service4Text: "ゲストの便宜を図るための安全で整った駐車場。",
      galleryTitle: "ギャラリー",
      contactTitle: "お問い合わせまたは今すぐ予約",
      contactText: "お問い合わせまたは予約のため、以下のフォームにご記入ください：",
      formName: "氏名",
      formEmail: "メールアドレス",
      formPhone: "電話番号",
      formMessage: "あなたのメッセージまたはコメント",
      formBtn: "送信",
      successMsg: "あなたのリクエストは正常に送信されました",
      footerLogo: "アル・カイルタワーズアパートメント",
      footerRights: "© 2025 すべての権利を保有"
    },
    ko: {
      navHome: "홈",
      navAbout: "소개",
      navApartments: "아파트",
      navServices: "서비스",
      navGallery: "갤러리",
      navContact: "문의하기",
      logo: "알카이르 타워 아파트먼트",
      darkMode: "다크 모드",
      heroTitle: "알카이르 타워 아파트먼트에 오신 것을 환영합니다",
      heroSubtitle: "아시르의 중심에서 럭셔리와 편안함을 경험하세요",
      heroBtn: "우리 아파트 보기",
      aboutTitle: "알카이르 타워 아파트먼트 소개",
      aboutText: "우리는 우아함과 현대성이 결합된 완벽한 주거 경험을 제공합니다. 우리 아파트는 도심 중심에 전략적으로 위치해 있으며, 고품질 서비스로 당신의 숙박을 럭셔리하고 편안하게 만들어 드립니다.",
      apartmentsTitle: "사용 가능한 아파트 유형",
      apartment1Title: "럭셔리 스위트",
      apartment1Text: "모던한 디자인, 파노라마 시티뷰, 럭셔리를 찾는 개인이나 커플에게 적합한 넓은 공간.",
      apartment2Title: "패밀리 아파트",
      apartment2Text: "가족을 위해 설계되었으며, 여러 침실과 넓은 거실 공간을 갖추고 있습니다.",
      bookNow: "지금 예약",
      servicesTitle: "서비스 및 편의시설",
      service1Title: "수영장",
      service1Text: "손님들이 즐기고 휴식을 취할 수 있는 럭셔리한 수영장.",
      service2Title: "내부 레스토랑",
      service2Text: "현지 및 국제 요리를 제공하는 다양한 메뉴.",
      service3Title: "체육관",
      service3Text: "최신 장비와 다양한 피트니스 요구에 맞춘 운동.",
      service4Title: "주차장",
      service4Text: "손님의 편의를 위한 안전하고 잘 갖춰진 주차장.",
      galleryTitle: "갤러리",
      contactTitle: "문의하기 또는 예약하기",
      contactText: "문의나 예약을 위해 아래 양식을 작성해 주세요:",
      formName: "이름",
      formEmail: "이메일",
      formPhone: "전화번호",
      formMessage: "메시지 또는 의견",
      formBtn: "제출",
      successMsg: "요청이 성공적으로 전송되었습니다",
      footerLogo: "알카이르 타워 아파트먼트",
      footerRights: "© 2025 모든 권리 보유"
    },
    fr: {
      navHome: "Accueil",
      navAbout: "À propos",
      navApartments: "Appartements",
      navServices: "Services",
      navGallery: "Galerie",
      navContact: "Contact",
      logo: "Appartements des Tours Al-Khair",
      darkMode: "Mode Sombre",
      heroTitle: "Bienvenue aux Appartements des Tours Al-Khair",
      heroSubtitle: "Découvrez le luxe et le confort au cœur d'Asir",
      heroBtn: "Découvrez nos Appartements",
      aboutTitle: "À propos des Appartements des Tours Al-Khair",
      aboutText: "Nous offrons une expérience résidentielle complète où l'élégance rencontre la modernité. Nos appartements sont stratégiquement situés en centre-ville, avec des services haut de gamme pour un séjour luxueux et confortable.",
      apartmentsTitle: "Types d'Appartements Disponibles",
      apartment1Title: "Suite de Luxe",
      apartment1Text: "Design moderne, vues panoramiques sur la ville et espaces généreux pour les personnes ou couples en quête de luxe.",
      apartment2Title: "Appartement Familial",
      apartment2Text: "Conçu spécialement pour les familles, avec plusieurs chambres et de grands espaces de vie.",
      bookNow: "Réserver Maintenant",
      servicesTitle: "Services et Commodités",
      service1Title: "Piscine",
      service1Text: "Une piscine luxueuse pour que les clients puissent se détendre et profiter.",
      service2Title: "Restaurant Interne",
      service2Text: "Un menu varié avec des plats locaux et internationaux.",
      service3Title: "Salle de Sport",
      service3Text: "Des équipements modernes et des exercices répondant aux besoins variés.",
      service4Title: "Parking",
      service4Text: "Un parking sécurisé et bien équipé pour la commodité des clients.",
      galleryTitle: "Galerie",
      contactTitle: "Contactez-nous ou Réservez Maintenant",
      contactText: "Pour toute demande ou réservation, veuillez remplir le formulaire ci-dessous :",
      formName: "Nom Complet",
      formEmail: "E-mail",
      formPhone: "Numéro de Téléphone",
      formMessage: "Votre Message ou Commentaires",
      formBtn: "Envoyer",
      successMsg: "Votre demande a été envoyée avec succès",
      footerLogo: "Appartements des Tours Al-Khair",
      footerRights: "© 2025 Tous droits réservés"
    },
    es: {
      navHome: "Inicio",
      navAbout: "Acerca de",
      navApartments: "Apartamentos",
      navServices: "Servicios",
      navGallery: "Galería",
      navContact: "Contacto",
      logo: "Apartamentos de las Torres Al-Khair",
      darkMode: "Modo Oscuro",
      heroTitle: "Bienvenido a los Apartamentos de las Torres Al-Khair",
      heroSubtitle: "Experimenta el lujo y la comodidad en el corazón de Asir",
      heroBtn: "Descubre Nuestros Apartamentos",
      aboutTitle: "Acerca de los Apartamentos de las Torres Al-Khair",
      aboutText: "Ofrecemos una experiencia residencial completa donde la elegancia se encuentra con la modernidad. Nuestros apartamentos están estratégicamente ubicados en el centro de la ciudad, junto con servicios de alta calidad que garantizan una estancia lujosa y cómoda.",
      apartmentsTitle: "Tipos de Apartamentos Disponibles",
      apartment1Title: "Suite de Lujo",
      apartment1Text: "Diseño moderno, vistas panorámicas de la ciudad y espacios amplios perfectos para individuos o parejas en busca de lujo.",
      apartment2Title: "Apartamento Familiar",
      apartment2Text: "Diseñado especialmente para familias, con múltiples dormitorios y áreas amplias para relajarse.",
      bookNow: "Reservar Ahora",
      servicesTitle: "Servicios y Comodidades",
      service1Title: "Piscina",
      service1Text: "Una piscina lujosa para que los huéspedes disfruten y se relajen.",
      service2Title: "Restaurante Interno",
      service2Text: "Un menú diverso que incluye platos locales e internacionales.",
      service3Title: "Gimnasio",
      service3Text: "Equipos modernos y ejercicios que satisfacen diversas necesidades de fitness.",
      service4Title: "Estacionamiento",
      service4Text: "Estacionamiento seguro y bien equipado para la comodidad de los huéspedes.",
      galleryTitle: "Galería",
      contactTitle: "Contáctanos o Reserva Ahora",
      contactText: "Para consultas o reservas, por favor complete el siguiente formulario:",
      formName: "Nombre Completo",
      formEmail: "Correo Electrónico",
      formPhone: "Número de Teléfono",
      formMessage: "Tu Mensaje o Comentarios",
      formBtn: "Enviar",
      successMsg: "Tu solicitud ha sido enviada con éxito",
      footerLogo: "Apartamentos de las Torres Al-Khair",
      footerRights: "© 2025 Todos los derechos reservados"
    }
  };
  
  // دالة تحديث النصوص بناءً على اللغة المحددة
  function updateLanguage(lang) {
    // تحديث العناصر التي تحتوي على data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });
    // تحديث عناصر الإدخال التي تحتوي على data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
    // يمكن تحديث عنوان الصفحة أيضاً
    if (translations[lang] && translations[lang]["logo"]) {
      document.title = translations[lang]["logo"];
    }
  }
  
  // الاستماع لتغيير اختيار اللغة
  document.getElementById("language-select").addEventListener("change", function() {
    const selectedLang = this.value;
    updateLanguage(selectedLang);
  });
  
  // تعيين اللغة الافتراضية عند تحميل الصفحة
  updateLanguage("ar");
  
  // التعامل مع تقديم نموذج التواصل وإظهار رسالة النجاح
  document.querySelector('.contact-form form').addEventListener('submit', function(event) {
    event.preventDefault();
    const successMsg = document.getElementById('success-message');
    successMsg.style.display = 'block';
    setTimeout(() => { successMsg.style.display = 'none'; }, 3000);
  });
  