// ==============================================
// Kik Vid - TikTok Video Downloader
// Version: 2.0.0 (Enhanced)
// ==============================================

// ================== إعدادات الأداء ==================
const PERFORMANCE_CONFIG = {
    MOBILE_BATCH_SIZE: 2,
    DESKTOP_BATCH_SIZE: 4,
    IMAGE_PRELOAD_LIMIT: 5,
    REQUEST_TIMEOUT: 8000,
    RETRY_ATTEMPTS: 2,
    CACHE_SIZE: 50,
    CACHE_TTL: 10 * 60 * 1000 // 10 دقائق
};

// ================== كائن الترجمات الكامل ==================
const translations = {
    ar: {
        tagline: "منصة التحميل المتطورة - تجربة لا تُنسى",
        mainTitle: "حمل محتواك بلمسة واحدة",
        urlPlaceholder: "https://www.tiktok.com/@user/video/123456",
        formatButton: "اختيار نوع المحتوى",
        formatWarning: "يرجى اختيار نوع المحتوى أولاً",
        formatModalTitle: "اختر نوع المحتوى المطلوب",
        formatMp4: "MP4 (فيديو)",
        formatMp3: "MP3 (صوت)",
        formatJpg: "صور متعددة",
        closeModal: "تم",
        downloadButton: "تحميل المحتوى",
        feature1Title: "سريع جداً",
        feature1Desc: "أسرع وقت تحميل بفضل تقنيتنا المتطورة",
        feature2Title: "آمن ومحمي",
        feature2Desc: "بياناتك محمية دائماً مع تشفير متقدم",
        feature3Title: "بدون حدود",
        feature3Desc: "لا توجد قيود على حجم أو عدد التحميلات",
        urlWarningInvalid: "⚠️ الرابط غير صالح أو غير مدعوم",
        urlWarningEmpty: "⚠️ يرجى إدخال رابط المحتوى",
        langArabic: "العربية",
        langEnglish: "English",
        langFrench: "Français",
        langChinese: "中文",
        langJapanese: "日本語",
        pasteSuccess: "تم لصق الرابط بنجاح!",
        pasteError: "تعذر الوصول إلى الحافظة",
        downloadCancelled: "تم إلغاء التحميل",
        processing: "جارٍ المعالجة",
        preparing: "جارٍ التحضير",
        downloading: "جارٍ التحميل",
        downloadComplete: "تم التحميل بنجاح!",
        preparingDownload: "جارٍ التحضير للتحميل",
        historyTitle: "سجل التحميلات",
        noHistory: "لا توجد عمليات تحميل سابقة",
        copyUrl: "نسخ الرابط",
        deleteItem: "حذف",
        copySuccess: "تم نسخ الرابط!",
        deleteConfirmTitle: "تأكيد الحذف",
        deleteConfirmMessage: "هل أنت متأكد أنك تريد حذف كل سجل التحميلات؟ هذا الإجراء لا يمكن التراجع عنه.",
        cancel: "إلغاء",
        delete: "حذف الكل",
        galleryTitle: "معرض الصور",
        selectedImages: "صورة محددة",
        selectAll: "تحديد الكل",
        deselectAll: "إلغاء الكل",
        back: "رجوع",
        downloadSelectedImages: "تحميل الصور المحددة",
        errorVideoUnavailable: "⚠️ تعذر تحميل الفيديو حاليًا\nقد يكون الفيديو خاص أو تم حذفه\nحاول مرة أخرى لاحقًا",
        scrollHint: "اسحب لرؤية المزيد من الصور",
        seoTitle: "معلومات عن موقع Kik vid",
        seoWhatIs: "ما هو موقع Kik Vid؟",
        seoWhatIsDesc: "Kik Vid هو موقع مجاني يتيح لك تحميل فيديوهات تيك توك بدون علامة مائية وبجودة عالية مباشرة من المتصفح، بدون الحاجة إلى تثبيت أي تطبيقات أو برامج.",
        seoHowTo: "كيفية تحميل فيديو من تيك توك",
        seoHowToDesc: "انسخ رابط الفيديو من تطبيق TikTok، ثم الصقه في الخانة المخصصة، واضغط على زر التحميل.",
        seoFeatures: "مميزات Kik Vid",
        seoFeatures1: "تحميل مجاني بالكامل بدون رسوم",
        seoFeatures2: "بدون علامة مائية على الفيديو",
        seoFeatures3: "جودة عالية HD",
        seoFeatures4: "سرعة تحميل فائقة",
        seoFeatures5: "يدعم جميع أجهزة الجوال والكمبيوتر",
        seoFeatures6: "لا يتطلب تسجيل دخول أو إنشاء حساب",
        seoSafe: "هل Kik Vid آمن؟",
        seoSafeDesc: "نعم، Kik Vid آمن تماماً ولا نحتفظ بأي بيانات شخصية للمستخدمين. كل التحميلات تتم عبر اتصالات آمنة.",
        networkError: "⚠️ مشكلة في الاتصال بالإنترنت",
        retry: "إعادة المحاولة",
        loading: "جارٍ التحميل...",
        compression: "جارٍ ضغط الملف...",
        saved: "تم الحفظ"
    },
    en: {
        tagline: "Advanced Download Platform - An Unforgettable Experience",
        mainTitle: "Download Your Content with One Tap",
        urlPlaceholder: "https://www.tiktok.com/@user/video/123456",
        formatButton: "Choose Content Type",
        formatWarning: "Please select a content type first",
        formatModalTitle: "Choose the Required Content Type",
        formatMp4: "MP4 (Video)",
        formatMp3: "MP3 (Audio)",
        formatJpg: "Multiple Images",
        closeModal: "Done",
        downloadButton: "Download Content",
        feature1Title: "Lightning Fast",
        feature1Desc: "Fastest download time thanks to our advanced technology",
        feature2Title: "Safe & Secure",
        feature2Desc: "Your data is always protected with advanced encryption",
        feature3Title: "Unlimited",
        feature3Desc: "No restrictions on size or number of downloads",
        urlWarningInvalid: "⚠️ Invalid or unsupported URL",
        urlWarningEmpty: "⚠️ Please enter a content URL",
        langArabic: "Arabic",
        langEnglish: "English",
        langFrench: "Français",
        langChinese: "中文",
        langJapanese: "日本語",
        pasteSuccess: "Link pasted successfully!",
        pasteError: "Could not access clipboard",
        downloadCancelled: "Download cancelled",
        processing: "Processing",
        preparing: "Preparing",
        downloading: "Downloading",
        downloadComplete: "Download completed successfully!",
        preparingDownload: "Preparing for download",
        historyTitle: "Download History",
        noHistory: "No download history yet",
        copyUrl: "Copy URL",
        deleteItem: "Delete",
        copySuccess: "URL copied!",
        deleteConfirmTitle: "Confirm Deletion",
        deleteConfirmMessage: "Are you sure you want to delete all download history? This action cannot be undone.",
        cancel: "Cancel",
        delete: "Delete All",
        galleryTitle: "Image Gallery",
        selectedImages: "selected images",
        selectAll: "Select All",
        deselectAll: "Deselect All",
        back: "Back",
        downloadSelectedImages: "Download Selected Images",
        errorVideoUnavailable: "⚠️ Unable to download this video\nThe video may be private or unavailable",
        scrollHint: "Swipe to see more images",
        seoTitle: "About Kik vid website",
        seoWhatIs: "What is Kik Vid?",
        seoWhatIsDesc: "Kik Vid is a free online TikTok video downloader that allows users to download TikTok videos without watermark in HD quality directly from the browser, without installing any apps or software.",
        seoHowTo: "How to Download TikTok Videos",
        seoHowToDesc: "Copy the TikTok video link from the TikTok app, paste it into the input field, and click the download button.",
        seoFeatures: "Kik Vid Features",
        seoFeatures1: "Completely free with no charges",
        seoFeatures2: "No watermark on videos",
        seoFeatures3: "High quality HD downloads",
        seoFeatures4: "Super fast download speed",
        seoFeatures5: "Supports all mobile and computer devices",
        seoFeatures6: "No login or account creation required",
        seoSafe: "Is Kik Vid Safe?",
        seoSafeDesc: "Yes, Kik Vid is completely safe and we don't store any personal user data. All downloads are done through secure connections.",
        networkError: "⚠️ Network connection error",
        retry: "Retry",
        loading: "Loading...",
        compression: "Compressing file...",
        saved: "Saved"
    },
    fr: {
        tagline: "Plateforme de téléchargement avancée - Une expérience inoubliable",
        mainTitle: "Téléchargez votre contenu en un seul clic",
        urlPlaceholder: "https://www.tiktok.com/@user/video/123456",
        formatButton: "Choisir le type de contenu",
        formatWarning: "Veuillez d'abord sélectionner un type de contenu",
        formatModalTitle: "Choisissez le type de contenu requis",
        formatMp4: "MP4 (Vidéo)",
        formatMp3: "MP3 (Audio)",
        formatJpg: "Images multiples",
        closeModal: "Terminé",
        downloadButton: "Télécharger le contenu",
        feature1Title: "Extrêmement rapide",
        feature1Desc: "Temps de téléchargement le plus rapide grâce à notre technologie avancée",
        feature2Title: "Sécurisé",
        feature2Desc: "Vos données sont toujours protégées avec un cryptage avancé",
        feature3Title: "Illimité",
        feature3Desc: "Aucune restriction sur la taille ou le nombre de téléchargements",
        urlWarningInvalid: "⚠️ URL invalide ou non prise en charge",
        urlWarningEmpty: "⚠️ Veuillez saisir une URL de contenu",
        langArabic: "Arabe",
        langEnglish: "Anglais",
        langFrench: "Français",
        langChinese: "Chinois",
        langJapanese: "Japonais",
        pasteSuccess: "Lien collé avec succès !",
        pasteError: "Impossible d'accéder au presse-papiers",
        downloadCancelled: "Téléchargement annulé",
        processing: "Traitement en cours",
        preparing: "Préparation",
        downloading: "Téléchargement en cours",
        downloadComplete: "Téléchargement terminé avec succès !",
        preparingDownload: "Préparation du téléchargement",
        historyTitle: "Historique des téléchargements",
        noHistory: "Aucun historique de téléchargement pour le moment",
        copyUrl: "Copier l'URL",
        deleteItem: "Supprimer",
        copySuccess: "URL copiée !",
        deleteConfirmTitle: "Confirmer la suppression",
        deleteConfirmMessage: "Êtes-vous sûr de vouloir supprimer tout l'historique des téléchargements ? Cette action ne peut pas être annulée.",
        cancel: "Annuler",
        delete: "Tout supprimer",
        galleryTitle: "Galerie d'images",
        selectedImages: "images sélectionnées",
        selectAll: "Tout sélectionner",
        deselectAll: "Tout désélectionner",
        back: "Retour",
        downloadSelectedImages: "Télécharger les images sélectionnées",
        errorVideoUnavailable: "⚠️ Impossible de télécharger cette vidéo\nLa vidéo peut être privée ou indisponible",
        scrollHint: "Faites glisser pour voir plus d'images",
        seoTitle: "À propos du site Kik vid",
        seoWhatIs: "Qu'est-ce que Kik Vid ?",
        seoWhatIsDesc: "Kik Vid est un téléchargeur de vidéos TikTok en ligne gratuit qui permet aux utilisateurs de télécharger des vidéos TikTok sans filigrane en qualité HD directement depuis le navigateur, sans installer d'applications ou de logiciels.",
        seoHowTo: "Comment télécharger des vidéos TikTok",
        seoHowToDesc: "Copiez le lien de la vidéo TikTok depuis l'application TikTok, collez-le dans le champ de saisie et cliquez sur le bouton de téléchargement.",
        seoFeatures: "Fonctionnalités de Kik Vid",
        seoFeatures1: "Complètement gratuit sans frais",
        seoFeatures2: "Pas de filigrane sur les vidéos",
        seoFeatures3: "Téléchargements HD de haute qualité",
        seoFeatures4: "Vitesse de téléchargement super rapide",
        seoFeatures5: "Prend en charge tous les appareils mobiles et ordinateurs",
        seoFeatures6: "Aucune connexion ou création de compte requise",
        seoSafe: "Kik Vid est-il sûr ?",
        seoSafeDesc: "Oui, Kik Vid est complètement sûr et nous ne stockons aucune donnée personnelle des utilisateurs. Tous les téléchargements sont effectués via des connexions sécurisées.",
        networkError: "⚠️ Erreur de connexion réseau",
        retry: "Réessayer",
        loading: "Chargement...",
        compression: "Compression du fichier...",
        saved: "Enregistré"
    },
    zh: {
        tagline: "高级下载平台 - 难忘的体验",
        mainTitle: "一键下载您的内容",
        urlPlaceholder: "https://www.tiktok.com/@user/video/123456",
        formatButton: "选择内容类型",
        formatWarning: "请先选择内容类型",
        formatModalTitle: "选择所需的内容类型",
        formatMp4: "MP4 (视频)",
        formatMp3: "MP3 (音频)",
        formatJpg: "多张图片",
        closeModal: "完成",
        downloadButton: "下载内容",
        feature1Title: "极速下载",
        feature1Desc: "凭借我们的先进技术，实现最快的下载时间",
        feature2Title: "安全可靠",
        feature2Desc: "您的数据始终受到高级加密保护",
        feature3Title: "无限制",
        feature3Desc: "对大小或下载次数没有限制",
        urlWarningInvalid: "⚠️ 无效或不支持的URL",
        urlWarningEmpty: "⚠️ 请输入内容URL",
        langArabic: "阿拉伯语",
        langEnglish: "英语",
        langFrench: "法语",
        langChinese: "中文",
        langJapanese: "日语",
        pasteSuccess: "链接粘贴成功！",
        pasteError: "无法访问剪贴板",
        downloadCancelled: "下载已取消",
        processing: "处理中",
        preparing: "准备中",
        downloading: "下载中",
        downloadComplete: "下载成功完成！",
        preparingDownload: "准备下载",
        historyTitle: "下载历史",
        noHistory: "暂无下载历史",
        copyUrl: "复制URL",
        deleteItem: "删除",
        copySuccess: "URL已复制！",
        deleteConfirmTitle: "确认删除",
        deleteConfirmMessage: "您确定要删除所有下载历史吗？此操作无法撤消。",
        cancel: "取消",
        delete: "全部删除",
        galleryTitle: "图片库",
        selectedImages: "已选图片",
        selectAll: "全选",
        deselectAll: "取消全选",
        back: "返回",
        downloadSelectedImages: "下载所选图片",
        errorVideoUnavailable: "⚠️ 无法下载此视频\n视频可能为私有或不可用",
        scrollHint: "滑动查看更多图片",
        seoTitle: "关于 Kik vid 网站",
        seoWhatIs: "什么是 Kik Vid？",
        seoWhatIsDesc: "Kik Vid 是一个免费的在线 TikTok 视频下载器，允许用户直接从浏览器下载无水印的 TikTok 高清视频，无需安装任何应用程序或软件。",
        seoHowTo: "如何下载 TikTok 视频",
        seoHowToDesc: "从 TikTok 应用程序复制视频链接，将其粘贴到输入字段中，然后单击下载按钮。",
        seoFeatures: "Kik Vid 功能",
        seoFeatures1: "完全免费，不收取任何费用",
        seoFeatures2: "视频无水印",
        seoFeatures3: "高质量高清下载",
        seoFeatures4: "超快下载速度",
        seoFeatures5: "支持所有移动设备和计算机",
        seoFeatures6: "无需登录或创建账户",
        seoSafe: "Kik Vid 安全吗？",
        seoSafeDesc: "是的，Kik Vid 完全安全，我们不存储任何用户个人数据。所有下载均通过安全连接完成。",
        networkError: "⚠️ 网络连接错误",
        retry: "重试",
        loading: "加载中...",
        compression: "压缩文件中...",
        saved: "已保存"
    },
    ja: {
        tagline: "高度なダウンロードプラットフォーム - 忘れられない体験",
        mainTitle: "ワンタップでコンテンツをダウンロード",
        urlPlaceholder: "https://www.tiktok.com/@user/video/123456",
        formatButton: "コンテンツタイプを選択",
        formatWarning: "最初にコンテンツタイプを選択してください",
        formatModalTitle: "必要なコンテンツタイプを選択",
        formatMp4: "MP4 (ビデオ)",
        formatMp3: "MP3 (オーディオ)",
        formatJpg: "複数画像",
        closeModal: "完了",
        downloadButton: "コンテンツをダウンロード",
        feature1Title: "超高速",
        feature1Desc: "当社の高度な技術により、最速のダウンロード時間を実現",
        feature2Title: "安全・安心",
        feature2Desc: "高度な暗号化によりデータを常に保護",
        feature3Title: "無制限",
        feature3Desc: "サイズやダウンロード回数に制限なし",
        urlWarningInvalid: "⚠️ 無効またはサポートされていないURL",
        urlWarningEmpty: "⚠️ コンテンツURLを入力してください",
        langArabic: "アラビア語",
        langEnglish: "英語",
        langFrench: "フランス語",
        langChinese: "中国語",
        langJapanese: "日本語",
        pasteSuccess: "リンクが正常に貼り付けられました！",
        pasteError: "クリップボードにアクセスできませんでした",
        downloadCancelled: "ダウンロードがキャンセルされました",
        processing: "処理中",
        preparing: "準備中",
        downloading: "ダウンロード中",
        downloadComplete: "ダウンロードが正常に完了しました！",
        preparingDownload: "ダウンロードの準備中",
        historyTitle: "ダウンロード履歴",
        noHistory: "まだダウンロード履歴はありません",
        copyUrl: "URLをコピー",
        deleteItem: "削除",
        copySuccess: "URLがコピーされました！",
        deleteConfirmTitle: "削除の確認",
        deleteConfirmMessage: "すべてのダウンロード履歴を削除してもよろしいですか？この操作は元に戻せません。",
        cancel: "キャンセル",
        delete: "すべて削除",
        galleryTitle: "画像ギャラリー",
        selectedImages: "選択された画像",
        selectAll: "すべて選択",
        deselectAll: "すべて解除",
        back: "戻る",
        downloadSelectedImages: "選択した画像をダウンロード",
        errorVideoUnavailable: "⚠️ このビデオをダウンロードできません\nビデオが非公開または利用できない可能性があります",
        scrollHint: "スワイプして画像を表示",
        seoTitle: "Kik vid ウェブサイトについて",
        seoWhatIs: "Kik Vid とは？",
        seoWhatIsDesc: "Kik Vid は、透かしなしのTikTok動画をブラウザから直接高品質HDでダウンロードできる無料のオンラインTikTok動画ダウンローダーです。アプリやソフトウェアをインストールする必要はありません。",
        seoHowTo: "TikTok動画のダウンロード方法",
        seoHowToDesc: "TikTokアプリから動画リンクをコピーし、入力フィールドに貼り付けて、ダウンロードボタンをクリックします。",
        seoFeatures: "Kik Vid の特徴",
        seoFeatures1: "完全無料、料金なし",
        seoFeatures2: "動画に透かしなし",
        seoFeatures3: "高品質HDダウンロード",
        seoFeatures4: "超高速ダウンロード速度",
        seoFeatures5: "すべてのモバイルデバイスとコンピューターをサポート",
        seoFeatures6: "ログインやアカウント作成は不要",
        seoSafe: "Kik Vid は安全ですか？",
        seoSafeDesc: "はい、Kik Vid は完全に安全です。ユーザーの個人データは一切保存しません。すべてのダウンロードは安全な接続を通じて行われます。",
        networkError: "⚠️ ネットワーク接続エラー",
        retry: "再試行",
        loading: "読み込み中...",
        compression: "ファイルを圧縮中...",
        saved: "保存しました"
    }
};

// ================== فئات مساعدة جديدة ==================
class DownloadError extends Error {
    constructor(message, code, recoverable = false) {
        super(message);
        this.code = code;
        this.recoverable = recoverable;
        this.name = 'DownloadError';
        this.timestamp = new Date().toISOString();
    }
}

class ErrorTracker {
    static async track(error, context = {}) {
        const errorData = {
            name: error.name,
            message: error.message,
            code: error.code,
            stack: error.stack,
            context,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            platform: navigator.platform,
            language: navigator.language
        };

        // إرسال بيانات الخطأ للخادم (في وضع الإنتاج فقط)
        if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
            try {
                await fetch('/api/telemetry', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        type: 'error',
                        data: errorData
                    })
                });
            } catch (e) {
                // تجاهل أخطاء إرسال التتبع
            }
        }

        console.error('[ErrorTracker]', errorData);
        return errorData;
    }
}

class PerformanceMonitor {
    constructor() {
        this.metrics = new Map();
        this.startTime = performance.now();
        this.pageLoadTime = null;
    }

    startMeasurement(name) {
        this.metrics.set(name, {
            start: performance.now(),
            end: null,
            duration: null
        });
    }

    endMeasurement(name) {
        const metric = this.metrics.get(name);
        if (metric) {
            metric.end = performance.now();
            metric.duration = metric.end - metric.start;
            return metric.duration;
        }
        return null;
    }

    measurePageLoad() {
        if (performance.timing) {
            this.pageLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page loaded in ${this.pageLoadTime}ms`);
        }
    }

    getMetrics() {
        const metrics = [];
        for (const [name, data] of this.metrics.entries()) {
            metrics.push({
                name,
                duration: data.duration
            });
        }
        return metrics;
    }

    logMetrics() {
        const metrics = this.getMetrics();
        console.table(metrics);
        if (this.pageLoadTime) {
            console.log(`Total page load: ${this.pageLoadTime}ms`);
        }
    }
}

class CacheManager {
    constructor(namespace = 'kikvid', ttl = PERFORMANCE_CONFIG.CACHE_TTL) {
        this.namespace = namespace;
        this.ttl = ttl;
        this.cache = new Map();
        this.init();
    }

    init() {
        try {
            const saved = localStorage.getItem(this.namespace);
            if (saved) {
                const data = JSON.parse(saved);
                const now = Date.now();
                
                for (const [key, item] of Object.entries(data)) {
                    if (now - item.timestamp < this.ttl) {
                        this.cache.set(key, item);
                    }
                }
                
                console.log(`Cache initialized with ${this.cache.size} items`);
            }
        } catch (error) {
            console.error('Cache initialization failed:', error);
        }
    }

    set(key, value) {
        const item = {
            value,
            timestamp: Date.now()
        };
        
        this.cache.set(key, item);
        
        // الحفاظ على حجم الكاش
        if (this.cache.size > PERFORMANCE_CONFIG.CACHE_SIZE) {
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
        
        this.persist();
        return value;
    }

    get(key) {
        const item = this.cache.get(key);
        
        if (!item) {
            return null;
        }

        if (Date.now() - item.timestamp > this.ttl) {
            this.cache.delete(key);
            this.persist();
            return null;
        }

        return item.value;
    }

    delete(key) {
        const result = this.cache.delete(key);
        this.persist();
        return result;
    }

    clear() {
        this.cache.clear();
        localStorage.removeItem(this.namespace);
    }

    persist() {
        try {
            const data = Object.fromEntries(this.cache);
            localStorage.setItem(this.namespace, JSON.stringify(data));
        } catch (error) {
            console.error('Cache persistence failed:', error);
        }
    }

    size() {
        return this.cache.size;
    }

    keys() {
        return Array.from(this.cache.keys());
    }
}

class RetryHandler {
    constructor(maxAttempts = PERFORMANCE_CONFIG.RETRY_ATTEMPTS, baseDelay = 1000) {
        this.maxAttempts = maxAttempts;
        this.baseDelay = baseDelay;
    }

    async execute(fn, onRetry = null) {
        let lastError;
        
        for (let attempt = 1; attempt <= this.maxAttempts; attempt++) {
            try {
                return await fn();
            } catch (error) {
                lastError = error;
                
                if (attempt === this.maxAttempts) {
                    throw error;
                }
                
                if (onRetry) {
                    onRetry(attempt, error);
                }
                
                const delay = this.baseDelay * Math.pow(2, attempt - 1); // Exponential backoff
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
        
        throw lastError;
    }
}

class ImagePreloader {
    constructor() {
        this.loaded = new Set();
        this.queue = new Set();
        this.observer = null;
        
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        this.loadImage(img.dataset.src);
                        this.observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.1
            });
        }
    }

    preload(images) {
        const promises = [];
        const limit = Math.min(images.length, PERFORMANCE_CONFIG.IMAGE_PRELOAD_LIMIT);
        
        for (let i = 0; i < limit; i++) {
            const src = images[i];
            if (!this.loaded.has(src) && !this.queue.has(src)) {
                promises.push(this.loadImage(src));
            }
        }

        return Promise.all(promises);
    }

    lazyLoad(element) {
        if (this.observer) {
            this.observer.observe(element);
        } else {
            this.loadImage(element.dataset.src);
        }
    }

    loadImage(src) {
        return new Promise((resolve, reject) => {
            if (this.loaded.has(src)) {
                resolve();
                return;
            }

            this.queue.add(src);
            const img = new Image();
            
            img.onload = () => {
                this.loaded.add(src);
                this.queue.delete(src);
                resolve();
            };
            
            img.onerror = () => {
                this.queue.delete(src);
                reject(new Error(`Failed to load image: ${src}`));
            };
            
            img.src = src;
        });
    }
}

class DownloadManager {
    constructor() {
        this.queue = [];
        this.activeDownloads = 0;
        this.maxConcurrent = 3;
        this.cache = new CacheManager('downloads');
    }

    async download(url, filename) {
        return new Promise((resolve, reject) => {
            this.queue.push({ url, filename, resolve, reject });
            this.processQueue();
        });
    }

    async processQueue() {
        if (this.activeDownloads >= this.maxConcurrent || this.queue.length === 0) {
            return;
        }

        this.activeDownloads++;
        const task = this.queue.shift();

        try {
            // التحقق من الكاش أولاً
            const cached = this.cache.get(task.url);
            if (cached) {
                this.downloadBlob(cached, task.filename);
                task.resolve();
            } else {
                const response = await fetch(task.url);
                if (!response.ok) throw new Error(`Download failed: ${response.status}`);
                
                const blob = await response.blob();
                
                // تخزين في الكاش
                this.cache.set(task.url, blob);
                
                this.downloadBlob(blob, task.filename);
                task.resolve();
            }
        } catch (error) {
            task.reject(error);
        } finally {
            this.activeDownloads--;
            this.processQueue();
        }
    }

    downloadBlob(blob, filename) {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(blobUrl);
        }, 100);
    }

    clearQueue() {
        this.queue = [];
    }
}

class URLValidator {
    static validate(url) {
        if (!url) {
            return { valid: false, error: 'URL is required' };
        }

        // منع URLs خطرة
        const dangerousPatterns = [
            /^javascript:/i,
            /^data:/i,
            /^file:/i,
            /^vbscript:/i,
            /^about:/i,
            /^blob:/i,
            /^ftp:/i
        ];

        for (const pattern of dangerousPatterns) {
            if (pattern.test(url.trim())) {
                return { valid: false, error: 'Dangerous URL detected' };
            }
        }

        try {
            // إضافة https:// إذا لم يكن موجوداً
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }

            const urlObj = new URL(url);
            
            // التحقق من البروتوكول
            if (!['http:', 'https:'].includes(urlObj.protocol)) {
                return { valid: false, error: 'Invalid protocol' };
            }

            // قائمة بيضاء بالدومينات المسموحة
            const allowedDomains = [
                'tiktok.com', 'vm.tiktok.com', 'vt.tiktok.com',
                'www.tiktok.com',
                'youtube.com', 'www.youtube.com', 'youtu.be',
                'instagram.com', 'www.instagram.com'
            ];

            const hostname = urlObj.hostname.toLowerCase();
            const isValidDomain = allowedDomains.some(domain => 
                hostname === domain || hostname.endsWith('.' + domain)
            );

            if (!isValidDomain) {
                return { 
                    valid: false, 
                    error: 'Unsupported platform. Please use TikTok, YouTube, or Instagram URLs.' 
                };
            }

            // التحقق من المسار لـ TikTok
            if (hostname.includes('tiktok') && !urlObj.pathname.includes('/video/') && !urlObj.pathname.includes('/@')) {
                return { 
                    valid: false, 
                    error: 'Invalid TikTok URL. Please provide a video URL.' 
                };
            }

            return { valid: true, url: urlObj.href };

        } catch (error) {
            return { valid: false, error: 'Invalid URL format' };
        }
    }

    static extractPlatform(url) {
        try {
            const urlObj = new URL(url);
            const hostname = urlObj.hostname.toLowerCase();

            if (hostname.includes('tiktok')) return 'tiktok';
            if (hostname.includes('youtube') || hostname.includes('youtu.be')) return 'youtube';
            if (hostname.includes('instagram')) return 'instagram';
            
            return 'unknown';
        } catch {
            return 'unknown';
        }
    }
}

// ================== تهيئة التطبيق ==================
document.addEventListener('DOMContentLoaded', function() {
    // إعدادات الأداء
    const performanceMonitor = new PerformanceMonitor();
    performanceMonitor.startMeasurement('pageLoad');
    
    // إدارة التنزيل
    const downloadManager = new DownloadManager();
    const imagePreloader = new ImagePreloader();
    
    // العناصر الرئيسية
    const languageToggle = document.getElementById('languageToggle');
    const languageOptions = document.getElementById('languageOptions');
    const languageButtons = document.querySelectorAll('.language-option');
    const html = document.documentElement;
    
    const downloadBtn = document.getElementById('downloadBtn');
    const urlInput = document.getElementById('urlInput');
    const urlWarning = document.getElementById('urlWarning');
    const formatWarning = document.getElementById('formatWarning');
    const genericError = document.getElementById('genericError');
    const clearUrlBtn = document.getElementById('clearUrlBtn');
    const pasteIcon = document.getElementById('pasteIcon');
    
    // عناصر التحميل
    const downloadProgress = document.getElementById('downloadProgress');
    const downloadSubText = document.getElementById('downloadSubText');
    const btnLoader = document.getElementById('btnLoader');
    
    // شريط التقدم
    const progressContainer = document.getElementById('progressContainer');
    const progressTitle = document.getElementById('progressTitle');
    const progressPercent = document.getElementById('progressPercent');
    const progressFill = document.getElementById('progressFill');
    
    // نافذة اختيار الصيغة
    const openFormatBtn = document.getElementById("openFormatBtn");
    const formatBtnText = document.getElementById("formatBtnText");
    const selectedFormatBadge = document.getElementById("selectedFormatBadge");
    const formatModal = document.getElementById("formatModal");
    const closeModal = document.getElementById("closeModal");
    const formatButtons = document.querySelectorAll(".format-btn");
    
    // معرض الصور
    const galleryModal = document.getElementById('galleryModal');
    const galleryContainer = document.getElementById('galleryContainer');
    const galleryHint = document.getElementById('galleryHint');
    const closeGallery = document.getElementById('closeGallery');
    const cancelGallery = document.getElementById('cancelGallery');
    const downloadSelected = document.getElementById('downloadSelected');
    const selectAllBtn = document.getElementById('selectAllBtn');
    const deselectAllBtn = document.getElementById('deselectAllBtn');
    const selectedCount = document.getElementById('selectedCount');
    const downloadCount = document.getElementById('downloadCount');
    
    // سجل التحميلات
    const historyToggle = document.getElementById('historyToggle');
    const historyOptions = document.getElementById('historyOptions');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    const historyContainer = document.getElementById('historyContainer');
    const emptyHistory = document.getElementById('emptyHistory');
    
    // نافذة تأكيد الحذف
    const deleteConfirmModal = document.getElementById('deleteConfirmModal');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    
    // عناصر SEO
    const seoBoxes = {
        'ar': document.getElementById('seo-ar'),
        'en': document.getElementById('seo-en'),
        'fr': document.getElementById('seo-fr'),
        'zh': document.getElementById('seo-zh'),
        'ja': document.getElementById('seo-ja')
    };
    
    // صوت النقر
    const clickSound = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==');
    clickSound.volume = 0.2;
    
    // متغيرات النظام
    let selectedFormat = null;
    let selectedImages = [];
    let currentImageUrls = [];
    let isDownloading = false;
    let downloadController = null;
    let progressInterval = null;
    let downloadHistory = JSON.parse(localStorage.getItem('kickvid-history') || '[]');
    let currentLang = localStorage.getItem('kickvid-lang') || 'ar';
    
    // ===== العناصر التي سيتم تجميدها أثناء التحميل =====
    const elementsToFreeze = [
        openFormatBtn,
        urlInput,
        clearUrlBtn,
        pasteIcon,
        historyToggle,
        clearHistoryBtn,
        languageToggle
    ];
    
    // ===== دوال المساعدة =====
    function encodeUrl(url) {
        return btoa(encodeURIComponent(url));
    }

    function freezeUIElements() {
        elementsToFreeze.forEach(element => {
            if (element) {
                element.style.pointerEvents = 'none';
                element.style.opacity = '0.6';
                element.classList.add('frozen');
            }
        });
        
        if (historyOptions.classList.contains('show')) {
            const historyElements = historyOptions.querySelectorAll('button, .history-item');
            historyElements.forEach(el => {
                el.style.pointerEvents = 'none';
                el.style.opacity = '0.6';
            });
        }
        
        if (languageOptions.classList.contains('show')) {
            const langElements = languageOptions.querySelectorAll('button');
            langElements.forEach(el => {
                el.style.pointerEvents = 'none';
                el.style.opacity = '0.6';
            });
        }
    }
    
    function unfreezeUIElements() {
        elementsToFreeze.forEach(element => {
            if (element) {
                element.style.pointerEvents = '';
                element.style.opacity = '';
                element.classList.remove('frozen');
            }
        });
        
        if (historyOptions.classList.contains('show')) {
            const historyElements = historyOptions.querySelectorAll('button, .history-item');
            historyElements.forEach(el => {
                el.style.pointerEvents = '';
                el.style.opacity = '';
            });
        }
        
        if (languageOptions.classList.contains('show')) {
            const langElements = languageOptions.querySelectorAll('button');
            langElements.forEach(el => {
                el.style.pointerEvents = '';
                el.style.opacity = '';
            });
        }
    }
    
    function detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        let lang = 'en';
        
        if (browserLang.startsWith('ar')) {
            lang = 'ar';
        } else if (browserLang.startsWith('fr')) {
            lang = 'fr';
        } else if (browserLang.startsWith('zh')) {
            lang = 'zh';
        } else if (browserLang.startsWith('ja')) {
            lang = 'ja';
        } else if (browserLang.startsWith('en')) {
            lang = 'en';
        }
        
        return lang;
    }
    
    function setLanguage(lang) {
        if (lang === 'ar') {
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'ar');
        } else if (lang === 'zh' || lang === 'ja') {
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', lang);
        } else {
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', lang);
        }
        
        updateTexts(lang);
        updateDynamicTexts(lang);
        updateSeoMetaTags(lang);
        updateSeoBoxWithAnimation(lang);
        
        languageButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        localStorage.setItem('kickvid-lang', lang);
        currentLang = lang;
        renderHistory();
        updateDownloadButtonState();
    }
    
    function setLanguageWithAnimation(lang, animate = true) {
        if (animate) {
            const mainContent = document.querySelector('.container');
            mainContent.style.opacity = '0.5';
            mainContent.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                setLanguage(lang);
                
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
                mainContent.style.transition = 'all 0.3s ease';
                
                setTimeout(() => {
                    mainContent.style.transition = '';
                }, 300);
            }, 200);
        } else {
            setLanguage(lang);
        }
    }
    
    function updateTexts(lang) {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.getAttribute('type') === 'text') {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }
    
    function updateDynamicTexts(lang) {
        if (formatBtnText && translations[lang]?.formatButton) {
            if (selectedFormat) {
                let formatText = '';
                switch(selectedFormat) {
                    case 'mp4':
                        formatText = lang === 'ar' ? 'فيديو' : 
                                     lang === 'fr' ? 'Vidéo' :
                                     lang === 'zh' ? '视频' :
                                     lang === 'ja' ? 'ビデオ' : 'Video';
                        break;
                    case 'mp3':
                        formatText = lang === 'ar' ? 'صوت' : 
                                     lang === 'fr' ? 'Audio' :
                                     lang === 'zh' ? '音频' :
                                     lang === 'ja' ? 'オーディオ' : 'Audio';
                        break;
                    case 'jpg':
                        formatText = lang === 'ar' ? 'صور' : 
                                     lang === 'fr' ? 'Images' :
                                     lang === 'zh' ? '图片' :
                                     lang === 'ja' ? '画像' : 'Images';
                        break;
                }
                
                if (lang === 'ar') {
                    formatBtnText.textContent = `نوع المحتوى: ${formatText}`;
                } else if (lang === 'fr') {
                    formatBtnText.textContent = `Type de contenu: ${formatText}`;
                } else if (lang === 'zh') {
                    formatBtnText.textContent = `内容类型: ${formatText}`;
                } else if (lang === 'ja') {
                    formatBtnText.textContent = `コンテンツタイプ: ${formatText}`;
                } else {
                    formatBtnText.textContent = `Content Type: ${formatText}`;
                }
            } else {
                formatBtnText.textContent = translations[lang].formatButton;
            }
        }
        
        if (formatWarning && translations[lang]?.formatWarning) {
            formatWarning.querySelector('span').textContent = translations[lang].formatWarning;
        }
        
        if (downloadBtn) {
            const mainText = downloadBtn.querySelector('.main-text');
            if (mainText && translations[lang]?.downloadButton) {
                mainText.textContent = translations[lang].downloadButton;
            }
            
            if (downloadSubText) {
                if (selectedFormat) {
                    switch(selectedFormat) {
                        case 'mp4':
                            downloadSubText.textContent = lang === 'ar' ? 'جودة فيديو عالية' : 
                                                           lang === 'fr' ? 'Vidéo haute qualité' :
                                                           lang === 'zh' ? '高质量视频' :
                                                           lang === 'ja' ? '高品質ビデオ' : 'High quality video';
                            break;
                        case 'mp3':
                            downloadSubText.textContent = lang === 'ar' ? 'صوت عالي الجودة' : 
                                                           lang === 'fr' ? 'Audio haute qualité' :
                                                           lang === 'zh' ? '高质量音频' :
                                                           lang === 'ja' ? '高品質オーディオ' : 'High quality audio';
                            break;
                        case 'jpg':
                            downloadSubText.textContent = lang === 'ar' ? 'صور متعددة' : 
                                                           lang === 'fr' ? 'Images multiples' :
                                                           lang === 'zh' ? '多张图片' :
                                                           lang === 'ja' ? '複数画像' : 'Multiple images';
                            break;
                        default:
                            downloadSubText.textContent = lang === 'ar' ? 'اختر نوع المحتوى أولاً' : 
                                                           lang === 'fr' ? 'Choisissez d\'abord un type de contenu' :
                                                           lang === 'zh' ? '请先选择内容类型' :
                                                           lang === 'ja' ? '最初にコンテンツタイプを選択してください' : 'Choose a content type first';
                    }
                } else {
                    downloadSubText.textContent = lang === 'ar' ? 'اختر نوع المحتوى أولاً' : 
                                                   lang === 'fr' ? 'Choisissez d\'abord un type de contenu' :
                                                   lang === 'zh' ? '请先选择内容类型' :
                                                   lang === 'ja' ? '最初にコンテンツタイプを選択してください' : 'Choose a content type first';
                }
            }
        }
        
        const formatBtns = document.querySelectorAll('.format-btn');
        formatBtns.forEach(btn => {
            const format = btn.getAttribute('data-format');
            const key = btn.getAttribute('data-key');
            
            if (translations[lang] && translations[lang][key]) {
                const span = btn.querySelector('.btn-text');
                if (span) {
                    span.textContent = translations[lang][key];
                }
            }
        });
        
        const formatModalTitle = document.querySelector('#formatModal h2');
        if (formatModalTitle && translations[lang]?.formatModalTitle) {
            formatModalTitle.textContent = translations[lang].formatModalTitle;
        }
        
        const closeModalBtn = document.getElementById('closeModal');
        if (closeModalBtn && translations[lang]?.closeModal) {
            const span = closeModalBtn.querySelector('.btn-text');
            if (span) {
                span.textContent = translations[lang].closeModal;
            }
        }
    }
    
    function updateSeoMetaTags(lang) {
        document.documentElement.lang = lang;
        
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
        
        const titleElement = document.querySelector('title');
        const descriptionMeta = document.querySelector('meta[name="description"]');
        const keywordsMeta = document.querySelector('meta[name="keywords"]');
        
        if (lang === 'en') {
            if (titleElement) titleElement.textContent = 'Kik Vid | Download TikTok Videos Without Watermark Free';
            if (descriptionMeta) descriptionMeta.content = 'Kik Vid is a free TikTok video downloader without watermark. Download TikTok videos in HD quality as MP4 or extract MP3 audio easily.';
            if (keywordsMeta) keywordsMeta.content = 'TikTok video downloader, Download TikTok video without watermark, TikTok MP4 downloader, TikTok MP3 downloader, free video downloader';
        } else if (lang === 'fr') {
            if (titleElement) titleElement.textContent = 'Kik Vid | Télécharger des vidéos TikTok Sans Filigrane Gratuitement';
            if (descriptionMeta) descriptionMeta.content = 'Kik Vid est un téléchargeur de vidéos TikTok gratuit sans filigrane. Téléchargez des vidéos TikTok en qualité HD au format MP4 ou extrayez l\'audio MP3 facilement.';
            if (keywordsMeta) keywordsMeta.content = 'téléchargeur vidéo TikTok, télécharger vidéo TikTok sans filigrane, téléchargeur TikTok MP4, téléchargeur TikTok MP3';
        } else if (lang === 'zh') {
            if (titleElement) titleElement.textContent = 'Kik Vid | 免费下载无水印TikTok视频';
            if (descriptionMeta) descriptionMeta.content = 'Kik Vid 是免费的 TikTok 视频下载器，无水印。以高清 MP4 格式下载 TikTok 视频或轻松提取 MP3 音频。';
            if (keywordsMeta) keywordsMeta.content = 'TikTok视频下载器, 下载无水印TikTok视频, TikTok MP4下载器, TikTok MP3下载器, 免费视频下载器';
        } else if (lang === 'ja') {
            if (titleElement) titleElement.textContent = 'Kik Vid | 透かしなしTikTok動画無料ダウンロード';
            if (descriptionMeta) descriptionMeta.content = 'Kik Vidは透かしなしの無料TikTok動画ダウンローダーです。高品質MP4形式でTikTok動画をダウンロード、またはMP3オーディオを簡単に抽出できます。';
            if (keywordsMeta) keywordsMeta.content = 'TikTok動画ダウンローダー, 透かしなしTikTok動画ダウンロード, TikTok MP4ダウンローダー, TikTok MP3ダウンローダー, 無料動画ダウンローダー';
        } else {
            if (titleElement) titleElement.textContent = 'Kik Vid | تحميل فيديوهات تيك توك بدون علامة مائية مجانًا';
            if (descriptionMeta) descriptionMeta.content = 'Kik Vid موقع مجاني لتحميل فيديوهات تيك توك بدون علامة مائية وبجودة عالية HD. يمكنك تحميل فيديو TikTok بصيغة MP4 أو الصوت MP3 بسهولة وبدون برامج.';
            if (keywordsMeta) keywordsMeta.content = 'تحميل فيديو تيك توك, تحميل فيديو تيك توك بدون علامة مائية, تحميل تيك توك mp4, تحميل صوت تيك توك mp3, TikTok video downloader, Download TikTok video without watermark, TikTok MP4 downloader, TikTok MP3 downloader';
        }
    }
    
    function updateSeoBoxWithAnimation(lang) {
        Object.values(seoBoxes).forEach(box => {
            if (box) {
                box.style.display = 'none';
            }
        });
        
        if (seoBoxes[lang]) {
            if (seoBoxes[lang].style.display === 'none') {
                seoBoxes[lang].style.display = 'block';
                
                seoBoxes[lang].style.opacity = '0';
                seoBoxes[lang].style.transform = lang === 'ar' ? 'translateX(20px)' : 'translateX(-20px)';
                
                setTimeout(() => {
                    seoBoxes[lang].style.transition = 'all 0.4s ease';
                    seoBoxes[lang].style.opacity = '1';
                    seoBoxes[lang].style.transform = 'translateX(0)';
                    
                    setTimeout(() => {
                        seoBoxes[lang].style.transition = '';
                    }, 400);
                }, 50);
            }
        }
    }
    
    function updateSeoContent(lang) {
        const seoBox = seoBoxes[lang];
        if (!seoBox) return;
        
        const currentTranslations = translations[lang];
        
        const summary = seoBox.querySelector('summary');
        if (summary && currentTranslations.seoTitle) {
            summary.textContent = currentTranslations.seoTitle;
        }
        
        const h2Elements = seoBox.querySelectorAll('h2');
        h2Elements.forEach((h2, index) => {
            if (index === 0 && currentTranslations.seoWhatIs) {
                h2.textContent = currentTranslations.seoWhatIs;
                const nextP = h2.nextElementSibling;
                if (nextP && nextP.tagName === 'P' && currentTranslations.seoWhatIsDesc) {
                    nextP.textContent = currentTranslations.seoWhatIsDesc;
                }
            } else if (index === 1 && currentTranslations.seoHowTo) {
                h2.textContent = currentTranslations.seoHowTo;
                const nextP = h2.nextElementSibling;
                if (nextP && nextP.tagName === 'P' && currentTranslations.seoHowToDesc) {
                    nextP.textContent = currentTranslations.seoHowToDesc;
                }
            } else if (index === 2 && currentTranslations.seoFeatures) {
                h2.textContent = currentTranslations.seoFeatures;
                const nextUl = h2.nextElementSibling;
                if (nextUl && nextUl.tagName === 'UL') {
                    const liElements = nextUl.querySelectorAll('li');
                    if (liElements.length >= 6) {
                        liElements[0].textContent = currentTranslations.seoFeatures1;
                        liElements[1].textContent = currentTranslations.seoFeatures2;
                        liElements[2].textContent = currentTranslations.seoFeatures3;
                        liElements[3].textContent = currentTranslations.seoFeatures4;
                        liElements[4].textContent = currentTranslations.seoFeatures5;
                        liElements[5].textContent = currentTranslations.seoFeatures6;
                    }
                }
            } else if (index === 3 && currentTranslations.seoSafe) {
                h2.textContent = currentTranslations.seoSafe;
                const nextP = h2.nextElementSibling;
                if (nextP && nextP.tagName === 'P' && currentTranslations.seoSafeDesc) {
                    nextP.textContent = currentTranslations.seoSafeDesc;
                }
            }
        });
    }
    
    // ===== نظام سجل التحميلات =====
    function addToHistory(url, format, name) {
        const historyItem = {
            id: Date.now(),
            url: url,
            format: format,
            name: name || `${translations[currentLang].downloadButton}_${new Date().toLocaleString()}`,
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };
        
        downloadHistory.unshift(historyItem);
        
        if (downloadHistory.length > 50) {
            downloadHistory = downloadHistory.slice(0, 50);
        }
        
        localStorage.setItem('kickvid-history', JSON.stringify(downloadHistory));
        renderHistory();
    }

    function renderHistory() {
        if (!historyContainer) return;
        
        if (downloadHistory.length === 0) {
            historyContainer.innerHTML = '';
            emptyHistory.style.display = 'block';
            return;
        }
        
        emptyHistory.style.display = 'none';
        
        historyContainer.innerHTML = downloadHistory.map(item => `
            <div class="history-item" data-id="${item.id}">
                <div class="history-icon">
                    ${getFormatIcon(item.format)}
                </div>
                <div class="history-details">
                    <h5>${item.name}</h5>
                    <div class="history-meta">
                        <span class="history-date">
                            <i class="far fa-calendar"></i> ${item.date} ${item.time}
                        </span>
                        <span class="history-format">
                            ${getFormatName(item.format, currentLang)}
                        </span>
                    </div>
                    <div class="history-url" title="${item.url}">
                        <i class="fas fa-link"></i>
                        <span>${truncateUrl(item.url)}</span>
                    </div>
                </div>
                <div class="history-actions">
                    <button class="copy-history-url" title="${translations[currentLang].copyUrl}" data-url="${item.url}">
                        <i class="fas fa-copy"></i>
                    </button>
                    <button class="delete-history-item" title="${translations[currentLang].deleteItem}" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
        
        document.querySelectorAll('.copy-history-url').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const url = this.getAttribute('data-url');
                copyToClipboard(url);
                showTemporaryMessage(
                    translations[currentLang].copySuccess,
                    'success'
                );
                clickSound.play();
            });
        });
        
        document.querySelectorAll('.delete-history-item').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const id = parseInt(this.getAttribute('data-id'));
                deleteHistoryItem(id);
                clickSound.play();
            });
        });
        
        document.querySelectorAll('.history-item').forEach(item => {
            item.addEventListener('click', function(e) {
                if (e.target.closest('.history-actions')) {
                    return;
                }
                
                const id = parseInt(this.getAttribute('data-id'));
                const historyItem = downloadHistory.find(item => item.id === id);
                if (historyItem) {
                    urlInput.value = historyItem.url;
                    validateUrl(historyItem.url);
                    historyOptions.classList.remove('show');
                    updateDownloadButtonState();
                }
            });
        });
    }

    function getFormatIcon(format) {
        switch(format) {
            case 'mp4': return '<i class="fas fa-video"></i>';
            case 'mp3': return '<i class="fas fa-music"></i>';
            case 'jpg': return '<i class="fas fa-images"></i>';
            default: return '<i class="fas fa-file"></i>';
        }
    }

    function getFormatName(format, lang) {
        if (translations[lang]) {
            switch(format) {
                case 'mp4': return lang === 'ar' ? 'فيديو' : lang === 'fr' ? 'Vidéo' : lang === 'zh' ? '视频' : lang === 'ja' ? 'ビデオ' : 'Video';
                case 'mp3': return lang === 'ar' ? 'صوت' : lang === 'fr' ? 'Audio' : lang === 'zh' ? '音频' : lang === 'ja' ? 'オーディオ' : 'Audio';
                case 'jpg': return lang === 'ar' ? 'صور' : lang === 'fr' ? 'Images' : lang === 'zh' ? '图片' : lang === 'ja' ? '画像' : 'Images';
                default: return lang === 'ar' ? 'ملف' : lang === 'fr' ? 'Fichier' : lang === 'zh' ? '文件' : lang === 'ja' ? 'ファイル' : 'File';
            }
        } else {
            switch(format) {
                case 'mp4': return 'Video';
                case 'mp3': return 'Audio';
                case 'jpg': return 'Images';
                default: return 'File';
            }
        }
    }

    function truncateUrl(url, maxLength = 30) {
        if (url.length <= maxLength) return url;
        return url.substring(0, maxLength) + '...';
    }

    function deleteHistoryItem(id) {
        downloadHistory = downloadHistory.filter(item => item.id !== id);
        localStorage.setItem('kickvid-history', JSON.stringify(downloadHistory));
        renderHistory();
    }

    function showDeleteConfirmation() {
        deleteConfirmModal.style.display = 'flex';
    }

    function clearAllHistory() {
        downloadHistory = [];
        localStorage.removeItem('kickvid-history');
        renderHistory();
        deleteConfirmModal.style.display = 'none';
        
        showTemporaryMessage(
            currentLang === 'ar' ? '✅ تم حذف سجل التحميلات بنجاح' : 
            currentLang === 'fr' ? '✅ Historique des téléchargements effacé avec succès' :
            currentLang === 'zh' ? '✅ 下载历史记录已成功清除' :
            currentLang === 'ja' ? '✅ ダウンロード履歴が正常に消去されました' :
            '✅ Download history cleared successfully',
            'success'
        );
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    // ===== نظام اختيار الصيغة =====
    function updateFormatButton() {
        let formatText = '';
        let badgeText = '';
        
        switch(selectedFormat) {
            case 'mp4':
                formatText = currentLang === 'ar' ? 'فيديو' : 
                             currentLang === 'fr' ? 'Vidéo' :
                             currentLang === 'zh' ? '视频' :
                             currentLang === 'ja' ? 'ビデオ' : 'Video';
                badgeText = 'MP4';
                break;
            case 'mp3':
                formatText = currentLang === 'ar' ? 'صوت' : 
                             currentLang === 'fr' ? 'Audio' :
                             currentLang === 'zh' ? '音频' :
                             currentLang === 'ja' ? 'オーディオ' : 'Audio';
                badgeText = 'MP3';
                break;
            case 'jpg':
                formatText = currentLang === 'ar' ? 'صور' : 
                             currentLang === 'fr' ? 'Images' :
                             currentLang === 'zh' ? '图片' :
                             currentLang === 'ja' ? '画像' : 'Images';
                badgeText = currentLang === 'ar' ? 'صور' : 
                            currentLang === 'fr' ? 'Images' :
                            currentLang === 'zh' ? '图片' :
                            currentLang === 'ja' ? '画像' : 'Images';
                break;
        }
        
        if (formatBtnText) {
            if (currentLang === 'ar') {
                formatBtnText.textContent = `نوع المحتوى: ${formatText}`;
            } else if (currentLang === 'fr') {
                formatBtnText.textContent = `Type de contenu: ${formatText}`;
            } else if (currentLang === 'zh') {
                formatBtnText.textContent = `内容类型: ${formatText}`;
            } else if (currentLang === 'ja') {
                formatBtnText.textContent = `コンテンツタイプ: ${formatText}`;
            } else {
                formatBtnText.textContent = `Content Type: ${formatText}`;
            }
        }
        
        if (selectedFormatBadge) {
            selectedFormatBadge.textContent = badgeText;
            selectedFormatBadge.style.display = selectedFormat ? 'inline-block' : 'none';
        }
        
        if (downloadSubText) {
            if (selectedFormat === 'mp4') {
                downloadSubText.textContent = currentLang === 'ar' ? 'جودة فيديو عالية' : 
                                               currentLang === 'fr' ? 'Vidéo haute qualité' :
                                               currentLang === 'zh' ? '高质量视频' :
                                               currentLang === 'ja' ? '高品質ビデオ' : 'High quality video';
            } else if (selectedFormat === 'mp3') {
                downloadSubText.textContent = currentLang === 'ar' ? 'صوت عالي الجودة' : 
                                               currentLang === 'fr' ? 'Audio haute qualité' :
                                               currentLang === 'zh' ? '高质量音频' :
                                               currentLang === 'ja' ? '高品質オーディオ' : 'High quality audio';
            } else if (selectedFormat === 'jpg') {
                downloadSubText.textContent = currentLang === 'ar' ? 'صور متعددة' : 
                                               currentLang === 'fr' ? 'Images multiples' :
                                               currentLang === 'zh' ? '多张图片' :
                                               currentLang === 'ja' ? '複数画像' : 'Multiple images';
            } else {
                downloadSubText.textContent = currentLang === 'ar' ? 'اختر نوع المحتوى أولاً' : 
                                               currentLang === 'fr' ? 'Choisissez d\'abord un type de contenu' :
                                               currentLang === 'zh' ? '请先选择内容类型' :
                                               currentLang === 'ja' ? '最初にコンテンツタイプを選択してください' : 'Choose a content type first';
            }
        }
        
        updateDownloadButtonState();
    }

    // ===== التحقق من الرابط =====
    function validateUrl(url) {
        const validation = URLValidator.validate(url);
        if (url && !validation.valid) {
            showUrlWarning(validation.error || translations[currentLang].urlWarningInvalid);
            updateDownloadButtonState();
            return false;
        } else {
            if (urlWarning) urlWarning.style.display = 'none';
            updateDownloadButtonState();
            return true;
        }
    }

    function showUrlWarning(message) {
        if (!urlWarning) return;
        urlWarning.textContent = message;
        urlWarning.style.display = 'block';
        if (formatWarning) formatWarning.style.display = 'none';
        if (genericError) genericError.style.display = 'none';
        setTimeout(() => {
            if (urlWarning) urlWarning.style.display = 'none';
        }, 5000);
    }

    function showGenericError(message) {
        if (!genericError) return;
        genericError.textContent = message;
        genericError.style.display = 'block';
        if (urlWarning) urlWarning.style.display = 'none';
        if (formatWarning) formatWarning.style.display = 'none';
        setTimeout(() => {
            if (genericError) genericError.style.display = 'none';
        }, 5000);
    }

    // ===== معرض الصور =====
    function showImageGallery(imageUrls) {
        currentImageUrls = imageUrls;
        selectedImages = [];
        if (galleryContainer) galleryContainer.innerHTML = '';
        
        // Skeleton Loading
        for (let i = 0; i < imageUrls.length; i++) {
            const skeletonItem = document.createElement('div');
            skeletonItem.className = 'gallery-item skeleton';
            skeletonItem.innerHTML = `
                <div class="skeleton-image"></div>
            `;
            if (galleryContainer) galleryContainer.appendChild(skeletonItem);
        }
        
        // تحميل الصور
        preloadImages(imageUrls, () => {
            if (!galleryContainer) return;
            galleryContainer.innerHTML = '';
            imageUrls.forEach((url, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.dataset.index = index;
                galleryItem.dataset.url = url;
                
                galleryItem.innerHTML = `
                    <img src="${url}" alt="${translations[currentLang].selectedImages} ${index + 1}" loading="lazy" 
                         onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuWNl+WbviDnp5jlr4Y8L3RleHQ+PC9zdmc+'">
                `;
                
                galleryItem.addEventListener('click', function() {
                    this.classList.toggle('selected');
                    const index = parseInt(this.dataset.index);
                    
                    if (this.classList.contains('selected')) {
                        if (!selectedImages.includes(index)) {
                            selectedImages.push(index);
                        }
                    } else {
                        selectedImages = selectedImages.filter(i => i !== index);
                    }
                    
                    updateSelectionInfo();
                    clickSound.play();
                });
                
                galleryContainer.appendChild(galleryItem);
            });
            
            const isMobile = window.innerWidth <= 768;
            if (galleryHint) galleryHint.style.display = isMobile && imageUrls.length > 2 ? 'flex' : 'none';
        });
        
        updateSelectionInfo();
        if (galleryModal) galleryModal.style.display = 'flex';
        
        if (galleryHint) {
            const hintSpan = galleryHint.querySelector('span');
            if (hintSpan) hintSpan.textContent = translations[currentLang].scrollHint;
        }
    }

    function updateSelectionInfo() {
        if (selectedCount) selectedCount.textContent = selectedImages.length;
        if (downloadCount) downloadCount.textContent = selectedImages.length;
        
        if (downloadSelected) {
            if (selectedImages.length > 0) {
                downloadSelected.disabled = false;
                downloadSelected.innerHTML = `
                    <i class="fas fa-download"></i>
                    <span>${translations[currentLang].downloadSelectedImages} (${selectedImages.length})</span>
                `;
            } else {
                downloadSelected.disabled = true;
                downloadSelected.innerHTML = `
                    <i class="fas fa-download"></i>
                    <span>${translations[currentLang].downloadSelectedImages} (0)</span>
                `;
            }
        }
    }

    function preloadImages(urls, callback) {
        let loaded = 0;
        const total = urls.length;
        
        if (total === 0) {
            if (callback) callback();
            return;
        }
        
        const CONCURRENT_LOADS = 5;
        let currentIndex = 0;
        
        const loadNext = () => {
            if (currentIndex >= total) return;
            
            const img = new Image();
            const index = currentIndex++;
            
            img.onload = img.onerror = () => {
                loaded++;
                if (loaded === total && callback) {
                    callback();
                } else if (currentIndex < total) {
                    loadNext();
                }
            };
            
            img.src = urls[index];
        };
        
        for (let i = 0; i < Math.min(CONCURRENT_LOADS, total); i++) {
            loadNext();
        }
    }

    // ===== دوال التحميل =====
    async function startDownload() {
        const url = urlInput.value.trim();

        if (urlWarning) urlWarning.style.display = 'none';
        if (formatWarning) formatWarning.style.display = 'none';
        if (genericError) genericError.style.display = 'none';

        const validation = URLValidator.validate(url);
        if (!url || !validation.valid) {
            showUrlWarning(validation.error || translations[currentLang].urlWarningEmpty);
            return;
        }
        
        if (!selectedFormat) {
            if (formatWarning) formatWarning.style.display = "block";
            return;
        }

        freezeUIElements();
        resetDownloadState();
        
        isDownloading = true;
        downloadBtn.disabled = true;
        if (btnLoader) btnLoader.style.display = 'block';
        
        const mainText = downloadBtn.querySelector('.main-text');
        if (mainText) mainText.textContent = translations[currentLang].processing;
        
        if (progressContainer) progressContainer.style.display = 'block';
        if (progressTitle) progressTitle.textContent = translations[currentLang].processing;

        try {
            updateProgress(10);
            await performDownload(url, currentLang);
        } catch (error) {
            await ErrorTracker.track(error, { 
                action: 'download', 
                format: selectedFormat, 
                url,
                platform: URLValidator.extractPlatform(url)
            });
            
            showGenericError(error.message);
            resetDownload();
        }
    }

    async function performDownload(url, lang) {
        try {
            const validation = URLValidator.validate(url);
            if (!validation.valid) {
                throw new DownloadError(validation.error, 'INVALID_URL', true);
            }

            const platform = URLValidator.extractPlatform(validation.url);
            
            updateProgress(30, translations[lang].processing);
            
            let result;
            let attempts = 0;
            const maxAttempts = PERFORMANCE_CONFIG.RETRY_ATTEMPTS;

            const retryHandler = new RetryHandler(maxAttempts);
            
            try {
                result = await retryHandler.execute(async () => {
                    if (platform === 'tiktok') {
                        return await downloadTikTokWithFallback(validation.url);
                    } else if (platform === 'instagram') {
                        return await downloadInstagramWithFallback(validation.url);
                    } else {
                        return await downloadWithFallback(validation.url);
                    }
                }, (attempt, error) => {
                    console.log(`Retry attempt ${attempt}:`, error.message);
                });
            } catch (error) {
                throw new DownloadError(
                    translations[lang].errorVideoUnavailable,
                    'DOWNLOAD_FAILED',
                    true
                );
            }

            if (!result) {
                throw new DownloadError(
                    translations[lang].errorVideoUnavailable,
                    'DOWNLOAD_FAILED',
                    true
                );
            }

            updateProgress(60, translations[lang].preparing);

            if (selectedFormat === 'jpg' && Array.isArray(result)) {
                if (result.length === 1) {
                    await downloadManager.download(result[0], `kikvid-${Date.now()}.jpg`);
                    addToHistory(url, 'jpg', `Image_${new Date().toLocaleString()}`);
                    updateProgress(100, translations[lang].downloadComplete);
                    showSuccessMessage(translations[lang].downloadComplete);
                } else {
                    showImageGallery(result);
                    resetDownloadState();
                }
                return;
            }

            const fileName = `kikvid-${Date.now()}.${selectedFormat}`;
            updateProgress(80, translations[lang].downloading);
            
            await downloadManager.download(result, fileName);
            
            updateProgress(100, translations[lang].downloadComplete);
            addToHistory(url, selectedFormat, `${selectedFormat.toUpperCase()}_${new Date().toLocaleString()}`);
            showSuccessMessage(translations[lang].downloadComplete);

        } catch (error) {
            await ErrorTracker.track(error, { 
                action: 'download', 
                format: selectedFormat, 
                url,
                platform: URLValidator.extractPlatform(url)
            });

            if (error instanceof DownloadError && error.recoverable) {
                showRecoverySuggestions(error, lang);
            } else {
                throw error;
            }
        }
    }

    // ===== نظام Fallback =====
    async function downloadTikTokWithFallback(url) {
        let result;
        
        try {
            result = await tryTikWM(url);
            if (result) return result;
        } catch (error) {
            console.log('TikWM failed:', error.message);
        }
        
        try {
            result = await trySnapTik(url);
            if (result) return result;
        } catch (error) {
            console.log('SnapTik failed:', error.message);
        }
        
        try {
            result = await tryTikTokCDN(url);
            if (result) return result;
        } catch (error) {
            console.log('TikTok CDN failed:', error.message);
        }
        
        return null;
    }

    async function downloadInstagramWithFallback(url) {
        let result;
        
        try {
            result = await tryInstagramSave(url);
            if (result) return result;
        } catch (error) {
            console.log('InstagramSave failed:', error.message);
        }
        
        try {
            result = await tryInstaDown(url);
            if (result) return result;
        } catch (error) {
            console.log('InstaDown failed:', error.message);
        }
        
        try {
            result = await tryInstagramCDN(url);
            if (result) return result;
        } catch (error) {
            console.log('Instagram CDN failed:', error.message);
        }
        
        return null;
    }

    async function downloadWithFallback(url) {
        return await downloadTikTokWithFallback(url);
    }

    // ===== APIs =====
    async function tryTikWM(url) {
        try {
            const encoded = encodeUrl(url);

            if (downloadController) {
                downloadController.abort();
            }

            downloadController = new AbortController();

            const timeoutId = setTimeout(() => {
                downloadController.abort();
            }, 4000);

            const response = await fetch(
                `/api/download?data=${encoded}`,
                {
                    signal: downloadController.signal,
                    headers: {
                        'x-api-key': 'KIKVID_9xA!@2026'
                    }
                }
            );

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();

            if (!data || !data.video) {
                throw new Error('No data');
            }

            return processTikTokData(data, selectedFormat);

        } catch (error) {
            console.error('TikWM failed:', error);
            throw error;
        }
    }

    async function trySnapTik(url) {
        try {
            const apiUrl = `https://snaptik.app/api/v1/get?url=${encodeURIComponent(url)}`;
            
            downloadController = new AbortController();
            const timeoutId = setTimeout(() => downloadController.abort(), 5000);
            
            const response = await fetch(apiUrl, {
                signal: downloadController.signal,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const data = await response.json();
            
            if (!data.data || !data.data.video_url) throw new Error('No video from SnapTik');
            
            if (selectedFormat === 'mp3') {
                return data.data.music_url || data.data.audio_url;
            } else if (selectedFormat === 'jpg') {
                return [data.data.thumbnail_url];
            } else {
                return data.data.video_url;
            }
        } catch (error) {
            throw error;
        }
    }

    async function tryTikTokCDN(url) {
        try {
            const videoId = extractVideoId(url);
            if (!videoId) throw new Error('Invalid TikTok URL');
            
            const cdnUrls = [
                `https://v16-webapp.tiktok.com/${videoId}/video/play`,
                `https://v19-webapp.tiktok.com/${videoId}/video/play`,
                `https://v16m-webapp.tiktok.com/${videoId}/video/play`
            ];
            
            for (const cdnUrl of cdnUrls) {
                try {
                    const response = await fetch(cdnUrl, { method: 'HEAD' });
                    if (response.ok) {
                        return cdnUrl;
                    }
                } catch (e) {
                    continue;
                }
            }
            
            throw new Error('No CDN available');
        } catch (error) {
            throw error;
        }
    }

    async function tryInstagramSave(url) {
        try {
            const apiUrl = `https://api.instagramsave.com/download?url=${encodeURIComponent(url)}`;
            
            downloadController = new AbortController();
            const timeoutId = setTimeout(() => downloadController.abort(), 5000);
            
            const response = await fetch(apiUrl, {
                signal: downloadController.signal,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                    'Accept': 'application/json'
                }
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const data = await response.json();
            
            if (!data) throw new Error('No data from InstagramSave');
            
            return processInstagramData(data, selectedFormat);
        } catch (error) {
            throw error;
        }
    }

    async function tryInstaDown(url) {
        try {
            const apiUrl = `https://api.instadown.io/download?url=${encodeURIComponent(url)}`;
            
            downloadController = new AbortController();
            const timeoutId = setTimeout(() => downloadController.abort(), 5000);
            
            const response = await fetch(apiUrl, {
                signal: downloadController.signal,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const data = await response.json();
            
            if (!data.url) throw new Error('No URL from InstaDown');
            
            if (selectedFormat === 'mp3') {
                return data.audio_url || data.url;
            } else if (selectedFormat === 'jpg') {
                return [data.thumbnail_url || data.url];
            } else {
                return data.url;
            }
        } catch (error) {
            throw error;
        }
    }

    async function tryInstagramCDN(url) {
        try {
            const postId = extractInstagramPostId(url);
            if (!postId) throw new Error('Invalid Instagram URL');
            
            const cdnUrl = `https://www.instagram.com/p/${postId}/media/?size=l`;
            
            const response = await fetch(cdnUrl, { method: 'HEAD' });
            if (response.ok) {
                return cdnUrl;
            }
            
            throw new Error('Instagram CDN not available');
        } catch (error) {
            throw error;
        }
    }

    // ===== دوال معالجة البيانات =====
    function processTikTokData(data, format) {
        if (!data) throw new Error('بيانات غير صالحة');

        if (format === 'mp3') {
            return data.audio;
        }

        if (format === 'jpg') {
            if (data.images?.length > 0) return data.images;
            if (data.cover) return [data.cover];
            throw new Error('لم يتم العثور على صور');
        }

        let videoUrl = data.video;
        
        if (videoUrl.includes("/play/") && !videoUrl.includes("/media/play/")) {
            videoUrl = videoUrl.replace("/play/", "/media/play/");
        }

        return videoUrl;
    }

    function processInstagramData(data, format) {
        if (!data) throw new Error('بيانات الإنستجرام غير صالحة');
        
        if (format === 'mp3') {
            if (data.audio && data.audio.url) {
                return data.audio.url;
            }
            throw new Error('لم يتم العثور على رابط الصوت');
        } else if (format === 'jpg') {
            let images = [];
            
            if (data.carousel_media && data.carousel_media.length > 0) {
                images = data.carousel_media
                    .filter(media => 
                        media.type === 'image' || 
                        (media.url && (media.url.includes('.jpg') || media.url.includes('.png') || media.url.includes('.jpeg')))
                    )
                    .map(media => media.url || media.image_versions2?.candidates?.[0]?.url || media.display_url);
            } 
            else if (data.display_url || data.image_versions2?.candidates?.[0]?.url) {
                images = [data.display_url || data.image_versions2.candidates[0].url];
            }
            else if (data.video_url) {
                images = [data.thumbnail_url || data.display_url];
            }
            
            if (images.length > 0) {
                return images.filter(url => url && url.startsWith('http'));
            }
            
            throw new Error('لم يتم العثور على صور في هذا المنشور');
        } else {
            if (data.video_url) {
                return data.video_url;
            }
            if (data.video_versions && data.video_versions.length > 0) {
                return data.video_versions[0].url;
            }
            
            throw new Error('لم يتم العثور على رابط الفيديو');
        }
    }

    // ===== دوال مساعدة =====
    function extractVideoId(url) {
        try {
            const urlObj = new URL(url);
            const path = urlObj.pathname;
            const match = path.match(/\/(video|v)\/(\d+)/);
            return match ? match[2] : null;
        } catch {
            return null;
        }
    }

    function extractInstagramPostId(url) {
        try {
            const urlObj = new URL(url);
            const path = urlObj.pathname;
            const match = path.match(/\/p\/([^\/]+)/);
            return match ? match[1] : null;
        } catch {
            return null;
        }
    }

    // ===== معالجة الصور المحددة =====
    async function downloadSelectedImages() {
        if (selectedImages.length === 0) return;
        clickSound.play();
        
        freezeUIElements();
        
        const url = urlInput.value.trim();
        
        if (galleryModal) galleryModal.style.display = 'none';
        
        if (progressContainer) progressContainer.style.display = 'block';
        if (progressTitle) progressTitle.textContent = translations[currentLang].downloading;
        
        const totalImages = selectedImages.length;
        let downloadedCount = 0;

        const isMobile = window.innerWidth <= 768;
        const BATCH_SIZE = isMobile ? PERFORMANCE_CONFIG.MOBILE_BATCH_SIZE : PERFORMANCE_CONFIG.DESKTOP_BATCH_SIZE;

        for (let i = 0; i < totalImages; i += BATCH_SIZE) {
            const batch = selectedImages.slice(i, i + BATCH_SIZE);
            
            const downloadPromises = batch.map(async (imageIndex) => {
                const imageUrl = currentImageUrls[imageIndex];
                try {
                    await downloadManager.download(imageUrl, `image-${imageIndex + 1}.jpg`);
                    downloadedCount++;
                    
                    const progress = Math.floor((downloadedCount / totalImages) * 100);
                    updateProgress(progress);
                    
                    if (progressTitle) {
                        progressTitle.textContent = currentLang === 'ar' ?
                            `جاري تحميل ${downloadedCount} من ${totalImages} صورة` :
                            currentLang === 'fr' ? `Téléchargement ${downloadedCount} sur ${totalImages} images` :
                            currentLang === 'zh' ? `正在下载 ${downloadedCount} 的 ${totalImages} 张图片` :
                            currentLang === 'ja' ? `${downloadedCount}枚目/${totalImages}枚をダウンロード中` :
                            `Downloading ${downloadedCount} of ${totalImages} images`;
                    }
                    
                } catch (error) {
                    console.error(`فشل تحميل الصورة ${imageIndex + 1}:`, error);
                    await ErrorTracker.track(error, {
                        action: 'image_download',
                        imageIndex,
                        url: imageUrl
                    });
                }
            });
            
            await Promise.all(downloadPromises);
            
            if (i + BATCH_SIZE < totalImages) {
                await new Promise(resolve => setTimeout(resolve, 150));
            }
        }
        
        addToHistory(url, 'jpg', `${totalImages}_Images_${new Date().toLocaleString()}`);
        
        updateProgress(100);
        
        showSuccessMessage(
            currentLang === 'ar' ?
                `✅ تم تحميل ${downloadedCount} صورة بنجاح` :
                currentLang === 'fr' ? `✅ ${downloadedCount} images téléchargées avec succès` :
                currentLang === 'zh' ? `✅ 成功下载 ${downloadedCount} 张图片` :
                currentLang === 'ja' ? `✅ ${downloadedCount}枚の画像を正常にダウンロードしました` :
                `✅ Successfully downloaded ${downloadedCount} images`
        );
        
        setTimeout(() => {
            resetDownload();
        }, 1500);
    }

    // ===== دوال المساعدة للواجهة =====
    function updateProgress(percent, message = null) {
        if (progressFill) progressFill.style.width = `${percent}%`;
        if (progressPercent) progressPercent.textContent = `${percent}%`;
        if (message && progressTitle) progressTitle.textContent = message;
    }

    function updateDownloadButtonState() {
        const url = urlInput.value.trim();
        if (downloadBtn) downloadBtn.disabled = !url || !selectedFormat;
    }

    function resetDownloadState() {
        isDownloading = false;
        if (downloadBtn) downloadBtn.disabled = false;
        if (btnLoader) btnLoader.style.display = 'none';
        
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
        
        if (downloadController) {
            downloadController.abort();
            downloadController = null;
        }
        
        if (progressFill) progressFill.style.width = '0%';
        if (progressPercent) progressPercent.textContent = '0%';
        
        if (downloadBtn) {
            const mainText = downloadBtn.querySelector('.main-text');
            if (mainText) mainText.textContent = translations[currentLang].downloadButton;
        }
        
        unfreezeUIElements();
    }

    function resetDownload() {
        isDownloading = false;
        if (downloadBtn) downloadBtn.disabled = false;
        if (btnLoader) btnLoader.style.display = 'none';
        if (progressContainer) progressContainer.style.display = 'none';
        if (progressFill) progressFill.style.width = '0%';
        if (progressPercent) progressPercent.textContent = '0%';
        
        if (downloadBtn) {
            const mainText = downloadBtn.querySelector('.main-text');
            if (mainText) mainText.textContent = translations[currentLang].downloadButton;
        }
        
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
        
        if (downloadController) {
            downloadController.abort();
            downloadController = null;
        }
        
        unfreezeUIElements();
        updateDownloadButtonState();
    }

    function showRecoverySuggestions(error, lang) {
        const suggestions = {
            'INVALID_URL': translations[lang].urlWarningInvalid,
            'DOWNLOAD_FAILED': translations[lang].errorVideoUnavailable,
            'NETWORK_ERROR': translations[lang].networkError,
            'RATE_LIMITED': lang === 'ar' ? 'انتظر دقيقة ثم حاول مرة أخرى' : 'Wait a minute and try again',
            'VIDEO_PRIVATE': lang === 'ar' ? 'هذا الفيديو خاص أو تم حذفه' : 'This video is private or deleted'
        };

        const message = suggestions[error.code] || translations[lang].errorVideoUnavailable;
        showTemporaryMessage(`⚠️ ${message}\n💡 ${translations[lang].retry}`, 'warning', 5000);
    }

    function showSuccessMessage(message) {
        showTemporaryMessage(`✅ ${message}`, 'success', 3000);
    }

    function showTemporaryMessage(message, type = 'info', duration = 3000) {
        const existingMessages = document.querySelectorAll('.temp-message');
        existingMessages.forEach(msg => msg.remove());
        
        const messageEl = document.createElement('div');
        messageEl.className = `temp-message ${type}`;
        messageEl.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(messageEl);
        
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.remove();
            }
        }, duration);
    }

    // ===== أحداث الواجهة =====
    
    // أحداث اللغة
    languageToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        languageOptions.classList.toggle('show');
        clickSound.play();
        if (historyOptions.classList.contains('show')) {
            historyOptions.classList.remove('show');
        }
    });
    
    languageOptions.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    languageButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            setLanguageWithAnimation(lang);
            languageOptions.classList.remove('show');
            clickSound.play();
        });
    });
    
    // الكشف التلقائي عن اللغة
    const savedLang = localStorage.getItem('kickvid-lang');
    let initialLang = savedLang || detectBrowserLanguage();
    setLanguageWithAnimation(initialLang, false);
    
    // أحداث سجل التحميلات
    historyToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        renderHistory();
        historyOptions.classList.toggle('show');
        clickSound.play();
        if (languageOptions.classList.contains('show')) {
            languageOptions.classList.remove('show');
        }
    });
    
    historyOptions.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    clearHistoryBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showDeleteConfirmation();
        clickSound.play();
    });

    cancelDeleteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        deleteConfirmModal.style.display = 'none';
        clickSound.play();
    });

    confirmDeleteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        clearAllHistory();
        clickSound.play();
    });

    // أحداث اختيار الصيغة
    openFormatBtn.addEventListener("click", () => {
        if (isDownloading) return;
        formatModal.style.display = "flex";
        clickSound.play();
    });

    closeModal.addEventListener("click", () => {
        formatModal.style.display = "none";
        clickSound.play();
    });

    formatButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            formatButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            selectedFormat = this.getAttribute("data-format");
            updateFormatButton();
            formatModal.style.display = "none";
            if (formatWarning) formatWarning.style.display = "none";
            updateDownloadButtonState();
            clickSound.play();
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target === formatModal) {
            formatModal.style.display = "none";
        }
        if (event.target === galleryModal) {
            galleryModal.style.display = "none";
            resetDownload();
        }
    });

    // أحداث معرض الصور
    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', function() {
            selectedImages = [];
            document.querySelectorAll('.gallery-item').forEach((item, index) => {
                item.classList.add('selected');
                selectedImages.push(index);
            });
            updateSelectionInfo();
            clickSound.play();
        });
    }

    if (deselectAllBtn) {
        deselectAllBtn.addEventListener('click', function() {
            selectedImages = [];
            document.querySelectorAll('.gallery-item').forEach(item => {
                item.classList.remove('selected');
            });
            updateSelectionInfo();
            clickSound.play();
        });
    }

    if (closeGallery) {
        closeGallery.addEventListener('click', function() {
            if (galleryModal) galleryModal.style.display = 'none';
            resetDownload();
            clickSound.play();
        });
    }

    if (cancelGallery) {
        cancelGallery.addEventListener('click', function() {
            if (galleryModal) galleryModal.style.display = 'none';
            resetDownload();
            clickSound.play();
        });
    }

    if (downloadSelected) {
        downloadSelected.addEventListener('click', async function() {
            if (selectedImages.length === 0) return;
            await downloadSelectedImages();
        });
    }

    // أحداث الإدخال والتحميل
    let validationTimeout;
    
    urlInput.addEventListener('input', function() {
        const url = this.value.trim();
        
        clearTimeout(validationTimeout);
        validationTimeout = setTimeout(() => {
            validateUrl(url);
            updateDownloadButtonState();
        }, 300);
    });

    if (clearUrlBtn) {
        clearUrlBtn.addEventListener('click', function() {
            if (isDownloading) return;
            urlInput.value = '';
            urlInput.focus();
            if (urlWarning) urlWarning.style.display = 'none';
            if (formatWarning) formatWarning.style.display = 'none';
            if (genericError) genericError.style.display = 'none';
            updateDownloadButtonState();
            clickSound.play();
        });
    }

    if (pasteIcon) {
        pasteIcon.addEventListener('click', async function() {
            if (isDownloading) return;
            try {
                const text = await navigator.clipboard.readText();
                if (text) {
                    urlInput.value = text;
                    validateUrl(text);
                    updateDownloadButtonState();
                    
                    showTemporaryMessage(
                        translations[currentLang].pasteSuccess, 
                        'success'
                    );
                }
            } catch (err) {
                showTemporaryMessage(
                    translations[currentLang].pasteError, 
                    'error'
                );
            }
            clickSound.play();
        });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function() {
            if (downloadBtn.disabled) return;
            clickSound.play();
            startDownload();
        });
    }

    // إغلاق النوافذ
    document.addEventListener('click', function(e) {
        if (!languageToggle.contains(e.target) && !languageOptions.contains(e.target)) {
            languageOptions.classList.remove('show');
        }
        
        if (!historyToggle.contains(e.target) && !historyOptions.contains(e.target)) {
            historyOptions.classList.remove('show');
        }
        
        if (e.target === deleteConfirmModal) {
            deleteConfirmModal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && deleteConfirmModal.style.display === 'flex') {
            deleteConfirmModal.style.display = 'none';
        }
    });

    // تحسينات اللمس
    if ('ontouchstart' in window) {
        const touchElements = document.querySelectorAll('.download-btn, .format-btn, .history-toggle-btn, .language-toggle-btn, .clear-url-btn, .paste-icon');
        touchElements.forEach(el => {
            el.addEventListener('touchstart', function() {
                if (this.classList.contains('frozen') || this.disabled) return;
                this.style.transform = 'scale(0.98)';
            });
            
            el.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }

    // إنيميشن SEO Box
    function initSeoAnimations() {
        const seoBoxes = document.querySelectorAll('details.seo-box');
        
        seoBoxes.forEach(box => {
            box.addEventListener('toggle', function() {
                if (this.open) {
                    this.style.maxHeight = this.scrollHeight + 'px';
                    
                    this.style.opacity = '0';
                    this.style.transform = 'translateY(-10px)';
                    
                    setTimeout(() => {
                        this.style.transition = 'all 0.3s ease';
                        this.style.opacity = '1';
                        this.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    this.style.transition = 'all 0.3s ease';
                    this.style.opacity = '0.5';
                    this.style.transform = 'translateY(-5px)';
                }
            });
        });
    }

    // تهيئة SEO
    function initSeo() {
        updateSeoMetaTags(currentLang);
        updateSeoBoxWithAnimation(currentLang);
        updateSeoContent(currentLang);
    }

    // ===== تهيئة التطبيق =====
    console.log('🚀 Kik Vid - نظام التحميل المتطور جاهز!');
    renderHistory();
    updateDownloadButtonState();
    initSeoAnimations();
    initSeo();
    
    // تحسينات الأداء
    performanceMonitor.endMeasurement('pageLoad');
    performanceMonitor.measurePageLoad();
    
    // Web Vitals
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log('[Web Vitals]', entry.name, Math.round(entry.startTime));
            }
        });
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input'] });
    }
    
    // تحديث رسالة التلميح عند تغيير اللغة
    window.addEventListener('languagechange', function() {
        if (galleryHint) {
            const hintSpan = galleryHint.querySelector('span');
            if (hintSpan) hintSpan.textContent = translations[currentLang].scrollHint;
        }
    });
});