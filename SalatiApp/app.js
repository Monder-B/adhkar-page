// تأثير إضافي: إضافة نجوم متحركة عشوائية
function createRandomStars() {
    const stars = ['✨', '⭐', '🌟'];
    
    setInterval(() => {
        const star = document.createElement('div');
        star.textContent = stars[Math.floor(Math.random() * stars.length)];
        star.style.position = 'fixed';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.fontSize = (Math.random() * 20 + 15) + 'px';
        star.style.opacity = '0';
        star.style.transition = 'opacity 2s ease-in-out';
        star.style.pointerEvents = 'none';
        star.style.zIndex = '5';
        
        document.body.appendChild(star);
        
        // إظهار النجمة تدريجياً
        setTimeout(() => {
            star.style.opacity = '0.4';
        }, 100);
        
        // إخفاء النجمة وحذفها
        setTimeout(() => {
            star.style.opacity = '0';
            setTimeout(() => star.remove(), 2000);
        }, 3000);
    }, 3000);
}

// تشغيل النجوم المتحركة عند تحميل الصفحة
window.addEventListener('load', () => {
    createRandomStars();
    console.log('تم تحميل الصفحة بنجاح! 🌙');
});

// تأثير إضافي: رسالة ترحيبية في Console
console.log(`
    ╔═══════════════════════════════════════╗
    ║   🌙 أذكار الصباح - تم الإرسال ✅   ║
    ║   بارك الله في صباحك ويومك 🌟       ║
    ╚═══════════════════════════════════════╝
`);