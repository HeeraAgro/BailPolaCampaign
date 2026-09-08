import React from 'react';
import heeraLogo from './images/Heera Logo.png';
import facebookIcon from './images/facebook.png';
import instagramIcon from './images/Instagram.png';
import youtubeIcon from './images/Youtube.png';
import {
  trackCampaignPageView,
  trackEvent,
  trackPageView,
} from './analytics';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Image compression utility
const compressImage = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = () => reject(new Error('Photo could not be read.'));
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onerror = () => reject(new Error('Photo could not be processed.'));
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set max dimensions
        let width = img.width;
        let height = img.height;
        const maxWidth = 1200;
        const maxHeight = 1200;

        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Photo compression failed.'));
              return;
            }

            const compressedFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          },
          'image/jpeg',
          0.7
        );
      };
    };
  });
};

const translations = {
  mr: {
    cta: 'सहभागी व्हा',
    badge: 'बैल पोळा २०२६ विशेष',
    headline1: 'माझा बैल,',
    headline2: 'माझा अभिमान! ❤️',
    subtitle:
      'तुमच्या लाडक्या बैलासोबतचा तुमचा फोटो आम्हाला पाठवा आणि आकर्षक बक्षिसे जिंकण्याची सुवर्णसंधी मिळवा!',
    heroButton: 'माझा फोटो पाठवा',
    prizeTitle: 'आकर्षक बक्षिसे',
    prizeSubtitle: 'आता सहभागी व्हा आणि रोख बक्षिसे जिंकण्याची सुवर्णसंधी साधा!',
    prize1: 'प्रथम पारितोषिक',
    prize2: 'द्वितीय पारितोषिक',
    prize3: 'तृतीय पारितोषिक',
    formTitle: '"माझा बैल माझा अभिमान!" स्पर्धेत सहभागी होण्यासाठी',
    formSubtitle: 'फक्त ५ सेकंदात फॉर्म भरा, फोटो अपलोड करा आणि सबमिट करा!',
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
    question4: 'तुम्ही शेतीसाठी कोणती सिंचन पद्धत वापरता?',
    question4Placeholder: 'उदा. पारंपरिक, आधुनिक, ड्रिप इरीगेशन',
    question5: 'शेतीमध्ये तुम्हाला कोणती अडचण येते?',
    question5Placeholder: 'उदा. पाणीटंचाई, किटक, कर्ज',
    photoLabel: 'बैलासोबतचा फोटो',
    photoPlaceholder: 'फोटो निवडण्यासाठी येथे क्लिक करा',
    photoNote: 'JPG / PNG - जास्तीत जास्त 5 MB',
    submit: 'माझा फोटो Submit करा',
    submitting: 'सबमिट करत आहे...',
    preparingPhoto: 'फोटो तयार करत आहे... कृपया थांबा.',
    uploadingPhoto: 'फोटो अपलोड करत आहे... कृपया पेज बंद करू नका.',
    savingSubmission: 'तुमची माहिती जतन करत आहे...',
    timeoutError: 'अपलोडला जास्त वेळ लागला. इंटरनेट तपासून पुन्हा प्रयत्न करा.',
    photoError: 'फोटो तयार करता आला नाही. कृपया दुसरा फोटो निवडा.',
    serverError: 'सर्व्हरशी संपर्क साधता आला नाही. कृपया पुन्हा प्रयत्न करा.',
    privacy: 'तुमची माहिती सुरक्षित ठेवली जाईल.',
    thankYou: 'तुमचे सबमिशन यशस्वी झाले आहे!',
    thankYouText:
      'आपल्या सहभागाबद्दल धन्यवाद! 🙏तुमच्याकडून पाठवलेल्या बैलाच्या फोटोसाठी आम्ही मनःपूर्वक आभारी आहोत. 🐂❤️ Heera Agro कंपनीकडून तुम्हाला पुढील माहिती तसेच कृषी आणि कंपनीबद्दल अधिक जाणून घेण्यासाठी हे पेज उपयुक्त ठरेल. महत्त्वाची सूचना: तुमच्याकडून प्राप्त झालेली वैयक्तिक माहिती सुरक्षित ठेवली जाईल. तुमची माहिती कोणत्याही अनधिकृत व्यक्ती किंवा संस्थेसोबत शेअर केली जाणार नाही आणि तिचा गैरवापर होणार नाही.',
    companyTitle: 'Heera Agro बद्दल',
    companyInfo:
      'Heera Agro हे कृषी, शेतमाल आणि टिकाऊ शेतीसाठी व्यावसायिक सेवा देणारे एक विश्वासू नाव आहे. आम्ही शेतीत आधुनिक तंत्रज्ञान, गुणवत्ता आणि ग्राहकद्वेषरहित सेवा देण्यावर लक्ष केंद्रित करतो.',
    visitWebsite: 'वेबसाइट भेट द्या',
    visitYoutube: 'YouTube पाहा',
    contactTitle: 'संपर्क',
    contactPhone: '+91 9370722722',
    contactEmail: 'heerasocial01@gmail.com',
    address: 'Heera Agro Industries Jalgaon, Maharashtra',
    backHome: 'मुख्य पृष्ठावर परत जा',
    footerLabel: 'सहभागी होण्याची तारीख',
    footerDate: '8 सप्टेंबर 2026 - 12 सप्टेंबर 2026, रात्री ११:५९ पर्यंत सुवर्ण संधी उपलब्ध.',
    footerTagline: 'शेतकऱ्यांची विश्वासू हिरा ॲग्रो इंडस्ट्रीज',
    festival: 'बैल पोळा २०२६',
  },
  hi: {
    cta: 'भाग लें',
    badge: 'बैल पोला २०२६ विशेष',
    headline1: 'मेरा बैल,',
    headline2: 'मेरा अभिमान! ❤️',
    subtitle:
      'अपने प्यारे बैल के साथ की अपनी फोटो हमें भेजें और आकर्षक पुरस्कार जीतने का सुनहरा अवसर पाएं!',
    heroButton: 'फोटो भेजें',
    prizeTitle: 'रोमांचक पुरस्कार',
    prizeSubtitle: 'अभी शामिल हों और नकद पुरस्कार जीतने का सुनहरा अवसर पाएं!',
    prize1: 'प्रथम पुरस्कार',
    prize2: 'द्वितीय पुरस्कार',
    prize3: 'तृतीय पुरस्कार',
    formTitle: '"मेरा बैल,मेरा अभिमान!" प्रतियोगिता में शामिल होने के लिए',
    formSubtitle: 'सिर्फ ५ सेकंड में फॉर्म भरें, फोटो अपलोड करें और सबमिट करें!',
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
    question4: 'आप खेती के लिए कौन-सी सिंचाई पद्धति का उपयोग करते हैं?',
    question4Placeholder: 'उदा. पारंपरिक, आधुनिक, ड्रिप इरिगेशन',
    question5: 'खेती में आपको कौन-सी समस्या आती है?',
    question5Placeholder: 'उदा. पानी की कमी, कीट, कर्ज',
    photoLabel: 'बैल के साथ फोटो',
    photoPlaceholder: 'फोटो चुनने के लिए क्लिक करें',
    photoNote: 'JPG / PNG - अधिकतम 5 MB',
    submit: 'मेरा फोटो सबमिट करें',
    submitting: 'सबमिट किया जा रहा है...',
    preparingPhoto: 'फोटो तैयार हो रहा है... कृपया रुकें।',
    uploadingPhoto: 'फोटो अपलोड हो रहा है... कृपया पेज बंद न करें।',
    savingSubmission: 'आपकी जानकारी सुरक्षित की जा रही है...',
    timeoutError: 'अपलोड में अधिक समय लग रहा है। इंटरनेट जांचकर फिर कोशिश करें।',
    photoError: 'फोटो तैयार नहीं हो सका। कृपया दूसरा फोटो चुनें।',
    serverError: 'सर्वर से संपर्क नहीं हो सका। कृपया फिर कोशिश करें।',
    privacy: 'आपकी जानकारी सुरक्षित रखी जाएगी।',
    thankYou: 'आपका सबमिशन सफल रहा!',
    thankYouText:
      'आपकी सहभागिता के लिए धन्यवाद! 🙏 आपकी ओर से भेजी गई बैल की फोटो के लिए हम आपका हार्दिक आभार व्यक्त करते हैं। 🐂❤️ Heera Agro कंपनी की ओर से आपको आगे की जानकारी तथा कृषि और कंपनी के बारे में अधिक जानने के लिए यह पेज उपयोगी रहेगा। **महत्वपूर्ण सूचना:** आपकी ओर से प्राप्त की गई व्यक्तिगत जानकारी पूरी तरह सुरक्षित रखी जाएगी। आपकी जानकारी किसी भी अनधिकृत व्यक्ति या संस्था के साथ साझा नहीं की जाएगी और इसका किसी भी प्रकार से दुरुपयोग नहीं किया जाएगा।',
    companyTitle: 'Heera Agro के बारे में',
    companyInfo:
      'Heera Agro कृषि, फसल और टिकाऊ खेती के लिए भरोसेमंद समाधान प्रदान करने वाली एक प्रसिद्ध कंपनी है। हम आधुनिक खेती, गुणवत्तापूर्ण उत्पाद और किसानों के लिए विश्वसनीय सेवा पर ध्यान केंद्रित करते हैं।',
    visitWebsite: 'वेबसाइट देखें',
    visitYoutube: 'YouTube देखें',
    contactTitle: 'संपर्क करें',
    contactPhone: '+91 9370722722',
    contactEmail: 'heerasocial01@gmail.com',
    address: 'Heera Agro Industries Jalgaon, Maharashtra',
    backHome: 'मुख्य पृष्ठ पर लौटें',
    footerLabel: 'भाग लेने की तिथि',
    footerDate: '8 सितंबर 2026 -12 सप्टेंबर 2026, रात ११:५९ तक शानदार अवसर उपलब्ध है।',
    footerTagline: 'किसानों का भरोसा हिरा ॲग्रो इंडस्ट्रीज',
    festival: 'बैल पोला २०२६',
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
          <div className="prize-amount">₹1,100</div>
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
  const [submitStage, setSubmitStage] = React.useState('idle');
  const [successMsg, setSuccessMsg] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');
  const formStarted = React.useRef(false);

  const handleFormStart = () => {
    if (formStarted.current) return;

    formStarted.current = true;
    trackEvent('form_start');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('फोटोचा आकार 5 MB पेक्षा कमी असावा.');
      event.target.value = '';
      return;
    }

    setErrorMsg('');
    setFormData((prev) => ({ ...prev, photo: file }));
    setPreview(URL.createObjectURL(file));
    trackEvent('photo_upload');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    trackEvent('form_submit');
    setLoading(true);
    setSubmitStage('preparing');
    setSuccessMsg('');
    setErrorMsg('');
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 90000);

    try {
      const data = new FormData();
      data.append('fullName', formData.fullName);
      data.append('village', formData.village);
      data.append('mobileNumber', formData.mobileNumber);
      data.append('landSize', formData.landSize);
      data.append('cropType', formData.cropType);
      data.append('waterFacility', formData.waterFacility);
      data.append('farmingMethod', formData.farmingMethod);
      data.append('challenge', formData.challenge);

      if (formData.photo) {
        const compressedPhoto = await compressImage(formData.photo);
        data.append('photo', compressedPhoto);
      }

      setSubmitStage('uploading');
      const response = await fetch(`${API_BASE_URL}/api/campaign/submit`, {
        method: 'POST',
        body: data,
        signal: controller.signal,
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        trackEvent('submission_success');
        // Clear form immediately
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
        // Redirect immediately to thank you page
        if (onSubmitSuccess) onSubmitSuccess();
      } else {
        trackEvent('submission_error');
        setErrorMsg(
          result.message || result.error || 'काहीतरी चूक झाली, कृपया पुन्हा प्रयत्न करा.',
        );
      }
    } catch (error) {
      console.error(error);
      trackEvent('submission_error');
      if (error.name === 'AbortError') {
        setErrorMsg(t.timeoutError);
      } else if (error.message?.includes('Photo')) {
        setErrorMsg(t.photoError);
      } else {
        setErrorMsg(t.serverError);
      }
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
      setSubmitStage('idle');
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

        {successMsg && <div className="alert success" role="status">{successMsg}</div>}
        {errorMsg && <div className="alert error" role="alert">{errorMsg}</div>}

        <form onSubmit={handleSubmit} onFocus={handleFormStart} className="submission-form">
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

          {loading && (
            <div className="upload-status" role="status" aria-live="polite">
              <span className="loading-spinner" aria-hidden="true" />
              <span>
                {submitStage === 'preparing'
                  ? t.preparingPhoto
                  : submitStage === 'uploading'
                    ? t.uploadingPhoto
                    : t.savingSubmission}
              </span>
            </div>
          )}
        </form>

        <p className="privacy-note">🔒 {t.privacy}</p>
      </div>
    </section>
  );
}

function Footer({ language }) {
  const t = translations[language];

  const socialMedia = [
    {
      name: 'YouTube',
      icon: youtubeIcon,
      url: 'https://www.youtube.com/@HeeraAgroIndustries',
    },
    {
      name: 'Facebook',
      icon: facebookIcon,
      url: 'https://www.facebook.com/heeraagro',
    },
    {
      name: 'Instagram',
      icon: instagramIcon,
      url: 'https://www.instagram.com/heeraagro?stkn=cG5xMndhOXVpdGlj',
    },
  ];

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
            <img className="footer-logo" src={heeraLogo} alt="Heera Agro" />
          </div>
          <p className="footer-subtext">{t.footerTagline}</p>
          
          <div className="social-media-links">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title={social.name}
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} className="social-icon-img" />
              </a>
            ))}
          </div>

          <p className="footer-copy">© 2026 Heera Agro Industries. All rights reserved.</p>
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
            <a href="https://www.youtube.com/@HeeraAgroIndustries" target="_blank" rel="noreferrer">
              YouTube / Heera Agro
            </a>
          </div>
        </div>

        <div className="cta-row">
          <a className="primary-button thank-button" href="https://www.heeraagro.com" target="_blank" rel="noreferrer">
            {t.visitWebsite}
          </a>
          <a className="primary-button thank-button alt" href="https://www.youtube.com/@HeeraAgroIndustries" target="_blank" rel="noreferrer">
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
    trackPageView();
    if (currentHash !== '#thank-you') trackCampaignPageView();

    if (currentHash === '#thank-you') {
      setView('thankyou');
    }

    const onHashChange = () => {
      const isThankYouPage = window.location.hash === '#thank-you';
      setView(isThankYouPage ? 'thankyou' : 'landing');
      trackPageView();
      if (!isThankYouPage) trackCampaignPageView();
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
