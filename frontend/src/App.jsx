import React from 'react';
import heeraLogo from './images/Heera Logo.png';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const translations = {
  mr: {
    cta: 'सहभागी व्हा',
    badge: 'बैल पोळा २०२६ विशेष',
    headline1: 'माझा बैल,',
    headline2: 'माझा अभिमान! ❤️',
    subtitle:
      'तुमच्या लाडक्या बैलासोबतचा फोटो आम्हाला पाठवा आणि आकर्षक बक्षिसे जिंकण्याची सुवर्ण संधी मिळवा!',
    heroButton: 'माझा फोटो पाठवा',
    prizeTitle: 'आकर्षक बक्षिसे',
    prizeSubtitle: 'सहभागी व्हा आणि जिंका बक्षिसे जिंकण्याची संधी मिळवा',
    prize1: 'प्रथम क्रमांक',
    prize2: 'द्वितीय क्रमांक',
    prize3: 'तृतीय क्रमांक',
    formTitle: 'तुमच्या लाडक्या बैलासोबतचा पाठवा',
    formSubtitle: 'फक्त ५ सेकंदात भरा आणि सहभागी व्हा!',
    nameLabel: 'तुमचे पूर्ण नाव',
    namePlaceholder: 'उदा. संतोष बापूराव पाटील',
    villageLabel: 'तुमचे गाव / पत्ता',
    villagePlaceholder: 'उदा. जामनेर, जि. जळगाव',
    phoneLabel: 'मोबाईल नंबर',
    phonePlaceholder: '१० अंकी मोबाईल नंबर',
    question1: 'तुमच्याकडे किती एकर जमीन आहे?',
    question1Placeholder: 'उदा. ५ एकर',
    question2: 'तुम्ही कोणते पीक घेतात?',
    question2Placeholder: 'उदा. तांदूळ, ज्वारी, सोयाबीन',
    question3: 'तुमच्या शेतात पाण्याची सोय कशी आहे?',
    question3Placeholder: 'उदा. टँकर, नलकूप, बोअरवेल',
    question4: 'तुम्ही शेतीसाठी कोणती पद्धत वापरता?',
    question4Placeholder: 'उदा. पारंपरिक, आधुनिक, ड्रिप इरीगेशन',
    question5: 'शेतीमध्ये तुम्हाला कोणती अडचण येते?',
    question5Placeholder: 'उदा. पाणीटंचाई, किटक, कर्ज',
    photoLabel: 'बैलासोबतचा फोटो',
    photoPlaceholder: 'फोटो निवडण्यासाठी येथे क्लिक करा',
    photoNote: 'JPG / PNG - जास्तीत जास्त 5 MB',
    submit: 'माझा फोटो Submit करा',
    submitting: 'सबमिट करत आहे...',
    privacy: 'तुमची माहिती सुरक्षित ठेवली जाईल.',
    thankYou: 'तुमचे सबमिशन यशस्वी झाले आहे!',
    thankYouText:
      'आपल्या सहभागाबद्दल धन्यवाद. तुमच्या कडून पाठवलेल्या बैल फोटोसाठी आम्ही खूप आभारी आहोत. Heera Agro कंपनीतून तुम्हाला पुढील माहिती तसेच कृषी आणि कंपनीबद्दल अधिक जाणून घेण्यासाठी हे पेज आहे.',
    companyTitle: 'Heera Agro बद्दल',
    companyInfo:
      'Heera Agro हे कृषी, शेतमाल आणि टिकाऊ शेतीसाठी व्यावसायिक सेवा देणारे एक विश्वासू नाव आहे. आम्ही शेतीत आधुनिक तंत्रज्ञान, गुणवत्ता आणि ग्राहकद्वेषरहित सेवा देण्यावर लक्ष केंद्रित करतो.',
    visitWebsite: 'वेबसाइट भेट द्या',
    visitYoutube: 'YouTube पाहा',
    contactTitle: 'संपर्क',
    contactPhone: '+91 98765 43210',
    contactEmail: 'hello@heeraagro.com',
    address: 'Heera Agro, Nashik, Maharashtra',
    backHome: 'मुख्य पृष्ठावर परत जा',
    footerLabel: 'सहभागी होण्याची शेवटची तारीख',
    footerDate: '२ सप्टेंबर २०२६, रात्री ११:५९ पर्यंत सुवर्ण संधी उपलब्ध.',
    footerTagline: 'शेतकऱ्यांची विश्वासू सांगड 🇮🇳',
    festival: 'बैल पोळा २०२६',
  },
  hi: {
    cta: 'भाग लें',
    badge: 'बैल पोळा २०२६ विशेष',
    headline1: 'मेरा बैल,',
    headline2: 'मेरा अभिमान! ❤️',
    subtitle:
      'अपने प्यारे बैल के साथ फोटो हमें भेजें और आकर्षक पुरस्कार जीतने का शानदार अवसर प्राप्त करें!',
    heroButton: 'मेरा फोटो भेजें',
    prizeTitle: 'रोमांचक पुरस्कार',
    prizeSubtitle: 'भाग लें और पुरस्कार जीतने का अवसर पाएं',
    prize1: 'पहला पुरस्कार',
    prize2: 'दूसरा पुरस्कार',
    prize3: 'तीसरा पुरस्कार',
    formTitle: 'अपना फोटो भेजें',
    formSubtitle: 'केवल ५ सेकंड में भरें और भाग लें!',
    nameLabel: 'आपका पूरा नाम',
    namePlaceholder: 'उदा. संतोष बापूराव पाटील',
    villageLabel: 'आपका गांव / पता',
    villagePlaceholder: 'उदा. जामनेर, जि. जलगांव',
    phoneLabel: 'मोबाइल नंबर',
    phonePlaceholder: '१० अंकों का मोबाइल नंबर',
    question1: 'आपके पास कितने एकड़ जमीन है?',
    question1Placeholder: 'उदा. ५ एकड़',
    question2: 'आप कौन-सी फसल उगाते हैं?',
    question2Placeholder: 'उदा. धान, ज्वार, सोयाबीन',
    question3: 'आपके खेत में पानी की सुविधा कैसी है?',
    question3Placeholder: 'उदा. टैंकर, कुंआ, नलकूप',
    question4: 'आप खेती के लिए कौन-सी पद्धति अपनाते हैं?',
    question4Placeholder: 'उदा. पारंपरिक, आधुनिक, ड्रिप इरिगेशन',
    question5: 'खेती में आपको कौन-सी समस्या आती है?',
    question5Placeholder: 'उदा. पानी की कमी, कीट, कर्ज',
    photoLabel: 'बैल के साथ फोटो',
    photoPlaceholder: 'फोटो चुनने के लिए क्लिक करें',
    photoNote: 'JPG / PNG - अधिकतम 5 MB',
    submit: 'मेरा फोटो सबमिट करें',
    submitting: 'सबमिट किया जा रहा है...',
    privacy: 'आपकी जानकारी सुरक्षित रखी जाएगी।',
    thankYou: 'आपका सबमिशन सफल रहा!',
    thankYouText:
      'भाग लेने के लिए धन्यवाद। आपके द्वारा भेजे गए बैल फोटो के लिए हम बहुत आभारी हैं। Heera Agro कंपनी के बारे में अधिक जानकारी और कृषि संबंधी अपडेट के लिए यह पेज है।',
    companyTitle: 'Heera Agro के बारे में',
    companyInfo:
      'Heera Agro कृषि, फसल और टिकाऊ खेती के लिए भरोसेमंद समाधान प्रदान करने वाली एक प्रसिद्ध कंपनी है। हम आधुनिक खेती, गुणवत्तापूर्ण उत्पाद और किसानों के लिए विश्वसनीय सेवा पर ध्यान केंद्रित करते हैं।',
    visitWebsite: 'वेबसाइट देखें',
    visitYoutube: 'YouTube देखें',
    contactTitle: 'संपर्क करें',
    contactPhone: '+91 98765 43210',
    contactEmail: 'hello@heeraagro.com',
    address: 'Heera Agro, नासिक, महाराष्ट्र',
    backHome: 'मुख्य पृष्ठ पर लौटें',
    footerLabel: 'भाग लेने की अंतिम तिथि',
    footerDate: '२ सितंबर २०२६, रात ११:५९ तक शानदार अवसर उपलब्ध है।',
    footerTagline: 'किसानों का भरोसा 🇮🇳',
    festival: 'बैल पोळा २०२६',
  },
};

function Navbar({ language, setLanguage, onGoHome }) {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="brand-wrap">
        <img className="brand-logo" src={heeraLogo} alt="Heera Agro" />
      </div>

      <div className="nav-actions">
        <div className="lang-toggle" aria-label="Language switcher">
          <button
            className={language === 'mr' ? 'lang-btn active' : 'lang-btn'}
            onClick={() => setLanguage('mr')}
            type="button"
          >
            मराठी
          </button>
          <button
            className={language === 'hi' ? 'lang-btn active' : 'lang-btn'}
            onClick={() => setLanguage('hi')}
            type="button"
          >
            हिंदी
          </button>
        </div>

        <button onClick={onGoHome ? onGoHome : scrollToForm} className="primary-button small">
          {translations[language].cta}
        </button>
      </div>
    </nav>
  );
}

function Hero({ language }) {
  const t = translations[language];

  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          <span>🐂</span>
          <span>{t.badge}</span>
        </div>

        <h1>
          {t.headline1}
          <br />
          <span className="hero-headline-second">{t.headline2}</span>
        </h1>

        <p>{t.subtitle}</p>

        <button onClick={scrollToForm} className="primary-button hero-button">
          <span>📸</span>
          <span>{t.heroButton}</span>
        </button>
      </div>
    </header>
  );
}

function PrizesSection({ language }) {
  const t = translations[language];

  return (
    <section className="prizes-section">
      <div className="section-header">
        <h2>
          <span>🎁</span>
          <span>{t.prizeTitle}</span>
        </h2>
        <p>{t.prizeSubtitle}</p>
      </div>

      <div className="prize-grid">
        <div className="prize-card">
          <div className="prize-icon">🥇</div>
          <h3>{t.prize1}</h3>
          <div className="prize-amount">₹2,100</div>
        </div>

        <div className="prize-card">
          <div className="prize-icon">🥈</div>
          <h3>{t.prize2}</h3>
          <div className="prize-amount">₹1,500</div>
        </div>

        <div className="prize-card">
          <div className="prize-icon">🥉</div>
          <h3>{t.prize3}</h3>
          <div className="prize-amount">₹1100</div>
        </div>
      </div>

    </section>
  );
}

function SubmissionForm({ language, onSubmitSuccess }) {
  const t = translations[language];
  const [formData, setFormData] = React.useState({
    fullName: '',
    village: '',
    mobileNumber: '',
    landSize: '',
    cropType: '',
    waterFacility: '',
    farmingMethod: '',
    challenge: '',
    photo: null,
  });
  const [preview, setPreview] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFormData((prev) => ({ ...prev, photo: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('village', formData.village);
    data.append('mobileNumber', formData.mobileNumber);
    data.append('landSize', formData.landSize);
    data.append('cropType', formData.cropType);
    data.append('waterFacility', formData.waterFacility);
    data.append('farmingMethod', formData.farmingMethod);
    data.append('challenge', formData.challenge);
    if (formData.photo) data.append('photo', formData.photo);

    try {
      const response = await fetch(`${API_BASE_URL}/api/campaign/submit`, {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccessMsg(t.thankYou);
        setFormData({
          fullName: '',
          village: '',
          mobileNumber: '',
          landSize: '',
          cropType: '',
          waterFacility: '',
          farmingMethod: '',
          challenge: '',
          photo: null,
        });
        setPreview(null);
        if (onSubmitSuccess) onSubmitSuccess();
      } else {
        setErrorMsg(
          result.message || result.error || 'काहीतरी चूक झाली, कृपया पुन्हा प्रयत्न करा.',
        );
      }
    } catch (error) {
      console.error(error);
      setErrorMsg('सर्व्हरशी संपर्क साधण्यात त्रुटी. कृपया नंतर प्रयत्न करा.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="form-section" className="submission-section">
      <div className="form-card">
        <div className="form-header">
          <div className="form-icon">🐂</div>
          <h2>{t.formTitle}</h2>
          <p>{t.formSubtitle}</p>
        </div>

        {successMsg && <div className="alert success">{successMsg}</div>}
        {errorMsg && <div className="alert error">{errorMsg}</div>}

        <form onSubmit={handleSubmit} className="submission-form">
          <div>
            <label>👤 {t.nameLabel}</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder={t.namePlaceholder}
            />
          </div>

          <div>
            <label>📍 {t.villageLabel}</label>
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleChange}
              required
              placeholder={t.villagePlaceholder}
            />
          </div>

          <div>
            <label>📱 {t.phoneLabel}</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
              placeholder={t.phonePlaceholder}
            />
          </div>

          <div className="question-block">
            <label>🌾 {language === 'hi' ? t.question1 : t.question1}</label>
            <input
              type="text"
              name="landSize"
              value={formData.landSize}
              onChange={handleChange}
              required
              placeholder={language === 'hi' ? t.question1Placeholder : t.question1Placeholder}
            />
          </div>

          <div className="question-block">
            <label>🌾 {language === 'hi' ? t.question2 : t.question2}</label>
            <input
              type="text"
              name="cropType"
              value={formData.cropType}
              onChange={handleChange}
              required
              placeholder={language === 'hi' ? t.question2Placeholder : t.question2Placeholder}
            />
          </div>

          <div className="question-block">
            <label>💧 {language === 'hi' ? t.question3 : t.question3}</label>
            <input
              type="text"
              name="waterFacility"
              value={formData.waterFacility}
              onChange={handleChange}
              required
              placeholder={language === 'hi' ? t.question3Placeholder : t.question3Placeholder}
            />
          </div>

          <div className="question-block">
            <label>🚜 {language === 'hi' ? t.question4 : t.question4}</label>
            <input
              type="text"
              name="farmingMethod"
              value={formData.farmingMethod}
              onChange={handleChange}
              required
              placeholder={language === 'hi' ? t.question4Placeholder : t.question4Placeholder}
            />
          </div>

          <div className="question-block">
            <label>⚠️ {language === 'hi' ? t.question5 : t.question5}</label>
            <input
              type="text"
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              required
              placeholder={language === 'hi' ? t.question5Placeholder : t.question5Placeholder}
            />
          </div>

          <div>
            <label>📸 {t.photoLabel}</label>
            <label className="upload-box">
              {preview ? (
                <img src={preview} alt="Preview" className="preview-image" />
              ) : (
                <>
                  <span className="upload-icon">📷</span>
                  <span className="upload-text">{t.photoPlaceholder}</span>
                  <span className="upload-note">{t.photoNote}</span>
                </>
              )}

              <input
                type="file"
                name="photo"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
                required
                className="hidden-input"
              />
            </label>
          </div>

          <button type="submit" disabled={loading} className="primary-button submit-button">
            <span>🐂</span>
            <span>{loading ? t.submitting : t.submit}</span>
          </button>
        </form>

        <p className="privacy-note">🔒 {t.privacy}</p>
      </div>
    </section>
  );
}

function Footer({ language }) {
  const t = translations[language];

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-topline">
          <span>⏳</span>
          <span>{t.footerLabel}</span>
        </div>
        <p>{t.footerDate}</p>

        <div className="footer-bottom">
          <div className="brand-wrap footer-brand">
            <span className="brand-icon">🌾</span>
            <span className="brand-name">KRUSHISAMRAT</span>
          </div>
          <p className="footer-subtext">{t.footerTagline}</p>
          <p className="footer-copy">© 2026 Krushisamrat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function ThankYouPage({ language, onBack }) {
  const t = translations[language];

  return (
    <div className="thankyou-shell">
      <div className="thankyou-card">
        <div className="thankyou-badge">✅</div>
        <h1>{t.thankYou}</h1>
        <p className="thankyou-text">{t.thankYouText}</p>

        <div className="company-block">
          <h2>{t.companyTitle}</h2>
          <p>{t.companyInfo}</p>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <h3>{t.contactTitle}</h3>
            <p>{t.contactPhone}</p>
            <p>{t.contactEmail}</p>
            <p>{t.address}</p>
          </div>

          <div className="info-card">
            <h3>{t.visitWebsite}</h3>
            <a href="https://www.heeraagro.com" target="_blank" rel="noreferrer">
              www.heeraagro.com
            </a>
            <a href="https://www.youtube.com/@heeraagro" target="_blank" rel="noreferrer">
              YouTube / Heera Agro
            </a>
          </div>
        </div>

        <div className="cta-row">
          <a className="primary-button thank-button" href="https://www.heeraagro.com" target="_blank" rel="noreferrer">
            {t.visitWebsite}
          </a>
          <a className="primary-button thank-button alt" href="https://www.youtube.com/@heeraagro" target="_blank" rel="noreferrer">
            {t.visitYoutube}
          </a>
        </div>

        <button type="button" className="secondary-button" onClick={onBack}>
          {t.backHome}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = React.useState('mr');
  const [view, setView] = React.useState('landing');

  React.useEffect(() => {
    const currentHash = window.location.hash;
    if (currentHash === '#thank-you') {
      setView('thankyou');
    }

    const onHashChange = () => {
      setView(window.location.hash === '#thank-you' ? 'thankyou' : 'landing');
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const goToThankYou = () => {
    window.location.hash = '#thank-you';
    setView('thankyou');
  };

  const goHome = () => {
    window.location.hash = '';
    setView('landing');
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (view === 'thankyou') {
    return <ThankYouPage language={language} onBack={goHome} />;
  }

  return (
    <div className="app-shell">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <PrizesSection language={language} />
      <SubmissionForm language={language} onSubmitSuccess={goToThankYou} />
      <Footer language={language} />
    </div>
  );
}
